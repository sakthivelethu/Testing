export const computerCoursesData: Object[] = [
  {
    id: "ms-cit",
    label: "MS-CIT (2-3 Months)",
    description: "Maharashtra State Certificate in Information Technology - MS Office, internet basics, computer fundamentals, email, file management.",
    children: [
      {
        id: "ms-cit-job",
        label: "Computer Operator/Data Entry",
        description: "Basic Excel data processing, invoice entry, payroll support, office automation in SMEs/small businesses.",
        lpaRange: "₹1.8 - 3.5"
      },
      {
        id: "advance-ms-office",
        label: "Advanced MS Office Certification (3 Months)",
        description: "Excel VBA macros, Power BI dashboards, advanced Word formatting, Access database basics.",
        children: [
          {
            id: "tally-accountant-job",
            label: "Tally Accountant",
            description: "GST billing, balance sheet preparation, inventory management for retail/trading firms.",
            lpaRange: "₹2.5 - 5"
          },
          {
            id: "data-analyst-junior",
            label: "Junior Data Analyst",
            description: "Excel dashboards, MIS reports, sales data analysis for marketing teams.",
            lpaRange: "₹3 - 6"
          },
          {
            id: "cca-dca",
            label: "CCA/DCA - Computer Course (6 Months)",
            description: "Advanced Tally GST, CorelDRAW, PageMaker, basic HTML/CSS, Photoshop basics.",
            children: [
              {
                id: "web-designer-junior",
                label: "Junior Web Designer",
                description: "Static websites, brochure design, social media graphics for local businesses.",
                lpaRange: "₹3.5 - 6"
              },
              {
                id: "bca-foundation",
                label: "BCA Foundation (3 Years)",
                description: "Programming fundamentals (C/Java), DBMS, web development, computer networks.",
                children: [
                  {
                    id: "software-trainee",
                    label: "Software Trainee",
                    description: "Basic web apps, database management, testing at TCS/Wipro training programs.",
                    lpaRange: "₹4 - 8"
                  },
                  {
                    id: "mca-pathway",
                    label: "MCA - Master of Computer Applications (2 Years)",
                    description: "Advanced Java/.NET, data structures, software engineering, cloud computing.",
                    children: [
                      {
                        id: "software-engineer",
                        label: "Software Engineer",
                        description: "Backend development, API integration, enterprise applications at Infosys/HCL.",
                        lpaRange: "₹6 - 15"
                      },
                      {
                        id: "mtech-cse-path",
                        label: "M.Tech Computer Science (2 Years)",
                        description: "AI/ML algorithms, cybersecurity, distributed systems, research methodology.",
                        children: [
                          {
                            id: "data-scientist",
                            label: "Data Scientist",
                            description: "ML models, predictive analytics at Flipkart/Amazon data teams.",
                            lpaRange: "₹15 - 30"
                          },
                          {
                            id: "phd-computer-science",
                            label: "Ph.D Computer Science (3-5 Years)",
                            description: "Thesis research in AI ethics, quantum computing, cybersecurity, blockchain.",
                            children: [
                              {
                                id: "research-scientist",
                                label: "Research Scientist",
                                description: "AI research at Google Research, publishes top conference papers (NeurIPS).",
                                lpaRange: "₹25 - 50"
                              },
                              {
                                id: "professor-cse",
                                label: "Professor/Dean CSE",
                                description: "Heads IIT/NIT CSE department, guides PhD students, ISRO consultant.",
                                lpaRange: "₹30 - 70"
                              },
                              {
                                id: "cto-startup",
                                label: "CTO/Tech Lead",
                                description: "Technical leadership at Zoho/Freshworks, AI product strategy.",
                                lpaRange: "₹40+"
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
      }
    ]
  },
  {
    id: "computer-courses",
    label: "Short-term Computer Courses (3-6 Months)",
    description: "Tally GST, graphic design (Photoshop/Illustrator), web design (HTML/CSS), digital marketing basics.",
    children: [
      {
        id: "tally-job",
        label: "Tally Operator/Accountant",
        description: "GST returns, balance sheets, inventory tracking for retail/wholesale businesses.",
        lpaRange: "₹2.5 - 5"
      },
      {
        id: "graphic-design-job",
        label: "Graphic Designer",
        description: "Social media graphics, brochures, logos for local businesses/ad agencies.",
        lpaRange: "₹3 - 6"
      },
      {
        id: "web-development-cert",
        label: "Web Development Certification (6 Months)",
        description: "HTML5/CSS3, JavaScript, WordPress, basic React, responsive design.",
        children: [
          {
            id: "freelance-web-dev",
            label: "Freelance Web Developer",
            description: "WordPress sites, e-commerce stores for SMEs, Upwork projects.",
            lpaRange: "₹4 - 8"
          },
          {
            id: "fullstack-pathway",
            label: "Full Stack Development (MERN/PERN - 1 Year)",
            description: "MongoDB/Express/React/Node.js, API development, deployment (AWS/Heroku).",
            children: [
              {
                id: "fullstack-developer",
                label: "Full Stack Developer",
                description: "End-to-end web apps at unicorns like Postman, Razorpay.",
                lpaRange: "₹8 - 18"
              },
              {
                id: "devops-engineer",
                label: "DevOps Engineer",
                description: "CI/CD pipelines, Docker/Kubernetes, AWS cloud deployment.",
                lpaRange: "₹12 - 25"
              }
            ]
          }
        ]
      },
      {
        id: "digital-marketing-cert",
        label: "Digital Marketing Certification (3-6 Months)",
        description: "Google Ads, Facebook Ads, SEO, content marketing, Google Analytics.",
        children: [
          {
            id: "digital-marketer",
            label: "Digital Marketing Executive",
            description: "Social media management, Google Ads campaigns for SMEs.",
            lpaRange: "₹4 - 9"
          }
        ]
      }
    ]
  }
]
