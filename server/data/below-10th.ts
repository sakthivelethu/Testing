export const coursesAfter10thFail: Object[] = [
  {
    id: "iti-courses",
    label: "ITI Vocational Training (6 Months - 2 Years)",
    description: "Industrial Training Institute certificate courses in technical trades. Government recognized, hands-on training. Fees ₹5,000-20,000.",
    children: [
      {
        id: "iti-electrician",
        label: "ITI Electrician (2 Years)",
        description: "Electrical wiring, motor repair, domestic/industrial installations, safety standards.",
        children: [
          {
            id: "electrician-job",
            label: "Electrician",
            description: "House wiring, motor rewinding, maintenance in factories/residential buildings.",
            lpaRange: "₹2.5 - 5"
          },
          {
            id: "supervisor-electrical",
            label: "Electrical Supervisor",
            description: "Site supervision, 10-20 workers, government electrical contracts.",
            lpaRange: "₹5 - 8"
          }
        ]
      },
      {
        id: "iti-fitter",
        label: "ITI Fitter (2 Years)",
        description: "Machine fitting, assembly, blueprint reading, precision measurement tools.",
        children: [
          {
            id: "fitter-job",
            label: "Fitter",
            description: "Machine installation, maintenance in auto/engineering workshops.",
            lpaRange: "₹2.8 - 5.5"
          }
        ]
      },
      {
        id: "iti-welder",
        label: "ITI Welder (1 Year)",
        description: "Arc welding, gas cutting, electrode selection, safety gear handling.",
        children: [
          {
            id: "welder-job",
            label: "Welder",
            description: "Steel fabrication, shipbuilding, pipeline welding.",
            lpaRange: "₹2.5 - 5"
          }
        ]
      },
      {
        id: "iti-plumber",
        label: "ITI Plumber (1 Year)",
        description: "Pipe fitting, water supply systems, sanitary installations.",
        children: [
          {
            id: "plumber-job",
            label: "Plumber",
            description: "Residential/commercial plumbing, leakage repairs.",
            lpaRange: "₹2.2 - 4.5"
          }
        ]
      }
    ]
  },
  {
    id: "diploma-courses",
    label: "Diploma Certificate Courses (6-12 Months)",
    description: "Short-term skill diplomas from private institutes/NSQF centers. Practical training focused.",
    children: [
      {
        id: "dca-computer",
        label: "Diploma in Computer Applications (6 Months)",
        description: "MS Office, Tally GST, basic internet, typing skills.",
        children: [
          {
            id: "computer-operator",
            label: "Computer Operator/Data Entry",
            description: "Excel data processing, invoice entry, office automation.",
            lpaRange: "₹2 - 4"
          },
          {
            id: "tally-operator",
            label: "Tally Operator",
            description: "GST billing, accounts maintenance for SMEs.",
            lpaRange: "₹2.5 - 4.5"
          }
        ]
      },
      {
        id: "beautician-course",
        label: "Beautician/Beauty & Wellness (3-6 Months)",
        description: "Hair cutting, makeup, skincare, bridal makeup techniques.",
        children: [
          {
            id: "beautician-job",
            label: "Beautician",
            description: "Salon services, home bridal makeup, beauty parlor work.",
            lpaRange: "₹2.5 - 5"
          }
        ]
      },
      {
        id: "tailoring-course",
        label: "Diploma in Tailoring (6 Months)",
        description: "Stitching machines, pattern making, garment construction.",
        children: [
          {
            id: "tailor-job",
            label: "Tailor",
            description: "Custom clothing, alterations in local tailoring shops.",
            lpaRange: "₹2.2 - 4.5"
          }
        ]
      }
    ]
  },
  {
    id: "skill-certificates",
    label: "PMKVY/NSQF Skill Certificates (1-3 Months)",
    description: "Pradhan Mantri Kaushal Vikas Yojana short skill programs. Free/subsidized government training.",
    children: [
      {
        id: "retail-salesman",
        label: "Retail Trainee Associate (1 Month)",
        description: "Customer service, billing, inventory management.",
        children: [
          {
            id: "retail-job",
            label: "Retail Salesman",
            description: "Shop assistant, cashier in supermarkets/malls.",
            lpaRange: "₹2 - 4"
          }
        ]
      },
      {
        id: "domestic-worker",
        label: "Domestic Worker/Caregiver (15 Days)",
        description: "Housekeeping, elderly/child care, cooking basics.",
        children: [
          {
            id: "maid-job",
            label: "House Maid/Cook (+ food)",
            description: "Home cleaning, cooking in urban households.",
            lpaRange: "₹2 - 3.5"
          }
        ]
      },
      {
        id: "security-guard",
        label: "Security Guard Training (1 Month)",
        description: "CCTV monitoring, access control, emergency response.",
        children: [
          {
            id: "guard-job",
            label: "Security Guard",
            description: "Building/factory guarding, night watchman duties.",
            lpaRange: "₹2.5 - 4.5"
          }
        ]
      }
    ]
  },
  {
    id: "nsdc-courses",
    label: "NSDC Sector Skill Courses (3-6 Months)",
    description: "National Skill Development Corporation training in 37 sectors. Placement assistance.",
    children: [
      {
        id: "driver-training",
        label: "Commercial Driving License Training (1 Month)",
        description: "Heavy vehicle driving, road safety, vehicle maintenance.",
        children: [
          {
            id: "driver-job",
            label: "Truck/Lorry Driver",
            description: "Long-haul transport, logistics delivery.",
            lpaRange: "₹3 - 6"
          }
        ]
      },
      {
        id: "two-wheeler-mechanic",
        label: "Two Wheeler Mechanic (3 Months)",
        description: "Bike/scooter repair, engine tuning, spare parts.",
        children: [
          {
            id: "bike-mechanic",
            label: "Two Wheeler Mechanic",
            description: "Bike service stations, roadside repairs.",
            lpaRange: "₹2.5 - 5"
          }
        ]
      }
    ]
  },
  {
    id: "open-schooling",
    label: "NIOS Open Schooling (2 Years)",
    description: "National Institute of Open Schooling for 10th/12th certification. Flexible exams, valid for jobs/college.",
    children: [
      {
        id: "nios-pass",
        label: "10th/12th Certification",
        description: "Complete secondary education through open schooling, eligible for higher courses/jobs requiring 10th pass.",
        children: [
          {
            id: "post-nios-jobs",
            label: "Entry-Level Jobs",
            description: "All 10th pass jobs become accessible after NIOS certification.",
            lpaRange: "₹2 - 4"
          }
        ]
      }
    ]
  }
]
