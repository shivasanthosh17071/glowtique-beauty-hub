export type Artist = {
  id: string;
  name: string;
  city: string;
  rating: number;
  reviews: number;
  startingPrice: number;
  specialties: string[];
  years: number;
  travel: string;
  verified: boolean;
  bio: string;
  image: string;
};

export const artists: Artist[] = [
  { id: "meera-kapoor", name: "Meera Kapoor", city: "Mumbai", rating: 4.9, reviews: 212, startingPrice: 6500, specialties: ["Bridal", "HD makeup", "Hair styling"], years: 12, travel: "40 km", verified: true, bio: "A soft-glam specialist creating luminous, camera-ready looks with a calm, considered hand.", image: "/src/assets/artist-meera.jpg" },
  { id: "nisha-verma", name: "Nisha Verma", city: "Bengaluru", rating: 4.8, reviews: 164, startingPrice: 4200, specialties: ["HD makeup", "Party glam"], years: 9, travel: "25 km", verified: true, bio: "Modern, wearable glam for celebrations that move from daylight to dance floor.", image: "/src/assets/artist-meera.jpg" },
  { id: "aisha-rao", name: "Aisha Rao", city: "Delhi", rating: 4.7, reviews: 98, startingPrice: 3000, specialties: ["Hair styling", "Reception"], years: 7, travel: "30 km", verified: true, bio: "Editorial hair and effortless finishing touches for your most photographed moments.", image: "/src/assets/glowtique-hero.jpg" },
  { id: "rhea-fernandes", name: "Rhea Fernandes", city: "Mumbai", rating: 5, reviews: 75, startingPrice: 3200, specialties: ["Party glam", "Engagement"], years: 6, travel: "20 km", verified: true, bio: "A joyful artist for bold eyes, glowing skin and a look that feels like you.", image: "/src/assets/artist-meera.jpg" },
];

export const packages = [
  { id: "signature-bridal", name: "Signature Bridal", duration: "4 hrs", price: 6500, detail: "HD makeup · hair · dupatta setting · lashes" },
  { id: "soft-glam", name: "Soft Glam Edit", duration: "2 hrs", price: 4200, detail: "Makeup · basic hair · lashes" },
  { id: "event-ready", name: "Event Ready", duration: "90 min", price: 2800, detail: "Makeup · touch-up kit" },
];

export const bookings = [
  { id: "GT-240813", artist: "Meera Kapoor", service: "Signature Bridal", date: "Sun, 13 Sep", time: "9:00 AM", price: 6500, status: "Confirmed" },
  { id: "GT-240702", artist: "Rhea Fernandes", service: "Soft Glam Edit", date: "Past · 02 Jul", time: "6:30 PM", price: 4200, status: "Completed" },
];