
export const facilitiesData = {
  "auditoriums": [
    {
      id: "tt-auditorium",
      name: "TT Main Auditorium",
      image: "https://images.unsplash.com/photo-1580212204038-ea66cc1d3629?q=80&w=1964&auto=format&fit=crop",
      location: "Main Campus, Building A",
      capacity: 800,
      description: "The Main Auditorium features state-of-the-art acoustics, modern audio-visual equipment, and flexible seating arrangements. It serves as the venue for major college events, ceremonies, and cultural performances.",
      features: ["Advanced sound system", "Professional lighting", "Projection setup", "Air conditioning", "Green room", "Backstage facilities"],
      pastEvents: [
        { name: "Annual Convocation 2023", date: "May 15, 2023" },
        { name: "International Conference on Innovation", date: "July 8-10, 2023" },
        { name: "Cultural Festival", date: "October 12-14, 2023" }
      ]
    },
    {
      id: "cdmm-auditorium",
      name: "CDMM Mini Auditorium",
      image: "https://images.unsplash.com/photo-1594122230689-7f659cff55b3?q=80&w=2070&auto=format&fit=crop",
      location: "CDMM Block, 1st Floor",
      capacity: 250,
      description: "The CDMM Mini Auditorium is designed for smaller gatherings, workshops, and presentations. It offers excellent acoustics and comfortable seating in an intimate setting.",
      features: ["Digital podium", "Surround sound", "LED screens", "Tiered seating", "Wheelchair accessibility"],
      pastEvents: [
        { name: "Guest Lecture Series", date: "February 3-7, 2023" },
        { name: "Film Screening Festival", date: "September 20, 2023" },
        { name: "Student Technical Symposium", date: "November 30, 2023" }
      ]
    },
    {
      id: "gdn-hall",
      name: "GDN Memorial Hall",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop",
      location: "North Campus, GDN Block",
      capacity: 400,
      description: "The GDN Memorial Hall combines historic architecture with modern amenities. The hall's impressive design makes it a popular choice for prestigious events and special ceremonies.",
      features: ["Historic architecture", "Modern AV system", "Climate control", "Gallery seating", "Artisan woodwork"],
      pastEvents: [
        { name: "Distinguished Alumni Meet", date: "June 25, 2023" },
        { name: "Academic Excellence Awards", date: "August 14, 2023" },
        { name: "Industry-Academia Partnership Launch", date: "December 5, 2023" }
      ]
    }
  ],
  "labs": [
    {
      id: "advanced-computing",
      name: "Advanced Computing Laboratory",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      location: "Technology Block, 2nd Floor",
      capacity: 60,
      description: "The Advanced Computing Laboratory is equipped with high-performance workstations and specialized software for research and development in artificial intelligence, machine learning, and big data analytics.",
      equipment: ["High-performance workstations", "AI development servers", "CUDA-enabled GPUs", "Machine learning frameworks", "Data visualization tools"],
      research: "Currently supporting research in computer vision, natural language processing, and autonomous systems."
    },
    {
      id: "robotics-lab",
      name: "Robotics & Automation Lab",
      image: "https://images.unsplash.com/photo-1581092921461-7031febf7a7d?q=80&w=2070&auto=format&fit=crop",
      location: "SMV Innovation Center, Ground Floor",
      capacity: 40,
      description: "The Robotics & Automation Lab provides a collaborative environment for students and researchers to design, build, and test robotic systems and automation solutions.",
      equipment: ["Industrial robot arms", "Microcontroller development boards", "3D printers", "CNC machines", "Sensor arrays", "Drone development kits"],
      research: "Focused on autonomous robotics, swarm intelligence, and human-robot interaction."
    },
    {
      id: "biotech-lab",
      name: "Biotechnology Research Center",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop",
      location: "Life Sciences Building, 3rd Floor",
      capacity: 35,
      description: "The Biotechnology Research Center offers cutting-edge facilities for research in molecular biology, genetic engineering, and biotechnological applications.",
      equipment: ["PCR machines", "Gene sequencers", "Bioreactors", "Spectrophotometers", "Centrifuges", "Biological safety cabinets"],
      research: "Current projects include genetic modification, biofuel development, and pharmaceutical applications."
    },
    {
      id: "materials-lab",
      name: "Materials Science Laboratory",
      image: "https://images.unsplash.com/photo-1581093458791-9ea502dac5bd?q=80&w=2070&auto=format&fit=crop",
      location: "Engineering Block B, Basement",
      capacity: 30,
      description: "The Materials Science Laboratory is dedicated to the study and development of new materials with specialized properties for various industrial applications.",
      equipment: ["X-ray diffractometer", "Scanning electron microscope", "Thermal analysis equipment", "Mechanical testing machines", "Metallographic microscopes"],
      research: "Focusing on nanomaterials, composite structures, and sustainable material alternatives."
    }
  ],
  "seminar-halls": [
    {
      id: "newton-hall",
      name: "Newton Seminar Hall",
      image: "https://images.unsplash.com/photo-1526041092631-2689f620aa3b?q=80&w=2070&auto=format&fit=crop",
      location: "Science Block, 1st Floor",
      capacity: 120,
      description: "Newton Hall is designed for academic presentations, guest lectures, and departmental meetings. It offers modern presentation technology in a comfortable environment.",
      features: ["Interactive whiteboard", "Video conferencing", "Document cameras", "Recording capabilities"],
      schedule: "Available for booking through the Science Department office."
    },
    {
      id: "turing-hall",
      name: "Turing Conference Hall",
      image: "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=2103&auto=format&fit=crop",
      location: "Computer Science Building, 4th Floor",
      capacity: 150,
      description: "The Turing Conference Hall specializes in technology-focused events, featuring robust digital infrastructure and collaborative spaces for workshops and hackathons.",
      features: ["5G connectivity", "Multiple display screens", "Collaborative workstations", "Programmable lighting", "Acoustic optimization"],
      schedule: "Managed through the online facility booking system."
    },
    {
      id: "edison-hall",
      name: "Edison Innovation Hall",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
      location: "Technology Transfer Block, Ground Floor",
      capacity: 80,
      description: "Edison Innovation Hall is designed to foster creativity and collaboration, featuring flexible furniture arrangements and interactive technology for brainstorming sessions.",
      features: ["Modular furniture", "360° projection", "Digital whiteboards", "Idea capture systems", "Breakout spaces"],
      schedule: "Priority booking for innovation courses and startup incubation activities."
    }
  ],
  "cells": [
    {
      id: "tbi-cell",
      name: "Technology Business Incubator (TBI)",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      location: "Innovation Hub, 3rd Floor",
      description: "The Technology Business Incubator provides infrastructure, mentorship, and funding opportunities for student and faculty startups. It serves as a bridge between academic research and commercial applications.",
      services: ["Startup mentoring", "Seed funding", "Legal guidance", "Market access", "Networking events", "Prototyping facilities"],
      success: "Has incubated over 30 successful startups in the last five years, with a combined valuation exceeding $15 million."
    },
    {
      id: "placement-cell",
      name: "Career Development & Placement Cell",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      location: "Administrative Block, 1st Floor",
      description: "The Placement Cell coordinates campus recruitment activities, career counseling, and industry interactions. It works to ensure students are well-prepared for professional opportunities.",
      services: ["Resume building", "Interview preparation", "Career counseling", "Industry connections", "Placement drives", "Internship coordination"],
      success: "Achieved 92% placement rate for the 2023 graduating batch, with partnerships with over 150 companies across sectors."
    },
    {
      id: "research-cell",
      name: "Research Development Cell",
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=2070&auto=format&fit=crop",
      location: "Central Library Building, 2nd Floor",
      description: "The Research Development Cell promotes and supports research activities across disciplines. It coordinates funding applications, collaborations, and publication support.",
      services: ["Research grants management", "International collaborations", "Publication support", "Patent assistance", "Research ethics clearance", "Doctoral program coordination"],
      success: "Facilitated over $5 million in research grants and published 300+ research papers in international journals in the last academic year."
    }
  ]
};

export const categoryData = [
  {
    title: "Auditoriums",
    description: "Spacious venues for large events, ceremonies, and performances with advanced audio-visual capabilities.",
    image: "https://images.unsplash.com/photo-1580212204038-ea66cc1d3629?q=80&w=1964&auto=format&fit=crop",
    count: 3,
    link: "/auditoriums"
  },
  {
    title: "Research Labs",
    description: "Cutting-edge research facilities equipped with specialized equipment for scientific exploration and innovation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    count: 4,
    link: "/labs"
  },
  {
    title: "Seminar Halls",
    description: "Modern spaces designed for presentations, workshops, and academic discussions.",
    image: "https://images.unsplash.com/photo-1526041092631-2689f620aa3b?q=80&w=2070&auto=format&fit=crop",
    count: 3,
    link: "/seminar-halls"
  },
  {
    title: "Special Cells",
    description: "Dedicated units providing specialized services for career development, research support, and entrepreneurship.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    count: 3,
    link: "/cells"
  }
];
