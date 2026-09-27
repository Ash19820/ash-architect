export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  awards?: string[];
}

export const projects: Project[] = [
  {
    id: "amadeus",
    title: "AMADEUS INDIA ATELIER",
    subtitle: "WORKSPACE ARCHITECTURE",
    category: "OFFICE DESIGN & ARCHITECTURE",
    location: "NEW DELHI, IN",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
    description: "A transformative 12,000 m² tech headquarters celebrating materiality, daylight dynamics, and fluid human movement.",
    awards: ["iF Design Award 2024", "LOOP Design Award Winner", "Frame Award Bronze"]
  },
  {
    id: "onsor-mosha",
    title: "ONSOR MOSHA RIYADH OFFICE",
    subtitle: "CORPORATE HEADQUARTERS",
    category: "INTERIOR ARCHITECTURE",
    location: "RIYADH, KSA",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    description: "Bridging vernacular desert light traditions with ultra-contemporary sculptural monolithic geometry.",
    awards: ["International Property Award", "Architectural Yearbook 2024"]
  },
  {
    id: "softgames",
    title: "SOFTGAMES CREATIVE HUB",
    subtitle: "DIGITAL STUDIO CAMPUS",
    category: "EXPERIENTIAL ARCHITECTURE",
    location: "BANGALORE, IN",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    description: "An agile, multi-level gaming atelier built around acoustic timber volumes and floating collaboration bridges.",
    awards: ["Design Excellence Finalist"]
  },
  {
    id: "vessel-pavilion",
    title: "MONOLITHIC COASTAL RETREAT",
    subtitle: "RESIDENTIAL & LANDSCAPE",
    category: "EXPERIMENTAL LIVING",
    location: "GOA, IN",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
    description: "Raw cast concrete embedded directly into the Aegean basalt cliffs, framing oceanic horizons with stark precision."
  }
];
