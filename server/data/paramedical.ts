export const paramedicalData: Object[] = [
  {
    id: "mlt",
    label: "Medical Lab Technician (DMLT - 2 Years)",
    description: "Diploma covering hematology, biochemistry, microbiology, clinical pathology, phlebotomy, sample processing.",
    children: [
      {
        id: "mlt-job1",
        label: "Junior Lab Technician",
        description: "Routine blood tests, sample collection, centrifuge operation, basic staining in small labs/clinics.",
        lpaRange: "₹2.5 - 4"
      },
      {
        id: "mlt-job2",
        label: "Lab Supervisor",
        description: "Manages daily operations, QC checks, staff training, instrument calibration in mid-size pathology labs.",
        lpaRange: "₹4 - 6"
      },
      {
        id: "mlt-bscmlt",
        label: "B.Sc Medical Laboratory Technology (3+1 Years)",
        description: "Degree program with advanced histopathology, immunology, molecular biology, hematology analyzer operation.",
        children: [
          {
            id: "bscmlt-mscmlt",
            label: "M.Sc Clinical Laboratory Science (2 Years)",
            description: "Research methodology, advanced molecular diagnostics, quality management, biostatistics.",
            children: [
              {
                id: "mlt-senior-scientist",
                label: "Senior Lab Scientist",
                description: "Method validation, research projects, COVID/antibody testing at Thyrocare/Metropolis.",
                lpaRange: "₹8 - 15"
              },
              {
                id: "mlt-quality-control-head",
                label: "Quality Control Manager",
                description: "NABL accreditation, ISO 15189 compliance, proficiency testing coordination.",
                lpaRange: "₹12 - 20"
              },
              {
                id: "mlt-phd",
                label: "Ph.D Laboratory Medicine (3-5 Years)",
                description: "Thesis on cancer biomarkers, infectious disease diagnostics, AI pathology research.",
                children: [
                  {
                    id: "mlt-research-director",
                    label: "Research Director",
                    description: "Heads R&D at diagnostic chains, ICMR projects, patents molecular tests.",
                    lpaRange: "₹20 - 40"
                  },
                  {
                    id: "mlt-professor",
                    label: "Professor/Principal",
                    description: "Heads paramedical college, guides PhD students, MCI inspector.",
                    lpaRange: "₹25 - 50"
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
    id: "ott",
    label: "Operation Theatre Technician (1-2 Years Certificate/Diploma)",
    description: "OT setup, sterilization, surgical instrument handling, patient positioning, emergency crash cart management.",
    children: [
      {
        id: "ott-job",
        label: "OT Technician",
        description: "Assists minor/major surgeries, maintains OT sterility, handles laparoscopic equipment.",
        lpaRange: "₹2.8 - 4.5"
      },
      {
        id: "ott-supervisor",
        label: "OT Supervisor",
        description: "Schedules 6-8 OTs daily, staffs rostering, CSSD management in 300+ bed hospitals.",
        lpaRange: "₹5 - 8"
      },
      {
        id: "ott-bsc",
        label: "B.Sc Operation Theatre & Anesthesia Technology (3+1 Years)",
        description: "Advanced OT management, robotic surgery, cardiac OT, anesthesia machine operation.",
        children: [
          {
            id: "ott-msc",
            label: "M.Sc Perfusion Technology (2 Years)",
            description: "Heart-lung machine operation, ECMO, cardiac surgery perfusion, blood gas analysis.",
            children: [
              {
                id: "perfusionist-job",
                label: "Perfusionist",
                description: "Operates HLM during bypass surgeries at Narayana Health/Fortis cardiac centers.",
                lpaRange: "₹12 - 25"
              },
              {
                id: "robotic-surgery-coordinator",
                label: "Robotic Surgery Coordinator",
                description: "Da Vinci Xi system operation, robotic cardiac/general surgeries assistance.",
                lpaRange: "₹10 - 18"
              },
              {
                id: "ott-phd",
                label: "Ph.D Surgical Technology (3-5 Years)",
                description: "Research in minimally invasive surgery, robotic surgery outcomes, OT efficiency.",
                children: [
                  {
                    id: "ott-academic-director",
                    label: "Academic Director/Professor",
                    description: "Heads OT technology dept, develops national curriculum, AIIMS faculty.",
                    lpaRange: "₹18 - 35"
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
