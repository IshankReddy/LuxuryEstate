"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/ui/property-card";
import { SearchFilters } from "@/components/search-filters";
import { properties, Property } from "@/lib/data";
import { Home } from "lucide-react";

export default function HomePage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  const handleSearch = (filters: any) => {
    let filtered = [...properties];

    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice);
    }
    if (filters.propertyType) {
      filtered = filtered.filter(p => p.type === filters.propertyType);
    }

    setFilteredProperties(filtered);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=60"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative text-center text-white space-y-4 px-4">
          <div className="flex items-center justify-center gap-2 text-primary-foreground">
            <Home className="w-8 h-8" />
            <h1 className="text-4xl font-bold">LuxuryEstate</h1>
          </div>
          <p className="text-xl max-w-2xl mx-auto">
            Discover your dream home among our curated collection of luxury properties
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SearchFilters onSearch={handleSearch} />
        
        {/* Featured Properties */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-primary/5 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
            <p className="text-muted-foreground">Active Listings</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">150+</h3>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </section>
      </div>
    </main>
  );
}