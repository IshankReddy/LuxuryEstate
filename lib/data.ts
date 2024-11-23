export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  type: 'house' | 'apartment' | 'condo';
  location: string;
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Waterfront Villa',
    description: 'Stunning waterfront property with panoramic views, featuring a private dock and luxury finishes throughout.',
    price: 2450000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60',
    type: 'house',
    location: 'Miami Beach, FL',
    featured: true
  },
  {
    id: '2',
    title: 'Downtown Luxury Penthouse',
    description: 'Exclusive penthouse with floor-to-ceiling windows offering spectacular city views and premium amenities.',
    price: 1850000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60',
    type: 'condo',
    location: 'Los Angeles, CA',
    featured: true
  },
  {
    id: '3',
    title: 'Contemporary Mountain Retreat',
    description: 'Modern mountain home with breathtaking views, featuring high-end finishes and outdoor living spaces.',
    price: 1650000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60',
    type: 'house',
    location: 'Aspen, CO',
    featured: true
  },
  {
    id: '4',
    title: 'Urban Loft Apartment',
    description: 'Stylish loft in the heart of the city with exposed brick walls and modern amenities.',
    price: 875000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60',
    type: 'apartment',
    location: 'New York, NY',
    featured: false
  },
  {
    id: '5',
    title: 'Coastal Beach House',
    description: 'Charming beach house with direct ocean access and recently renovated interiors.',
    price: 1950000,
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60',
    type: 'house',
    location: 'Malibu, CA',
    featured: true
  },
  {
    id: '6',
    title: 'Skyline View Apartment',
    description: 'Luxurious high-rise apartment offering breathtaking city views and world-class amenities.',
    price: 1250000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60',
    type: 'apartment',
    location: 'Chicago, IL',
    featured: false
  },
  {
    id: '7',
    title: 'Historic Brownstone',
    description: 'Beautifully restored brownstone with original details and modern updates in prime location.',
    price: 3200000,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=60',
    type: 'house',
    location: 'Boston, MA',
    featured: true
  },
  {
    id: '8',
    title: 'Marina District Condo',
    description: 'Sophisticated condo with high-end finishes and stunning bay views.',
    price: 1650000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&auto=format&fit=crop&q=60',
    type: 'condo',
    location: 'San Francisco, CA',
    featured: false
  },
  {
    id: '9',
    title: 'Desert Modern Estate',
    description: 'Architectural masterpiece seamlessly blending indoor and outdoor living.',
    price: 2850000,
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop&q=60',
    type: 'house',
    location: 'Scottsdale, AZ',
    featured: true
  },
  {
    id: '10',
    title: 'Luxury High-Rise Condo',
    description: 'Premium condo unit with designer finishes and resort-style amenities.',
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&auto=format&fit=crop&q=60',
    type: 'condo',
    location: 'Seattle, WA',
    featured: false
  }
];