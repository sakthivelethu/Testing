export const Jobs12thData: Object[] = [
  {
    id: "mlt",
    label: "Medical Lab Technician (MLT)",
    jobCategory: "Private",
    lpaRange: "₹2.5 - 6",
    children: [
      { 
        id: "mlt-job1", 
        label: "Lab Technician", 
        jobCategory: "Private",
        lpaRange: "₹2.5 - 4"
      },
      { 
        id: "mlt-job2", 
        label: "Lab Supervisor", 
        jobCategory: "Private",
        lpaRange: "₹4 - 6"
      },
      { id: "mlt-bscmlt", label: "B.Sc MLT" }
    ]
  },
  {
    id: "ott",
    label: "Operation Theatre Technician",
    jobCategory: "Private", 
    lpaRange: "₹2.8 - 5",
    children: [
      { 
        id: "ott-job", 
        label: "OT Technician", 
        jobCategory: "Private",
        lpaRange: "₹2.8 - 4.5"
      },
      { 
        id: "ott-supervisor", 
        label: "OT Supervisor", 
        jobCategory: "Private",
        lpaRange: "₹4 - 6"
      }
    ]
  },
  {
    id: "railway-ntpc",
    label: "Railway NTPC (Commercial Apprentice, Station Master, Goods Guard)",
    description: "RRB NTPC exam for supervisory railway jobs. Salary ₹35,400-1,12,400. Age 18-33 years.",
    jobCategory: "Public",
    lpaRange: "₹4 - 14",
    children: [
      {
        id: "commercial-apprentice",
        label: "Commercial Apprentice",
        description: "Ticket booking, revenue collection, passenger assistance at railway stations.",
        jobCategory: "Public",
        lpaRange: "₹4 - 6"
      },
      {
        id: "station-master",
        label: "Station Master",
        description: "Manages train operations, platform supervision, signal coordination.",
        jobCategory: "Public",
        lpaRange: "₹5 - 8"
      },
      {
        id: "goods-guard",
        label: "Goods Guard",
        description: "Freight train inspection, brake testing, wagon sealing.",
        jobCategory: "Public",
        lpaRange: "₹4 - 7"
      }
    ]
  },
  {
    id: "ssc-chsl",
    label: "SSC CHSL (LDC, DEO, Postal Assistant, Court Clerk)",
    description: "Staff Selection Commission Combined Higher Secondary Level exam. Salary ₹19,900-81,100 + allowances.",
    jobCategory: "Public",
    lpaRange: "₹3 - 10",
    children: [
      {
        id: "ldc-clerk",
        label: "Lower Division Clerk",
        description: "File maintenance, data entry, office correspondence in government ministries.",
        jobCategory: "Public",
        lpaRange: "₹3 - 5"
      },
      {
        id: "postal-assistant",
        label: "Postal Assistant/Sorting Assistant",
        description: "Mail sorting, counter operations, savings schemes in post offices.",
        jobCategory: "Public",
        lpaRange: "₹3 - 4.8"
      },
      {
        id: "data-entry-operator",
        label: "Data Entry Operator Grade B",
        description: "High-speed data entry, database management in government departments.",
        jobCategory: "Public",
        lpaRange: "₹3.6 - 5.4"
      }
    ]
  },
  {
    id: "indian-airforce",
    label: "Indian Air Force (Group X/Y Trades)",
    description: "Airmen Group X (Technical) and Group Y (Non-Technical). Salary ₹26,900-48,000 + allowances.",
    jobCategory: "Public",
    lpaRange: "₹4 - 7",
    children: [
      {
        id: "airman-group-x",
        label: "Airman Group X",
        description: "Aircraft electronics, radar maintenance, propulsion systems support.",
        jobCategory: "Public",
        lpaRange: "₹4 - 7"
      },
      {
        id: "airman-group-y",
        label: "Airman Group Y",
        description: "Admin, logistics, accounts, medical assistant roles in air force stations.",
        jobCategory: "Public",
        lpaRange: "₹4 - 6"
      }
    ]
  },
  {
    id: "indian-navy-ssr",
    label: "Indian Navy SSR (Senior Secondary Recruit)",
    description: "Sailor technical/non-technical roles. Salary ₹21,700-69,100 + sea duty allowances.",
    jobCategory: "Public",
    lpaRange: "₹4 - 8",
    children: [
      {
        id: "navy-ssr-tech",
        label: "SSR Technical",
        description: "Ship electrical systems, weapon systems maintenance, radar operation.",
        jobCategory: "Public",
        lpaRange: "₹4 - 7"
      },
      {
        id: "navy-ssr-non-tech",
        label: "SSR Non-Technical",
        description: "Logistics, stores, hospitality duties on naval ships.",
        jobCategory: "Public",
        lpaRange: "₹4 - 6"
      }
    ]
  },
  {
    id: "indian-coast-guard",
    label: "Indian Coast Guard Navik (DB, GD)",
    description: "Domestic Branch and General Duty sailors. Salary ₹21,700-69,100 + allowances.",
    jobCategory: "Public",
    lpaRange: "₹3 - 7",
    children: [
      {
        id: "navik-gd",
        label: "Navik General Duty",
        description: "Maritime security, anti-smuggling patrols, coastal surveillance.",
        jobCategory: "Public",
        lpaRange: "₹4 - 7"
      },
      {
        id: "navik-db",
        label: "Navik Domestic Branch",
        description: "Cooking, housekeeping, stewarding on coast guard ships.",
        jobCategory: "Public",
        lpaRange: "₹3 - 5"
      }
    ]
  },
  {
    id: "banking-clerk",
    label: "IBPS RRB Clerk / IBPS Clerk",
    description: "Bank clerical jobs in rural/regional banks. Salary ₹19,900-63,640 + perks.",
    jobCategory: "Public",
    lpaRange: "₹3 - 8",
    children: [
      {
        id: "rrb-clerk",
        label: "RRB Clerk/Office Assistant",
        description: "Customer transactions, account opening, KYC in rural bank branches.",
        jobCategory: "Public",
        lpaRange: "₹3 - 5"
      }
    ]
  },
  {
    id: "defense-nda",
    label: "NDA (National Defence Academy)",
    description: "Officer training for Army/Navy/Air Force. Age 16.5-19.5 years, UPSC exam.",
    jobCategory: "Public",
    lpaRange: "₹7 - 21",
    children: [
      {
        id: "nda-cadet",
        label: "NDA Cadet → Lieutenant",
        description: "3-year training at NDA Pune, commission as officer after service academy.",
        jobCategory: "Public",
        lpaRange: "₹7 - 21"
      }
    ]
  },
  {
    id: "state-police",
    label: "State Police Constable/SI",
    description: "State police recruitment exams. Salary ₹25,000-60,000 (state-wise).",
    jobCategory: "Public",
    lpaRange: "₹4 - 7",
    children: [
      {
        id: "police-constable",
        label: "Police Constable",
        description: "Patrolling, traffic management, law & order duties.",
        jobCategory: "Public",
        lpaRange: "₹4 - 6"
      },
      {
        id: "sub-inspector",
        label: "Sub-Inspector",
        description: "Investigation, station house officer duties, crime prevention.",
        jobCategory: "Public",
        lpaRange: "₹5 - 8"
      }
    ]
  },
  {
    id: "forest-guard",
    label: "Forest Guard/Wildlife Guard (State Forest Departments)",
    description: "Wildlife protection, forest patrolling. Salary ₹20,000-45,000 monthly.",
    jobCategory: "Public",
    lpaRange: "₹3 - 5",
    children: [
      {
        id: "forest-guard-job",
        label: "Forest Guard",
        description: "Anti-poaching patrols, forest fire control, wildlife census.",
        jobCategory: "Public",
        lpaRange: "₹3 - 5"
      }
    ]
  },
  {
    id: "paramilitary-capf",
    label: "CAPF Assistant Commandant (CRPF/BSF/ITBP/CISF)",
    description: "Assistant Commandant through UPSC CAPF exam. Salary ₹56,100-1,77,500.",
    jobCategory: "Public",
    lpaRange: "₹8 - 14",
    children: [
      {
        id: "capf-ac",
        label: "Assistant Commandant",
        description: "Company command, border security operations, counter-insurgency.",
        jobCategory: "Public",
        lpaRange: "₹8 - 14"
      }
    ]
  },
  {
    id: "bpo-call-center",
    label: "BPO/Call Center Executive",
    description: "Customer support, tele-sales, technical support via phone/chat for companies like Concentrix, Genpact, Amazon.",
    jobCategory: "Private",
    lpaRange: "₹2.5 - 5"
  },
  {
    id: "retail-sales",
    label: "Retail Sales Executive",
    description: "Customer service, billing, product display at Reliance Retail, Big Bazaar, D-Mart stores.",
    jobCategory: "Private",
    lpaRange: "₹2.5 - 4.5"
  },
  {
    id: "banking-sales",
    label: "Bank Sales Officer",
    description: "Sells credit cards, loans, insurance at HDFC/ICICI SBI branches, field sales targets.",
    jobCategory: "Private",
    lpaRange: "₹3 - 6"
  },
  {
    id: "front-desk",
    label: "Hotel Front Desk/Front Office",
    description: "Guest check-in/out, room bookings, billing at OYO, Treebo, budget hotels.",
    jobCategory: "Private",
    lpaRange: "₹2.8 - 5"
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing Executive",
    description: "Social media management, Google Ads, SEO for local businesses/SMEs.",
    jobCategory: "Private",
    lpaRange: "₹3 - 6"
  },
  {
    id: "data-entry-bpo",
    label: "Back Office/Data Entry Executive",
    description: "Form filling, Excel data processing for TCS BPO, Wipro BPO.",
    jobCategory: "Private",
    lpaRange: "₹2.5 - 4.5"
  },
  {
    id: "insurance-sales",
    label: "Insurance Sales Agent",
    description: "Sells health/life insurance policies for LIC agents, Max Life, HDFC Life.",
    jobCategory: "Private",
    lpaRange: "₹3 - 7"
  },
  {
    id: "field-sales",
    label: "Field Sales Representative",
    description: "Pharma medical representative, FMCG sales for Sun Pharma, HUL distributors.",
    jobCategory: "Private",
    lpaRange: "₹3 - 6"
  },
  {
    id: "logistics-delivery",
    label: "Logistics/Delivery Supervisor",
    description: "Team coordination, route planning for Delhivery, Blue Dart, DTDC.",
    jobCategory: "Private",
    lpaRange: "₹3 - 5.5"
  },
  {
    id: "customer-support",
    label: "Customer Support Executive",
    description: "Email/chat support for Flipkart, Myntra, Swiggy customer service.",
    jobCategory: "Private",
    lpaRange: "₹2.8 - 5"
  },
  {
    id: "telecaller",
    label: "Telecaller/Outbound Sales",
    description: "Lead generation, appointment setting for loan/credit card companies.",
    jobCategory: "Private",
    lpaRange: "₹2.5 - 5"
  },
  {
    id: "jr-accountant",
    label: "Junior Accountant",
    description: "Tally accounting, GST filing, payroll for CA firms/SMEs.",
    jobCategory: "Private",
    lpaRange: "₹2.8 - 4.5"
  },
  {
    id: "content-moderation",
    label: "Content Moderator",
    description: "Social media content review for Facebook, Instagram outsourcing firms.",
    jobCategory: "Private",
    lpaRange: "₹3 - 5"
  },
  {
    id: "pharma-sales",
    label: "Medical Representative",
    description: "Doctor visits, medicine promotion for Cipla, Sun Pharma field force.",
    jobCategory: "Private",
    lpaRange: "₹3.5 - 6"
  },
  {
    id: "aviation-ground",
    label: "Airport Ground Staff",
    description: "Passenger check-in, baggage handling for IndiGo, SpiceJet at airports.",
    jobCategory: "Private",
    lpaRange: "₹3 - 6"
  },
  {
    id: "bpo-international",
    label: "International Voice Process",
    description: "UK/US customer support (accent neutral) for Sykes, Teleperformance.",
    jobCategory: "Private",
    lpaRange: "₹4 - 7"
  },
  {
    id: "real-estate-sales",
    label: "Real Estate Sales Agent",
    description: "Property sales/leads for Godrej Properties, Signature Global.",
    jobCategory: "Private",
    lpaRange: "₹3 - 8"
  },
  {
    id: "ecommerce-operations",
    label: "E-commerce Operations Executive",
    description: "Order processing, inventory management for Amazon FBA sellers.",
    jobCategory: "Private",
    lpaRange: "₹3 - 5.5"
  }
]



