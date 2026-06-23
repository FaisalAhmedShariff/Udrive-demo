// src/data/mockVehicles.js

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
    pricing: {
      daily: 3200,
      weekly: 20000,
      monthly: 75000
    },
    specs: {
      topSpeed: "340 km/h",
      transmission: "Automatic F1 Dual-Clutch",
      fuelType: "Super (98)"
    },
    description: "The Ferrari F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta. It is a car with unique characteristics and, as its name implies, an homage to the most powerful V8 in Ferrari history.",
    features: [
      "Carbon Ceramic Brakes",
      "JBL Premium Sound System",
      "Dual-Zone Climate Control",
      "Adaptive Suspension",
      "LED Matrix Headlights",
      "Passenger Display Screen",
      "Launch Control"
    ],
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800"
    ]
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
    pricing: {
      daily: 3500,
      weekly: 22000,
      monthly: 80000
    },
    specs: {
      topSpeed: "325 km/h",
      transmission: "7-Speed Dual-Clutch LDF",
      fuelType: "Super (98)"
    },
    description: "The Huracán Evo Spyder lets you experience the thrill of open-air driving while feeling the raw power of the naturally aspirated V10. Seamlessly blending cutting-edge aerodynamics with state-of-the-art vehicle dynamics control, it is a driving experience like no other.",
    features: [
      "Alcantara Luxury Interior",
      "Rear View Camera with Parking Sensors",
      "Lamborghini Dinamica Veicolo Integrata (LDVI)",
      "Exhaust System Valved Sport Sound",
      "Apple CarPlay Integration",
      "Carbon Fiber Accents",
      "Full Body PPF Protection"
    ],
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800"
    ]
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
    pricing: {
      daily: 5000,
      weekly: 31000,
      monthly: 110000
    },
    specs: {
      topSpeed: "250 km/h",
      transmission: "8-Speed Automatic Sat-Aided",
      fuelType: "Super (98)"
    },
    description: "The Rolls-Royce Cullinan Black Badge is the supreme expression of luxury SUV dominance. With its dark, imposing presence, bespoke starry sky starlight headliner, and incomparable 'Magic Carpet Ride' suspension, it represents absolute prestige on the roads of Dubai.",
    features: [
      "Starlight Headliner",
      "Rear Theatre Configuration",
      "Bespoke 18-Speaker Audio",
      "Massaging & Ventilated Seats",
      "Immersive Rear Seating (Console)",
      "Lambswool Floor Mats",
      "Electric Soft-Close Doors"
    ],
    images: [
      "https://images.unsplash.com/photo-1632245889027-e406faaa19cc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1637984189914-7d5a57a1cb8e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800"
    ]
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
    pricing: {
      daily: 2800,
      weekly: 18000,
      monthly: 68000
    },
    specs: {
      topSpeed: "296 km/h",
      transmission: "7-Speed PDK",
      fuelType: "Super (98)"
    },
    description: "Born on the track and built for the street, the Porsche 911 GT3 RS is a masterpiece of precision engineering. With motorsport-derived aerodynamics, including its massive active rear wing, and a screaming 9000 RPM flat-six, it offers pure, unadulterated feedback.",
    features: [
      "Weissach Package Accents",
      "Full Roll Cage (Club Sport)",
      "Carbon Fiber Bucket Seats",
      "Michelin Pilot Sport Cup 2 R Tires",
      "Porsche Active Suspension Management",
      "Rear Axle Steering",
      "Bose Surround Sound"
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1611245801312-51340b307ebd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
    ]
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
    pricing: {
      daily: 2200,
      weekly: 14000,
      monthly: 52000
    },
    specs: {
      topSpeed: "220 km/h",
      transmission: "9-Speed Speedshift TCT",
      fuelType: "Super (98) / Special (95)"
    },
    description: "The G-Class legend continues with the Mercedes-AMG G 63. Featuring the unmistakable twin-turbo V8, hand-crafted interior, and military-grade road presence, it is the ultimate status symbol SUV for cruising down Sheikh Zayed Road.",
    features: [
      "Burmester 3D Surround Sound",
      "AMG Night Package",
      "Bespoke Red-Black Nappa Leather",
      "Dual 12.3-inch Displays",
      "Active Lane Keeping & Cruise",
      "Sunroof",
      "22-inch Forged Wheels"
    ],
    images: [
      "https://images.unsplash.com/photo-1520050206274-a1ae446cb3cc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800"
    ]
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
    pricing: {
      daily: 2600,
      weekly: 16500,
      monthly: 62000
    },
    specs: {
      topSpeed: "333 km/h",
      transmission: "8-Speed Dual-Clutch",
      fuelType: "Super (98)"
    },
    description: "The Bentley Continental GT is the quintessential Grand Tourer. Inside, a handcrafted sanctuary of leather and polished wood wraps around a thunderous W12 twin-turbo engine, presenting a unmatched blend of effortless performance and absolute luxury.",
    features: [
      "Rotating Dashboard Display",
      "Mulliner Specification Cabin",
      "Naim Premium 2200W Sound",
      "Diamond-in-Diamond Quilting",
      "Head-Up Display",
      "Night Vision Camera",
      "Heated/Cooled/Massage Seats"
    ],
    images: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600706432502-75a0e2b8b913?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800"
    ]
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
    pricing: {
      daily: 2400,
      weekly: 15000,
      monthly: 55000
    },
    specs: {
      topSpeed: "330 km/h",
      transmission: "7-Speed S Tronic Dual-Clutch",
      fuelType: "Super (98)"
    },
    description: "The Audi R8 Spyder shares 50% of its parts with the R8 LMS GT3 racecar. Combining a mid-mounted naturally aspirated 5.2-liter V10 with standard Quattro all-wheel drive, it delivers hair-raising sound and razor-sharp handling.",
    features: [
      "Audi Virtual Cockpit",
      "Bang & Olufsen Sound System",
      "Laser Headlights",
      "Carbon Fiber Front Spoiler & Diffuser",
      "Dynamic Steering",
      "Fine Nappa Leather Shell Seats",
      "Quattro All-Wheel Drive"
    ],
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
    ]
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
    pricing: {
      daily: 3400,
      weekly: 21000,
      monthly: 78000
    },
    specs: {
      topSpeed: "341 km/h",
      transmission: "7-Speed Seamless Shift Gearbox",
      fuelType: "Super (98)"
    },
    description: "McLaren 720S is a supercar that challenges the limits of what is possible. Light, strong, and aerodynamically active, it wraps a carbon fiber MonoCage II around a twin-turbocharged V8 to create an extreme driver's car with hypercar speed.",
    features: [
      "Dihedral Butterfly Doors",
      "Folding Driver Display",
      "Carbon Fiber Tub Chassis",
      "Variable Drift Control (VDC)",
      "Bowers & Wilkins 12-Speaker Audio",
      "Active Aerodynamic Wing",
      "Carbon Ceramic Track Package"
    ],
    images: [
      "https://images.unsplash.com/photo-1562591176-80db867a55b4?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1625217527288-93919c99650a?auto=format&fit=crop&q=80&w=800"
    ]
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
    pricing: {
      daily: 1800,
      weekly: 11500,
      monthly: 42000
    },
    specs: {
      topSpeed: "283 km/h",
      transmission: "8-Speed Automatic CommandShift",
      fuelType: "Super (98) / Special (95)"
    },
    description: "The Range Rover Sport SVR is the fastest, most powerful Land Rover ever built. The Carbon Edition features extensive exterior carbon fiber detailing, SVR performance seats, and a raw, crackling supercharged V8 engine soundtrack.",
    features: [
      "Exposed Carbon Fiber Bonnet",
      "Meridian Signature Sound System",
      "SVR Sports Seats in Windsor Leather",
      "Switchable Active Quad Sports Exhaust",
      "Panorarnic Sliding Glass Roof",
      "Configurable Ambient Lighting",
      "360-Degree Surround Camera"
    ],
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const brandLogos = [
  { name: "Ferrari", logo: "🇮🇹" },
  { name: "Lamborghini", logo: "🐂" },
  { name: "Rolls-Royce", logo: "👑" },
  { name: "Porsche", logo: "🏁" },
  { name: "Bentley", logo: "🦅" },
  { name: "Mercedes-AMG", logo: "⭐️" },
  { name: "Audi Sport", logo: "⭕️⭕️⭕️⭕️" },
  { name: "McLaren", logo: "🏎️" }
];
