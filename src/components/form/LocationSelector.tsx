import { useMemo } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCountryData, Country, State, City } from "@/hooks/useCountry";

interface LocationSelectorProps {
  selectedCountry: Country | null;
  onCountryChange: (country: Country | null) => void;
  selectedState: State | null;
  onStateChange: (state: State | null) => void;
  selectedCity: City | null;
  onCityChange: (city: City | null) => void;
  errors?: {
    country?: string;
    state?: string;
    city?: string;
  };
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  selectedCountry,
  onCountryChange,
  selectedState,
  onStateChange,
  selectedCity,
  onCityChange,
  errors,
}) => {
  const { countries } = useCountryData();

  const states = useMemo(
    () => (selectedCountry ? selectedCountry.states : []),
    [selectedCountry]
  );

  const cities = useMemo(
    () => (selectedState ? selectedState.cities : []),
    [selectedState]
  );

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium mb-1.5">Country</Label>
        <Select
          value={selectedCountry?.id.toString()}
          onValueChange={(value) => {
            const country = countries.find((c) => c.id.toString() === value);
            onCountryChange(country || null);
          }}
        >
          <SelectTrigger
            className={`w-full h-12 text-base`}
          >
            <SelectValue placeholder="Select your country">
              {selectedCountry && (
                <div className="flex items-center gap-2">
                  <span className="text-lg">{selectedCountry.emoji}</span>
                  <span>{selectedCountry.name}</span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {countries.map((country) => (
              <SelectItem
                key={country.id}
                value={country.id.toString()}
                className="py-3 hover:bg-indigo-50"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{country.emoji}</span>
                  <span>{country.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors?.country && (
          <p className="text-sm text-red-500 mt-1.5">{errors.country}</p>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium mb-1.5">State/Region</Label>
        <Select
          value={selectedState?.name}
          onValueChange={(value) => {
            const state = states.find((s) => s.name === value);
            onStateChange(state || null);
          }}
          disabled={!selectedCountry}
        >
          <SelectTrigger
            className={`w-full h-12 text-base`}
          >
            <SelectValue
              placeholder={
                selectedCountry
                  ? "Select state/region"
                  : "Please select a country first"
              }
            />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {states.map((state) => (
              <SelectItem
                key={state.name}
                value={state.name}
                className="py-3 hover:bg-indigo-50"
              >
                <div className="flex items-center gap-2">
                  <span>{state.name}</span>
                  <span className="text-gray-500 text-sm">({state.type})</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors?.state && (
          <p className="text-sm text-red-500 mt-1.5">{errors.state}</p>
        )}
      </div>

      <div>
        <Label className="text-sm font-medium mb-1.5">City</Label>
        <Select
          value={selectedCity?.name}
          onValueChange={(value) => {
            const city = cities.find((c) => c.name === value);
            onCityChange(city || null);
          }}
          disabled={!selectedState || cities.length === 0}
        >
          <SelectTrigger
            className={`w-full h-12 text-base`}
          >
            <SelectValue
              placeholder={
                selectedState ?( cities.length === 0? "No cities in this state":"Select city" ): "Please select a state first"
              }
            />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {cities.map((city) => (
              <SelectItem
                key={city.name}
                value={city.name}
                className="py-3 hover:bg-indigo-50"
              >
                {city.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors?.city && (
          <p className="text-sm text-red-500 mt-1.5">{errors.city}</p>
        )}
      </div>
    </div>
  );
};