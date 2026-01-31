export const itiData: Object[] = [
  {
    id: "engineering-1yr",
    label: "1-Year Engineering Trades (ITI Certificate)",
    children: [
      {
        id: "welder",
        label: "Welder (Gas & Electric) (1 Year)",
        description: "Arc welding (SMAW/MIG/TIG), gas welding, electrode selection, weld defect analysis, safety standards.",
        children: [
          {
            id: "welder-aws-cert",
            label: "AWS Certified Welding Inspector (6 Months)",
            description: "American Welding Society certification for weld quality inspection, NDT Level-I, welding procedure qualification.",
            children: [
              {
                id: "welding-inspector",
                label: "Welding Inspector",
                description: "Inspects welds in shipbuilding, oil rigs, pressure vessels at L&T/Samsung Heavy Industries.",
                lpaRange: "₹4 - 8"
              },
              {
                id: "welding-supervisor",
                label: "Welding Supervisor",
                description: "Leads 20+ welder teams on offshore platforms, pipeline projects, refinery construction.",
                lpaRange: "₹5 - 10"
              },
              {
                id: "ndt-level2-welder",
                label: "NDT Level-II Technician",
                description: "Ultrasonic/RT/DP testing for welds in nuclear reactors, aircraft components.",
                lpaRange: "₹6 - 12"
              }
            ]
          },
          {
            id: "welder-job1",
            label: "Welder",
            description: "Basic MIG/TIG welding in fabrication shops, construction sites, shipyards.",
            lpaRange: "₹2.5 - 5"
          }
        ]
      },
      {
        id: "mechanic-diesel",
        label: "Mechanic Diesel",
        description: "Diesel engine overhaul, fuel injection systems, turbochargers, heavy vehicle maintenance.",
        children: [
          {
            id: "diesel-ase-cert",
            label: "ASE Medium/Heavy Truck Certification (6 Months)",
            description: "Automotive Service Excellence certification for commercial vehicle diagnostics and repair.",
            children: [
              {
                id: "diesel-supervisor",
                label: "Diesel Workshop Supervisor",
                description: "Manages truck/bus fleets for Ashok Leyland, Tata Motors service stations.",
                lpaRange: "₹5 - 9"
              },
              {
                id: "heavy-equipment-tech",
                label: "Heavy Earthmoving Equipment Technician",
                description: "Repairs excavators, bulldozers, mining dump trucks at L&T, Vedanta mines.",
                lpaRange: "₹6 - 11"
              }
            ]
          },
          { id: "diesel-mech-job", label: "Diesel Mechanic" }
        ]
      },
      {
        id: "carpenter",
        label: "Carpenter",
        children: [
          { id: "carpenter-job", label: "Carpenter" },
          { id: "carpenter-supervisor", label: "Site Supervisor" },
          { id: "interior-carpenter", label: "Interior Fitter" }
        ]
      },
      {
        id: "plumber",
        label: "Plumber",
        children: [
          { id: "plumber-job", label: "Plumber" },
          { id: "plumber-supervisor", label: "Plumbing Supervisor" },
          { id: "pipe-fitter", label: "Pipe Fitter" }
        ]
      },
      {
        id: "sheet-metal",
        label: "Sheet Metal Worker",
        children: [
          { id: "sheet-metal-job", label: "Sheet Metal Worker" },
          { id: "duct-fabricator", label: "Duct Fabricator" }
        ]
      }
    ]
  },
  {
    id: "engineering-2yr",
    label: "2-Year Engineering Trades (ITI Certificate)",
    children: [
      {
        id: "electrician",
        label: "Electrician (2 Years)",
        description: "Electrical wiring, motor winding, transformers, domestic/industrial installations, safety earthing.",
        children: [
          {
            id: "electrical-supervisor-cert",
            label: "Electrical Supervisor License (6 Months)",
            description: "State Electrical Licensing Board certification for commercial/industrial installations above 10kW.",
            children: [
              {
                id: "electrical-contractor",
                label: "Licensed Electrical Contractor",
                description: "Owns electrical contracting firm, executes factory/building electrification projects.",
                lpaRange: "₹8 - 15"
              },
              {
                id: "electrical-supervisor",
                label: "Electrical Supervisor",
                description: "Supervises 15+ electricians in steel plants, textile mills, metro rail projects.",
                lpaRange: "₹5 - 10"
              },
              {
                id: "maintenance-elec",
                label: "Maintenance Electrician",
                description: "Preventive maintenance of HT/LT panels, generators, industrial automation systems.",
                lpaRange: "₹4 - 8"
              }
            ]
          },
          { id: "electrician-job1", label: "Wireman" }
        ]
      },
      {
        id: "fitter",
        label: "Fitter (2 Years)",
        description: "Machine assembly, precision fitting, gauges, bearings installation, maintenance of machine tools.",
        children: [
          {
            id: "fitter-cnc-cert",
            label: "CNC Programming & Operation Certification (6 Months)",
            description: "Mastercam/GibbsCAM programming, 3/4/5-axis CNC milling/turning operations.",
            children: [
              {
                id: "cnc-programmer",
                label: "CNC Programmer/Operator",
                description: "Programs complex aerospace/auto components on DMG Mori/Haas machines.",
                lpaRange: "₹5 - 12"
              },
              {
                id: "fitter-supervisor",
                label: "Workshop Supervisor",
                description: "Manages fitting shop with 25+ workers in auto component manufacturing.",
                lpaRange: "₹6 - 11"
              }
            ]
          },
          { id: "fitter-job1", label: "Machine Fitter" }
        ]
      },
      {
        id: "turner",
        label: "Turner",
        children: [
          { id: "turner-job1", label: "Lathe Operator" },
          { id: "cnc-operator", label: "CNC Operator" },
          { id: "turner-supervisor", label: "Machine Shop Supervisor" }
        ]
      },
      {
        id: "machinist",
        label: "Machinist",
        children: [
          { id: "machinist-job", label: "Machinist" },
          { id: "cnc-machinist", label: "CNC Machinist" },
          { id: "tool-room-machinist", label: "Tool Room Machinist" }
        ]
      },
      {
        id: "mechanic-motor-vehicle",
        label: "Mechanic (Motor Vehicle)",
        children: [
          { id: "auto-mechanic", label: "Auto Mechanic" },
          { id: "service-advisor", label: "Service Advisor" },
          { id: "workshop-foreman", label: "Workshop Foreman" }
        ]
      },
      {
        id: "electronics-mechanic",
        label: "Electronics Mechanic (2 Years)",
        description: "PCB assembly, SMD soldering, microcontroller programming, SMPS repair, test instruments.",
        children: [
          {
            id: "electronics-diploma-lateral",
            label: "Diploma Electronics (Lateral Entry - 2 Years)",
            description: "Advanced diploma covering embedded systems, VLSI basics, industrial instrumentation.",
            children: [
              {
                id: "service-engineer",
                label: "Field Service Engineer",
                description: "Services medical equipment, industrial controllers at Siemens GE Healthcare.",
                lpaRange: "₹5 - 10"
              },
              {
                id: "production-test-tech",
                label: "Production Test Technician",
                description: "PCB functional testing, ATE programming, quality assurance in electronics manufacturing.",
                lpaRange: "₹4 - 9"
              }
            ]
          },
          { id: "electronics-tech", label: "Electronics Technician" }
        ]
      },
      {
        id: "draughtsman-mechanical",
        label: "Draughtsman (Mechanical) (2 Years)",
        description: "Technical drawing, machine component design, GD&T, assembly drawings using AutoCAD.",
        children: [
          {
            id: "cad-cam-cert",
            label: "CAD/CAM Certification (SolidWorks/CATIA - 6 Months)",
            description: "3D parametric modeling, sheet metal design, surface modeling, CAM programming.",
            children: [
              {
                id: "cad-designer",
                label: "CAD Designer",
                description: "Designs auto components, machine tools, fixtures using CATIA V5 at Tata Technologies.",
                lpaRange: "₹5 - 11"
              },
              {
                id: "design-engineer",
                label: "Design Engineer",
                description: "Product design, FEA analysis, prototyping coordination for manufacturing firms.",
                lpaRange: "₹8 - 15"
              }
            ]
          },
          { id: "draughtsman-job", label: "Draughtsman" },
          { id: "cad-designer", label: "CAD Designer" },
          { id: "design-engineer", label: "Design Engineer" }
        ]
      },
      {
        id: "draughtsman-civil",
        label: "Draughtsman (Civil)",
        children: [
          { id: "civil-draughtsman", label: "Civil Draughtsman" },
          { id: "autocad-operator", label: "AutoCAD Operator" },
          { id: "site-draughtsman", label: "Site Draughtsman" }
        ]
      },
      {
        id: "tool-die-maker",
        label: "Tool & Die Maker",
        children: [
          { id: "tool-maker", label: "Tool Maker" },
          { id: "die-maker", label: "Die Maker" },
          { id: "jig-fixture-maker", label: "Jigs & Fixture Maker" }
        ]
      },
      {
        id: "refrigeration-ac",
        label: "Refrigeration & Air Conditioning",
        children: [
          { id: "ac-technician", label: "AC Technician" },
          { id: "refrigeration-technician", label: "Refrigeration Technician" },
          { id: "service-supervisor", label: "Service Supervisor" }
        ]
      }
    ]
  },
  {
    id: "non-engineering",
    label: "Non-Engineering Trades (1 Year)",
    children: [
      {
        id: "copa",
        label: "Computer Operator & Programming Assistant (1 Year)",
        description: "MS Office, Tally, basic programming (C/Python), DTP, internet applications.",
        children: [
          {
            id: "cca-cert",
            label: "Computer Center Assistant Certification (6 Months)",
            description: "Advanced MS Office, database management, web design, accounting software.",
            children: [
              {
                id: "computer-operator",
                label: "Computer Operator/Data Entry",
                description: "Data processing, payroll, accounts entry for SMEs and government offices.",
                lpaRange: "₹2.5 - 5"
              },
              {
                id: "junior-programmer",
                label: "Junior Programmer",
                description: "Basic web development, database applications, software testing support.",
                lpaRange: "₹4 - 8"
              }
            ]
          },
          { id: "computer-operator", label: "Computer Operator" },
          { id: "data-entry-operator", label: "Data Entry Operator" },
          { id: "junior-programmer", label: "Junior Programmer" }
        ]
      },
      {
        id: "stenographer-english",
        label: "Stenographer & Secretarial Assistant (English)",
        children: [
          { id: "stenographer", label: "Stenographer" },
          { id: "personal-assistant", label: "Personal Assistant" },
          { id: "office-assistant", label: "Office Assistant" }
        ]
      },
      {
        id: "stenographer-hindi",
        label: "Stenographer & Secretarial Assistant (Hindi)",
        children: [
          { id: "hindi-steno", label: "Hindi Stenographer" },
          { id: "hindi-secretary", label: "Hindi Secretary" }
        ]
      },
      {
        id: "dress-making",
        label: "Dress Making",
        children: [
          { id: "tailor", label: "Tailor" },
          { id: "fashion-designer-assistant", label: "Fashion Designer Assistant" }
        ]
      },
      {
        id: "sewing-tech",
        label: "Sewing Technology",
        children: [
          { id: "sewing-operator", label: "Sewing Machine Operator" },
          { id: "garment-technician", label: "Garment Technician" }
        ]
      }
    ]
  },
  {
    id: "auto-specialized",
    label: "Specialized Automobile Trades",
    children: [
      {
        id: "mechanic-auto-body-repair",
        label: "Mechanic Auto Body Repair (1 Year)",
        description: "Vehicle body straightening, welding, panel replacement, frame alignment.",
        children: [
          {
            id: "auto-body-icrt-cert",
            label: "ICRT Auto Body Repair Certification (3 Months)",
            description: "Advanced collision repair, aluminum body repair, frame machine operation.",
            children: [
              {
                id: "body-repair-tech",
                label: "Auto Body Repair Technician",
                description: "Repairs accident-damaged vehicles at 3M approved body shops.",
                lpaRange: "₹4 - 8"
              }
            ]
          },
       { id: "body-repair-tech", label: "Auto Body Repair Technician" },
          { id: "panel-beater", label: "Panel Beater" } 
        ]
      },
      {
        id: "mechanic-auto-body-painting",
        label: "Mechanic Auto Body Painting",
        children: [
          { id: "auto-painter", label: "Auto Painter" },
          { id: "spray-painter", label: "Spray Painter" }
        ]
      }
    ]
  },
  {
    id: "advance-machining",
    label: "Advanced Machining Trades",
    children: [
      {
        id: "machinist-grinder",
        label: "Machinist Grinder (2 Years)",
        description: "Cylindrical/surface grinding, tool grinding, precision gauge manufacturing.",
        children: [
          {
            id: "precision-grinding-cert",
            label: "Precision Grinding Certification (6 Months)",
            description: "Sub-micron accuracy grinding for aerospace/tools, CBN wheel technology.",
            children: [
              {
                id: "precision-grinder",
                label: "Precision Grinder",
                description: "Grinds turbine blades, surgical instruments, precision automotive components.",
                lpaRange: "₹5 - 10"
              }
            ]
          },
          { id: "grinder-operator", label: "Grinder Operator" },
          { id: "precision-grinder", label: "Precision Grinder" }
        ]
      },
      {
        id: "instrument-mechanic",
        label: "Instrument Mechanic",
        children: [
          { id: "instrument-tech", label: "Instrument Technician" },
          { id: "calibration-tech", label: "Calibration Technician" }
        ]
      }
    ]
  },
  {
    id: "ict-systems",
    label: "ICT & Systems (2 Years)",
    children: [
      {
        id: "ict-maintenance",
        label: "ICT System Maintenance (2 Years)",
        description: "Computer hardware repair, networking, printer/scanner maintenance, basic cybersecurity.",
        children: [
          {
            id: "ctss-cert",
            label: "CTSS Network Technician Certification (6 Months)",
            description: "Cisco CCNA equivalent, Linux administration, server maintenance.",
            children: [
              {
                id: "network-tech",
                label: "Network Technician",
                description: "LAN/WAN maintenance, router/switch configuration for corporate offices.",
                lpaRange: "₹4 - 9"
              },
              {
                id: "system-admin",
                label: "System Administrator",
                description: "Server management, backup systems, cybersecurity monitoring for SMEs.",
                lpaRange: "₹6 - 12"
              }
            ]
          },
          { id: "network-tech", label: "Network Technician" },
          { id: "system-admin", label: "System Administrator" },
          { id: "hardware-engineer", label: "Hardware Engineer" }
        ]
      }
    ]
  }
]

