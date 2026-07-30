import type { LucideIcon } from "lucide-react";
import {
  AlarmSmoke,
  FireExtinguisher,
  LampCeiling,
  CookingPot,
  Droplets,
  ClipboardPen,
  Building2,
  Factory,
  HeartPulse,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Warehouse,
  Building,
} from "lucide-react";

export const company = {
  name: "PFP Canada",
  legalName: "Precision Fire Protection Canada Ltd.",
  tagline: "Fire protection you can trust, across Western Canada.",
  phone: "1 (833) 344-3473",
  phoneHref: "tel:+18333443473",
  emergencyPhone: "(403) 995-3473",
  emergencyPhoneHref: "tel:+14039953473",
  email: "service@pfpcanada.com",
  emailHref: "mailto:service@pfpcanada.com",
  hqAddress: "2200 Barlow Trail SE, Calgary, AB T2C 2E4",
  hours: "Mon–Sat 8:00am – 5:00pm · Emergency service 24/7",
  founded: 2004,
  mission: "To aid in the mitigation of fire hazard risk through diligent service of fire protection equipment.",
  vision: "To provide Canadians with holistic, integrated fire protection solutions.",
  portalUrl: "https://stfirepro.firecanada.ca/",
  socials: {
    facebook: "https://www.facebook.com/p/PFP-Canada-100077119839844/",
    instagram: "https://www.instagram.com/pfpcanada/",
    linkedin: "https://www.linkedin.com/company/104959634/",
  },
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  hero: string;
  overview: string;
  features: string[];
  compliance: string[];
  image: string;
  codeRef?: string;
};

export const services: Service[] = [
  {
    slug: "fire-alarm-systems",
    name: "Fire Alarm Systems",
    short:
      "Design, installation, monitoring, and annual inspection of fire alarm systems.",
    icon: AlarmSmoke,
    hero: "Detect danger the moment it starts.",
    overview:
      "From single-stage conventional panels to addressable networked systems across multi-building campuses, our certified technicians design, install, verify, and maintain fire alarm systems that meet CAN/ULC-S536 inspection and testing requirements.",
    features: [
      "Addressable & conventional panel installation",
      "Annual CAN/ULC-S536 inspection & testing",
      "Verification to CAN/ULC-S537 on new systems",
      "24/7 central-station monitoring",
      "Deficiency correction & code upgrades",
      "Battery, detector & device replacement",
    ],
    compliance: [
      "CAN/ULC-S536",
      "CAN/ULC-S537",
      "NFPA 72",
      "National Building Code of Canada",
    ],
    codeRef: "CAN/ULC-S536",
    image: "/services/fire-alarm-panel.png",
  },
  {
    slug: "fire-extinguishers",
    name: "Fire Extinguishers",
    short:
      "Supply, inspection, recharging, and hydrostatic testing of portable extinguishers.",
    icon: FireExtinguisher,
    hero: "The right extinguisher, ready when it matters.",
    overview:
      "We supply, tag, and service portable and wheeled fire extinguishers of every class. Monthly, annual, and 6-year maintenance plus 12-year hydrostatic testing keep every unit compliant and reliable.",
    features: [
      "New extinguisher supply & mounting",
      "Monthly & annual inspection tagging",
      "Recharging & 6-year maintenance",
      "12-year hydrostatic testing",
      "Class A, B, C, D & K coverage",
      "Cabinet & signage installation",
    ],
    compliance: ["NFPA 10", "ULC listed", "Provincial Fire Codes"],
    codeRef: "NFPA 10",
    image: "/services/fire-extinguisher-service.png",
  },
  {
    slug: "emergency-lighting",
    name: "Emergency & Exit Lighting",
    short:
      "Installation and annual testing of emergency lighting and illuminated exit signs.",
    icon: LampCeiling,
    hero: "Light the way out, every time.",
    overview:
      "Emergency lighting and exit signage must function during a power failure. We install, load-test, and certify battery and generator-backed systems to keep egress paths illuminated and code-compliant.",
    features: [
      "Emergency light & exit sign installation",
      "Annual 30 & 90-minute load testing",
      "Battery replacement & repair",
      "Photometric egress assessments",
      "LED retrofit upgrades",
      "Documentation & compliance reports",
    ],
    compliance: [
      "CSA C282",
      "National Building Code of Canada",
      "Provincial Fire Codes",
    ],
    codeRef: "CSA C282",
    image: "/services/emergency-lighting.png",
  },
  {
    slug: "kitchen-suppression",
    name: "Kitchen Suppression",
    short:
      "Commercial kitchen hood suppression system service and semi-annual inspection.",
    icon: CookingPot,
    hero: "Protect your kitchen, protect your business.",
    overview:
      "Commercial cooking operations require wet-chemical suppression over cooking appliances and hoods. We install and inspect UL 300 compliant systems every six months, keeping restaurants and institutional kitchens open and insured.",
    features: [
      "UL 300 wet-chemical system installation",
      "Semi-annual inspection & tag",
      "Nozzle, fusible link & cartridge service",
      "Appliance-specific coverage design",
      "Gas & electrical shut-off integration",
      "Hood & duct compliance coordination",
    ],
    compliance: ["UL 300", "NFPA 96", "NFPA 17A", "Provincial Fire Codes"],
    codeRef: "NFPA 96",
    image: "/services/kitchen-suppression.png",
  },
  {
    slug: "sprinkler-systems",
    name: "Sprinkler Systems",
    short:
      "Wet, dry, and pre-action sprinkler inspection, testing, and maintenance.",
    icon: Droplets,
    hero: "Water where you need it, the instant you need it.",
    overview:
      "Automatic sprinkler systems are the backbone of building fire protection. Our sprinkler fitters inspect, test, and maintain wet, dry, pre-action, and deluge systems and fire pumps to NFPA 25 standards.",
    features: [
      "Annual & quarterly NFPA 25 inspection",
      "Wet, dry, pre-action & deluge systems",
      "Fire pump flow testing",
      "Backflow prevention testing",
      "Antifreeze & winterization service",
      "Head replacement & repairs",
    ],
    compliance: ["NFPA 25", "NFPA 13", "CAN/ULC-S543", "Provincial Fire Codes"],
    codeRef: "NFPA 25",
    image: "/services/sprinkler-system.png",
  },
  {
    slug: "fire-protection-inspections",
    name: "Fire Protection Inspections",
    short:
      "Single-source annual inspection programs covering every life-safety system.",
    icon: ClipboardPen,
    hero: "One partner for every code deadline.",
    overview:
      "Consolidate every life-safety inspection under one managed program. We schedule, perform, and document alarm, sprinkler, extinguisher, lighting, and suppression testing with digital reporting and deficiency tracking.",
    features: [
      "Bundled multi-system inspection plans",
      "Automated compliance scheduling",
      "Digital reports & inspection tags",
      "Deficiency tracking & quotes",
      "Authority Having Jurisdiction liaison",
      "Portfolio & multi-site management",
    ],
    compliance: ["NFPA 25", "CAN/ULC-S536", "NFPA 10", "NFPA 96", "CSA C282"],
    codeRef: "Multi-Code",
    image: "/services/fire-inspection.png",
  },
];

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  short: string;
  overview: string;
  challenges: string[];
  recommendedServices: string[];
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "commercial-office",
    name: "Commercial & Office",
    icon: Building2,
    short: "Office towers, mixed-use, and professional buildings.",
    overview:
      "Multi-tenant office and commercial buildings need reliable, documented life-safety systems to satisfy insurers, tenants, and the fire marshal. We keep alarms, sprinklers, and egress lighting inspection-ready year round.",
    challenges: [
      "Coordinating access across many tenants",
      "Minimizing disruption to business hours",
      "Documenting compliance for insurers",
    ],
    recommendedServices: [
      "fire-alarm-systems",
      "sprinkler-systems",
      "emergency-lighting",
      "fire-extinguishers",
    ],
    image: "/industries/commercial-office.png",
  },
  {
    slug: "industrial-manufacturing",
    name: "Industrial & Manufacturing",
    icon: Factory,
    short: "Plants, refineries, and heavy manufacturing facilities.",
    overview:
      "Industrial environments introduce combustible dust, flammable liquids, and high-hazard occupancies. We design and maintain specialized suppression, deluge, and detection systems built for demanding conditions.",
    challenges: [
      "High-hazard and combustible processes",
      "Deluge and foam suppression needs",
      "Continuous-operation scheduling",
    ],
    recommendedServices: [
      "sprinkler-systems",
      "fire-alarm-systems",
      "fire-extinguishers",
      "fire-protection-inspections",
    ],
    image: "/industries/industrial-plant.png",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    short: "Hospitals, long-term care, and medical clinics.",
    overview:
      "Healthcare facilities house vulnerable occupants and cannot evacuate quickly. Defend-in-place strategies demand flawless alarm, sprinkler, and suppression performance with rigorous documentation.",
    challenges: [
      "Defend-in-place occupancy requirements",
      "Zero tolerance for false alarms",
      "Accreditation and CSA Z8000 compliance",
    ],
    recommendedServices: [
      "fire-alarm-systems",
      "sprinkler-systems",
      "emergency-lighting",
      "kitchen-suppression",
    ],
    image: "/industries/healthcare-facility.png",
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    short: "Schools, colleges, and university campuses.",
    overview:
      "Campuses combine classrooms, labs, kitchens, and residences under one compliance program. We manage multi-building portfolios so administrators can focus on students, not code deadlines.",
    challenges: [
      "Multi-building campus coordination",
      "Summer-break service windows",
      "Lab and cafeteria hazards",
    ],
    recommendedServices: [
      "fire-alarm-systems",
      "fire-protection-inspections",
      "kitchen-suppression",
      "emergency-lighting",
    ],
    image: "/industries/education-campus.png",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    short: "Hotels, restaurants, and entertainment venues.",
    overview:
      "Guest safety is central to hospitality. From hotel alarm networks to restaurant kitchen suppression, we protect guests and keep venues compliant, insured, and open for business.",
    challenges: [
      "Guest-facing, discreet service",
      "Commercial kitchen suppression demands",
      "Large assembly-occupancy egress",
    ],
    recommendedServices: [
      "kitchen-suppression",
      "fire-alarm-systems",
      "sprinkler-systems",
      "emergency-lighting",
    ],
    image: "/industries/hospitality-hotel.png",
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    short: "Shopping centres, big-box, and standalone stores.",
    overview:
      "Retail spaces balance high foot traffic with valuable inventory. We keep sprinkler and alarm systems inspection-ready and minimize downtime during business hours.",
    challenges: [
      "High-traffic public egress",
      "Inventory and stockroom protection",
      "After-hours service scheduling",
    ],
    recommendedServices: [
      "sprinkler-systems",
      "fire-alarm-systems",
      "fire-extinguishers",
      "emergency-lighting",
    ],
    image: "/industries/retail-store.png",
  },
  {
    slug: "warehouse-logistics",
    name: "Warehouse & Logistics",
    icon: Warehouse,
    short: "Distribution centres and high-pile storage.",
    overview:
      "High-pile and rack storage require engineered sprinkler densities and in-rack protection. We inspect and maintain large-scale systems and fire pumps across distribution networks.",
    challenges: [
      "High-pile storage sprinkler design",
      "In-rack protection systems",
      "Large-footprint pump testing",
    ],
    recommendedServices: [
      "sprinkler-systems",
      "fire-alarm-systems",
      "fire-protection-inspections",
      "fire-extinguishers",
    ],
    image: "/industries/warehouse-logistics.png",
  },
  {
    slug: "multi-family-residential",
    name: "Multi-Family Residential",
    icon: Building,
    short: "Condos, apartments, and residential complexes.",
    overview:
      "Residential buildings protect people while they sleep. We maintain alarm, sprinkler, and suppression systems for property managers and condo boards, with clear reporting for owners.",
    challenges: [
      "Suite access coordination",
      "Common-area and parkade coverage",
      "Owner and board reporting",
    ],
    recommendedServices: [
      "fire-alarm-systems",
      "sprinkler-systems",
      "emergency-lighting",
      "fire-extinguishers",
    ],
    image: "/industries/residential-building.png",
  },
];

export type City = {
  slug: string;
  name: string;
  province: string;
  provinceCode: string;
  blurb: string;
  neighbourhoods: string[];
  image: string;
};

export const provinces = [
  { code: "AB", name: "Alberta" },
  { code: "BC", name: "British Columbia" },
  { code: "SK", name: "Saskatchewan" },
  { code: "MB", name: "Manitoba" },
] as const;

export type Branch = {
  city: string;
  provinceCode: string;
  phone: string;
  phoneHref: string;
  note?: string;
};

export const branches: Branch[] = [
  { city: "Calgary", provinceCode: "AB", phone: "1 (833) 344-3473", phoneHref: "tel:+18333443473", note: "Toll-Free" },
  { city: "Okotoks", provinceCode: "AB", phone: "(403) 995-3473", phoneHref: "tel:+14039953473", note: "24/7 Dispatch" },
  { city: "Edmonton", provinceCode: "AB", phone: "(780) 440-3473", phoneHref: "tel:+17804403473" },
  { city: "Red Deer", provinceCode: "AB", phone: "(825) 855-3473", phoneHref: "tel:+18258553473" },
  { city: "High River", provinceCode: "AB", phone: "(825) 377-3473", phoneHref: "tel:+18253773473" },
  { city: "Richmond", provinceCode: "BC", phone: "(778) 589-3473", phoneHref: "tel:+17785893473", note: "Metro Vancouver" },
  { city: "Kamloops", provinceCode: "BC", phone: "(778) 910-3473", phoneHref: "tel:+17789103473" },
  { city: "Winnipeg", provinceCode: "MB", phone: "(204) 289-3473", phoneHref: "tel:+12042893473" },
  { city: "Brandon", provinceCode: "MB", phone: "(204) 728-3473", phoneHref: "tel:+12047283473" },
  { city: "Regina", provinceCode: "SK", phone: "(306) 721-3473", phoneHref: "tel:+13067213473" },
  { city: "Saskatoon", provinceCode: "SK", phone: "(306) 808-3473", phoneHref: "tel:+13068083473" },
  { city: "Moose Jaw", provinceCode: "SK", phone: "(306) 693-3473", phoneHref: "tel:+13066933473" },
  { city: "Yorkton", provinceCode: "SK", phone: "(306) 783-3473", phoneHref: "tel:+13067833473" },
];

export function getBranchByCity(cityName: string): Branch | undefined {
  return branches.find((b) => b.city.toLowerCase() === cityName.toLowerCase());
}

export const cities: City[] = [
  {
    slug: "calgary",
    name: "Calgary",
    province: "Alberta",
    provinceCode: "AB",
    blurb:
      "Our head-office city. A full team of technicians and sprinkler fitters serves every quadrant of Calgary and surrounding areas with rapid on-site response.",
    neighbourhoods: [
      "Downtown Core",
      "Foothills Industrial",
      "Seton",
      "Sunridge",
      "Shepard",
      "University District",
    ],
    image: "/cities/calgary.png",
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta",
    provinceCode: "AB",
    blurb:
      "A dedicated Edmonton branch covers the capital region, from downtown towers to the industrial heartland east of the city.",
    neighbourhoods: [
      "Downtown",
      "Nisku",
      "Sherwood Park",
      "West Edmonton",
      "Leduc",
      "St. Albert",
    ],
    image: "/cities/edmonton.png",
  },
  {
    slug: "red-deer",
    name: "Red Deer",
    province: "Alberta",
    provinceCode: "AB",
    blurb:
      "Central Alberta coverage from Red Deer keeps commercial and agricultural facilities across the corridor inspection-ready.",
    neighbourhoods: [
      "Gaetz Avenue",
      "Riverside Industrial",
      "Gasoline Alley",
      "Blackfalds",
      "Lacombe",
    ],
    image: "/cities/red-deer.png",
  },
  {
    slug: "lethbridge",
    name: "Lethbridge",
    province: "Alberta",
    provinceCode: "AB",
    blurb:
      "Southern Alberta service for Lethbridge and the surrounding agricultural and food-processing communities.",
    neighbourhoods: [
      "Downtown",
      "West Lethbridge",
      "Sherring Industrial",
      "Coaldale",
      "Taber",
    ],
    image: "/cities/lethbridge.png",
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "British Columbia",
    provinceCode: "BC",
    blurb:
      "Lower Mainland coverage from our Vancouver branch spans high-rise towers, hospitality, and Metro Vancouver industry.",
    neighbourhoods: [
      "Downtown",
      "Mount Pleasant",
      "Burnaby",
      "Richmond",
      "Surrey",
      "North Shore",
    ],
    image: "/cities/vancouver.png",
  },
  {
    slug: "victoria",
    name: "Victoria",
    province: "British Columbia",
    provinceCode: "BC",
    blurb:
      "Vancouver Island service centred in Victoria, protecting government, healthcare, and hospitality buildings.",
    neighbourhoods: ["Downtown", "Saanich", "Langford", "Esquimalt", "Sidney"],
    image: "/cities/victoria.png",
  },
  {
    slug: "kelowna",
    name: "Kelowna",
    province: "British Columbia",
    provinceCode: "BC",
    blurb:
      "Okanagan coverage from Kelowna serves wineries, hospitality, healthcare, and a fast-growing commercial base.",
    neighbourhoods: [
      "Downtown",
      "Rutland",
      "West Kelowna",
      "Vernon",
      "Penticton",
    ],
    image: "/cities/kelowna.png",
  },
  {
    slug: "saskatoon",
    name: "Saskatoon",
    province: "Saskatchewan",
    provinceCode: "SK",
    blurb:
      "Saskatchewan service from Saskatoon covers commercial, healthcare, and agricultural processing across the region.",
    neighbourhoods: [
      "Downtown",
      "Marquis Industrial",
      "Sutherland",
      "Warman",
      "Martensville",
    ],
    image: "/cities/saskatoon.png",
  },
  {
    slug: "regina",
    name: "Regina",
    province: "Saskatchewan",
    provinceCode: "SK",
    blurb:
      "The provincial capital branch covers government, commercial, and industrial facilities throughout Regina.",
    neighbourhoods: [
      "Downtown",
      "Ross Industrial",
      "Harbour Landing",
      "East Regina",
      "Emerald Park",
    ],
    image: "/cities/regina.png",
  },
  {
    slug: "yorkton",
    name: "Yorkton",
    province: "Saskatchewan",
    provinceCode: "SK",
    blurb:
      "The regional trade hub branch covers agricultural, processing, and commercial facilities throughout east-central Saskatchewan.",
    neighbourhoods: [
      "Central",
      "North",
      "South",
      "Weinmaster Park",
      "Gladstone Industrial",
    ],
    image: "/cities/regina.png",
  },
  {
    slug: "brandon",
    name: "Brandon",
    province: "Manitoba",
    provinceCode: "MB",
    blurb:
      "The secondary trading market branch covers manufacturing, food processing, and commercial facilities throughout southwestern Manitoba.",
    neighbourhoods: [
      "Downtown",
      "East End",
      "Green Acres",
      "Lark Hill",
      "Richmond Industrial",
    ],
    image: "/cities/winnipeg.png",
  },

  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "Manitoba",
    provinceCode: "MB",
    blurb:
      "Manitoba coverage from Winnipeg protects distribution, manufacturing, healthcare, and commercial buildings.",
    neighbourhoods: [
      "Downtown",
      "Inkster Industrial",
      "St. Boniface",
      "Transcona",
      "Headingley",
    ],
    image: "/cities/winnipeg.png",
  },
];

export const stats = [
  { value: "20+", label: "Years protecting Western Canada" },
  { value: "6,500+", label: "Buildings under inspection" },
  { value: "10", label: "Cities served" },
  { value: "24/7", label: "Emergency response" },
];

export const certifications = [
  "COR Safety Certified",
  "NAFED 2024 Member",
  "Certified WBE (Women Business Enterprises)",
  "CFIB Corporate Member",
  "CFAA Certified Fire Technicians",
  "ASTTBC Registered Technicians",
  "NFPA Member (National Fire Protection)",
  "ULC Listed Service Provider",
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
