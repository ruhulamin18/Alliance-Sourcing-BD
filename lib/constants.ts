import type {
  NavItem,
  Service,
  Feature,
  ProcessStep,
  Product,
} from "./types";

export const SITE_NAME = "Alliance Sourcing BD";

export const SITE_DESCRIPTION =
  "Professional buying and sourcing services for apparel and garment manufacturing.";

export const NAVIGATION: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Buying House",
    href: "/buying-house",
  },
  {
    label: "Factory & Machinery",
    href: "/factory-machinery",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const CONTACT_INFO = {
  email: "info@alliancesourcingbd.com",
  phone: "+880 1XXX-XXXXXX",
  address: "Dhaka, Bangladesh",
};

export const SERVICES: Service[] = [
  {
    title: "Garment Sourcing",
    description:
      "We connect buyers with suitable and reliable garment manufacturers.",
  },
  {
    title: "Quality Control",
    description:
      "We help maintain product quality through inspection and monitoring.",
  },
  {
    title: "Production Management",
    description:
      "We coordinate production processes to keep orders on track.",
  },
  {
    title: "Logistics Support",
    description:
      "We support the shipment and delivery process from factory to buyer.",
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Reliable Suppliers",
    description:
      "Access to a network of trusted garment manufacturing partners.",
  },
  {
    title: "Quality Focus",
    description:
      "Quality checks are maintained throughout the sourcing process.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Production and shipment schedules are carefully monitored.",
  },
  {
    title: "Clear Communication",
    description:
      "We maintain clear communication between buyers and manufacturers.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Requirement",
    description: "We understand your product and sourcing requirements.",
  },
  {
    number: 2,
    title: "Factory Selection",
    description: "We identify suitable manufacturing partners.",
  },
  {
    number: 3,
    title: "Production",
    description: "Production is monitored according to the agreed specifications.",
  },
  {
    number: 4,
    title: "Quality Check",
    description: "Products are inspected before shipment.",
  },
  {
    number: 5,
    title: "Delivery",
    description: "The completed order is prepared for shipment.",
  },
];

export const PRODUCTS: Product[] = [
  {
    title: "T-Shirts",
    description: "Quality casual and basic T-shirt manufacturing.",
    image: "/garment-rack.jpg",
  },
  {
    title: "Shirts",
    description: "Formal and casual shirt sourcing solutions.",
    image: "/garment-rack.jpg",
  },
  {
    title: "Jackets",
    description: "Professional jacket and outerwear sourcing.",
    image: "/garment-rack.jpg",
  },
];