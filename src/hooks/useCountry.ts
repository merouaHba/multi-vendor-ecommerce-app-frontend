// src/hooks/useCountryData.ts
import { useState, useMemo, useEffect } from 'react';
import countriesData from '@/data/countries.json';
import axios from 'axios';

export interface City {
  id: number;
  name: string;
}

export interface State {
  id: number;
  name: string;
  type: string;
  cities: City[];
}

export interface Country {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  phonecode: string;
  currency: string;
  emoji: string;
  states: State[];
}

interface UseCountryDataReturn {
  countries: Country[];
  userCountry: Country | null;
}

export const useCountryData = (): UseCountryDataReturn => {
  const countries = useMemo(() => countriesData as Country[], []);
  const [userCountry, setUserCountry] = useState<Country | null>(null);

  useEffect(() => {
    const getUserCountry = async () => {
      try {
        const {data} = await axios.get('http://ip-api.com/json/');
        const country = countries.find(c => c.name === data.country);
        if (country) {
          setUserCountry(country);
        }
      } catch (error) {
        console.error('Error getting user country:', error);
        setUserCountry(countries[0]);
      }
    };

    getUserCountry();
  }, [countries]);

  return { countries, userCountry };
};