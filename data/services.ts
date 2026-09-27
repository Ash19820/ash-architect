export interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

export interface ServiceCategory {
  category: string;
  description: string;
  items: ServiceItem[];
}

export const services: ServiceCategory[] = [
  {
    category: "SPATIAL ARCHITECTURE",
    description: "WE OFFER SERVICES THAT COVER YOUR PEOPLE, SPACE AND TECHNOLOGY. OUR INTEGRATED TEAM CAN WORK WITH YOU FROM START TO FINISH, OR MEET YOUR NEEDS AT ANY STAGE OF A PROJECT.",
    items: [
      { id: "01", name: "ARCHITECTURAL DESIGN", description: "Holistic building conception from conceptual envelope to structural articulation." },
      { id: "02", name: "INTERIOR ARCHITECTURE", description: "Bespoke spatial choreography focused on sensory depth, tactile materials, and light." },
      { id: "03", name: "OFFICE & WORKPLACE DESIGN", description: "High-performance collaborative environments built around modern working rituals." },
      { id: "04", name: "ENVIRONMENTAL DESIGN", description: "Harmonizing built envelopes with indigenous ecological microclimates." },
      { id: "05", name: "BESPOKE FURNITURE DESIGN", description: "Custom limited-edition architectural furniture engineered for longevity." },
      { id: "06", name: "PRODUCT & INDUSTRIAL DESIGN", description: "Physical hardware, fixtures, and tactile interior artifacts." },
      { id: "07", name: "STRATEGIC MASTERPLANNING", description: "Urban and institutional development frameworks optimizing density and flow." }
    ]
  },
  {
    category: "CONSULTING & EXECUTION",
    description: "DEEP TECHNICAL SCRUTINY COUPLED WITH POETIC CRAFTSMANSHIP.",
    items: [
      { id: "08", name: "BRAND & SPATIAL IDENTITY", description: "Translating institutional ethos into physical atmospheres and material stories." },
      { id: "09", name: "EXPERIENTIAL ART DIRECTION", description: "Curating bespoke art commissions, lighting installations, and sensory interventions." },
      { id: "10", name: "SPACE PLANNING & PROGRAMMING", description: "Data-informed circulation analysis and programmatic optimization." },
      { id: "11", name: "FITOUT & CONSTRUCTION OVERSIGHT", description: "Rigorous on-site quality assurance, detail enforcement, and craftsmanship control." },
      { id: "12", name: "TECHNICAL TENDER PREPARATION", description: "Exhaustive specification documents, bills of quantities, and fabrication drawings." },
      { id: "13", name: "SUSTAINABILITY & LEED CONSULTING", description: "Passive solar orientation, circular material lifecycles, and low-embodied carbon design." },
      { id: "14", name: "DIGITAL SPATIAL EXPERIENCE", description: "Interactive installations, media surfaces, and responsive intelligent environments." }
    ]
  }
];
