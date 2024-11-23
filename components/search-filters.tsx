"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyType, setPropertyType] = useState("all");

  const handleSearch = () => {
    onSearch({
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
      propertyType: propertyType === "all" ? undefined : propertyType,
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg shadow-sm">
      <Input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="md:w-32"
      />
      <Input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="md:w-32"
      />
      <Select value={propertyType} onValueChange={setPropertyType}>
        <SelectTrigger className="md:w-40">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="condo">Condo</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}