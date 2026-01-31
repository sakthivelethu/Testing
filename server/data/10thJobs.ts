export const govt10thJobsData: Object[] = [
  {
    id: "defence",
    label: "Defence Services",
    children: [
      {
        id: "army",
        label: "Indian Army",
        children: [
          { id: "army-soldier-gd", label: "Soldier General Duty" },
          { id: "army-soldier-tech", label: "Soldier Technical" },
          { id: "army-clerk", label: "Army Clerk / Store Keeper" }
        ]
      },
      {
        id: "navy",
        label: "Indian Navy",
        children: [
          { id: "navy-matrick", label: "Matric Recruit (MR)" },
          { id: "navy-ssr", label: "Senior Secondary Recruit (SSR)" }
        ]
      },
      {
        id: "airforce",
        label: "Indian Air Force",
        children: [
          { id: "iaf-groupy", label: "Group Y Trades" }
        ]
      }
    ]
  },
  {
    id: "police",
    label: "Police Constable",
    children: [
      { id: "police-constable-job", label: "Constable" },
      { id: "police-head-constable", label: "Head Constable" }
    ]
  },
  {
    id: "railways",
    label: "Railways",
    children: [
      { id: "railway-tc", label: "Ticket Collector" },
      { id: "railway-groupd", label: "Group D Posts" }
    ]
  },
  {
    id: "railways-group-d",
    label: "RRB Group D (Track Maintainer, Helper, Assistant Pointsman)",
    description: "Railway track maintenance, station platform cleaning, signal assistance. Salary ₹18,000-25,000 + allowances. Age 18-33 years, exam-based selection.",
    children: [
      {
        id: "trackman",
        label: "Trackman/Track Maintainer",
        description: "Inspects/repairs railway tracks, replaces sleepers, monitors track alignment.",
        lpaRange: "₹3 - 4.2"
      },
      {
        id: "pointsman",
        label: "Assistant Pointsman",
        description: "Operates railway points/levers, signals train movements at stations.",
        lpaRange: "₹3 - 4.2"
      },
      {
        id: "helper-railways",
        label: "Track/Hospital Helper",
        description: "General labor, cleaning, material handling at railway hospitals/stations.",
        lpaRange: "₹2.16 - 3"
      }
    ]
  },
  {
    id: "ssc-mts",
    label: "SSC MTS (Multi-Tasking Staff)",
    description: "Office peon, daftary, jamadar, chowkidar roles in central government ministries. Salary ₹18,000-56,900 + allowances. Age 18-25/27 years.",
    children: [
      {
        id: "peon-mts",
        label: "Peon/MTS",
        description: "Office messenger, document delivery, cleaning government offices.",
        lpaRange: "₹2.16 - 3"
      },
      {
        id: "chowkidar",
        label: "Chowkidar/Watchman",
        description: "Night guarding of government buildings/offices.",
        lpaRange: "₹2.16 - 3"
      }
    ]
  },
  {
    id: "ssc-gd-constable",
    label: "SSC GD Constable (CAPF, SSF, Rifleman, etc.)",
    description: "General duty police in CRPF/BSF/ITBP/CISF/SSF/Assam Rifles. Salary ₹21,700-69,100 + allowances. Age 18-23 years, physical tests.",
    children: [
      {
        id: "rifleman-gd",
        label: "Rifleman GD",
        description: "Border patrolling, internal security duties in paramilitary forces.",
        lpaRange: "₹3 - 4.8"
      },
      {
        id: "constable-capf",
        label: "Constable CAPF",
        description: "Law & order maintenance, VIP security in Central Armed Police Forces.",
        lpaRange: "₹3 - 4.8"
      }
    ]
  },
  {
    id: "indian-post-gds",
    label: "India Post Gramin Dak Sevak (GDS)",
    description: "Village postman, postal assistant in rural areas. Salary ₹10,000-29,000 + incentives. Age 18-40 years, merit-based.",
    children: [
      {
        id: "gds-postman",
        label: "GDS Postman",
        description: "Door-to-door mail delivery, money orders in villages.",
        lpaRange: "₹1.44 - 3"
      },
      {
        id: "gds-assistant",
        label: "GDS Assistant",
        description: "Postal counter work, stamp sales, small savings schemes.",
        lpaRange: "₹1.2 - 2.4"
      }
    ]
  },
  {
    id: "indian-army-agniveer",
    label: "Indian Army Agniveer (GD, Tradesman)",
    description: "Soldier General Duty, Chef, Washerman under Agnipath scheme (4-year service). Salary ₹30,000-40,000 monthly + package. Age 17.5-23 years.",
    children: [
      {
        id: "agniveer-gd",
        label: "Agniveer GD",
        description: "Infantry soldier duties, weapons handling, field operations.",
        lpaRange: "₹3.6 - 4.8"
      },
      {
        id: "agniveer-tradesman",
        label: "Agniveer Tradesman",
        description: "Army cook, tailor, washerman supporting military logistics.",
        lpaRange: "₹3 - 4.2"
      }
    ]
  },
  {
    id: "state-police-constable",
    label: "State Police Constable",
    description: "State police uniform jobs. Salary ₹20,000-40,000 + allowances (varies by state). Age 18-25 years, physical efficiency test.",
    children: [
      {
        id: "police-constable",
        label: "Police Constable",
        description: "Patrolling, traffic control, law & order maintenance in state police.",
        lpaRange: "₹3 - 5.4"
      }
    ]
  },
  {
    id: "rbi-office-attendant",
    label: "RBI Office Attendant",
    description: "Office support staff in Reserve Bank of India. Salary ₹14,500-36,500 + allowances. Age 18-25 years.",
    children: [
      {
        id: "rbi-attendant",
        label: "Office Attendant",
        description: "Office cleaning, messenger duties, record room work at RBI branches.",
        lpaRange: "₹3 - 4.8"
      }
    ]
  },
  {
    id: "forest-guard",
    label: "Forest Guard (State Forest Departments)",
    description: "Wildlife protection, forest patrolling. Salary ₹15,000-35,000 (state-wise). Age 18-30 years.",
    children: [
      {
        id: "forest-guard-job",
        label: "Forest Guard",
        description: "Anti-poaching patrols, fire watch, wildlife census in state forests.",
        lpaRange: "₹2.4 - 4.2"
      }
    ]
  },
  {
    id: "bro-multi-tasking",
    label: "BRO Multi-Tasking Staff (Border Roads Organisation)",
    description: "Road construction support in border areas. Salary ₹18,000-56,900. Age 18-25 years.",
    children: [
      {
        id: "bro-helper",
        label: "MTS/Helper",
        description: "Road building assistance, snow clearance in Ladakh/Arunachal.",
        lpaRange: "₹2.16 - 3"
      }
    ]
  }
]


export const private10thJobsData: Object[] = [
  {
    id: "lic-agent",
    label: "LIC Agent",
    children: [
      { id: "lic-agent-job", label: "Insurance Agent" },
      { id: "lic-agency-dev", label: "Agency Development Officer" }
    ]
  },
  {
    id: "bank-clerical",
    label: "Bank Clerical Exams",
    children: [
      { id: "bank-clerk-job", label: "Bank Clerk / PO" }
    ]
  },
  {
    id: "construction-labor",
    label: "Construction Laborer",
    description: "Carries bricks/cement bags, mixes concrete manually, basic excavation work at building sites.",
    lpaRange: "₹1.5 - 2.5"
  },
  {
    id: "factory-helper",
    label: "Factory Helper",
    description: "Material loading/unloading, machine cleaning, packing finished goods in small factories.",
    lpaRange: "₹1.6 - 2.8"
  },
  {
    id: "shop-assistant",
    label: "Shop Assistant",
    description: "Customer billing, product arrangement, stock counting in kirana/grocery stores.",
    lpaRange: "₹1.8 - 3"
  },
  {
    id: "delivery-boy",
    label: "Delivery Boy",
    description: "Package/bike delivery for local shops, Swiggy/Zomato using bicycle or bike.",
    lpaRange: "₹2 - 4"
  },
  {
    id: "car-washer",
    label: "Car Washer",
    description: "Vehicle exterior cleaning, bucket washing at petrol pumps/service stations.",
    lpaRange: "₹1.5 - 2.5"
  },
  {
    id: "waiter-helper",
    label: "Waiter Helper",
    description: "Table clearing, water serving, dish carrying assistance in dhabas/restaurants.",
    lpaRange: "₹1.5 - 2.5"
  },
  {
    id: "kitchen-helper",
    label: "Kitchen Helper",
    description: "Vegetable cutting, dish washing, garbage disposal in small eateries.",
    lpaRange: "₹1.6 - 2.8"
  },
  {
    id: "office-boy",
    label: "Office Boy/Peon",
    description: "Document delivery between offices, photocopying, tea/coffee service.",
    lpaRange: "₹1.5 - 2.5"
  },
  {
    id: "housekeeping",
    label: "Housekeeping Attendant",
    description: "Sweeping, mopping, toilet cleaning in budget hotels/hostels.",
    lpaRange: "₹1.8 - 3"
  },
  {
    id: "farm-labor",
    label: "Farm Laborer",
    description: "Crop planting assistance, irrigation canal cleaning, animal feeding.",
    lpaRange: "₹1.5 - 2.5"
  },
  {
    id: "loading-unloading",
    label: "Loading/Unloading Worker",
    description: "Goods handling at railway stations, truck loading bays, warehouses.",
    lpaRange: "₹1.8 - 3"
  },
  {
    id: "tailor-assistant",
    label: "Tailor Assistant",
    description: "Thread cutting, button fixing, cloth ironing in local tailoring shops.",
    lpaRange: "₹2 - 3.5"
  },
  {
    id: "watchman-security",
    label: "Watchman/Security Guard",
    description: "Night guarding, gate entry checking at small factories/shops/residential areas.",
    lpaRange: "₹2 - 4"
  },
  {
    id: "gardener-helper",
    label: "Gardener Helper",
    description: "Grass cutting, plant watering, leaf sweeping in residential societies.",
    lpaRange: "₹1.8 - 3"
  },
  {
    id: "sweeper-cleaner",
    label: "Sweeper/Cleaner",
    description: "Road/street sweeping, public toilet cleaning by municipal corporations.",
    lpaRange: "₹1.5 - 2.5"
  }
]