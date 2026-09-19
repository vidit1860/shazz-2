export type UnitCategory = '1BR' | '2BR' | '3BR' | '4BR' | 'PENTHOUSE';

export interface UnitTypeInfo {
  id: UnitCategory;
  name: string;
  tagline: string;
  netSqM: number;
  netSqFt: number;
  bedrooms: number;
  bathrooms: number;
  totalUnits: number;
  percentageMix: number;
  startingPriceAED: string;
  startingPriceUSD: string;
  handover: string;
  balcony: string;
  idealFor: string;
  features: string[];
  dimensions: {
    livingDining: string;
    masterBedroom: string;
    secondBedroom?: string;
    thirdBedroom?: string;
    kitchen: string;
    balcony: string;
    powderRoom: string;
    bathrooms: string;
  };
}

export interface BuildingInventory {
  id: string;
  name: string;
  units: number;
  floors: string;
  viewOrientation: string;
  featured: boolean;
}

export interface ConnectivityItem {
  id: string;
  name: string;
  category: 'beaches' | 'education' | 'healthcare' | 'shopping' | 'transit';
  driveTime: string;
  distanceKm?: number;
  description: string;
  highlight?: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'amenities' | 'aerial';
  url: string;
  aspect: string;
  caption: string;
}

export interface USPItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  stat?: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  icon: string;
  imageUrl: string;
  highlight?: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  unitInterest: UnitCategory | 'ALL';
  investorType: 'end-user' | 'investor' | 'broker';
  message: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
}
