"use client";

import { Property } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        {property.featured && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-xl font-semibold truncate">{property.title}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>
        <p className="text-muted-foreground line-clamp-2 text-sm mb-4">
          {property.description}
        </p>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xl font-bold text-primary">
          {formatCurrency(property.price)}
        </span>
        <Badge variant="secondary">{property.type}</Badge>
      </CardFooter>
    </Card>
  );
}