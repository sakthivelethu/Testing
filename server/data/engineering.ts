export const engineeringPCMData: Object[] = [
  {
    id: "core-engineering",
    label: "Core Engineering Branches",
    description: "Traditional engineering disciplines forming foundation of infrastructure and manufacturing industries.",
    children: [
      {
        id: "civil-eng",
        label: "Civil Engineering (B.Tech/B.E - 4 Years)",
        description: "Design, construction, and maintenance of infrastructure like roads, bridges, buildings, dams, and water systems.",
        children: [
          {
            id: "civil-mtech",
            label: "M.Tech Structural Engineering (2 Years)",
            description: "Advanced structural analysis, earthquake engineering, high-rise buildings, bridge design.",
            children: [
              { id: "structural-engineer", label: "Structural Design Engineer", lpaRange: "₹8 - 15" },
              { id: "project-manager-civil", label: "Construction Project Manager", lpaRange: "₹12 - 25" }
            ]
          },
          {
            id: "civil-mtech-transport",
            label: "M.Tech Transportation Engineering",
            description: "Highway design, traffic engineering, metro rail planning, airport runway design.",
            children: [
              { id: "highway-engineer", label: "Highway Engineer (NHAI)" },
              { id: "traffic-consultant", label: "Traffic Planning Consultant" }
            ]
          }
        ]
      },
      {
        id: "mechanical-eng",
        label: "Mechanical Engineering (B.Tech/B.E - 4 Years)",
        description: "Design, manufacturing, and maintenance of mechanical systems, machines, thermal devices, and energy systems.",
        children: [
          {
            id: "mech-mtech-thermal",
            label: "M.Tech Thermal Engineering",
            description: "Heat transfer, thermodynamics, refrigeration, power plant engineering, HVAC systems.",
            children: [
              { id: "thermal-design-engineer", label: "Thermal Design Engineer" },
              { id: "hvac-consultant", label: "HVAC Consultant", lpaRange: "₹10 - 18" }
            ]
          },
          {
            id: "mech-mtech-design",
            label: "M.Tech Machine Design",
            description: "CAD/CAM, finite element analysis, machine components, automotive design.",
            children: [
              { id: "design-engineer", label: "Mechanical Design Engineer" },
              { id: "cad-specialist", label: "CAD Specialist (Siemens/Tata)" }
            ]
          }
        ]
      },
      {
        id: "electrical-eng",
        label: "Electrical Engineering (B.Tech/B.E - 4 Years)",
        description: "Generation, transmission, distribution, and utilization of electrical power along with electrical equipment design.",
        children: [
          {
            id: "electrical-mtech-power",
            label: "M.Tech Power Systems",
            description: "Smart grids, renewable integration, power system protection, HVDC transmission.",
            children: [
              { id: "power-systems-engineer", label: "Power Systems Engineer (NTPC)" },
              { id: "grid-consultant", label: "Grid Integration Specialist" }
            ]
          },
          {
            id: "electrical-mtech-control",
            label: "M.Tech Control Systems",
            description: "PLC/SCADA, automation, robotics control, process control systems.",
            children: [
              { id: "control-engineer", label: "Control & Automation Engineer" },
              { id: "plc-programmer", label: "PLC Programmer", lpaRange: "₹9 - 16" }
            ]
          }
        ]
      },
      {
        id: "electronics-eng",
        label: "Electronics Engineering (B.Tech/B.E - 4 Years)",
        description: "Design and development of electronic circuits, devices, microprocessors, and communication systems.",
        children: [
          {
            id: "electronics-mtech-vlsi",
            label: "M.Tech VLSI Design (2 Years)",
            description: "Chip design, ASIC/FPGA development, semiconductor fabrication, physical verification.",
            children: [
              { id: "vlsi-design-engineer", label: "VLSI Design Engineer", lpaRange: "₹12 - 28" },
              { id: "asic-verification-eng", label: "ASIC Verification Engineer", lpaRange: "₹15 - 30" },
              { id: "physical-design-eng", label: "Physical Design Engineer" }
            ]
          },
          {
            id: "electronics-mtech-embedded",
            label: "M.Tech Embedded Systems (2 Years)",
            description: "Microcontrollers, RTOS, IoT firmware, automotive electronics, hardware-software co-design.",
            children: [
              { id: "embedded-systems-eng", label: "Embedded Systems Engineer", lpaRange: "₹10 - 22" },
              { id: "firmware-developer", label: "Firmware Developer" },
              { id: "iot-hardware-eng", label: "IoT Hardware Engineer" }
            ]
          },
          {
            id: "electronics-ms-signal",
            label: "M.S Signal Processing (2 Years)",
            description: "Digital signal processing, image processing, speech recognition, biomedical signals.",
            children: [
              { id: "dsp-engineer", label: "DSP Engineer", lpaRange: "₹12 - 25" },
              { id: "image-processing-specialist", label: "Image Processing Specialist" }
            ]
          }
        ]
      },
      {
        id: "chemical-eng",
        label: "Chemical Engineering (B.Tech/B.E - 4 Years)",
        description: "Design and operation of chemical plants, processes for large-scale chemical production and petrochemicals.",
        children: [
          {
            id: "chemical-mtech-petro",
            label: "M.Tech Petroleum Technology (2 Years)",
            description: "Oil refining, petrochemical processing, reservoir engineering, drilling technology.",
            children: [
              { id: "petroleum-engineer", label: "Petroleum Engineer (ONGC/Reliance)", lpaRange: "₹15 - 35" },
              { id: "refinery-process-eng", label: "Refinery Process Engineer" },
              { id: "drilling-engineer", label: "Drilling Engineer" }
            ]
          },
          {
            id: "chemical-mtech-polymer",
            label: "M.Tech Polymer Technology (2 Years)",
            description: "Polymer synthesis, plastics processing, rubber technology, composite materials.",
            children: [
              { id: "polymer-engineer", label: "Polymer Engineer", lpaRange: "₹10 - 20" },
              { id: "plastics-technologist", label: "Plastics Technologist" }
            ]
          }
        ]
      },
      {
        id: "production-eng",
        label: "Production Engineering (B.Tech/B.E - 4 Years)",
        description: "Manufacturing processes optimization, production planning, quality control, and factory layout design.",
        children: [
          {
            id: "production-mtech-manuf",
            label: "M.Tech Manufacturing Systems (2 Years)",
            description: "CNC programming, additive manufacturing, lean manufacturing, factory automation.",
            children: [
              { id: "manufacturing-engineer", label: "Manufacturing Engineer", lpaRange: "₹10 - 18" },
              { id: "production-planner", label: "Production Planning Engineer" },
              { id: "cnc-programmer", label: "CNC Programmer" }
            ]
          },
          {
            id: "production-mtech-quality",
            label: "M.Tech Quality Engineering (2 Years)",
            description: "Six Sigma, TQM, statistical process control, reliability engineering.",
            children: [
              { id: "quality-engineer", label: "Quality Assurance Engineer", lpaRange: "₹9 - 16" },
              { id: "six-sigma-specialist", label: "Six Sigma Black Belt" }
            ]
          }
        ]
      },
      {
        id: "manufacturing-eng",
        label: "Manufacturing Engineering (B.Tech/B.E - 4 Years)",
        description: "Advanced manufacturing technologies, automation, robotics, CAD/CAM, and smart factory systems.",
        children: [
          {
            id: "manuf-mtech-robotics",
            label: "M.Tech Industrial Robotics (2 Years)",
            description: "Robot programming, industrial automation, PLC/SCADA, Industry 4.0 systems.",
            children: [
              { id: "robotics-engineer", label: "Robotics Engineer", lpaRange: "₹12 - 25" },
              { id: "automation-specialist", label: "Automation Specialist" },
              { id: "industry4-point0-consultant", label: "Industry 4.0 Consultant" }
            ]
          },
          {
            id: "manuf-mtech-additive",
            label: "M.Tech Additive Manufacturing (2 Years)",
            description: "3D printing, rapid prototyping, metal additive manufacturing, design for AM.",
            children: [
              { id: "3d-printing-specialist", label: "3D Printing Engineer", lpaRange: "₹11 - 22" },
              { id: "additive-manufacturing-expert", label: "Additive Manufacturing Expert" }
            ]
          }
        ]
      },
      {
        id: "industrial-eng",
        label: "Industrial Engineering (B.Tech/B.E - 4 Years)",
        description: "Optimization of complex processes, systems, and organizations for efficiency and productivity.",
        children: [
          {
            id: "industrial-mtech-supplychain",
            label: "M.Tech Supply Chain Management (2 Years)",
            description: "Logistics optimization, inventory management, warehouse automation, ERP systems.",
            children: [
              { id: "supply-chain-analyst", label: "Supply Chain Analyst", lpaRange: "₹12 - 24" },
              { id: "logistics-manager", label: "Logistics Manager" },
              { id: "erp-consultant", label: "ERP Consultant (SAP/Oracle)" }
            ]
          },
          {
            id: "industrial-mtech-lean",
            label: "M.Tech Lean Manufacturing (2 Years)",
            description: "Lean six sigma, value stream mapping, kaizen, just-in-time production.",
            children: [
              { id: "lean-specialist", label: "Lean Manufacturing Specialist", lpaRange: "₹10 - 20" },
              { id: "process-improvement-eng", label: "Process Improvement Engineer" }
            ]
          }
        ]
      },
      {
        id: "metallurgical-eng",
        label: "Metallurgical Engineering (B.Tech/B.E - 4 Years)",
        description: "Extraction, refining, alloying, and application of metals and metal-based materials.",
        children: [
          {
            id: "metallurgy-mtech-materials",
            label: "M.Tech Materials Science (2 Years)",
            description: "Advanced materials, nanomaterials, biomaterials, composite materials development.",
            children: [
              { id: "materials-scientist", label: "Materials Scientist", lpaRange: "₹12 - 25" },
              { id: "failure-analysis-expert", label: "Failure Analysis Expert" },
              { id: "nanomaterials-researcher", label: "Nanomaterials Researcher" }
            ]
          },
          {
            id: "metallurgy-mtech-foundry",
            label: "M.Tech Foundry Technology (2 Years)",
            description: "Casting processes, pattern making, sand molding, metal casting simulation.",
            children: [
              { id: "foundry-engineer", label: "Foundry Engineer", lpaRange: "₹9 - 18" },
              { id: "casting-specialist", label: "Casting Process Specialist" }
            ]
          }
        ]
      },
      {
        id: "mining-eng",
        label: "Mining Engineering (B.Tech/B.E - 4 Years)",
        description: "Extraction of minerals, coal, and ores including mine planning, safety, and mineral processing.",
        children: [
          {
            id: "mining-mtech-mineplan",
            label: "M.Tech Mine Planning & Design (2 Years)",
            description: "Mine optimization, underground mining, surface mining, blast design, ventilation.",
            children: [
              { id: "mine-planner", label: "Mine Planning Engineer (Coal India)", lpaRange: "₹15 - 30" },
              { id: "mining-project-manager", label: "Mining Project Manager" }
            ]
          },
          {
            id: "mining-mtech-mineral",
            label: "M.Tech Mineral Processing (2 Years)",
            description: "Ore beneficiation, flotation, gravity separation, mineral economics.",
            children: [
              { id: "mineral-processing-eng", label: "Mineral Processing Engineer", lpaRange: "₹12 - 22" },
              { id: "beneficiation-specialist", label: "Beneficiation Specialist" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "computer-it",
    label: "Computer Science & IT",
    description: "Software development, artificial intelligence, cybersecurity, and digital transformation technologies.",
    children: [
      {
        id: "cse",
        label: "Computer Science Engineering (B.Tech - 4 Years)",
        description: "Software development, algorithms, data structures, AI, machine learning, and system programming.",
        children: [
          {
            id: "cse-mtech-ai",
            label: "M.Tech Artificial Intelligence",
            description: "Deep learning, NLP, computer vision, reinforcement learning, neural networks.",
            children: [
              { id: "ai-engineer", label: "AI/ML Engineer", lpaRange: "₹15 - 30" },
              { id: "data-scientist", label: "Data Scientist (Google/Meta)" }
            ]
          },
          {
            id: "mtech-cybersecurity",
            label: "M.Tech Cybersecurity",
            description: "Ethical hacking, malware analysis, digital forensics, blockchain security.",
            children: [
              { id: "cybersecurity-engineer", label: "Cybersecurity Engineer" },
              { id: "penetration-tester", label: "Penetration Tester", lpaRange: "₹12 - 25" }
            ]
          }
        ]
      },
      {
    id: "it",
    label: "Information Technology (B.Tech/B.E - 4 Years)",
    description: "IT infrastructure, networking, database systems, web technologies, and enterprise applications.",
    children: [
      {
        id: "it-mtech-networking",
        label: "M.Tech Computer Networks & IT Infrastructure (2 Years)",
        description: "Network protocols, SDN, cloud networking, cybersecurity, enterprise network design.",
        children: [
          { id: "network-engineer", label: "Network Engineer (Cisco/CCNP)", lpaRange: "₹8 - 18" },
          { id: "cloud-network-architect", label: "Cloud Network Architect", lpaRange: "₹15 - 30" },
          { id: "it-infrastructure-manager", label: "IT Infrastructure Manager" }
        ]
      },
      {
        id: "it-mtech-enterprise",
        label: "M.Tech Enterprise Systems (ERP/CRM) (2 Years)",
        description: "SAP/Oracle implementation, enterprise architecture, business process reengineering.",
        children: [
          { id: "erp-consultant", label: "ERP Consultant (SAP/Oracle)", lpaRange: "₹12 - 25" },
          { id: "enterprise-architect", label: "Enterprise Architect" }
        ]
      }
    ]
  },
      {
        id: "ai-ml",
        label: "Artificial Intelligence & ML (B.Tech - 4 Years)",
        description: "Neural networks, deep learning, natural language processing, computer vision, and intelligent systems.",
        children: [
          {
            id: "ai-mtech-specialization",
            label: "M.Tech Computer Vision/NLP",
            description: "Image recognition, autonomous vehicles, chatbots, speech recognition systems.",
            children: [
              { id: "cv-engineer", label: "Computer Vision Engineer" },
              { id: "nlp-specialist", label: "NLP Engineer", lpaRange: "₹18 - 35" }
            ]
          }
        ]
      },
  
  {
    id: "data-science",
    label: "Data Science & Engineering (B.Tech - 4 Years)",
    description: "Big data analytics, data mining, predictive modeling, and business intelligence solutions.",
    children: [
      {
        id: "ds-mtech-bigdata",
        label: "M.Tech Big Data Analytics (2 Years)",
        description: "Hadoop/Spark ecosystem, real-time analytics, data lake architecture, ETL pipelines.",
        children: [
          { id: "bigdata-engineer", label: "Big Data Engineer", lpaRange: "₹14 - 28" },
          { id: "data-architect", label: "Data Architect", lpaRange: "₹20 - 40" },
          { id: "real-time-analytics-specialist", label: "Real-Time Analytics Specialist" }
        ]
      },
      {
        id: "ds-mtech-business-intelligence",
        label: "M.Tech Business Intelligence (2 Years)",
        description: "Tableau/PowerBI, OLAP, data warehousing, predictive analytics, dashboard development.",
        children: [
          { id: "bi-developer", label: "BI Developer", lpaRange: "₹10 - 22" },
          { id: "analytics-manager", label: "Analytics Manager" }
        ]
      }
    ]
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity (B.Tech - 4 Years)",
    description: "Network security, ethical hacking, cryptography, digital forensics, and threat intelligence.",
    children: [
      {
        id: "cyber-mtech-security",
        label: "M.Tech Cybersecurity (2 Years)",
        description: "Advanced penetration testing, malware reverse engineering, SIEM implementation, zero trust architecture.",
        children: [
          { id: "cybersecurity-architect", label: "Cybersecurity Architect", lpaRange: "₹18 - 35" },
          { id: "penetration-tester", label: "Penetration Tester (CEH/OSCP)", lpaRange: "₹15 - 30" },
          { id: "soc-analyst-lead", label: "SOC Analyst Lead" }
        ]
      },
      {
        id: "cyber-mtech-blockchain-sec",
        label: "M.Tech Blockchain Security (2 Years)",
        description: "Smart contract auditing, crypto wallet security, DeFi security, blockchain forensics.",
        children: [
          { id: "blockchain-security-specialist", label: "Blockchain Security Specialist", lpaRange: "₹20 - 40" },
          { id: "smart-contract-auditor", label: "Smart Contract Auditor" }
        ]
      }
    ]
  },
  {
    id: "cloud-computing",
    label: "Cloud Computing (B.Tech - 4 Years)",
    description: "AWS, Azure, Google Cloud platform engineering, DevOps, containerization, and cloud architecture.",
    children: [
      {
        id: "cloud-mtech-devops",
        label: "M.Tech Cloud Computing & DevOps (2 Years)",
        description: "Kubernetes orchestration, CI/CD pipelines, Infrastructure as Code (Terraform), multi-cloud architecture.",
        children: [
          { id: "cloud-architect", label: "Cloud Architect (AWS/Azure)", lpaRange: "₹20 - 45" },
          { id: "devops-engineer-lead", label: "DevOps Engineer Lead", lpaRange: "₹18 - 35" },
          { id: "sre-specialist", label: "Site Reliability Engineer (SRE)" }
        ]
      },
      {
        id: "cloud-mtech-serverless",
        label: "M.Tech Serverless & Edge Computing (2 Years)",
        description: "Lambda functions, serverless architecture, edge computing, CDN optimization.",
        children: [
          { id: "serverless-architect", label: "Serverless Architect", lpaRange: "₹22 - 40" },
          { id: "edge-computing-specialist", label: "Edge Computing Specialist" }
        ]
      }
    ]
  },
  {
    id: "blockchain",
    label: "Blockchain Technology (B.Tech - 4 Years)",
    description: "Distributed ledger systems, smart contracts, cryptocurrency, and decentralized applications.",
    children: [
      {
        id: "blockchain-mtech-defi",
        label: "M.Tech Blockchain & DeFi (2 Years)",
        description: "Ethereum development, DeFi protocols, NFT marketplaces, decentralized finance engineering.",
        children: [
          { id: "blockchain-fullstack-dev", label: "Blockchain Fullstack Developer", lpaRange: "₹18 - 38" },
          { id: "defi-engineer", label: "DeFi Protocol Engineer" },
          { id: "web3-architect", label: "Web3 Architect" }
        ]
      },
      {
        id: "blockchain-mtech-enterprise",
        label: "M.Tech Enterprise Blockchain (2 Years)",
        description: "Hyperledger Fabric, Corda, supply chain blockchain, consortium blockchains.",
        children: [
          { id: "enterprise-blockchain-consultant", label: "Enterprise Blockchain Consultant", lpaRange: "₹20 - 40" },
          { id: "supply-chain-blockchain-specialist", label: "Supply Chain Blockchain Specialist" }
        ]
      }
    ]
  },
  {
    id: "iot",
    label: "Internet of Things (IoT) (B.Tech - 4 Years)",
    description: "Sensor networks, embedded systems, edge computing, and connected device ecosystems.",
    children: [
      {
        id: "iot-mtech-edge-ai",
        label: "M.Tech IoT & Edge AI (2 Years)",
        description: "Edge ML models, TinyML, IoT security, 5G IoT, industrial IoT platforms.",
        children: [
          { id: "iot-solutions-architect", label: "IoT Solutions Architect", lpaRange: "₹16 - 32" },
          { id: "edge-ai-engineer", label: "Edge AI Engineer" },
          { id: "industrial-iot-specialist", label: "Industrial IoT Specialist" }
        ]
      },
      {
        id: "iot-mtech-smart-cities",
        label: "M.Tech Smart Cities IoT (2 Years)",
        description: "Smart grid, intelligent transportation, smart building automation, urban IoT platforms.",
        children: [
          { id: "smart-city-iot-engineer", label: "Smart City IoT Engineer", lpaRange: "₹14 - 28" },
          { id: "smart-grid-specialist", label: "Smart Grid IoT Specialist" }
        ]
      }
    ]
  },
  {
    id: "software-eng",
    label: "Software Engineering (B.Tech - 4 Years)",
    description: "Software lifecycle management, agile methodologies, DevOps practices, and enterprise software development.",
    children: [
      {
        id: "software-mtech-enterprise",
        label: "M.Tech Enterprise Software Engineering (2 Years)",
        description: "Microservices architecture, distributed systems, cloud-native applications, software architecture patterns.",
        children: [
          { id: "software-architect", label: "Software Architect", lpaRange: "₹25 - 50" },
          { id: "tech-lead", label: "Technical Lead/Engineering Manager" },
          { id: "distributed-systems-specialist", label: "Distributed Systems Specialist" }
        ]
      },
      {
        id: "software-mtech-product",
        label: "M.Tech Product Engineering & Management (2 Years)",
        description: "Product lifecycle management, agile product development, SaaS engineering, platform engineering.",
        children: [
          { id: "product-engineer", label: "Staff Product Engineer", lpaRange: "₹22 - 45" },
          { id: "platform-engineer", label: "Platform Engineer" },
          { id: "sre-lead", label: "SRE Lead" }
        ]
      }
    ]
  }
    ]
  },
  {
    id: "electronics-comm",
    label: "Electronics & Communication",
    description: "Electronic circuits, communication systems, signal processing, and embedded technologies.",
    children: [
      {
        id: "ece",
        label: "Electronics & Communication Engg (B.Tech - 4 Years)",
        description: "Electronic circuits, digital communication, wireless networks, satellite communication, and signal processing.",
        children: [
          {
            id: "ece-mtech-vlsi",
            label: "M.Tech VLSI Design",
            description: "Chip design, ASIC/FPGA, semiconductor fabrication, physical design.",
            children: [
              { id: "vlsi-design-engineer", label: "VLSI Design Engineer", lpaRange: "₹12 - 28" },
              { id: "asic-verification", label: "ASIC Verification Engineer" }
            ]
          },
          {
            id: "ece-mtech-embedded",
            label: "M.Tech Embedded Systems",
            description: "RTOS, ARM Cortex, IoT firmware, automotive electronics.",
            children: [
              { id: "embedded-engineer", label: "Embedded Systems Engineer" },
              { id: "iot-developer", label: "IoT Firmware Developer" }
            ]
          }
        ]
      },
  {
    id: "eee",
    label: "Electrical & Electronics Engineering (B.Tech/B.E - 4 Years)",
    description: "Power systems, control systems, electrical machines, power electronics, and renewable energy integration.",
    children: [
      {
        id: "eee-mtech-power-systems",
        label: "M.Tech Power Systems Engineering (2 Years)",
        description: "Advanced power system analysis, smart grids, renewable energy integration, HVDC transmission, power system protection.",
        children: [
          {
            id: "eee-phd-power",
            label: "Ph.D Power Systems/Renewable Energy (3-5 Years)",
            description: "Smart grid optimization, microgrid control, AI in power systems, energy storage systems research.",
            children: [
              { 
                id: "power-systems-researcher", 
                label: "Power Systems Research Scientist (NTPC/ISRO)",
                description: "Leads R&D projects on grid modernization, publishes IEEE papers, develops national grid policies.",
                lpaRange: "₹20 - 40"
              },
              { 
                id: "renewable-energy-professor", 
                label: "Professor/Academic Researcher",
                description: "Teaches at IIT/NIT, guides PhD students, secures DST/DBT research grants.",
                lpaRange: "₹18 - 35"
              }
            ]
          },
          {
            id: "power-systems-engineer",
            label: "Power Systems Engineer",
            description: "Designs transmission networks, implements SCADA systems, manages grid operations at NTPC/PGCIL.",
            lpaRange: "₹12 - 25"
          },
          {
            id: "smart-grid-specialist",
            label: "Smart Grid Specialist",
            description: "Deploys IoT sensors for grid monitoring, implements demand-response systems, renewable forecasting.",
            lpaRange: "₹15 - 30"
          }
        ]
      },
      {
        id: "eee-mtech-power-electronics",
        label: "M.Tech Power Electronics & Drives (2 Years)",
        description: "Converters, inverters, motor drives, renewable power electronics, electric vehicles.",
        children: [
          {
            id: "power-electronics-design-eng",
            label: "Power Electronics Design Engineer",
            description: "Designs solar inverters, EV chargers, industrial motor drives at Siemens/Tata Power.",
            lpaRange: "₹14 - 28"
          }
        ]
      }
    ]
  },
  {
    id: "ece-vlsi",
    label: "VLSI Design (B.Tech - 4 Years)",
    description: "Very Large Scale Integration for chip design, semiconductor fabrication, and IC testing.",
    children: [
      {
        id: "vlsi-mtech-design",
        label: "M.Tech VLSI Design & Verification (2 Years)",
        description: "RTL design, synthesis, place & route, timing analysis, DFT, formal verification.",
        children: [
          {
            id: "vlsi-phd-nanoscale",
            label: "Ph.D VLSI/Nanoscale Devices (3-5 Years)",
            description: "3nm/2nm process technology, quantum computing hardware, beyond-Moore scaling research.",
            children: [
              { 
                id: "vlsi-research-scientist", 
                label: "VLSI Research Scientist (Intel/TSMC)",
                description: "Leads next-gen chip design, publishes VLSI Symposium papers, patents semiconductor innovations.",
                lpaRange: "₹30 - 60"
              },
              { 
                id: "semiconductor-professor", 
                label: "Semiconductor Professor (IIT/IISc)",
                description: "Guides chip design startups, MeitY research projects, semiconductor policy advisor.",
                lpaRange: "₹25 - 50"
              }
            ]
          },
          {
            id: "vlsi-design-architect",
            label: "VLSI Design Architect",
            description: "Leads SoC design projects, tape-outs 5nm chips, manages global VLSI teams at Qualcomm/MediaTek.",
            lpaRange: "₹20 - 45"
          },
          {
            id: "verification-lead",
            label: "Verification Lead",
            description: "UVM verification methodology, chip sign-off, zero-bug tape-out responsibility.",
            lpaRange: "₹18 - 35"
          }
        ]
      }
    ]
  },
  {
    id: "ece-embedded",
    label: "Embedded Systems (B.Tech - 4 Years)",
    description: "Microcontrollers, real-time operating systems, firmware development, and IoT device programming.",
    children: [
      {
        id: "embedded-mtech-iot",
        label: "M.Tech Embedded Systems & IoT (2 Years)",
        description: "ARM Cortex-M, FreeRTOS/Zephyr, BLE/Zigbee, edge AI, automotive functional safety.",
        children: [
          {
            id: "embedded-phd-automotive",
            label: "Ph.D Embedded Systems/Autonomous Vehicles (3-5 Years)",
            description: "ADAS systems, functional safety (ISO 26262), automotive cybersecurity research.",
            children: [
              { 
                id: "automotive-embedded-lead", 
                label: "Automotive Embedded Systems Lead (Bosch/Continental)",
                description: "Develops ECUs for self-driving cars, leads ASPICE compliance, patents vehicle safety systems.",
                lpaRange: "₹22 - 45"
              }
            ]
          },
          {
            id: "embedded-firmware-architect",
            label: "Embedded Firmware Architect",
            description: "Designs IoT platforms, automotive ECUs, medical device firmware at Texas Instruments/NXP.",
            lpaRange: "₹16 - 32"
          },
          {
            id: "functional-safety-engineer",
            label: "Functional Safety Engineer (ISO 26262)",
            description: "Certifies safety-critical embedded systems for automotive/aerospace/medical applications.",
            lpaRange: "₹18 - 35"
          }
        ]
      }
    ]
  },
  {
    id: "ece-signal",
    label: "Signal Processing (B.Tech - 4 Years)",
    description: "Digital signal processing, image processing, speech recognition, and biomedical signal analysis.",
    children: [
      {
        id: "signal-mtech-image",
        label: "M.Tech Image & Video Processing (2 Years)",
        description: "Computer vision, deep learning for images, medical imaging, video compression.",
        children: [
          {
            id: "signal-phd-biomedical",
            label: "Ph.D Biomedical Signal Processing (3-5 Years)",
            description: "EEG/EMG analysis, AI diagnostics, wearable health monitoring algorithms.",
            children: [
              { 
                id: "biomedical-signal-researcher", 
                label: "Biomedical Signal Processing Researcher",
                description: "Develops AI ECG analysis, publishes TBME papers, leads health tech R&D.",
                lpaRange: "₹20 - 40"
              }
            ]
          },
          {
            id: "computer-vision-engineer",
            label: "Computer Vision Engineer",
            description: "Develops facial recognition, autonomous driving vision systems at NVIDIA/Mobileye.",
            lpaRange: "₹15 - 35"
          },
          {
            id: "medical-imaging-specialist",
            label: "Medical Imaging Specialist",
            description: "MRI/CT image enhancement, AI radiology assistance, PACS systems.",
            lpaRange: "₹14 - 28"
          }
        ]
      }
    ]
  },
  {
    id: "ece-telecom",
    label: "Telecommunication Engineering (B.Tech - 4 Years)",
    description: "5G/6G networks, optical fiber communication, wireless protocols, and network engineering.",
    children: [
      {
        id: "telecom-mtech-5g",
        label: "M.Tech Wireless Communication (5G/6G) (2 Years)",
        description: "Massive MIMO, mmWave, network slicing, Open RAN, private 5G networks.",
        children: [
          {
            id: "telecom-phd-6g",
            label: "Ph.D 6G Wireless Systems (3-5 Years)",
            description: "Terahertz communication, AI-driven networks, integrated sensing & communication.",
            children: [
              { 
                id: "6g-research-scientist", 
                label: "6G Research Scientist (Ericsson/Nokia)",
                description: "Standards contribution (3GPP), publishes Globecom papers, leads telecom R&D labs.",
                lpaRange: "₹25 - 50"
              }
            ]
          },
          {
            id: "5g-network-engineer",
            label: "5G Network Engineer",
            description: "Deploys 5G base stations, optimizes RAN performance, private 5G for factories.",
            lpaRange: "₹16 - 32"
          },
          {
            id: "rf-engineer",
            label: "RF Systems Engineer",
            description: "Antenna design, RF front-end, spectrum management for telecom operators.",
            lpaRange: "₹14 - 28"
          }
        ]
      }
    ]
  },
  {
    id: "ece-robotics",
    label: "Robotics & Automation (B.Tech - 4 Years)",
    description: "Robot kinematics, control systems, machine vision, autonomous navigation, and industrial automation.",
    children: [
      {
        id: "robotics-mtech-autonomous",
        label: "M.Tech Robotics & Autonomous Systems (2 Years)",
        description: "SLAM, path planning, reinforcement learning, multi-robot coordination, humanoid robots.",
        children: [
          {
            id: "robotics-phd-humanoid",
            label: "Ph.D Humanoid/Autonomous Robotics (3-5 Years)",
            description: "Bipedal locomotion, dexterous manipulation, human-robot interaction.",
            children: [
              { 
                id: "robotics-research-lead", 
                label: "Robotics Research Lead (Boston Dynamics/ISRO)",
                description: "Develops humanoid robots, publishes ICRA/IROS papers, leads robotics startups.",
                lpaRange: "₹25 - 55"
              }
            ]
          },
          {
            id: "robotics-controls-engineer",
            label: "Robotics Controls Engineer",
            description: "Motion control algorithms, real-time control systems for industrial/service robots.",
            lpaRange: "₹15 - 30"
          },
          {
            id: "autonomous-systems-specialist",
            label: "Autonomous Systems Specialist",
            description: "Develops warehouse robots, delivery drones, agricultural robots.",
            lpaRange: "₹18 - 35"
          }
        ]
      }
    ]
  },
  {
    id: "ece-mechatronics",
    label: "Mechatronics Engineering (B.Tech - 4 Years)",
    description: "Integration of mechanical, electrical, and computer systems for intelligent machines.",
    children: [
      {
        id: "mechatronics-mtech-automation",
        label: "M.Tech Industrial Automation & Mechatronics (2 Years)",
        description: "Advanced PLC, SCADA, motion control, Industry 4.0, collaborative robots.",
        children: [
          {
            id: "mechatronics-phd-industry4",
            label: "Ph.D Industry 4.0 & Smart Manufacturing (3-5 Years)",
            description: "Digital twins, CPS, predictive maintenance, AI manufacturing systems.",
            children: [
              { 
                id: "industry4-research-director", 
                label: "Industry 4.0 Research Director",
                description: "Leads smart factory projects, consults for Siemens/GE, publishes manufacturing journals.",
                lpaRange: "₹30 - 60"
              }
            ]
          },
          {
            id: "mechatronics-automation-lead",
            label: "Mechatronics Automation Lead",
            description: "Designs factory automation systems, cobot integration, smart manufacturing solutions.",
            lpaRange: "₹16 - 32"
          },
          {
            id: "cobotics-specialist",
            label: "Collaborative Robotics Specialist",
            description: "Human-robot collaboration, safety-rated motion control, cobot programming.",
            lpaRange: "₹14 - 28"
          }
        ]
      }
    ]
  }

    ]
  },
  {
    id: "aviation-aero",
    label: "Aviation & Aerospace",
    description: "Aircraft design, spacecraft engineering, automotive systems, and marine propulsion technologies.",
    children: [
      {
        id: "aeronautical-eng",
        label: "Aeronautical Engineering (B.Tech - 4 Years)",
        description: "Design and development of aircraft, aerodynamics, propulsion systems, and flight mechanics.",
        children: [
          {
            id: "aero-mtech-avionics",
            label: "M.Tech Avionics/Aircraft Design",
            description: "Flight control systems, aircraft structures, CFD simulation, UAV design.",
            children: [
              { id: "aircraft-design-engineer", label: "Aircraft Design Engineer (HAL)" },
              { id: "aero-structures", label: "Aerostructures Engineer", lpaRange: "₹10 - 20" }
            ]
          }
        ]
      },
  {
    id: "aerospace-eng",
    label: "Aerospace Engineering (B.Tech/B.E - 4 Years)",
    description: "Spacecraft design, satellite technology, rocket propulsion, and orbital mechanics.",
    children: [
      {
        id: "aerospace-mtech-space",
        label: "M.Tech Space Technology/Satellite Systems (2 Years)",
        description: "Satellite subsystems, launch vehicle design, orbital mechanics, space environment, remote sensing.",
        children: [
          {
            id: "aerospace-phd-spacecraft",
            label: "Ph.D Spacecraft Dynamics/Propulsion (3-5 Years)",
            description: "Reusable rocket technology, electric propulsion, hypersonic re-entry, space debris mitigation.",
            children: [
              { 
                id: "isro-space-scientist", 
                label: "ISRO Space Scientist",
                description: "Leads PSLV/GSLV missions, publishes AIAA papers, develops Gaganyaan spacecraft systems.",
                lpaRange: "₹20 - 45"
              },
              { 
                id: "space-research-director", 
                label: "Space Research Director (DRDO/ISRO)",
                description: "Heads satellite programs, secures international space collaborations, patents propulsion tech.",
                lpaRange: "₹30 - 60"
              }
            ]
          },
          {
            id: "satellite-systems-engineer",
            label: "Satellite Systems Engineer",
            description: "Designs IRS/INSAT satellites, payload integration, AIT (Assembly Integration Testing) at ISRO/Antrix.",
            lpaRange: "₹15 - 35"
          },
          {
            id: "launch-vehicle-specialist",
            label: "Launch Vehicle Engineer",
            description: "GSLV Mk-III stage design, cryogenic engine testing, mission trajectory analysis.",
            lpaRange: "₹16 - 32"
          }
        ]
      }
    ]
  },
  {
    id: "automobile-eng",
    label: "Automobile Engineering (B.Tech/B.E - 4 Years)",
    description: "Vehicle design, automotive electronics, powertrain systems, and electric vehicle technology.",
    children: [
      {
        id: "auto-mtech-ev",
        label: "M.Tech Electric Vehicle Technology (2 Years)",
        description: "Battery management systems, electric motor design, power electronics for EVs, vehicle-to-grid.",
        children: [
          {
            id: "auto-phd-autonomous",
            label: "Ph.D Autonomous Vehicles/ADAS (3-5 Years)",
            description: "L4/L5 autonomy, sensor fusion, V2X communication, automotive cybersecurity.",
            children: [
              { 
                id: "ev-lead-engineer", 
                label: "EV Lead Engineer (Tata Motors/Mahindra)",
                description: "Leads Nexon EV development, battery pack design, fast-charging infrastructure.",
                lpaRange: "₹22 - 45"
              },
              { 
                id: "autonomous-vehicle-specialist", 
                label: "Autonomous Vehicle Specialist",
                description: "Develops L3+ autonomy for Ola Electric/Tata, publishes SAE papers.",
                lpaRange: "₹25 - 50"
              }
            ]
          },
          {
            id: "ev-powertrain-designer",
            label: "EV Powertrain Designer",
            description: "Electric motor selection, inverter design, thermal management for EVs at Ather/Ola.",
            lpaRange: "₹14 - 28"
          },
          {
            id: "vehicle-dynamics-engineer",
            label: "Vehicle Dynamics Engineer",
            description: "Suspension tuning, chassis development, NVH optimization at Maruti/Mahindra.",
            lpaRange: "₹12 - 25"
          }
        ]
      }
    ]
  },
  {
    id: "marine-eng",
    label: "Marine Engineering (B.Tech/B.E - 4 Years)",
    description: "Ship propulsion, marine electrical systems, naval architecture, and offshore engineering.",
    children: [
      {
        id: "marine-mtech-naval",
        label: "M.Tech Naval Architecture & Ocean Engineering (2 Years)",
        description: "Ship hydrodynamics, offshore structures, FPSO design, submarine engineering.",
        children: [
          {
            id: "marine-phd-offshore",
            label: "Ph.D Offshore Engineering/Submarines (3-5 Years)",
            description: "Deepwater rig design, submarine stealth technology, ocean wave energy.",
            children: [
              { 
                id: "naval-architect-lead", 
                label: "Naval Architect Lead (Mazagon Dock/GRSE)",
                description: "Designs Scorpene submarines, aircraft carriers, leads shipbuilding projects.",
                lpaRange: "₹18 - 40"
              },
              { 
                id: "offshore-platform-specialist", 
                label: "Offshore Platform Specialist (ONGC/Reliance)",
                description: "Deepwater rig engineering, FPSO conversion projects.",
                lpaRange: "₹20 - 45"
              }
            ]
          },
          {
            id: "ship-design-engineer",
            label: "Ship Design Engineer",
            description: "Hull form optimization, stability calculations, propulsion system integration.",
            lpaRange: "₹12 - 25"
          },
          {
            id: "marine-electrical-systems",
            label: "Marine Electrical Systems Engineer",
            description: "Ship electrical distribution, automation systems, power management.",
            lpaRange: "₹14 - 28"
          }
        ]
      }
    ]
  },
  {
    id: "avionics-eng",
    label: "Avionics Engineering (B.Tech/B.E - 4 Years)",
    description: "Aircraft electronics, navigation systems, flight control systems, and radar technology.",
    children: [
      {
        id: "avionics-mtech-flight-control",
        label: "M.Tech Avionics/Flight Control Systems (2 Years)",
        description: "Fly-by-wire systems, autopilot design, inertial navigation, radar signal processing.",
        children: [
          {
            id: "avionics-phd-uav",
            label: "Ph.D UAV Avionics/Autonomous Flight (3-5 Years)",
            description: "Swarm drone technology, sense-and-avoid systems, beyond visual line of sight (BVLOS).",
            children: [
              { 
                id: "avionics-systems-architect", 
                label: "Avionics Systems Architect (HAL/DRDO)",
                description: "Leads Tejas LCA avionics upgrade, develops fighter jet fly-by-wire systems.",
                lpaRange: "₹22 - 48"
              },
              { 
                id: "uav-autopilot-specialist", 
                label: "UAV Autopilot Specialist",
                description: "Designs drone flight controllers, swarm intelligence algorithms.",
                lpaRange: "₹20 - 40"
              }
            ]
          },
          {
            id: "flight-control-systems-engineer",
            label: "Flight Control Systems Engineer",
            description: "Autopilot tuning, flight management systems, HUD development for fighter aircraft.",
            lpaRange: "₹16 - 35"
          },
          {
            id: "radar-systems-engineer",
            label: "Radar Systems Engineer",
            description: "AESA radar development, SAR imaging, electronic warfare systems.",
            lpaRange: "₹18 - 38"
          }
        ]
      }
    ]
  },
  {
    id: "aircraft-maint-eng",
    label: "Aircraft Maintenance Engineering (AME - 3 Years)",
    description: "Aircraft maintenance, repair, overhaul, quality control, and aviation safety management.",
    children: [
      {
        id: "dgca-license",
        label: "DGCA AME License (B1.1/B2 - 18-24 Months)",
        description: "Category license for airframe/engine (B1.1) or avionics (B2) maintenance with 2 years practical experience.",
        children: [
          {
            id: "ame-type-rating",
            label: "Type Rating (A320/B737 - 3-6 Months)",
            description: "Aircraft-specific endorsement for Airbus A320 or Boeing 737 maintenance.",
            children: [
              { 
                id: "line-maintenance-engineer", 
                label: "Line Maintenance Engineer (IndiGo/SpiceJet)",
                description: "Daily A-checks, defect rectification, aircraft turnaround at airports.",
                lpaRange: "₹8 - 18"
              },
              { 
                id: "base-maintenance-supervisor", 
                label: "Base Maintenance Supervisor",
                description: "C/D-checks, heavy maintenance visits, leads 50+ technician teams.",
                lpaRange: "₹15 - 30"
              },
              { 
                id: "mro-manager", 
                label: "MRO Manager (Air India Engineering)",
                description: "Manages MRO facilities, DGCA compliance, $100M+ maintenance contracts.",
                lpaRange: "₹25 - 45"
              }
            ]
          },
          {
            id: "advanced-mro-certification",
            label: "EASA/FAA Part-145 Certification (1 Year)",
            description: "International MRO approvals for Airbus/Boeing maintenance outsourcing.",
            children: [
              { 
                id: "international-mro-specialist", 
                label: "International MRO Specialist",
                description: "Works on global MRO contracts, Boeing 787/A350 maintenance.",
                lpaRange: "₹20 - 40"
              }
            ]
          }
        ]
      }
    ]
  }

    ]
  }
]
