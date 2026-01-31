import { engineeringPCMData } from "./engineering"
import { medicalData } from "./medical"

export const architecturePCMData: any[] = [
  {
    id: "core-architecture",
    label: "Core Architecture Programs (5 Years)",
    description: "Professional architecture degrees leading to licensed architect practice and urban design careers.",
    children: [
      {
        id: "barch-general",
        label: "B.Arch (Bachelor of Architecture)",
        description: "Comprehensive 5-year program covering building design, structural systems, construction technology, urban planning, and architectural history. Requires NATA/JEE Paper 2.",
        children: [
          {
            id: "architect",
            label: "Architect (After Council Registration)",
            description: "Licensed professional designing residential, commercial, and public buildings after Council of Architecture registration."
          },
          {
            id: "urban-designer",
            label: "Urban Designer",
            description: "Designs city spaces, public realms, streetscapes, and urban redevelopment projects."
          },
          {
            id: "project-architect",
            label: "Project Architect",
            description: "Manages architectural projects from concept to completion including client coordination and construction supervision."
          },
          {
            id: "m-arch",
            label: "M.Arch (Specialization)",
            description: "Postgraduate specialization in urban design, landscape, conservation, or sustainable architecture."
          }
        ]
      },
      {
        id: "barch-specialized",
        label: "B.Arch Specialized Streams",
        description: "Architecture programs with focus on specific building types and planning approaches.",
        children: [
          {
            id: "barch-regional",
            label: "B.Arch (Architecture & Regional Planning)",
            description: "Combines architecture with regional development planning, rural architecture, and small-town planning."
          },
          {
            id: "barch-construction",
            label: "B.Arch (Building & Construction Mgmt)",
            description: "Architecture with advanced construction technology, project management, and cost estimation focus."
          },
          {
            id: "barch-interior",
            label: "B.Arch (Interior Architecture)",
            description: "Building design integrated with advanced interior systems, spatial planning, and adaptive reuse."
          },
          {
            id: "barch-landscape",
            label: "B.Arch (Landscape Architecture)",
            description: "Architecture focusing on landscape design, environmental planning, and ecological buildings."
          }
        ]
      }
    ]
  },
  {
    id: "planning-urban",
    label: "Urban & Regional Planning (4 Years)",
    description: "Professional planning degrees for city development, transportation, and regional development careers.",
    children: [
      {
        id: "bplan",
        label: "B.Plan (Bachelor of Planning)",
        description: "4-year professional degree covering urban planning, land use, transportation planning, housing policy, and environmental planning.",
        children: [
          {
            id: "urban-planner",
            label: "Urban Planner",
            description: "Prepares master plans, zoning regulations, and development control plans for cities and towns."
          },
          {
            id: "regional-planner",
            label: "Regional Planner",
            description: "Coordinates development across districts/regions including infrastructure, industry, and agriculture planning."
          },
          {
            id: "transport-planner",
            label: "Transport Planner",
            description: "Designs road networks, public transport systems, traffic management, and pedestrian infrastructure."
          },
          {
            id: "m-plan",
            label: "M.Plan (Masters in Planning)",
            description: "Specialization in urban, transport, environmental, or housing planning."
          }
        ]
      },
      {
        id: "bplan-specialized",
        label: "B.Plan Specializations",
        description: "Planning programs focusing on specific urban development sectors.",
        children: [
          {
            id: "bplan-urban",
            label: "Urban Planning",
            description: "City master planning, land use zoning, urban design, and development regulations."
          },
          {
            id: "bplan-transport",
            label: "Transport Planning",
            description: "Traffic engineering, public transport systems, transit-oriented development, and mobility planning."
          },
          {
            id: "bplan-environmental",
            label: "Environmental Planning",
            description: "Sustainable development, environmental impact assessment, green infrastructure planning."
          },
          {
            id: "bplan-housing",
            label: "Housing & Development Planning",
            description: "Affordable housing policy, slum redevelopment, real estate development planning."
          }
        ]
      }
    ]
  },
  {
    id: "design-interior",
    label: "Interior & Design (4-5 Years)",
    description: "Creative design degrees focusing on interior spaces, product design, and spatial aesthetics.",
    children: [
      {
        id: "bdes-interior",
        label: "B.Des Interior Design",
        description: "Spatial design, furniture design, lighting design, material selection, and interior construction technology.",
        children: [
          {
            id: "interior-designer",
            label: "Interior Designer",
            description: "Designs residential, commercial, hospitality, and retail interior spaces."
          },
          {
            id: "space-planner",
            label: "Space Planner",
            description: "Workplace design, office layout optimization, and adaptive reuse of spaces."
          },
          {
            id: "mdes-interior",
            label: "M.Des Interior Design",
            description: "Advanced interior systems, sustainable interiors, and exhibition design."
          }
        ]
      },
      {
        id: "bdes-product",
        label: "B.Des Product/Industrial Design",
        description: "Consumer product design, industrial equipment design, ergonomics, and manufacturing processes.",
        children: [
          {
            id: "product-designer",
            label: "Product Designer",
            description: "Designs consumer electronics, household appliances, furniture, and lifestyle products."
          },
          {
            id: "industrial-designer",
            label: "Industrial Designer",
            description: "Designs machinery, automotive interiors, medical equipment, and industrial products."
          }
        ]
      }
    ]
  },
  {
    id: "diploma-certificate",
    label: "Diploma & Advanced Diploma (1-3 Years)",
    description: "Technical support courses for architecture and design professionals.",
    children: [
      {
        id: "diploma-architecture",
        label: "Diploma in Architecture Assistantship",
        description: "Technical drawing, CAD, building construction, surveying, and architectural model making.",
        children: [
          {
            id: "architect-assistant",
            label: "Architectural Assistant",
            description: "Supports architects in design development, documentation, and site supervision."
          },
          {
            id: "draughtsman",
            label: "Architectural Draughtsman",
            description: "Prepares technical drawings, working plans, elevations, and sectional details."
          },
          {
            id: "cad-operator",
            label: "CAD Operator",
            description: "Creates 2D/3D architectural drawings using AutoCAD, Revit, and 3ds Max."
          }
        ]
      },
      {
        id: "diploma-interior",
        label: "Diploma in Interior Design",
        description: "Interior drafting, furniture design, lighting design, and interior construction details.",
        children: [
          {
            id: "junior-interior-designer",
            label: "Junior Interior Designer",
            description: "Assists senior designers with residential and commercial interior projects."
          },
          {
            id: "interior-draughtsman",
            label: "Interior Draughtsman",
            description: "Prepares interior layout plans, furniture drawings, and joinery details."
          }
        ]
      }
    ]
  },
  {
    id: "integrated-postgrad",
    label: "Integrated & Advanced Programs",
    description: "Accelerated degree programs combining undergraduate and postgraduate studies.",
    children: [
      {
        id: "barch-march",
        label: "Integrated B.Arch + M.Arch (6 Years)",
        description: "Direct entry to master's level architecture specialization without separate postgraduate admission."
      },
      {
        id: "bplan-mplan",
        label: "Integrated B.Plan + M.Plan (5 Years)",
        description: "Combined planning degree with advanced research and professional practice components."
      },
      {
        id: "btech-arch",
        label: "B.Tech Architecture & Planning",
        description: "Engineering approach to architectural design, construction technology, and project management."
      }
    ]
  }
]

export const pureSciencePCMData: Object[] = [
  {
    id: "bsc-core",
    label: "B.Sc Core Subjects (3 Years)",
    description: "Foundational science degrees for research, teaching, and industry roles.",
    children: [
      {
        id: "physics",
        label: "B.Sc Physics",
        description: "Study of matter, energy, waves, optics, quantum mechanics, and thermodynamics. Foundation for research and advanced physics careers.",
        children: [
          {
            id: "msc-physics",
            label: "M.Sc Physics → Research/Teaching",
            description: "Advanced theoretical and experimental physics leading to PhD, university teaching, or research scientist roles."
          },
          {
            id: "integrated-msc-phys",
            label: "5-Year Integrated M.Sc Physics",
            description: "Direct PhD entry program at IISc, IISERs, NISER for accelerated research careers."
          },
          {
            id: "data-analyst-phys",
            label: "Data Analyst (Computational Physics)",
            description: "Applies physics modeling to data science, simulations, and computational research industries."
          }
        ]
      },
      {
        id: "chemistry",
        label: "B.Sc Chemistry",
        description: "Organic, inorganic, physical, analytical chemistry. Prepares for pharmaceuticals, materials, chemical industries.",
        children: [
          {
            id: "msc-chemistry",
            label: "M.Sc Chemistry → Industry/Research",
            description: "Specialize in organic synthesis, analytical techniques, or materials chemistry for R&D roles."
          },
          {
            id: "pharma-analyst",
            label: "Pharmaceutical Analyst",
            description: "Quality control, drug testing, and formulation development in pharmaceutical companies."
          },
          {
            id: "quality-control",
            label: "Quality Control Chemist",
            description: "Testing raw materials, production processes, and final products in manufacturing industries."
          }
        ]
      },
      {
        id: "mathematics",
        label: "B.Sc Mathematics",
        description: "Pure mathematics, algebra, calculus, differential equations, numerical methods. Foundation for analytics careers.",
        children: [
          {
            id: "msc-maths",
            label: "M.Sc Mathematics → Actuarial/Teaching",
            description: "Advanced pure/applied math leading to university teaching, research, or quantitative finance."
          },
          {
            id: "msc-stats",
            label: "M.Sc Statistics",
            description: "Statistical modeling, probability theory, and data analysis for research industries."
          },
          {
            id: "data-science-math",
            label: "Data Science Analyst",
            description: "Mathematical modeling, optimization, and algorithms for data science and machine learning."
          }
        ]
      },
      {
        id: "statistics",
        label: "B.Sc Statistics",
        description: "Probability, statistical inference, regression analysis, sampling techniques, and data interpretation.",
        children: [
          {
            id: "msc-stats",
            label: "M.Sc Statistics → Data Analytics",
            description: "Advanced statistical methods for business analytics, research, and government statistical services."
          },
          {
            id: "actuarial-science",
            label: "Actuarial Science",
            description: "Risk assessment and financial modeling for insurance and pension fund industries."
          },
          {
            id: "biostatistics",
            label: "Biostatistics",
            description: "Clinical trials analysis, epidemiology, and public health research statistics."
          }
        ]
      }
    ]
  },
  {
    id: "bsc-applied",
    label: "B.Sc Applied Sciences (3 Years)",
    description: "Practical science applications bridging pure sciences and engineering careers.",
    children: [
      {
        id: "computer-science",
        label: "B.Sc Computer Science",
        description: "Programming, algorithms, data structures, databases, web development, and software engineering principles.",
        children: [
          {
            id: "mca",
            label: "MCA / M.Sc CS → Software Development",
            description: "Advanced software engineering, system design, and development for IT industry roles."
          },
          {
            id: "data-science",
            label: "Data Science Specialization",
            description: "Machine learning, big data analytics, and AI model development."
          },
          {
            id: "cybersecurity-bsc",
            label: "Cybersecurity Analyst",
            description: "Network security, ethical hacking, and cybersecurity operations."
          }
        ]
      },
      {
        id: "information-tech",
        label: "B.Sc Information Technology",
        description: "Networking, cloud computing, cybersecurity, database management, and enterprise IT systems.",
        children: [
          {
            id: "msc-it",
            label: "M.Sc IT → IT Consulting",
            description: "Enterprise solutions architecture, IT consulting, and digital transformation projects."
          },
          {
            id: "cloud-computing",
            label: "Cloud Computing Specialist",
            description: "AWS, Azure, Google Cloud platform administration and DevOps engineering."
          }
        ]
      },
      {
        id: "electronics",
        label: "B.Sc Electronics",
        description: "Analog/digital circuits, microprocessors, communication systems, and embedded systems design.",
        children: [
          {
            id: "msc-electronics",
            label: "M.Sc Electronics → R&D",
            description: "VLSI design, embedded systems development, and electronics research."
          },
          {
            id: "embedded-systems",
            label: "Embedded Systems Developer",
            description: "Firmware development, IoT devices, and microcontroller programming."
          }
        ]
      }
    ]
  }
]

export const aviationDefencePCMData: Object[] = [
  {
    id: "aeronautical-aerospace",
    label: "Aeronautical & Aerospace Engineering (4 Years)",
    description: "B.Tech/B.E programs focusing on aircraft and spacecraft design, propulsion, and aerodynamics.",
    children: [
      {
        id: "aeronautical-eng",
        label: "B.Tech Aeronautical Engineering",
        description: "Aircraft design, aerodynamics, aircraft structures, propulsion systems, flight mechanics, and avionics.",
        children: [
          { id: "aircraft-designer", label: "Aircraft Design Engineer" },
          { id: "aerodynamics-specialist", label: "Aerodynamics Specialist" },
          { id: "flight-test-engineer", label: "Flight Test Engineer" }
        ]
      },
      {
        id: "aerospace-eng",
        label: "B.Tech Aerospace Engineering",
        description: "Spacecraft design, satellite technology, rocket propulsion, orbital mechanics, and space mission planning.",
        children: [
          { id: "spacecraft-designer", label: "Spacecraft Design Engineer" },
          { id: "propulsion-specialist", label: "Rocket Propulsion Engineer" },
          { id: "satellite-engineer", label: "Satellite Systems Engineer" }
        ]
      },
      {
        id: "aerospace-defense",
        label: "B.Tech Aerospace Engineering (Defense Technology)",
        description: "Missile systems, UAVs/drones, defense avionics, military aircraft design, and weapon integration.",
        children: [
          { id: "defense-aerospace", label: "Defense Aerospace Engineer" },
          { id: "missile-systems", label: "Missile Systems Engineer" },
          { id: "uav-designer", label: "UAV/Drone Design Engineer" }
        ]
      }
    ]
  },
  {
    id: "aviation-maintenance",
    label: "Aircraft Maintenance Engineering (AME) (2-4 Years)",
    description: "DGCA-approved license courses for aircraft maintenance and airworthiness certification.",
    children: [
      {
        id: "ame-mechanical",
        label: "AME Mechanical (B1.1/B1.2 Category)",
        description: "Airframe, engine maintenance, turbine/piston engines, mechanical systems troubleshooting (2400 hrs theory + 360 hrs practical).",
        children: [
          { id: "licensed-ame-mech", label: "Licensed AME (Mechanical)" },
          { id: "engine-technician", label: "Engine Overhaul Technician" },
          { id: "airframe-technician", label: "Airframe Maintenance Tech" }
        ]
      },
      {
        id: "ame-avionics",
        label: "AME Avionics (B2 Category)",
        description: "Avionics systems, aircraft electronics, instruments, electrical systems maintenance and repair.",
        children: [
          { id: "licensed-ame-avionics", label: "Licensed AME (Avionics)" },
          { id: "avionics-technician", label: "Avionics Technician" },
          { id: "instrument-specialist", label: "Flight Instruments Specialist" }
        ]
      },
      {
        id: "ame-helicopter",
        label: "AME B1.3 (Helicopter Turbine)",
        description: "Specialized helicopter maintenance including rotor systems, transmission, and turbine engines.",
        children: [
          { id: "helicopter-ame", label: "Helicopter Maintenance Engineer" }
        ]
      }
    ]
  },
  {
    id: "defense-technology",
    label: "Defense Technology Specializations (4 Years)",
    description: "B.Tech programs focused on military hardware, weapon systems, and defense R&D.",
    children: [
      {
        id: "defense-aerospace",
        label: "B.Tech Defense Technology (Aerospace)",
        description: "Missile guidance, UAV systems, fighter aircraft avionics, military satellite technology.",
        children: [
          { id: "defense-rd-engineer", label: "DRDO Defense R&D Engineer" },
          { id: "hal-design-engineer", label: "HAL Design Engineer" }
        ]
      },
      {
        id: "weapon-systems",
        label: "B.Tech Weapon Systems Engineering",
        description: "Missile technology, radar systems, fire control systems, and precision-guided munitions.",
        children: [
          { id: "missile-engineer", label: "Missile Systems Engineer" },
          { id: "radar-systems-engineer", label: "Radar Systems Engineer" }
        ]
      }
    ]
  },
  {
    id: "aviation-operations",
    label: "Aviation Operations & Technical (3-4 Years)",
    description: "Technical support and operational aviation courses beyond flying training.",
    children: [
      {
        id: "aircraft-maint-eng",
        label: "B.Tech Aircraft Maintenance Engineering",
        description: "Advanced engineering degree combining AME license with aerospace engineering principles.",
        children: [
          { id: "maintenance-manager", label: "Aircraft Maintenance Manager" },
          { id: "mro-engineer", label: "MRO (Maintenance Repair Overhaul) Engineer" }
        ]
      },
      {
        id: "avionics-eng",
        label: "B.Tech Avionics Engineering",
        description: "Aircraft electronics, navigation systems, flight control computers, and radar systems.",
        children: [
          { id: "avionics-systems-engineer", label: "Avionics Systems Engineer" },
          { id: "flight-control-engineer", label: "Flight Control Systems Engineer" }
        ]
      },
      {
        id: "airport-infra",
        label: "B.Tech Airport Infrastructure",
        description: "Airport planning, runway design, air traffic control systems, and aviation infrastructure.",
        children: [
          { id: "airport-planner", label: "Airport Planner" },
          { id: "aai-engineer", label: "AAI (Airports Authority) Engineer" }
        ]
      }
    ]
  },
  {
    id: "defense-entry",
    label: "Defense Service Entry (NDA/CDS)",
    description: "Direct defense academy entry for officer careers (not engineering degrees but technical entry).",
    children: [
      {
        id: "nda-aero",
        label: "NDA (Aeronautical Branch)",
        description: "National Defense Academy entry for Air Force flying/technical branches after 12th PCM.",
        children: [
          { id: "iaf-pilot", label: "IAF Fighter Pilot" },
          { id: "iaf-technical-officer", label: "IAF Technical Officer" }
        ]
      }
    ]
  }
]

export const itCommerceHybridPCMData: Object[] = [
  {
    id: "bca-programs",
    label: "Bachelor of Computer Applications (BCA) (3 Years)",
    description: "Programming, database management, web development, software engineering with business applications focus.",
    children: [
      {
        id: "bca-general",
        label: "BCA (General)",
        description: "C++, Java, Python, database systems (Oracle/MySQL), web technologies, software engineering, and business computing.",
        children: [
          { id: "software-developer", label: "Software Developer" },
          { id: "web-developer", label: "Web Developer" },
          { id: "database-admin", label: "Database Administrator" }
        ]
      },
      {
        id: "bca-data-science",
        label: "BCA Data Science & Analytics",
        description: "Python/R programming, machine learning, big data (Hadoop), business intelligence tools, and predictive analytics.",
        children: [
          { id: "data-analyst", label: "Data Analyst" },
          { id: "business-intelligence-analyst", label: "BI Analyst" }
        ]
      },
      {
        id: "bca-cybersecurity",
        label: "BCA Cybersecurity",
        description: "Network security, ethical hacking, cryptography, digital forensics, and cybersecurity operations for enterprises.",
        children: [
          { id: "cybersecurity-analyst", label: "Cybersecurity Analyst" },
          { id: "ethical-hacker", label: "Ethical Hacker" }
        ]
      },
      {
        id: "bca-cloud",
        label: "BCA Cloud Computing & DevOps",
        description: "AWS/Azure/GCP, containerization (Docker), CI/CD pipelines, cloud architecture, and infrastructure automation.",
        children: [
          { id: "cloud-engineer", label: "Cloud Engineer" },
          { id: "devops-engineer", label: "DevOps Engineer" }
        ]
      }
    ]
  },
  {
    id: "bsc-is-programs",
    label: "B.Sc Information Science/Technology (3 Years)",
    description: "IT infrastructure management, enterprise systems, networking, and business technology solutions.",
    children: [
      {
        id: "bsc-is",
        label: "B.Sc Information Science",
        description: "Networking, system administration, cybersecurity, cloud infrastructure, and enterprise IT management.",
        children: [
          { id: "it-consultant", label: "IT Consultant" },
          { id: "system-administrator", label: "System Administrator" },
          { id: "network-engineer", label: "Network Engineer" }
        ]
      },
      {
        id: "bsc-it",
        label: "B.Sc Information Technology",
        description: "Enterprise applications (ERP/CRM), database administration, web services, and IT project management.",
        children: [
          { id: "it-project-manager", label: "IT Project Manager" },
          { id: "erp-consultant", label: "ERP Consultant" }
        ]
      }
    ]
  },
  {
    id: "business-analytics",
    label: "Business Analytics & Data Science (3-4 Years)",
    description: "Data-driven decision making combining statistics, programming, and business intelligence.",
    children: [
      {
        id: "bba-business-analytics",
        label: "BBA Business Analytics",
        description: "Data visualization (Tableau/PowerBI), predictive modeling, customer analytics, and business forecasting.",
        children: [
          { id: "business-analyst", label: "Business Analyst" },
          { id: "marketing-analyst", label: "Marketing Analyst" }
        ]
      },
      {
        id: "bsc-data-science",
        label: "B.Sc Data Science",
        description: "Statistical modeling, machine learning algorithms, big data technologies, and business applications.",
        children: [
          { id: "data-scientist", label: "Data Scientist" },
          { id: "analytics-consultant", label: "Analytics Consultant" }
        ]
      }
    ]
  },
  {
    id: "fintech-programs",
    label: "Fintech & Financial Technology (3-4 Years)",
    description: "Digital finance, blockchain, algorithmic trading, and financial software development.",
    children: [
      {
        id: "bba-fintech",
        label: "BBA Fintech",
        description: "Digital payments, blockchain technology, robo-advisory, regulatory technology (RegTech), and financial APIs.",
        children: [
          { id: "fintech-developer", label: "Fintech Developer" },
          { id: "digital-banking-specialist", label: "Digital Banking Specialist" }
        ]
      },
      {
        id: "bcom-fintech",
        label: "B.Com Fintech",
        description: "Financial technology applications, payment gateway integration, cryptocurrency trading systems, and compliance tech.",
        children: [
          { id: "blockchain-developer", label: "Blockchain Developer" },
          { id: "payment-systems-engineer", label: "Payment Systems Engineer" }
        ]
      }
    ]
  },
  {
    id: "digital-commerce",
    label: "Digital Commerce & E-Business (3 Years)",
    description: "E-commerce platforms, digital marketing technology, and online business systems.",
    children: [
      {
        id: "bba-ecommerce",
        label: "BBA E-Commerce Management",
        description: "Shopify/WooCommerce development, digital supply chain, online payment systems, and marketplace analytics.",
        children: [
          { id: "ecommerce-manager", label: "E-Commerce Manager" },
          { id: "digital-supply-chain-analyst", label: "Digital Supply Chain Analyst" }
        ]
      },
      {
        id: "bca-digital-marketing",
        label: "BCA Digital Marketing & Analytics",
        description: "SEO/SEM, social media advertising, Google Analytics 4, conversion rate optimization, and marketing automation.",
        children: [
          { id: "digital-marketer", label: "Digital Marketing Specialist" },
          { id: "growth-hacker", label: "Growth Hacker" }
        ]
      }
    ]
  }
]

export const medicalDentalPCBData: Object[] = [
  {
    id: "mbbs-medicine",
    label: "MBBS & Allopathic Medicine (5.5 Years)",
    description: "Bachelor of Medicine & Bachelor of Surgery - primary medical degree for becoming a licensed doctor.",
    children: [
      {
        id: "mbbs",
        label: "MBBS (Bachelor of Medicine & Surgery)",
        description: "Anatomy, physiology, pathology, pharmacology, surgery, medicine, pediatrics, gynecology, community medicine, clinical training.",
        children: [
          {
            id: "general-physician",
            label: "General Physician (MD General Medicine)",
            description: "Internal medicine specialist diagnosing and treating adult diseases in hospitals/clinics."
          },
          {
            id: "surgeon",
            label: "Surgeon (MS General Surgery)",
            description: "Surgical specialist performing operations in government/private hospitals."
          },
          {
            id: "pediatrician",
            label: "Pediatrician (MD Pediatrics)",
            description: "Child healthcare specialist treating infants, children, and adolescents."
          }
        ]
      }
    ]
  },
  {
    id: "bds-dentistry",
    label: "BDS (Bachelor of Dental Surgery) (5 Years)",
    description: "Complete dentistry program covering oral health, dental surgery, orthodontics, and prosthodontics.",
    children: [
      {
        id: "bds-general",
        label: "BDS General Dentistry",
        description: "Oral anatomy, dental materials, oral pathology, conservative dentistry, endodontics, periodontics, prosthodontics, oral surgery.",
        children: [
          {
            id: "general-dentist",
            label: "General Dentist",
            description: "Private dental practice, clinics, hospitals treating routine dental problems."
          },
          {
            id: "orthodontist",
            label: "Orthodontist (MDS Orthodontics)",
            description: "Braces, aligners, jaw correction specialist."
          },
          {
            id: "oral-surgeon",
            label: "Oral Surgeon (MDS Oral Surgery)",
            description: "Wisdom teeth extraction, jaw surgery, facial trauma specialist."
          }
        ]
      }
    ]
  },
  {
    id: "ayush-systems",
    label: "AYUSH Systems (5.5 Years)",
    description: "Traditional Indian medical systems recognized by Medical Council alongside MBBS.",
    children: [
      {
        id: "bams",
        label: "BAMS (Ayurveda Medicine & Surgery)",
        description: "Ayurvedic pharmacology, Panchakarma, herbal medicine, yoga, dietetics, ancient surgical techniques.",
        children: [
          { id: "ayurvedic-doctor", label: "Ayurvedic Physician" },
          { id: "panchakarma-specialist", label: "Panchakarma Specialist" }
        ]
      },
      {
        id: "bhms",
        label: "BHMS (Homeopathic Medicine & Surgery)",
        description: "Homeopathic pharmacology, repertory, organon of medicine, materia medica, clinical practice.",
        children: [
          { id: "homeopathic-doctor", label: "Homeopathic Doctor" }
        ]
      },
      {
        id: "bums",
        label: "BUMS (Unani Medicine & Surgery)",
        description: "Unani pharmacology, regimental therapy, surgery, cupping therapy, herbal medicine.",
        children: [
          { id: "unani-physician", label: "Unani Physician" }
        ]
      },
      {
        id: "bnys",
        label: "BNYS (Naturopathy & Yoga Sciences)",
        description: "Naturopathic medicine, yoga therapy, hydrotherapy, chromotherapy, fasting therapy, mud therapy.",
        children: [
          { id: "naturopath", label: "Naturopath & Yoga Therapist" }
        ]
      }
    ]
  },
  {
    id: "veterinary",
    label: "Veterinary Science (5.5 Years)",
    description: "Animal healthcare and livestock management - only through AIPVT/AIVET exam.",
    children: [
      {
        id: "bvsc-ah",
        label: "BVSc & AH (Veterinary Science & Animal Husbandry)",
        description: "Veterinary anatomy, animal nutrition, surgery, medicine, gynecology, pathology, livestock management.",
        children: [
          { id: "veterinary-doctor", label: "Veterinary Doctor" },
          { id: "livestock-officer", label: "Livestock Development Officer" }
        ]
      }
    ]
  },
  {
    id: "nursing",
    label: "Nursing Programs",
    children: [
      {
        id: "bsc-nursing",
        label: "B.Sc Nursing (4 Years)",
        description: "Anatomy, physiology, nursing foundations, medical-surgical nursing, community health nursing, obstetrics.",
        children: [
          { id: "staff-nurse", label: "Staff Nurse (Government/Private Hospitals)" },
          { id: "nursing-officer", label: "Nursing Officer" }
        ]
      },
      {
        id: "gnm",
        label: "GNM (General Nursing & Midwifery) (3 Years)",
        description: "Basic nursing care, midwifery, community health nursing, first aid, patient care.",
        children: [
          { id: "gnm-nurse", label: "GNM Nurse" }
        ]
      }
    ]
  },
  {
    id: "physiotherapy-ot",
    label: "Physiotherapy & Occupational Therapy (4.5 Years)",
    children: [
      {
        id: "bpt",
        label: "BPT (Bachelor of Physiotherapy)",
        description: "Musculoskeletal, neurological, cardiopulmonary, sports physiotherapy, electrotherapy, exercise therapy.",
        children: [
          { id: "physiotherapist", label: "Physiotherapist (Clinics/Hospitals)" }
        ]
      },
      {
        id: "bot",
        label: "BOT (Bachelor of Occupational Therapy)",
        description: "Occupational therapy for physical, mental, developmental disabilities, rehabilitation sciences.",
        children: [
          { id: "occupational-therapist", label: "Occupational Therapist" }
        ]
      }
    ]
  }
]

export const pharmaPCBData: Object[] = [
  {
    id: "diploma-pharmacy",
    label: "Diploma Programs (2 Years)",
    description: "Entry-level pharmacy courses for retail pharmacy and medical representative careers.",
    children: [
      {
        id: "dpharm",
        label: "D.Pharm (Diploma in Pharmacy)",
        description: "Pharmaceutical chemistry, pharmacognosy, pharmacology, pharmaceutics, hospital pharmacy, drug store management. PCI approved for pharmacist registration.",
        children: [
          {
            id: "retail-pharmacist",
            label: "Retail Pharmacist",
            description: "Licensed pharmacist managing medicine sales, patient counseling, prescription verification in pharmacies."
          },
          {
            id: "medical-representative",
            label: "Medical Representative",
            description: "Pharmaceutical sales promoting drugs to doctors, hospitals, and clinics."
          },
          {
            id: "quality-control-assistant",
            label: "Quality Control Assistant",
            description: "Drug testing, raw material analysis, and basic quality assurance in pharma companies."
          }
        ]
      }
    ]
  },
  {
    id: "bpharm-programs",
    label: "B.Pharm Programs (4 Years)",
    description: "Bachelor's degrees covering complete pharmaceutical sciences for industry and hospital careers.",
    children: [
      {
        id: "bpharm-general",
        label: "B.Pharm (Bachelor of Pharmacy)",
        description: "Pharmaceutical chemistry, pharmaceutics, pharmacology, pharmacognosy, medicinal chemistry, industrial pharmacy, biopharmaceutics.",
        children: [
          {
            id: "production-pharmacist",
            label: "Production Pharmacist",
            description: "Tablet/capsule manufacturing, formulation development, GMP compliance in pharma factories."
          },
          {
            id: "quality-control-analyst",
            label: "Quality Control Analyst",
            description: "Drug testing, stability studies, analytical method development in QC labs."
          },
          {
            id: "clinical-pharmacist",
            label: "Clinical Pharmacist",
            description: "Hospital pharmacy, patient counseling, drug interaction monitoring, ADR reporting."
          }
        ]
      },
      {
        id: "bpharm-ayurveda",
        label: "B.Pharm Ayurveda",
        description: "Ayurvedic pharmacology, herbo-mineral formulations, Panchakarma drugs, GMP for Ayurveda, standardization of herbal medicines.",
        children: [
          {
            id: "ayurvedic-pharmacist",
            label: "Ayurvedic Pharmacist",
            description: "Herbal medicine manufacturing, quality control of Ayurvedic formulations."
          }
        ]
      },
      {
        id: "bpharm-hons",
        label: "B.Pharm (Hons)",
        description: "Advanced research-oriented B.Pharm with additional research projects, publications, and industry internships.",
        children: [
          {
            id: "r-and-d-pharmacist",
            label: "R&D Pharmacist",
            description: "New drug formulation, clinical trial support, pharmaceutical research."
          }
        ]
      }
    ]
  },
  {
    id: "pharmd-program",
    label: "Pharm.D (Doctor of Pharmacy) (6 Years)",
    description: "Clinical pharmacy doctorate focusing on patient care, pharmacotherapy, and hospital practice.",
    children: [
      {
        id: "pharmd-general",
        label: "Pharm.D (Post Baccalaureate - 3 Years)",
        description: "Clinical pharmacokinetics, pharmacotherapy, pharmacoepidemiology, pharmacoeconomics, hospital pharmacy practice.",
        children: [
          {
            id: "hospital-clinical-pharmacist",
            label: "Hospital Clinical Pharmacist",
            description: "Ward rounds, drug therapy review, patient counseling, antimicrobial stewardship in hospitals."
          },
          {
            id: "clinical-pharmacology-specialist",
            label: "Clinical Pharmacology Specialist",
            description: "Drug utilization research, pharmacovigilance, clinical trial pharmacy."
          },
          {
            id: "pharmacy-consultant",
            label: "Pharmacy Practice Consultant",
            description: "Healthcare consulting, hospital formulary management, medication safety."
          }
        ]
      }
    ]
  },
  {
    id: "pharma-specializations",
    label: "B.Pharm Specializations (4 Years)",
    description: "Branch-specific pharmacy degrees focusing on particular pharmaceutical sciences domains.",
    children: [
      {
        id: "pharmaceutics",
        label: "B.Pharm Pharmaceutics",
        description: "Tablet/capsule formulation, parenteral preparations, novel drug delivery systems, biopharmaceutics.",
        children: [
          {
            id: "formulation-scientist",
            label: "Formulation Scientist",
            description: "New dosage form development, generic drug manufacturing."
          }
        ]
      },
      {
        id: "pharmaceutical-chemistry",
        label: "B.Pharm Pharmaceutical Chemistry",
        description: "Medicinal chemistry, drug synthesis, analytical chemistry, spectroscopy, chromatography techniques.",
        children: [
          {
            id: "analytical-chemist",
            label: "Analytical Chemist",
            description: "Drug impurity profiling, method validation, stability indicating assays."
          }
        ]
      },
      {
        id: "pharmacology",
        label: "B.Pharm Pharmacology",
        description: "Drug action mechanisms, toxicology, preclinical studies, clinical pharmacology, pharmacodynamics.",
        children: [
          {
            id: "pharmacologist",
            label: "Pharmacologist",
            description: "Preclinical research, safety pharmacology, toxicology studies."
          }
        ]
      },
      {
        id: "pharmacognosy",
        label: "B.Pharm Pharmacognosy",
        description: "Medicinal plants, herbal drug technology, phytochemistry, standardization of herbal drugs.",
        children: [
          {
            id: "herbal-drug-specialist",
            label: "Herbal Drug Specialist",
            description: "Phytochemical research, herbal supplement development."
          }
        ]
      }
    ]
  },
  {
    id: "pharma-life-sciences",
    label: "Pharma-Related Life Sciences (3-4 Years)",
    description: "Supporting sciences for pharmaceutical industry and research careers.",
    children: [
      {
        id: "bsc-biotechnology",
        label: "B.Sc Biotechnology",
        description: "Recombinant DNA technology, genetic engineering, bioprocess engineering, vaccine technology.",
        children: [
          {
            id: "biotech-research-associate",
            label: "Biotech Research Associate",
            description: "Biopharmaceutical production, vaccine development."
          }
        ]
      },
      {
        id: "bsc-microbiology",
        label: "B.Sc Microbiology",
        description: "Sterile manufacturing, microbial limit testing, environmental monitoring in pharma cleanrooms.",
        children: [
          {
            id: "microbiologist-pharma",
            label: "Microbiologist (Pharma QC)",
            description: "Sterility testing, microbial contamination control."
          }
        ]
      },
      {
        id: "bsc-biochemistry",
        label: "B.Sc Biochemistry",
        description: "Enzyme kinetics, protein purification, biochemical assays for drug development.",
        children: [
          {
            id: "biochemist-pharma",
            label: "Biochemist (Drug Discovery)",
            description: "Biochemical screening, enzyme inhibition studies."
          }
        ]
      }
    ]
  }
]

export const paramedicalPCBData: Object[] = [
  {
    id: "lab-diagnostic",
    label: "Laboratory & Diagnostic Technology (3-4 Years)",
    description: "Clinical pathology, biochemistry, microbiology, hematology for disease diagnosis and testing.",
    children: [
      {
        id: "bmlt",
        label: "B.Sc Medical Laboratory Technology (BMLT)",
        description: "Blood testing, urine analysis, histopathology, clinical biochemistry, microbiology culture, automated analyzers.",
        children: [
          {
            id: "lab-technologist",
            label: "Lab Technologist",
            description: "Conducts pathology tests in hospitals, diagnostic labs, blood banks."
          },
          {
            id: "pathology-supervisor",
            label: "Pathology Supervisor",
            description: "Manages lab operations, quality control, equipment calibration."
          }
        ]
      },
      {
        id: "dmlt",
        label: "Diploma Medical Lab Technology (DMLT) (2 Years)",
        description: "Basic hematology, clinical pathology, biochemistry, microbiology techniques for lab assistants.",
        children: [
          {
            id: "lab-technician",
            label: "Lab Technician",
            description: "Sample collection, basic testing, equipment maintenance in labs."
          }
        ]
      }
    ]
  },
  {
    id: "radiology-imaging",
    label: "Radiology & Imaging Technology (3-4 Years)",
    description: "X-ray, CT scan, MRI, ultrasound diagnostic imaging techniques.",
    children: [
      {
        id: "bsc-radiology",
        label: "B.Sc Radiology & Imaging Technology",
        description: "X-ray techniques, CT scan operation, MRI physics, ultrasound imaging, radiation safety.",
        children: [
          {
            id: "radiographer",
            label: "Radiographer",
            description: "Operates X-ray, CT, MRI machines in hospitals and diagnostic centers."
          },
          {
            id: "imaging-technologist",
            label: "Imaging Technologist",
            description: "Advanced MRI/CT scan specialist, radiation safety officer."
          }
        ]
      },
      {
        id: "diploma-radiology",
        label: "Diploma in Radiology (2 Years)",
        description: "Basic X-ray techniques, dark room procedures, patient positioning for imaging.",
        children: [
          {
            id: "xray-technician",
            label: "X-Ray Technician"
          }
        ]
      }
    ]
  },
  {
    id: "operation-theatre",
    label: "Operation Theatre Technology (3 Years)",
    description: "Surgical support, anesthesia equipment, OT sterilization, surgical instrumentation.",
    children: [
      {
        id: "bsc-ott",
        label: "B.Sc Operation Theatre Technology",
        description: "Surgical instruments sterilization, anesthesia machine operation, OT table setup, laparoscopic equipment.",
        children: [
          {
            id: "ot-technician",
            label: "OT Technician",
            description: "Assists surgeons during operations, manages OT equipment and sterilization."
          },
          {
            id: "surgical-assistant",
            label: "Surgical Assistant",
            description: "Prepares operation theatre, assists during major surgeries."
          }
        ]
      }
    ]
  },
  {
    id: "emergency-trauma",
    label: "Emergency & Critical Care (3 Years)",
    description: "Ambulance services, ICU management, trauma care, life support systems.",
    children: [
      {
        id: "bsc-emt",
        label: "B.Sc Emergency Medical Technology",
        description: "Advanced cardiac life support, trauma management, ambulance operations, defibrillator use.",
        children: [
          {
            id: "emt-paramedic",
            label: "Emergency Medical Technician (Paramedic)",
            description: "Ambulance paramedic, emergency response, accident site management."
          }
        ]
      },
      {
        id: "bsc-icu",
        label: "B.Sc Critical Care Technology",
        description: "Ventilator management, ICU monitoring, hemodynamic monitoring, life support systems.",
        children: [
          {
            id: "icu-technician",
            label: "ICU Technician",
            description: "Manages ventilators, monitors critically ill patients in ICUs."
          }
        ]
      }
    ]
  },
  {
    id: "cardiac-care",
    label: "Cardiac Care Technology (3-4 Years)",
    description: "ECG, echocardiography, cardiac catheterization lab, pacemaker technology.",
    children: [
      {
        id: "bsc-cct",
        label: "B.Sc Cardiac Care Technology",
        description: "ECG interpretation, Holter monitoring, stress test conduction, cath lab assistance.",
        children: [
          {
            id: "cath-lab-technician",
            label: "Cath Lab Technician",
            description: "Assists during angioplasty, stent placement, cardiac procedures."
          },
          {
            id: "echo-technician",
            label: "Echocardiography Technician",
            description: "Performs 2D echo, color Doppler, TEE studies."
          }
        ]
      }
    ]
  },
  {
    id: "dialysis-nephrology",
    label: "Dialysis & Nephrology Technology (3 Years)",
    description: "Hemodialysis, peritoneal dialysis, water treatment for dialysis, renal care.",
    children: [
      {
        id: "bsc-rdt",
        label: "B.Sc Renal Dialysis Technology",
        description: "Hemodialysis machine operation, vascular access care, dialyzer reprocessing, water quality control.",
        children: [
          {
            id: "dialysis-technician",
            label: "Dialysis Technician",
            description: "Conducts dialysis sessions in hospitals and dialysis centers."
          }
        ]
      }
    ]
  },
  {
    id: "optometry-vision",
    label: "Optometry & Vision Sciences (4 Years)",
    description: "Eye examination, contact lens fitting, vision therapy, low vision aids.",
    children: [
      {
        id: "bsc-optometry",
        label: "B.Sc Optometry",
        description: "Refraction techniques, slit lamp biomicroscopy, ophthalmoscopy, contact lens practice.",
        children: [
          {
            id: "optometrist",
            label: "Optometrist",
            description: "Eye testing, prescription glasses, contact lens specialist."
          },
          {
            id: "vision-therapist",
            label: "Vision Therapist",
            description: "Treats eye muscle disorders, amblyopia, convergence insufficiency."
          }
        ]
      }
    ]
  },
  {
    id: "anesthesia",
    label: "Anesthesia Technology (3 Years)",
    description: "Anesthesia equipment, gas supply systems, patient monitoring during surgery.",
    children: [
      {
        id: "bsc-anaesthesia",
        label: "B.Sc Anaesthesia Technology",
        description: "Anesthesia machine maintenance, airway management, invasive monitoring setup.",
        children: [
          {
            id: "anesthesia-technician",
            label: "Anesthesia Technician",
            description: "Assists anesthesiologists during surgeries, manages anesthesia equipment."
          }
        ]
      }
    ]
  }
]

export const lifeSciencePCBData: Object[] = [
  {
    id: "core-biology",
    label: "Core Biological Sciences (3 Years)",
    description: "Foundation programs studying fundamental life processes, organisms, and ecosystems.",
    children: [
      {
        id: "bsc-zoology",
        label: "B.Sc Zoology",
        description: "Animal biology, physiology, genetics, evolution, ecology, developmental biology, animal behavior, wildlife conservation.",
        children: [
          { id: "wildlife-biologist", label: "Wildlife Biologist" },
          { id: "zookeeper", label: "Zoo Curator/Researcher" },
          { id: "msc-zoology", label: "M.Sc Zoology → Research" }
        ]
      },
      {
        id: "bsc-botany",
        label: "B.Sc Botany",
        description: "Plant biology, taxonomy, physiology, genetics, plant pathology, economic botany, plant breeding.",
        children: [
          { id: "plant-pathologist", label: "Plant Pathologist" },
          { id: "agricultural-botanist", label: "Agricultural Botanist" },
          { id: "msc-botany", label: "M.Sc Botany → Research" }
        ]
      },
      {
        id: "bsc-microbiology",
        label: "B.Sc Microbiology",
        description: "Bacteria, viruses, fungi study; microbial genetics, immunology, food microbiology, medical microbiology, industrial microbiology.",
        children: [
          { id: "microbiologist", label: "Microbiologist (Pharma/Food)" },
          { id: "quality-control-microbiologist", label: "QC Microbiologist" },
          { id: "infection-control", label: "Hospital Infection Control" }
        ]
      }
    ]
  },
  {
    id: "biotechnology-biochemistry",
    label: "Biotechnology & Biochemistry (3-4 Years)",
    description: "Molecular biology, genetic engineering, biochemical processes for healthcare and industry.",
    children: [
      {
        id: "bsc-biotechnology",
        label: "B.Sc Biotechnology",
        description: "Genetic engineering, recombinant DNA technology, bioprocess engineering, animal/plant cell culture, vaccine technology.",
        children: [
          { id: "biotech-research-associate", label: "Biotech Research Associate" },
          { id: "bioprocess-engineer", label: "Bioprocess Engineer" },
          { id: "clinical-research-associate", label: "Clinical Research Associate" }
        ]
      },
      {
        id: "bsc-biochemistry",
        label: "B.Sc Biochemistry",
        description: "Enzyme kinetics, protein structure, metabolism, molecular biology, biochemical techniques, clinical biochemistry.",
        children: [
          { id: "biochemist", label: "Biochemist (R&D)" },
          { id: "clinical-biochemist", label: "Clinical Biochemist" },
          { id: "forensic-biochemist", label: "Forensic Biochemist" }
        ]
      },
      {
        id: "bsc-genetics",
        label: "B.Sc Genetics",
        description: "Human genetics, molecular genetics, cytogenetics, genetic counseling, genomics, population genetics.",
        children: [
          { id: "genetic-counselor", label: "Genetic Counselor" },
          { id: "genomics-researcher", label: "Genomics Researcher" }
        ]
      }
    ]
  },
  {
    id: "integrated-programs",
    label: "Integrated M.Sc Programs (5 Years)",
    description: "Direct PhD entry programs at IISc, IISERs, NISER for research careers.",
    children: [
      {
        id: "integrated-msc-biology",
        label: "Integrated M.Sc Biological Sciences",
        description: "Advanced cell biology, molecular biology, bioinformatics, structural biology, neurobiology research.",
        children: [
          { id: "research-scientist", label: "Research Scientist (CSIR/ICMR)" },
          { id: "university-faculty", label: "University Faculty/Professor" }
        ]
      },
      {
        id: "integrated-biotech",
        label: "Integrated M.Sc Biotechnology",
        description: "Advanced genetic engineering, synthetic biology, nanobiotechnology, biopharmaceuticals research.",
        children: [
          { id: "biotech-scientist", label: "Biotech Scientist" }
        ]
      }
    ]
  },
  {
    id: "environmental-sciences",
    label: "Environmental & Forensic Sciences (3 Years)",
    description: "Ecology, pollution control, environmental management, crime scene investigation.",
    children: [
      {
        id: "bsc-environmental-science",
        label: "B.Sc Environmental Science",
        description: "Ecosystems, pollution monitoring, waste management, environmental impact assessment, climate change studies.",
        children: [
          { id: "environmental-consultant", label: "Environmental Consultant" },
          { id: "pollution-control-officer", label: "Pollution Control Officer" }
        ]
      },
      {
        id: "bsc-forensic-science",
        label: "B.Sc Forensic Science",
        description: "Crime scene investigation, fingerprint analysis, DNA profiling, toxicology, ballistics, questioned documents.",
        children: [
          { id: "forensic-scientist", label: "Forensic Scientist (CFSL/State FSL)" },
          { id: "crime-scene-investigator", label: "Crime Scene Investigator" }
        ]
      }
    ]
  },
  {
    id: "food-nutrition",
    label: "Food Science & Nutrition (3 Years)",
    description: "Food technology, clinical nutrition, public health nutrition, diet planning.",
    children: [
      {
        id: "bsc-food-science",
        label: "B.Sc Food Science & Technology",
        description: "Food processing, preservation, quality control, food safety, packaging technology, sensory evaluation.",
        children: [
          { id: "food-technologist", label: "Food Technologist" },
          { id: "quality-assurance-food", label: "Food Quality Assurance" }
        ]
      },
      {
        id: "bsc-nutrition",
        label: "B.Sc Nutrition & Dietetics",
        description: "Clinical nutrition, therapeutic diets, community nutrition, sports nutrition, food science basics.",
        children: [
          { id: "dietitian", label: "Clinical Dietitian" },
          { id: "nutritionist", label: "Public Health Nutritionist" }
        ]
      }
    ]
  },
  {
    id: "bioinformatics",
    label: "Bioinformatics & Computational Biology (3 Years)",
    description: "Biological data analysis using computational tools, genomics, proteomics.",
    children: [
      {
        id: "bsc-bioinformatics",
        label: "B.Sc Bioinformatics",
        description: "Genomic sequencing analysis, protein structure prediction, drug design, molecular modeling, database management.",
        children: [
          { id: "bioinformatics-analyst", label: "Bioinformatics Analyst" },
          { id: "computational-biologist", label: "Computational Biologist" }
        ]
      }
    ]
  }
]

export const researchPsychologyPCBData: Object[] = [
  {
    id: "psychology-core",
    label: "Psychology Undergraduate Programs (3 Years)",
    description: "Scientific study of human behavior, cognition, emotions with biological and research orientation for PCB students.",
    children: [
      {
        id: "bsc-psychology",
        label: "B.Sc Psychology",
        description: "Biological psychology, physiological basis of behavior, research methodology, cognitive neuroscience, experimental psychology.",
        children: [
          { id: "research-assistant-psych", label: "Psychology Research Assistant" },
          { id: "msc-psychology", label: "M.Sc Psychology → Clinical/Research" },
          { id: "behavioral-analyst", label: "Behavioral Data Analyst" }
        ]
      },
      {
        id: "ba-applied-psych",
        label: "B.A Applied Psychology",
        description: "Counseling skills, assessment techniques, developmental psychology, social psychology with practical applications.",
        children: [
          { id: "counseling-assistant", label: "Counseling Assistant" },
          { id: "hr-trainee-psych", label: "HR Trainee (Organizational Psych)" }
        ]
      }
    ]
  },
  {
    id: "neuroscience-programs",
    label: "Neuroscience & Cognitive Science (3-5 Years)",
    description: "Brain science, neural mechanisms, cognitive processes bridging biology and psychology.",
    children: [
      {
        id: "bsc-neuroscience",
        label: "B.Sc Neuroscience",
        description: "Neuroanatomy, neurophysiology, neuroimaging, synaptic transmission, neural plasticity, cognitive neuroscience.",
        children: [
          { id: "neuroscience-research-assoc", label: "Neuroscience Research Associate" },
          { id: "nimhans-research", label: "NIMHANS Research Assistant" },
          { id: "integrated-msc-neuro", label: "Integrated M.Sc Neuroscience" }
        ]
      },
      {
        id: "bsc-cognitive-science",
        label: "B.Sc Cognitive Science",
        description: "Perception, attention, memory, language, decision making, cognitive modeling, brain-computer interfaces.",
        children: [
          { id: "cognitive-researcher", label: "Cognitive Science Researcher" },
          { id: "ai-cognition-specialist", label: "AI Cognition Specialist" }
        ]
      }
    ]
  },
  {
    id: "research-integrated",
    label: "Integrated Research Programs (5 Years)",
    description: "IISER/IISc/NISER programs leading directly to PhD research careers.",
    children: [
      {
        id: "integrated-msc-psychobiology",
        label: "Integrated M.Sc Psychobiology/Neurobiology",
        description: "Molecular neurobiology, behavioral genetics, psychopharmacology, systems neuroscience research.",
        children: [
          { id: "csir-research-fellow", label: "CSIR/ICMR Research Fellow" },
          { id: "dbt-biotech-fellow", label: "DBT Biotech Research Fellow" },
          { id: "phd-neuroscience", label: "PhD Neuroscience → Scientist" }
        ]
      },
      {
        id: "bs-ms-research",
        label: "BS-MS Dual Degree (Biological/Psychological Sciences)",
        description: "Research-intensive program with major research project and international conference presentations.",
        children: [
          { id: "iisc-researcher", label: "IISc/IISER Research Scholar" }
        ]
      }
    ]
  },
  {
    id: "clinical-psychology",
    label: "Clinical & Counseling Psychology (3+2 Years)",
    description: "Mental health assessment, therapy, diagnosis leading to RCI licensed clinical psychologist.",
    children: [
      {
        id: "bsc-clinical-psych",
        label: "B.Sc Clinical Psychology",
        description: "Psychological assessment, psychotherapy basics, abnormal psychology, clinical neuropsychology.",
        children: [
          { id: "clinical-psych-assistant", label: "Clinical Psychology Assistant" },
          { id: "m-phil-clinical-path", label: "M.Phil Clinical Psychology (RCI)" }
        ]
      },
      {
        id: "ba-counseling-psych",
        label: "B.A Counseling Psychology",
        description: "Counseling theories, career counseling, family therapy, school counseling, crisis intervention.",
        children: [
          { id: "school-counselor", label: "School Counselor" },
          { id: "career-counselor", label: "Career Counselor" }
        ]
      }
    ]
  },
  {
    id: "specialized-psych",
    label: "Specialized Psychology Fields (3 Years)",
    description: "Domain-specific psychology programs with biological science foundation.",
    children: [
      {
        id: "bsc-neuropsychology",
        label: "B.Sc Neuropsychology",
        description: "Brain-behavior relationships, neuropsychological assessment, cognitive rehabilitation, neurorehabilitation.",
        children: [
          { id: "neuropsych-assessor", label: "Neuropsychological Assessor" }
        ]
      },
      {
        id: "bsc-forensic-psych",
        label: "B.Sc Forensic Psychology",
        description: "Criminal profiling, eyewitness testimony, competency evaluation, violence risk assessment.",
        children: [
          { id: "forensic-psych-assistant", label: "Forensic Psychology Assistant" }
        ]
      },
      {
        id: "bsc-sports-psych",
        label: "B.Sc Sports Psychology",
        description: "Performance enhancement, motivation, team dynamics, injury rehabilitation psychology.",
        children: [
          { id: "sports-psychologist", label: "Sports Psychologist" }
        ]
      }
    ]
  },
  {
    id: "research-methods",
    label: "Research Methodology & Data Science (3 Years)",
    description: "Statistical analysis, experimental design, neuroimaging data analysis for behavioral research.",
    children: [
      {
        id: "bsc-psych-methods",
        label: "B.Sc Psychology Research Methods",
        description: "Multivariate statistics, fMRI/EEG analysis, psychometrics, experimental design, R/Python for psych data.",
        children: [
          { id: "psych-data-scientist", label: "Psychological Data Scientist" },
          { id: "behavioral-statistician", label: "Behavioral Statistician" }
        ]
      }
    ]
  }
]

export const pcmData: Object[] = [
  {
    id: "engineering",
    label: "B.E / B.Tech (Engineering)",
    description: "All B.Tech/B.E specializations available for Physics, Chemistry, Maths students after 12th.",
    children: engineeringPCMData
  },
  {
    id: "architecture",
    label: "Architecture & Planning",
    description: "Complete design and planning courses for Physics, Chemistry, Maths students after 12th.",
    children: architecturePCMData
  },
  {
    id: "pure-sciences",
    label: "Pure Sciences",
    description: "Complete B.Sc & integrated programs for Physics, Chemistry, Maths students leading to research, data science, academia, and interdisciplinary careers.",
    children: pureSciencePCMData
  },
  {
    id: "aviation-defense",
    label: "Aviation & Defense",
    description: "Complete engineering and technical programs for aircraft, spacecraft, defense systems, and military technology careers.",
    children: aviationDefencePCMData
  },
  {
    id: "it-commerce",
    label: "IT & Commerce Hybrids",
    description: "Programs combining computer applications, business analytics, fintech, and digital commerce for tech-savvy business careers.",
    children: itCommerceHybridPCMData
  }
]

export const pcbData: any[] = [
  {
    id: "medicine",
    label: "Medical & Dental",
    description: "Complete MBBS, BDS, and allied medical programs requiring NEET for Physics, Chemistry, Biology students after 12th.",
    children: [
      ...medicalData
    ]
  },
  {
    id: "pharmacy",
    label: "Pharmacy & Pharma Sciences",
    description: "Complete pharmacy programs from diploma to doctoral level focusing on drug development, manufacturing, quality control, and clinical pharmacy.",
    children: pharmaPCBData
  },
  {
    id: "paramedical",
    label: "Paramedical & Allied Health",
    description: "Complete diagnostic, therapeutic, and patient care courses supporting doctors in hospitals, clinics, and diagnostic centers.",
    children: paramedicalPCBData
  },
  {
    id: "life-sciences",
    label: "Life Sciences",
    description: "Complete B.Sc and integrated programs focusing on biological sciences, research, biotechnology, and environmental studies for Physics, Chemistry, Biology students.",
    children: lifeSciencePCBData
  },
  {
    id: "research-psychology",
    label: "Research & Psychology",
    description: "Complete programs combining biological sciences foundation with psychological research, neuroscience, and clinical mental health studies.",
    children: researchPsychologyPCBData
  }
]

export const pcmbData: Object[] = [
  {
    id: "law-integrated",
    label: "Integrated Law Programs (5 Years)",
    description: "BA LLB/BBA LLB/B.Sc LLB for corporate, medical, IP law careers.",
    children: [
      { id: "ba-llb", label: "BA LLB (Hons)" },
      { id: "bba-llb", label: "BBA LLB (Corporate Law)" },
      { id: "bsc-llb-med", label: "B.Sc LLB (Medical Law)" }
    ]
  },
  {
    id: "aviation-defense",
    label: "Aviation & Defense",
    description: "Flying, technical, defense technology careers.",
    children: [
      { id: "commercial-pilot", label: "Commercial Pilot License (CPL)" },
      { id: "aerospace-defense-eng", label: "Aerospace/Defense Engineering" },
      { id: "nda-cds", label: "NDA/CDSE (Armed Forces Entry)" }
    ]
  },
  {
    id: "design-creative",
    label: "Design & Creative Fields",
    description: "Leveraging visualization skills from PCMB background.",
    children: [
      { id: "bdes-animation-vfx", label: "B.Des Animation/VFX/Game Design" },
      { id: "bdes-product-uiux", label: "Product Design/UX-UI" },
      { id: "bba-digital-marketing", label: "Digital Marketing/Content Strategy" }
    ]
  }
];

export const scienceStreamData: Object[] = [
  {
    id: "pcm",
    label: "Physics, Chemistry, Maths (PCM)",
    description: "Engineering, Architecture, Pure Sciences, Aviation, Defense.",
    children: pcmData
  },
  {
    id: "pcb",
    label: "Physics, Chemistry, Biology (PCB)",
    description: "Medicine, Dentistry, Allied Health, Life Sciences, Agriculture.",
    children: pcbData
  },
  {
    id: "pcmb",
    label: "Physics, Chemistry, Maths, Biology (PCMB)",
    description: "Combined stream offering maximum flexibility for all science careers.",
    children: [
      ...pcmData,
      ...pcbData,
      ...pcmbData,
    ]
  }
]

