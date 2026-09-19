import { UnitTypeInfo, BuildingInventory, ConnectivityItem, GalleryImage, USPItem, AmenityItem } from '../types';

export const PROJECT_OVERVIEW = {
  name: "Al Khan Waterfront Residences",
  subName: "Maryam Island Peninsula • Sharjah",
  developer: "Signature Waterfront Developments",
  siteArea: "3-Hectare Beachfront Site",
  totalTowers: 5,
  totalResidences: 862,
  frontage: "Panoramic sea views on 3 sides",
  architectureStyle: "Contemporary Coastal with Neo-Art Deco influences",
  startingPriceAED: "1,150,000",
  startingPriceUSD: "313,000",
  handoverYear: "Q4 2027",
  paymentPlan: "60/40 Flexible Payment Plan",
  connectivityKey: "15 mins to Dubai DXB Airport & AED 750M Tunnel Access"
};

export const MARKET_INSIGHTS = {
  totalValueH1: "AED 29.5B",
  growthYoY: "+9.3%",
  transactionsCount: "59,460",
  transactionsGrowth: "+23.7%",
  investorNationalities: "121",
  freeholdProjects: "50",
  residentialDemandShare: "82.2%",
  newProjectsH1: "11",
  alKhanTransactions: "1,077",
  alKhanValue: "AED 1.3B",
  infrastructureProjectValue: "AED 750M"
};

export const UNIT_TYPES: UnitTypeInfo[] = [
  {
    id: '1BR',
    name: "1 Bedroom Coastal Residence",
    tagline: "Effortless waterfront living with smart open-plan layouts and sea breezes",
    netSqM: 64,
    netSqFt: 689,
    bedrooms: 1,
    bathrooms: 1.5,
    totalUnits: 388,
    percentageMix: 45,
    startingPriceAED: "1,150,000",
    startingPriceUSD: "313,000",
    handover: "Q4 2027",
    balcony: "Extended Private Sky Deck",
    idealFor: "Young professionals, couples, and high-yield buy-to-let investors",
    features: [
      "Open-concept living and gourmet kitchen with European fittings",
      "Full height double-glazed acoustic glass wall",
      "Powder room for guests & dedicated laundry nook",
      "Spacious master bedroom with en-suite and built-in wardrobes",
      "Private balcony with skyline or coastal views"
    ],
    dimensions: {
      livingDining: "3.40m x 4.20m",
      masterBedroom: "3.40m x 3.60m",
      kitchen: "2.80m x 2.40m",
      balcony: "1.40m x 3.20m",
      powderRoom: "1.80m x 1.10m",
      bathrooms: "2.40m x 2.00m"
    }
  },
  {
    id: '2BR',
    name: "2 Bedroom Premium Waterfront",
    tagline: "The signature layout with dual ensuite bedrooms and expansive living deck",
    netSqM: 84,
    netSqFt: 904,
    bedrooms: 2,
    bathrooms: 2.5,
    totalUnits: 379,
    percentageMix: 44,
    startingPriceAED: "1,850,000",
    startingPriceUSD: "503,000",
    handover: "Q4 2027",
    balcony: "Deep Panoramic Balcony (3.50m span)",
    idealFor: "Modern families and lifestyle connoisseurs demanding prime sea views",
    features: [
      "Generous 3.50m x 4.40m living & dining hall flowing into the balcony",
      "Master bedroom (3.50m x 3.50m) with luxury ensuite and dressing zone",
      "Second bedroom (3.20m x 3.50m) with independent bathroom access",
      "Closed/Semi-open chef's kitchen (3.10m x 2.80m) with premium stone countertops",
      "Guest powder room and integrated utility storage",
      "Panoramic floor-to-ceiling acoustic glass facing the beach"
    ],
    dimensions: {
      livingDining: "3.50m x 4.40m",
      masterBedroom: "3.50m x 3.50m",
      secondBedroom: "3.20m x 3.50m",
      kitchen: "3.10m x 2.80m",
      balcony: "1.60m x 3.50m",
      powderRoom: "2.20m x 1.10m",
      bathrooms: "2.60m x 2.20m & 2.05m x 3.40m"
    }
  },
  {
    id: '3BR',
    name: "3 Bedroom Executive Suite",
    tagline: "Sublime corner residence with 180° water vistas and maid's quarter",
    netSqM: 154,
    netSqFt: 1658,
    bedrooms: 3,
    bathrooms: 3.5,
    totalUnits: 85,
    percentageMix: 10,
    startingPriceAED: "3,250,000",
    startingPriceUSD: "885,000",
    handover: "Q4 2027",
    balcony: "Dual Wrap-around Terraces",
    idealFor: "Discerning families seeking generous spaces and high prestige",
    features: [
      "Expansive grand salon and formal dining area spanning over 40 sq.m",
      "Palatial primary suite with walk-in wardrobe and 5-fixture marble bath",
      "Two junior suites with private en-suite bathrooms and fitted wardrobes",
      "Dedicated maid's room with en-suite bathroom and service entry",
      "Direct elevator access to landscaped podium garden level"
    ],
    dimensions: {
      livingDining: "5.60m x 6.80m",
      masterBedroom: "4.50m x 4.20m",
      secondBedroom: "3.80m x 3.60m",
      thirdBedroom: "3.50m x 3.40m",
      kitchen: "3.80m x 3.20m",
      balcony: "2.20m x 6.50m",
      powderRoom: "2.20m x 1.40m",
      bathrooms: "3 Full Marble Bathrooms + Powder"
    }
  },
  {
    id: '4BR',
    name: "4 Bedroom Coastal Haven",
    tagline: "Ultra-limited trophy residences enjoying unobstructed three-side marine vistas",
    netSqM: 172,
    netSqFt: 1851,
    bedrooms: 4,
    bathrooms: 4.5,
    totalUnits: 4,
    percentageMix: 0.5,
    startingPriceAED: "4,100,000",
    startingPriceUSD: "1,116,000",
    handover: "Q4 2027",
    balcony: "Triple Aspect Balconies",
    idealFor: "Multi-generational families demanding unmatched privacy and space",
    features: [
      "Commanding 270° marine perspective over Al Khan Lagoon & Arabian Gulf",
      "Private family retreat lounge separated from grand reception hall",
      "Dual chef's show kitchen and wet kitchen with pantry",
      "All four bedrooms feature en-suite bathrooms and panoramic windows",
      "Assigned triple covered parking spaces in private podium"
    ],
    dimensions: {
      livingDining: "6.20m x 7.40m",
      masterBedroom: "5.10m x 4.60m",
      secondBedroom: "4.00m x 3.80m",
      thirdBedroom: "3.80m x 3.50m",
      kitchen: "4.20m x 3.50m",
      balcony: "Wrap-around 28 sq.m deck",
      powderRoom: "2.40m x 1.50m",
      bathrooms: "4 Ensuite Bathrooms + Guest"
    }
  },
  {
    id: 'PENTHOUSE',
    name: "Signature Sky Penthouse",
    tagline: "The pinnacle of peninsula living with private rooftop pool & sky deck",
    netSqM: 185,
    netSqFt: 1991,
    bedrooms: 4,
    bathrooms: 5,
    totalUnits: 6,
    percentageMix: 0.7,
    startingPriceAED: "5,500,000",
    startingPriceUSD: "1,497,000",
    handover: "Q4 2027",
    balcony: "Private Rooftop Sky Deck & Infinity Plunge Pool",
    idealFor: "Ultra-high-net-worth individuals and global collectors",
    features: [
      "Double-height 4.2m living room ceilings with crystal chandeliers",
      "Exclusive private rooftop terrace with heated infinity splash pool",
      "Breathtaking 360-degree views over Sharjah skyline and Arabian Gulf",
      "Private elevator vestibule with biometric entry",
      "Curated Italian bespoke cabinetry, bookmatched marble surfaces"
    ],
    dimensions: {
      livingDining: "7.00m x 8.20m",
      masterBedroom: "5.50m x 4.80m",
      secondBedroom: "4.20m x 4.00m",
      thirdBedroom: "3.80m x 3.50m",
      kitchen: "4.80m x 3.60m",
      balcony: "Private 45 sq.m Sky Terrace",
      powderRoom: "2.60m x 1.60m",
      bathrooms: "5 Designer Marble Ensuites"
    }
  }
];

export const BUILDING_INVENTORY: BuildingInventory[] = [
  { id: 'B1', name: "Tower B1 (Azure)", units: 150, floors: "G + Podium + 14 Floors", viewOrientation: "North Lagoon & Maryam Island", featured: true },
  { id: 'B2', name: "Tower B2 (Marina)", units: 148, floors: "G + Podium + 14 Floors", viewOrientation: "East Al Khan Lagoon", featured: false },
  { id: 'B3', name: "Tower B3 (Peninsula)", units: 152, floors: "G + Podium + 15 Floors", viewOrientation: "Direct Beachfront & Arabian Gulf", featured: true },
  { id: 'B4', name: "Tower B4 (Horizon)", units: 206, floors: "G + Podium + 18 Floors", viewOrientation: "Sunset Sea & Promenade", featured: false },
  { id: 'B5', name: "Tower B5 (Coral)", units: 206, floors: "G + Podium + 18 Floors", viewOrientation: "Southwest Coastline & Dubai Skyline", featured: true },
];

export const INVESTMENT_USPS: USPItem[] = [
  {
    id: 1,
    title: "Strategically Connected via AED 750M Tunnel",
    description: "Located right beside Sharjah's major road & tunnel expansion programme, unlocking friction-free commutes to Dubai International Airport (15 min) and Downtown.",
    iconName: "Route",
    stat: "15 min to Dubai"
  },
  {
    id: 2,
    title: "Rare Peninsula Address",
    description: "An exceptional 3-hectare coastal plot bordered by pristine water on three sides, creating an unrepeatable coastal enclave with guaranteed open horizons.",
    iconName: "Compass",
    stat: "3-Sided Sea Frontage"
  },
  {
    id: 3,
    title: "New Benchmark in Sharjah Luxury",
    description: "Elevating the Northern Emirates luxury standard with Neo-Art Deco architectural rhythm, double-height lobbies, concierge, and private beach clubs.",
    iconName: "Award",
    stat: "Neo-Art Deco Icon"
  },
  {
    id: 4,
    title: "High Capital Appreciation & Yields",
    description: "Al Khan registered over AED 1.3 Billion in transactions alone in H1 2026. Waterfront residences command premium 8% to 10% expected gross rental yields.",
    iconName: "TrendingUp",
    stat: "8-10% Projected Yield"
  },
  {
    id: 5,
    title: "Integrated Coastal Community",
    description: "A comprehensive self-sustaining waterfront destination featuring manicured podium gardens, fitness clubs, children's aquatic zones, and private promenades.",
    iconName: "ShieldCheck",
    stat: "3 Hectares Masterplan"
  },
  {
    id: 6,
    title: "Vibrant Waterfront Dining & Retail",
    description: "Direct access to seaside fine-dining, artisanal cafés, boutique retail, and open-air beachfront bistros including Silver Spoon Tavern and Wild Grain.",
    iconName: "Utensils",
    stat: "Boutique F&B"
  }
];

export const LIFESTYLE_USPS: USPItem[] = [
  {
    id: 1,
    title: "Uninterrupted Beach Views",
    description: "Floor-to-ceiling acoustic glazing frames expansive, unobstructed panoramas across the crystal turquoise waters of the Arabian Gulf.",
    iconName: "Eye",
    stat: "270° Coastal Views"
  },
  {
    id: 2,
    title: "Resort-Inspired Living",
    description: "Day-to-day living transformed into a perpetual 5-star holiday with poolside cabanas, valet concierge, towel service, and serene ambient sounds.",
    iconName: "Palmtree",
    stat: "5-Star Service"
  },
  {
    id: 3,
    title: "Direct Beachfront Access",
    description: "Step straight from your private residential elevator onto soft golden sand with reserved sun loungers, beach umbrellas, and seaside boardwalks.",
    iconName: "Waves",
    stat: "Step Onto Sand"
  },
  {
    id: 4,
    title: "Bespoke Water Activities",
    description: "Paddleboarding, jet skiing, sailing, and yacht charter moorings situated directly along the protected Al Khan lagoon waterways.",
    iconName: "Anchor",
    stat: "Lagoon Sports"
  },
  {
    id: 5,
    title: "Environmental & Shading Façade",
    description: "Intelligent architectural fins and recessed balconies inspired by regional heritage reduce solar heat gain while capturing cool sea breezes.",
    iconName: "Leaf",
    stat: "Passive Eco-Cooling"
  },
  {
    id: 6,
    title: "Multiple Pools & Aquatic Decks",
    description: "Sprawling central lagoon swimming pool with heated lap lanes, shallow Baja shelves, tranquil jacuzzis, and lush tropical greenery.",
    iconName: "Droplets",
    stat: "Resort Pools"
  },
  {
    id: 7,
    title: "Trendy F&B Experience",
    description: "Stroll along the lively waterfront promenade enjoying world-class gourmet restaurants, artisan bakeries, and chic sunset cocktail spots.",
    iconName: "Coffee",
    stat: "Seaside Dining"
  },
  {
    id: 8,
    title: "Children's Splash & Adventure Zone",
    description: "Dedicated safe shallow splash decks, shaded adventure playground, creative indoor playhouse, and family picnic lawns.",
    iconName: "Smile",
    stat: "Family Focused"
  },
  {
    id: 9,
    title: "Seamless Dubai City Transit",
    description: "Close to Sharjah's new AED 750M road tunnel, providing effortless 20-minute highway transit to Downtown Dubai and DIFC.",
    iconName: "Zap",
    stat: "15-20 Min Transit"
  }
];

export const CONNECTIVITY_DATA: ConnectivityItem[] = [
  { id: '1', name: "Al Khan Beach, Park & Lagoon", category: 'beaches', driveTime: "2–5 min", distanceKm: 0.8, description: "Pristine sandy shoreline, watersport rentals, and beach park", highlight: true },
  { id: '2', name: "Al Qasba Canal & Eye of the Emirates", category: 'beaches', driveTime: "5–8 min", distanceKm: 2.4, description: "Scenic pedestrian canal, Ferris wheel, and outdoor cafés" },
  { id: '3', name: "Sharjah Aquarium & Maritime Museum", category: 'beaches', driveTime: "5–8 min", distanceKm: 2.1, description: "Cultural landmarks preserving Sharjah's rich seafaring heritage", highlight: true },
  { id: '4', name: "Victoria International School", category: 'education', driveTime: "5–7 min", distanceKm: 3.2, description: "Top-tier Australian curriculum international institution" },
  { id: '5', name: "American School of Creative Science", category: 'education', driveTime: "7–10 min", distanceKm: 4.8, description: "Accredited US curriculum bilingual campus" },
  { id: '6', name: "Oriana Hospital Sharjah", category: 'healthcare', driveTime: "5–10 min", distanceKm: 3.5, description: "State-of-the-art multi-specialty medical facility" },
  { id: '7', name: "Medcare Medical Center", category: 'healthcare', driveTime: "8–12 min", distanceKm: 5.2, description: "Premium healthcare clinics & emergency services" },
  { id: '8', name: "City Centre Sharjah & Sahara Centre", category: 'shopping', driveTime: "8–12 min", distanceKm: 4.5, description: "Major retail destinations, cinema complexes, and hypermarkets", highlight: true },
  { id: '9', name: "Mega Mall Sharjah", category: 'shopping', driveTime: "10–15 min", distanceKm: 7.0, description: "Iconic family shopping, dining, and entertainment hub" },
  { id: '10', name: "Dubai International Airport (DXB)", category: 'transit', driveTime: "15–25 min", distanceKm: 14.5, description: "World's busiest international aviation hub via direct highway", highlight: true },
  { id: '11', name: "Sharjah International Airport (SHJ)", category: 'transit', driveTime: "22–25 min", distanceKm: 18.0, description: "Convenient regional air terminal & Air Arabia hub" },
  { id: '12', name: "Downtown Dubai & Burj Khalifa", category: 'transit', driveTime: "20–30 min", distanceKm: 21.0, description: "Global financial district, Dubai Mall, and luxury landmarks", highlight: true }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    title: "Private Oceanfront Sky Deck & Pool Terrace",
    category: 'interior',
    url: "/gallery-sky-terrace.jpg",
    aspect: "16:9",
    caption: "Private rooftop ocean terrace with infinity plunge pool, sheer curtains, wooden decking, and panoramic Arabian Gulf sunset views."
  },
  {
    id: 'g2',
    title: "Illuminated Resort Courtyard & Night Atmosphere",
    category: 'amenities',
    url: "/gallery-night-courtyard.jpg",
    aspect: "16:9",
    caption: "Architectural night lighting across the 5 Neo-Art Deco towers surrounding the central pool, palm walkways, and shaded children's play park."
  },
  {
    id: 'g3',
    title: "Beachfront Promenade & Equestrian Coastline",
    category: 'exterior',
    url: "/gallery-beach-view.jpg",
    aspect: "16:9",
    caption: "Unobstructed view of the mid-rise coastal towers bordering golden sand beaches, palm groves, and pristine lagoon waters."
  },
  {
    id: 'g4',
    title: "Seaside Dining & Coastal Promenade",
    category: 'exterior',
    url: "/about-hero.jpg",
    aspect: "16:9",
    caption: "Contemporary towers overlooking Silver Spoon Tavern and Wild Grain beachfront promenade bistros."
  },
  {
    id: 'g5',
    title: "Panoramic Sea-Facing Living Salon",
    category: 'interior',
    url: "/about-interior.jpg",
    aspect: "16:9",
    caption: "Floor-to-ceiling double glass windows framing ocean views with bouclé seating and crystal chandeliers."
  },
  {
    id: 'g6',
    title: "Elevated Podium Gardens & Resort Pools",
    category: 'amenities',
    url: "/about-podium.jpg",
    aspect: "16:9",
    caption: "Lush tropical podium park featuring swimming pools, sun deck loungers, and architectural arch balconies."
  }
];

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: 'beach-club',
    title: "Private Beach Club & Shoreline",
    category: "Coastal Enclave",
    desc: "Direct private access to soft golden sands with reserved sun loungers, umbrella cabanas, and attentive seaside towel service.",
    icon: "Sun",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    highlight: "100m Sandy Beachfront"
  },
  {
    id: 'resort-pool',
    title: "Resort Lagoon Pools & Cabanas",
    category: "Aquatic Oasis",
    desc: "Heated infinity-edge central lagoon with sunken daybeds, shallow Baja shelf for sunbathing, and private poolside cabanas.",
    icon: "Droplets",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    highlight: "Multi-Tier Heated Pools"
  },
  {
    id: 'promenade-dining',
    title: "Waterfront Promenade & Bistros",
    category: "Gourmet Promenade",
    desc: "Stroll along the lively seaside boardwalk enjoying world-class gourmet restaurants, artisan bakeries, and al fresco terrace bistros.",
    icon: "Footprints",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    highlight: "Al Fresco Dining"
  },
  {
    id: 'water-sports',
    title: "Lagoon Watersports & Pier",
    category: "Marine Leisure",
    desc: "Bespoke stand-up paddleboarding, sea kayaking, and private yacht tender moorings situated directly on the calm Al Khan lagoon.",
    icon: "Anchor",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    highlight: "Direct Lagoon Access"
  },
  {
    id: 'fitness-studio',
    title: "Ocean-View Fitness & Pilates",
    category: "Wellness & Vitality",
    desc: "State-of-the-art Technogym cardio suites, functional strength training, reformer Pilates studio, and open-air yoga deck.",
    icon: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    highlight: "Technogym Panoramic Gym"
  },
  {
    id: 'kids-splash',
    title: "Children's Splash & Adventure Park",
    category: "Family & Recreation",
    desc: "Interactive zero-depth water splash fountains, shaded climbing apparatus, soft play zones, and lush family picnic lawns.",
    icon: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    highlight: "Safe Shaded Playgrounds"
  },
  {
    id: 'concierge-valet',
    title: "24/7 Concierge & Valet Reception",
    category: "Hospitality Suite",
    desc: "Hotel-calibre residential lobby with 24/7 dedicated concierge, bespoke valet parking, parcel lockers, and biometric security.",
    icon: "Shield",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    highlight: "5-Star Hotel Calibre"
  },
  {
    id: 'podium-gardens',
    title: "Manicured Podium Sky Gardens",
    category: "Nature & Tranquility",
    desc: "Curated Mediterranean and indigenous flora, tranquil reflection pools, shaded pergola reading pavilions, and sunset viewpoints.",
    icon: "Leaf",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    highlight: "Elevated Sea Garden"
  }
];
