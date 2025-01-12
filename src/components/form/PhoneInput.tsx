import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useCountryData, Country } from "@/hooks/useCountry";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  selectedCountry: Country | null;
  onCountryChange: (country: Country) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  error,
  selectedCountry,
  onCountryChange,
}) => {
  const { countries } = useCountryData();
  const [searchQuery, setSearchQuery] = useState("");
  const [localPhoneNumber, setLocalPhoneNumber] = useState("");

  // Filter countries based on search query
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.phonecode.toString().includes(searchQuery) ||
      `+${country.phonecode}`.includes(searchQuery)
  );

  // Update the combined phone number whenever country or local number changes
  useEffect(() => {
    if (selectedCountry && localPhoneNumber) {
      const fullNumber = `${
        selectedCountry.phonecode
      }${localPhoneNumber.replace(/\D/g, "")}`;
      onChange(fullNumber);
    }
  }, [selectedCountry, localPhoneNumber, onChange]);

  // Initialize local phone number from value prop
  useEffect(() => {
    if (selectedCountry && value) {
      const countryCode = selectedCountry.phonecode.toString();
      if (value.startsWith(countryCode)) {
        setLocalPhoneNumber(value.slice(countryCode.length));
      }
    }
  }, []);

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Phone Number</Label>
      <div className="flex gap-2">
        <Select
          value={selectedCountry?.id.toString()}
          onValueChange={(value) => {
            const country = countries.find((c) => c.id.toString() === value);
            if (country) onCountryChange(country);
          }}
        >
          <SelectTrigger
            className={`w-[115px] ${
              error ? "border-red-500" : "border-gray-200"
            }`}
          >
            <SelectValue>
              {selectedCountry ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg">{selectedCountry.emoji}</span>
                  <span className="font-medium">
                    +{selectedCountry.phonecode}
                  </span>
                </div>
              ) : (
                "Select"
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <div className="flex items-center px-3 py-2 sticky top-0 bg-white border-b">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                className="flex-1 border-none bg-transparent outline-none text-sm placeholder:text-gray-400"
                placeholder="Search country or code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="max-h-[300px] overflow-auto">
              {filteredCountries.map((country) => (
                <SelectItem
                  key={country.id}
                  value={country.id.toString()}
                  className="flex items-center py-2.5 px-3 cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{country.emoji}</span>
                    <span className="font-medium">+{country.phonecode}</span>
                    <span className="text-sm text-gray-500 truncate">
                      {country.name}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>

        <div className="flex-1">
          <Input
            type="tel"
            value={localPhoneNumber}
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, "");
              setLocalPhoneNumber(input);
            }}
            className={`w-full ${error ? "border-red-500" : "border-gray-200"}`}
            placeholder="Enter phone number"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

    </div>
  );
};

export default PhoneInput;
