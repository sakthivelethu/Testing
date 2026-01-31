export const commerceDegreeData: Object[] = [
  {
    id: "degree-programs",
    label: "Degree Programs",
    children: [
      {
        id: "bcom-hons",
        label: "B.Com (Hons) + MBA Finance (5 Years)",
        description: "Financial management, corporate finance, investment analysis, risk management.",
        children: [
          {
            id: "investment-banker",
            label: "Investment Banking Analyst",
            description: "M&A deals, IPOs at Kotak Investment/JP Morgan.",
            lpaRange: "₹20 - 40"
          },
          {
            id: "cfo-path",
            label: "CFO/Finance Director",
            description: "Financial strategy for listed companies (Tata Steel/Reliance).",
            lpaRange: "₹50+"
          }
        ]
      },
      {
        id: "bba-analytics",
        label: "BBA Business Analytics + Data Science (4 Years)",
        description: "Python/R analytics, machine learning, financial modeling, big data.",
        children: [
          {
            id: "fintech-data-scientist",
            label: "Fintech Data Scientist",
            description: "Credit risk models, fraud detection at Paytm/Razorpay.",
            lpaRange: "₹18 - 35"
          }
        ]
      }
    ]
  },
  {
    id: "integrated-law",
    label: "Integrated Law Programs",
    children: [
      { id: "bcom-llb", label: "B.Com LLB (5 years)" },
      { id: "bba-llb", label: "BBA LLB (5 years)" }
    ]
  }
]

export const commerceStreamData: Object[] = [
  {
    id: "comm-math",
    label: "Commerce with Maths",
    description: "Quantitative stream for finance, analytics, actuarial science, and investment banking careers.",
    children: [
      {
        id: "professional-courses",
        label: "Professional Certifications",
        children: [
          {
            id: "ca",
            label: "Chartered Accountancy (CA - 4-5 Years)",
            description: "Financial accounting, audit, taxation, corporate laws, strategic financial management.",
            children: [
              {
                id: "ca-article",
                label: "CA Articleship (3 Years)",
                description: "Practical training under practicing CA, statutory audits, tax returns, compliance.",
                children: [
                  {
                    id: "ca-junior",
                    label: "Junior CA/Audit Associate",
                    description: "Big 4 audit (EY/PwC), statutory audit, tax compliance for listed companies.",
                    lpaRange: "₹6 - 10"
                  },
                  {
                    id: "ca-final",
                    label: "CA Practice/Manager",
                    description: "Owns CA firm, CFO roles, IPO audits, M&A advisory.",
                    lpaRange: "₹15 - 30"
                  },
                  {
                    id: "cpa-acca",
                    label: "CPA/ACCA + CA (1-2 Years)",
                    description: "US/UK qualifications for global practice, international financial reporting.",
                    children: [
                      {
                        id: "global-ca",
                        label: "Global Finance Head",
                        description: "CFO MNCs (Unilever/P&G), international tax structuring.",
                        lpaRange: "₹40 - 80"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "cfa",
            label: "CFA Level I-III (2-4 Years)",
            description: "Portfolio management, equity research, fixed income, derivatives, ethics.",
            children: [
              {
                id: "cfa-analyst",
                label: "Equity Research Analyst",
                description: "Stock recommendations, sector analysis at Motilal Oswal/ICICI Securities.",
                lpaRange: "₹12 - 25"
              },
              {
                id: "portfolio-manager",
                label: "Portfolio Manager",
                description: "Manages ₹5000cr+ mutual fund portfolios at HDFC AMC/SBI Mutual Fund.",
                lpaRange: "₹30 - 60"
              }
            ]
          },
          {
            id: "actuary",
            label: "Actuarial Science (8-10 Exams)",
            description: "Probability, financial mathematics, life insurance, risk management.",
            children: [
              {
                id: "actuarial-analyst",
                label: "Actuarial Analyst",
                description: "Premium pricing, reserve calculation at LIC/ICICI Prudential.",
                lpaRange: "₹15 - 30"
              },
              {
                id: "chief-actuary",
                label: "Chief Actuary",
                description: "IRDAI appointed actuary for insurance companies.",
                lpaRange: "₹50+"
              }
            ]
          }
        ]
      },
      ...commerceDegreeData
    ]
  },
  {
    id: "comm-nomath",
    label: "Commerce without Maths",
    description: "Management, marketing, HR, hospitality, entrepreneurship careers.",
    children: [
      {
        id: "management-programs",
        label: "Management Degrees",
        children: [
          {
            id: "bba",
            label: "BBA + MBA Marketing/HR (5 Years)",
            description: "Consumer behavior, brand management, digital marketing, organizational behavior.",
            children: [
              {
                id: "brand-manager",
                label: "Brand Manager",
                description: "Manages Pepsi/Nike brands, campaign strategy, market research.",
                lpaRange: "₹15 - 30"
              },
              {
                id: "hr-business-partner",
                label: "HR Business Partner",
                description: "Talent acquisition, employee engagement at Accenture/TCS.",
                lpaRange: "₹18 - 35"
              }
            ]
          },
          { id: "bcom", label: "B.Com (General)" },
          { id: "bba", label: "BBA (General Management)" },
          { id: "bba-mkt", label: "BBA Marketing" },
          { id: "bba-hr", label: "BBA Human Resources" },
          { id: "bba-ib", label: "BBA International Business" },
          { id: "bba-entrepreneurship", label: "BBA Entrepreneurship" },
          { id: "bms-general", label: "BMS (General)" }
        ]
      },
      {
        id: "hospitality-tourism",
        label: "Hospitality & Tourism",
        children: [
          {
            id: "hotel-mgmt",
            label: "BHM + MBA Hospitality (5 Years)",
            description: "Hotel operations, F&B management, revenue management, luxury hospitality.",
            children: [
              {
                id: "hotel-gm",
                label: "Hotel General Manager",
                description: "Manages Taj/Oberoi properties, 300+ rooms, ₹100cr+ revenue.",
                lpaRange: "₹25 - 50"
              }
            ]
          },
          { id: "hotel-mgmt", label: "BHM (Hotel Management)" },
          { id: "bhmct", label: "BHMCT (Hotel Mgmt & Catering)" },
          { id: "travel-tourism", label: "BTTM (Travel & Tourism)" },
          { id: "bba-airlines", label: "BBA Aviation / Airlines" }
        ]
      },
      {
        id: "creative-commerce",
        label: "Design & Media",
        children: [
          { id: "fashion-design-comm", label: "Fashion Designing" },
          { id: "interior-design-comm", label: "Interior Designing" },
          { id: "bba-media", label: "BBA Media Management" },
          { id: "advertising", label: "Advertising & Brand Management" }
        ]
      },
      {
        id: "law-general",
        label: "Law (Standalone)",
        children: [
          { id: "ba-llb", label: "BA LLB (5 years)" },
          { id: "llb-3yr", label: "LLB (3 years after graduation)" }
        ]
      }
    ]
  },
  {
    id: "diploma-certificates",
    label: "Diploma & Certificate Courses",
    description: "Short-term professional courses alongside PUC Commerce.",
    children: [
      {
        id: "tally",
        label: "Tally + GST Certification (3 Months)",
        description: "Accounting software, GST compliance, payroll, inventory management.",
        children: [
          {
            id: "tally-accountant",
            label: "Accounts Executive",
            description: "Bookkeeping, GST returns for SMEs.",
            lpaRange: "₹2.5 - 5"
          },
          {
            id: "advanced-excel",
            label: "Advanced Excel + Power BI (6 Months)",
            description: "Financial modeling, dashboards, VBA automation, data visualization.",
            children: [
              {
                id: "financial-analyst",
                label: "Financial Analyst",
                description: "Budgeting, forecasting, MIS reports for corporates.",
                lpaRange: "₹5 - 10"
              }
            ]
          }
        ]
      },
      {
        id: "finance-accounting",
        label: "Finance & Accounting",
        children: [
          { id: "tally", label: "Tally with GST" },
          { id: "advanced-excel", label: "Advanced Excel & MIS" },
          { id: "digital-accounting", label: "Digital Accounting" },
          { id: "taxation-diploma", label: "Diploma in Taxation" }
        ]
      },
      {
        id: "digital-business",
        label: "Digital & E-Commerce",
        children: [
          { id: "digital-marketing", label: "Digital Marketing" },
          { id: "ecommerce-mgmt", label: "E-Commerce Management" },
          { id: "seo-sm", label: "SEO & Social Media Marketing" }
        ]
      },
    ]
  }
]
