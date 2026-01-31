export const creativeDesignData: Object[] = [
  {
    id: "fashion-design",
    label: "Fashion Designing (Certificate/Diploma - 6 Months-2 Years)",
    description: "Pattern making, garment construction, fabric selection, fashion illustration, trend forecasting basics.",
    children: [
      {
        id: "fashion-job",
        label: "Junior Fashion Designer/Stylist",
        description: "Assists senior designers, creates samples, styling for photoshoots, boutique collections.",
        lpaRange: "₹2.5 - 5"
      },
      {
        id: "fashion-diploma",
        label: "Diploma in Fashion Design (1-2 Years)",
        description: "Advanced pattern drafting, draping, CAD fashion software, garment technology, portfolio development.",
        children: [
          {
            id: "bdes-fashion",
            label: "B.Des Fashion Design (4 Years)",
            description: "Textile science, fashion history, apparel production, branding, international fashion markets (NIFT/NID).",
            children: [
              {
                id: "fashion-designer",
                label: "Fashion Designer",
                description: "Creates seasonal collections for export houses, creates wedding couture, works with Spykar/Raymond.",
                lpaRange: "₹5 - 12"
              },
              {
                id: "merchandiser",
                label: "Merchandiser",
                description: "Coordinates production with factories, buyer liaison, quality control for Zara/H&M suppliers.",
                lpaRange: "₹6 - 15"
              },
              {
                id: "mdes-fashion",
                label: "M.Des Fashion Design/Management (2 Years)",
                description: "Fashion business management, retail brand management, luxury brand strategy, supply chain.",
                children: [
                  {
                    id: "fashion-brand-manager",
                    label: "Fashion Brand Manager",
                    description: "Manages Jack&Jones/Allen Solly collections, store merchandising, sales forecasting.",
                    lpaRange: "₹15 - 30"
                  },
                  {
                    id: "textile-technologist",
                    label: "Textile Technologist",
                    description: "Develops technical fabrics, sustainable textiles for Raymond/Arvind Mills.",
                    lpaRange: "₹12 - 25"
                  },
                  {
                    id: "phd-fashion-tech",
                    label: "Ph.D Fashion Technology/Textile Innovation (3-5 Years)",
                    description: "Smart textiles research, sustainable fashion, wearable technology, circular fashion systems.",
                    children: [
                      {
                        id: "fashion-research-head",
                        label: "Fashion Research Head/Professor",
                        description: "Heads NIFT research center, publishes fashion technology papers, consults for Ministry of Textiles.",
                        lpaRange: "₹25 - 50"
                      },
                      {
                        id: "sustainable-fashion-consultant",
                        label: "Sustainable Fashion Consultant",
                        description: "Advises Aditya Birla/ Reliance on eco-fashion, circular economy strategies.",
                        lpaRange: "₹30 - 60"
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
  },
  {
    id: "interior-design",
    label: "Interior Designing (Certificate/Diploma - 6 Months-2 Years)",
    description: "Space planning, 2D/3D visualization, material selection, basic AutoCAD, furniture design.",
    children: [
      {
        id: "interior-job",
        label: "Junior Interior Designer",
        description: "Assists in residential projects, site measurements, material selection, basic 3D renderings.",
        lpaRange: "₹3 - 6"
      },
      {
        id: "interior-diploma",
        label: "Diploma in Interior Design (1-2 Years)",
        description: "Advanced 3ds Max/V-Ray, Revit MEP, lighting design, commercial space planning.",
        children: [
          {
            id: "bdes-interior",
            label: "B.Des Interior & Spatial Design (4 Years)",
            description: "Architectural integration, universal design, sustainable interiors, hospitality design (NID/CEPT).",
            children: [
              {
                id: "interior-designer",
                label: "Interior Designer",
                description: "Designs homes, offices, restaurants for Livspace/HomeLane, 3D walkthroughs.",
                lpaRange: "₹6 - 15"
              },
              {
                id: "project-manager-interior",
                label: "Interior Project Manager",
                description: "Manages ₹5-50cr interior projects, vendor coordination, client relations.",
                lpaRange: "₹10 - 20"
              },
              {
                id: "mdes-interior",
                label: "M.Des Interior Space & Equipment (2 Years)",
                description: "Healthcare facility design, retail experience design, adaptive reuse, building codes.",
                children: [
                  {
                    id: "hospitality-design-head",
                    label: "Hospitality Design Head",
                    description: "Designs Taj/Oberoi hotels, airport lounges, luxury residential projects.",
                    lpaRange: "₹20 - 40"
                  },
                  {
                    id: "sustainable-interior-consultant",
                    label: "Sustainable Interior Consultant",
                    description: "LEED/GRIHA interiors, green building materials, biophilic design strategies.",
                    lpaRange: "₹18 - 35"
                  },
                  {
                    id: "phd-interior-architecture",
                    label: "Ph.D Interior Architecture/Experience Design (3-5 Years)",
                    description: "Spatial psychology research, neuroarchitecture, multisensory environments.",
                    children: [
                      {
                        id: "design-professor",
                        label: "Design Professor/Dean",
                        description: "Heads NID/SPA interior dept, guides PhD research, international design jury.",
                        lpaRange: "₹25 - 50"
                      },
                      {
                        id: "experience-design-director",
                        label: "Experience Design Director",
                        description: "Creates retail CX for DLF malls, airport interiors for GMR, museum exhibitions.",
                        lpaRange: "₹35 - 70"
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
  }
]
