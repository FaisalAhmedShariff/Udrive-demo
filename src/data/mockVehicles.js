// src/data/mockVehicles.js — single source of truth for all demo content

export const mockVehicles = [
  {
    id: "ferrari-f8",
    name: "F8 Tributo",
    brand: "Ferrari",
    category: "Sports",
    isOwnFleet: true,
    seats: 2,
    horsepower: 710,
    acceleration0to100: "2.9s",
    topSpeed: "340 km/h",
    pricing: { daily: 3200, weekly: 20000, monthly: 75000 },
    specs: {
      topSpeed: "340 km/h",
      transmission: "Automatic F1 Dual-Clutch",
      fuelType: "Super (98)",
    },
    description:
      "The F8 Tributo channels decades of Ferrari mid-engine heritage into a razor-sharp driving instrument. In Dubai, it transforms every Sheikh Zayed Road stretch into a theatre of sound, response, and unfiltered Italian drama.",
    features: [
      "Carbon Ceramic Brakes",
      "JBL Premium Sound System",
      "Dual-Zone Climate Control",
      "Adaptive Suspension",
      "LED Matrix Headlights",
      "Passenger Display Screen",
      "Launch Control",
    ],
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1494976388531-d1058497cdd4?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "lamborghini-huracan",
    name: "Huracán Evo Spyder",
    brand: "Lamborghini",
    category: "Sports",
    isOwnFleet: true,
    seats: 2,
    horsepower: 640,
    acceleration0to100: "3.1s",
    topSpeed: "325 km/h",
    pricing: { daily: 3500, weekly: 22000, monthly: 80000 },
    specs: {
      topSpeed: "325 km/h",
      transmission: "7-Speed Dual-Clutch LDF",
      fuelType: "Super (98)",
    },
    description:
      "Open-air V10 fury meets Lamborghini's most advanced aerodynamic package. The Huracán Evo Spyder is engineered for drivers who want skyline views and a soundtrack that echoes through Downtown Dubai.",
    features: [
      "Alcantara Luxury Interior",
      "Rear View Camera with Parking Sensors",
      "Lamborghini Dinamica Veicolo Integrata (LDVI)",
      "Exhaust System Valved Sport Sound",
      "Apple CarPlay Integration",
      "Carbon Fiber Accents",
      "Full Body PPF Protection",
    ],
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "rolls-royce-cullinan",
    name: "Cullinan Black Badge",
    brand: "Rolls-Royce",
    category: "SUV",
    isOwnFleet: true,
    seats: 5,
    horsepower: 600,
    acceleration0to100: "4.9s",
    topSpeed: "250 km/h",
    pricing: { daily: 5000, weekly: 31000, monthly: 110000 },
    specs: {
      topSpeed: "250 km/h",
      transmission: "8-Speed Automatic Sat-Aided",
      fuelType: "Super (98)",
    },
    description:
      "Effortless authority in SUV form. The Cullinan Black Badge delivers a whisper-quiet cabin, bespoke craftsmanship, and a commanding presence suited to Palm Jumeirah arrivals and executive transfers alike.",
    features: [
      "Starlight Headliner",
      "Rear Theatre Configuration",
      "Bespoke 18-Speaker Audio",
      "Massaging & Ventilated Seats",
      "Immersive Rear Seating (Console)",
      "Lambswool Floor Mats",
      "Electric Soft-Close Doors",
    ],
    images: [
      "https://images.unsplash.com/photo-1632245889027-e406faaa19cc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1637984189914-7d5a57a1cb8e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "porsche-911-gt3",
    name: "911 GT3 RS",
    brand: "Porsche",
    category: "Sports",
    isOwnFleet: false,
    seats: 2,
    horsepower: 518,
    acceleration0to100: "3.2s",
    topSpeed: "296 km/h",
    pricing: { daily: 2800, weekly: 18000, monthly: 68000 },
    specs: {
      topSpeed: "296 km/h",
      transmission: "7-Speed PDK",
      fuelType: "Super (98)",
    },
    description:
      "Track-bred precision for the street. The GT3 RS pairs motorsport aerodynamics with a naturally aspirated flat-six that rewards every input — ideal for enthusiasts who demand purity over compromise.",
    features: [
      "Weissach Package Accents",
      "Full Roll Cage (Club Sport)",
      "Carbon Fiber Bucket Seats",
      "Michelin Pilot Sport Cup 2 R Tires",
      "Porsche Active Suspension Management",
      "Rear Axle Steering",
      "Bose Surround Sound",
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1611245801312-51340b307ebd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "mercedes-g63",
    name: "AMG G 63 Edition 55",
    brand: "Mercedes-Benz",
    category: "SUV",
    isOwnFleet: false,
    seats: 5,
    horsepower: 577,
    acceleration0to100: "4.5s",
    topSpeed: "220 km/h",
    pricing: { daily: 2200, weekly: 14000, monthly: 52000 },
    specs: {
      topSpeed: "220 km/h",
      transmission: "9-Speed Speedshift TCT",
      fuelType: "Super (98) / Special (95)",
    },
    description:
      "An icon reborn with AMG thunder. The G 63 combines military-grade road presence with hand-built V8 performance — the definitive Dubai statement SUV for those who refuse to blend in.",
    features: [
      "Burmester 3D Surround Sound",
      "AMG Night Package",
      "Bespoke Red-Black Nappa Leather",
      "Dual 12.3-inch Displays",
      "Active Lane Keeping & Cruise",
      "Sunroof",
      "22-inch Forged Wheels",
    ],
    images: [
      "https://images.unsplash.com/photo-1520050206274-a1ae446cb3cc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "bentley-continental",
    name: "Continental GT W12",
    brand: "Bentley",
    category: "Luxury Sedan",
    isOwnFleet: false,
    seats: 4,
    horsepower: 626,
    acceleration0to100: "3.7s",
    topSpeed: "333 km/h",
    pricing: { daily: 2600, weekly: 16500, monthly: 62000 },
    specs: {
      topSpeed: "333 km/h",
      transmission: "8-Speed Dual-Clutch",
      fuelType: "Super (98)",
    },
    description:
      "Grand touring at its most refined. Hand-stitched leather, polished wood veneers, and a W12 twin-turbo deliver effortless pace — the perfect companion for Business Bay meetings and coastal evening drives.",
    features: [
      "Rotating Dashboard Display",
      "Mulliner Specification Cabin",
      "Naim Premium 2200W Sound",
      "Diamond-in-Diamond Quilting",
      "Head-Up Display",
      "Night Vision Camera",
      "Heated/Cooled/Massage Seats",
    ],
    images: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600706432502-75a0e2b8b913?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "audi-r8",
    name: "R8 V10 Performance Spyder",
    brand: "Audi",
    category: "Sports",
    isOwnFleet: false,
    seats: 2,
    horsepower: 602,
    acceleration0to100: "3.2s",
    topSpeed: "330 km/h",
    pricing: { daily: 2400, weekly: 15000, monthly: 55000 },
    specs: {
      topSpeed: "330 km/h",
      transmission: "7-Speed S Tronic Dual-Clutch",
      fuelType: "Super (98)",
    },
    description:
      "Race DNA with everyday usability. The R8 Spyder's naturally aspirated V10 and Quattro grip deliver exhilarating performance while remaining approachable for first-time supercar renters in the UAE.",
    features: [
      "Audi Virtual Cockpit",
      "Bang & Olufsen Sound System",
      "Laser Headlights",
      "Carbon Fiber Front Spoiler & Diffuser",
      "Dynamic Steering",
      "Fine Nappa Leather Shell Seats",
      "Quattro All-Wheel Drive",
    ],
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1d2?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "mclaren-720s",
    name: "720S Coupe",
    brand: "McLaren",
    category: "Sports",
    isOwnFleet: false,
    seats: 2,
    horsepower: 710,
    acceleration0to100: "2.9s",
    topSpeed: "341 km/h",
    pricing: { daily: 3400, weekly: 21000, monthly: 78000 },
    specs: {
      topSpeed: "341 km/h",
      transmission: "7-Speed Seamless Shift Gearbox",
      fuelType: "Super (98)",
    },
    description:
      "Sculpted from carbon fibre and ambition. The 720S is a hypercar-adjacent experience with dihedral doors, telepathic steering, and acceleration that redefines what a rental weekend can feel like.",
    features: [
      "Dihedral Butterfly Doors",
      "Folding Driver Display",
      "Carbon Fiber Tub Chassis",
      "Variable Drift Control (VDC)",
      "Bowers & Wilkins 12-Speaker Audio",
      "Active Aerodynamic Wing",
      "Carbon Ceramic Track Package",
    ],
    images: [
      "https://images.unsplash.com/photo-1562591176-80db867a55b4?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1625217527288-93919c99650a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "range-rover-sport",
    name: "Sport SVR Carbon Edition",
    brand: "Range Rover",
    category: "SUV",
    isOwnFleet: false,
    seats: 5,
    horsepower: 575,
    acceleration0to100: "4.5s",
    topSpeed: "283 km/h",
    pricing: { daily: 1800, weekly: 11500, monthly: 42000 },
    specs: {
      topSpeed: "283 km/h",
      transmission: "8-Speed Automatic CommandShift",
      fuelType: "Super (98) / Special (95)",
    },
    description:
      "British luxury meets supercharged aggression. The SVR Carbon Edition pairs exposed carbon detailing with a thunderous V8 soundtrack — equally at home on JBR boulevard or desert highway cruises.",
    features: [
      "Exposed Carbon Fiber Bonnet",
      "Meridian Signature Sound System",
      "SVR Sports Seats in Windsor Leather",
      "Switchable Active Quad Sports Exhaust",
      "Panoramic Sliding Glass Roof",
      "Configurable Ambient Lighting",
      "360-Degree Surround Camera",
    ],
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519641471654-76ce0107a1b1?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: "bmw-m8",
    name: "M8 Competition Coupe",
    brand: "BMW",
    category: "Luxury Sedan",
    isOwnFleet: false,
    seats: 4,
    horsepower: 617,
    acceleration0to100: "3.2s",
    topSpeed: "305 km/h",
    pricing: { daily: 2100, weekly: 13500, monthly: 48000 },
    specs: {
      topSpeed: "305 km/h",
      transmission: "8-Speed M Steptronic",
      fuelType: "Super (98)",
    },
    description:
      "Executive luxury fused with M Division fury. The M8 Competition delivers four-seat practicality wrapped in a 617 hp twin-turbo package — refined enough for DIFC, savage enough for late-night highway runs.",
    features: [
      "Merino Leather Interior",
      "Bowers & Wilkins Diamond Surround",
      "M Carbon Bucket Seats",
      "Head-Up Display with M Mode",
      "Active M Differential",
      "Laserlight Headlamps",
      "M Performance Exhaust",
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800",
    ],
  },
];

/** Brand strip entries — `slug` maps to simple-icons export or "wordmark" fallback */
export const brandLogos = [
  { name: "Ferrari", slug: "ferrari" },
  { name: "Lamborghini", slug: "lamborghini" },
  { name: "Rolls-Royce", slug: "rollsroyce" },
  { name: "Porsche", slug: "porsche" },
  { name: "Bentley", slug: "bentley" },
  { name: "Mercedes-AMG", slug: "amg" },
  { name: "Audi Sport", slug: "audi" },
  { name: "McLaren", slug: "mclaren" },
  { name: "BMW", slug: "bmw" },
  { name: "Brabus", slug: "wordmark", wordmark: "BRABUS" },
  { name: "Mansory", slug: "wordmark", wordmark: "MANSORY" },
];

export const trustBadges = [
  { title: "No deposit", desc: "Zero security deposit on qualifying rentals" },
  { title: "Full tank gift", desc: "Every handover includes a full tank of fuel" },
  { title: "Free delivery", desc: "Complimentary drop-off anywhere in Dubai" },
  { title: "Insurance included", desc: "Comprehensive coverage on every vehicle" },
];

export const rentalSteps = [
  {
    num: "01",
    title: "Select Your Vehicle",
    desc: "Browse our curated fleet by category, brand, or budget. Filter by seats, performance, or daily rate to find your perfect match.",
  },
  {
    num: "02",
    title: "Confirm Dates & Delivery",
    desc: "Choose your rental period and preferred handover location. Our concierge coordinates free delivery to hotels, residences, or DXB airport.",
  },
  {
    num: "03",
    title: "Drive With Confidence",
    desc: "Receive your vehicle fully fueled, insured, and detailed. Enjoy 24/7 roadside support throughout your Dubai experience.",
  },
];

export const whyChooseUs = [
  {
    title: "Curated In-House Fleet",
    desc: "Three flagship vehicles owned and maintained directly by our team — never outsourced, always showroom-ready.",
  },
  {
    title: "Transparent AED Pricing",
    desc: "Daily, weekly, and monthly rates displayed upfront. No hidden fees, no surprise charges at handover.",
  },
  {
    title: "Concierge-Grade Service",
    desc: "Dedicated account managers, 15-minute response times, and white-glove delivery to any Dubai address.",
  },
  {
    title: "Flexible Rental Terms",
    desc: "From single-day supercar experiences to 30-day executive leases — tailored to your schedule, not ours.",
  },
];

export const testimonials = [
  {
    name: "Alexander Novak",
    rating: 5,
    text: "The Cullinan was immaculate upon delivery to Palm Jumeirah. Zero deposit, full tank, and a concierge who checked in twice during our week. Genuinely five-star.",
    date: "June 2026",
  },
  {
    name: "Sarah Al-Mansoori",
    rating: 5,
    text: "Rented the Huracán Evo Spyder for a weekend — booking took minutes, the car exceeded every expectation. Professional team, crystal-clear pricing.",
    date: "May 2026",
  },
  {
    name: "Marcus Vance",
    rating: 5,
    text: "Best luxury rental experience I've had in Dubai. G63 delivered to DXB arrivals, transparent insurance terms, and support available at 2 AM when I had a question.",
    date: "April 2026",
  },
  {
    name: "Elena Rostova",
    rating: 5,
    text: "The Continental GT W12 felt bespoke inside. Monthly rate saved us significantly versus daily pricing elsewhere. Will return for every Dubai visit.",
    date: "June 2026",
  },
  {
    name: "James Okonkwo",
    rating: 5,
    text: "McLaren 720S for my birthday — dihedral doors, flawless paint, and a handover briefing that covered every detail. U Drive sets the standard.",
    date: "March 2026",
  },
];

export const faqs = [
  {
    question: "What is the minimum age to rent a vehicle?",
    answer:
      "Drivers must be at least 21 years old for standard luxury and SUV models. High-performance supercars (Ferrari, Lamborghini, McLaren, Porsche GT models) require a minimum age of 25 with at least two years of driving experience on a valid licence.",
  },
  {
    question: "Which documents do I need to provide?",
    answer:
      "UAE residents: valid Emirates ID and UAE driving licence (minimum one year). Tourists: passport, entry visa stamp, and home-country driving licence. Licences not in English or Arabic require an International Driving Permit (IDP). All documents are verified at handover.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept Visa, Mastercard, and American Express. Payment can be made via secure card link before delivery, or by card/cash upon vehicle handover. Bank transfer is available for monthly leases. All transactions are in AED only.",
  },
  {
    question: "Is a security deposit required?",
    answer:
      "Select vehicles qualify for our zero-deposit programme for approved drivers with valid UAE or GCC licences. For other bookings, a pre-authorisation hold may apply to your credit card and is released within 15–21 business days after return, subject to inspection.",
  },
  {
    question: "What happens in the event of an accident?",
    answer:
      "Comprehensive insurance is included with every rental. A Dubai Police report is mandatory for any incident. If you are not at fault, you bear no liability. At-fault claims are subject to an excess fee based on vehicle class, outlined in your rental agreement.",
  },
  {
    question: "Are off-road driving or track use permitted?",
    answer:
      "No. Desert driving, dune bashing, and track use (including Dubai Autodrome) are strictly prohibited. Vehicles are equipped with GPS telematics. Violations void insurance coverage and incur a AED 10,000 penalty plus recovery fees.",
  },
  {
    question: "What are the mileage limits?",
    answer:
      "Standard daily rentals include 250 km per day. Weekly and monthly packages include proportionally higher allowances. Additional kilometres are billed at AED 5–15 per km depending on vehicle category. Unused kilometres do not roll over.",
  },
];

export const rentalConditions = [
  {
    title: "Minimum Age Limits",
    text: "21+ for luxury SUVs and sedans; 25+ for elite supercars. Licence must be valid for at least one year (two years for high-performance models).",
  },
  {
    title: "Deposit Policy",
    text: "Zero-deposit available on qualifying vehicles. Standard bookings may require a credit card pre-authorisation released 15–21 days after return.",
  },
  {
    title: "Mileage Allowance",
    text: "250 km per day included. Excess charged per kilometre based on vehicle class. Monthly leases include 6,000 km.",
  },
  {
    title: "Speed & Traffic Compliance",
    text: "In-car alerts activate at 130 km/h. Salik tolls and RTA fines are billed to the renter. Reckless driving voids insurance.",
  },
];

export const siteContact = {
  phone: "+971 50 000 0000",
  phoneTel: "+971500000000",
  email: "info@udriveluxury.com",
  whatsapp: "971500000000",
  address: "Showroom 12, Sheikh Zayed Road, Al Quoz Industrial 1, Dubai, UAE",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115546.68532454649!2d55.15582914389921!3d25.174244243685517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a6ac243%3A0x3f5b84d436cf0e3b!2sSheikh%20Zayed%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
  hours: "Showroom: 9:00 AM – 10:00 PM daily",
  hotline: "VIP Hotline & Delivery: 24/7",
};

export const vehicleCategories = ["Sports", "SUV", "Luxury Sedan"];

export function getVehiclesByCategory(category, limit = 4) {
  return mockVehicles.filter((v) => v.category === category).slice(0, limit);
}

export function getFeaturedFleet() {
  return mockVehicles.filter((v) => v.isOwnFleet);
}
