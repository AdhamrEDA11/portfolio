export const profile = {
  name: "Adham Reda",
  fullName: "Adham Reda Gazi Shapaan",
  title: "Data Analyst",
  location: "El Mansoura, Dakahlia, Egypt",
  email: "adhashmax@gmail.com",
  linkedin: "https://linkedin.com/in/adham-reda77",
  github: "https://github.com/AdhamrEDA11",
  whatsapp: "https://wa.me/201027653324",
  formspreeFormId: "xbgjooaa",
  resumeUrl: "/Adham_Reda_CV.pdf"
};

export type Insight = { label: string; value: string };

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  type: string;
  title: string;
  objective: string;
  description: string;
  tools: string[];
  datasetScale: string;
  keyResultLabel: string;
  keyResultValue: string;
  image: string;
  githubUrl?: string;
  insights: Insight[];
  workflow: { group: string; items: string[] }[];
  caseStudy: CaseStudySection[];
  recommendations: string[];
};

export const projects: Project[] = [
  {
    slug: "space-tourism-booking-dashboard",
    type: "Power BI · End-to-End Analytics",
    title: "Space Tourism Booking Dashboard",
    objective:
      "Analyze three years of space tourism booking data to understand revenue drivers, customer segments, and provider performance.",
    description:
      "Built an interactive Power BI dashboard to analyze 3 years of space tourism booking data from 2024 to 2026.",
    tools: ["Python", "SQL", "Power BI", "DAX", "Data Modeling"],
    datasetScale: "9.02K bookings after cleaning",
    keyResultLabel: "Total Revenue",
    keyResultValue: "$306.09B",
    image: "/images/space-tourism-dashboard.png",
    insights: [
      { label: "Total Revenue", value: "$306.09B" },
      { label: "Bookings Analyzed", value: "9.02K" },
      { label: "Top Customer Segment", value: "Age 36–45 (33%)" },
      { label: "Top Revenue Seat Class", value: "Economy Orbit — $140B" },
      { label: "Top Booking Channel", value: "Company Website — $138.18B" },
      { label: "Top Launch Provider", value: "SpaceX — $85.8B" },
      { label: "Average Ticket Price", value: "$33.93M" },
      { label: "Average Rating", value: "4.4 / 5" },
      { label: "Cancellation Rate", value: "12%" }
    ],
    workflow: [
      { group: "Python", items: ["Data Cleaning", "IQR Outlier Detection", "Data Validation", "Exploratory Analysis"] },
      { group: "SQL", items: ["KPI Validation", "Aggregations", "Business Queries"] },
      { group: "Power BI", items: ["Data Modeling", "DAX Measures", "Interactive Dashboard", "Business Analysis"] }
    ],
    caseStudy: [
      {
        heading: "Business Context",
        body: [
          "Space tourism operators need to understand who is booking, which seat classes and channels drive revenue, and how providers compare — before committing budget to marketing and fleet capacity."
        ]
      },
      {
        heading: "Dataset Overview",
        body: [
          "Three years of booking records (2024–2026) covering seat class, launch provider, booking channel, customer age group, nationality, ratings, and cancellations."
        ]
      },
      {
        heading: "Data Cleaning",
        body: [
          "Used Python to detect and treat outliers with the IQR method, validate field consistency, and resolve the dataset down to 9.02K clean bookings ready for analysis."
        ]
      },
      {
        heading: "Exploratory Analysis",
        body: [
          "Explored booking volume by age group, month, and seat class in Python to surface early patterns before formal KPI validation in SQL."
        ]
      },
      {
        heading: "SQL Validation",
        body: [
          "Cross-checked aggregated KPIs — revenue totals, booking counts, and channel splits — against business queries in SQL to confirm the Power BI model matched source data."
        ]
      },
      {
        heading: "Data Modeling",
        body: [
          "Structured the cleaned data into a Power BI model connecting bookings, providers, seat classes, and channels for flexible slicing by year, nationality, and launch site."
        ]
      },
      {
        heading: "DAX Measures",
        body: [
          "Built DAX measures for total revenue, average ticket price, cancellation rate, and revenue share by segment to power the interactive visuals."
        ]
      },
      {
        heading: "Dashboard Design",
        body: [
          "Designed a single-page interactive dashboard with slicers for year, nationality, and launch site, combining KPI cards, a revenue-by-month waterfall, and channel/provider breakdowns."
        ]
      },
      {
        heading: "Key Insights",
        body: [
          "Customers aged 36–45 are the largest segment at 33% of bookings. Economy Orbit is the highest-revenue seat class at $140B, and the company website outperforms travel agents and referrals as a booking channel."
        ]
      },
      {
        heading: "Business Recommendations",
        body: [
          "Prioritize the company website channel and the 36–45 age segment in marketing spend, and monitor the 12% cancellation rate for patterns tied to seat class or provider."
        ]
      },
      {
        heading: "Final Outcome",
        body: [
          "A validated, interactive Power BI dashboard that lets stakeholders explore $306M+ in analyzed revenue by provider, channel, seat class, and customer segment without touching raw data."
        ]
      }
    ],
    recommendations: [
      "Prioritize company-website acquisition — it outperforms every other channel",
      "Target the 36–45 age segment, the largest booking cohort",
      "Investigate the 12% cancellation rate by seat class and provider"
    ]
  },
  {
    slug: "services-branch-analysis",
    type: "SQL Server · Power BI",
    title: "Services Branch Analysis",
    objective:
      "Understand service operations, revenue, and performance across regions, departments, and clients.",
    description:
      "Modeled a relational data structure in Power BI and combined SQL Server with Power BI to analyze service operations, revenue, and performance.",
    tools: ["SQL Server", "Power BI", "DAX"],
    datasetScale: "4 regions · 5 departments",
    keyResultLabel: "Total Revenue",
    keyResultValue: "$195.3M",
    image: "/images/services-branch-dashboard.png",
    insights: [
      { label: "Total Revenue", value: "$195.3M" },
      { label: "Total Service Hours", value: "217K" },
      { label: "Regions Covered", value: "4" },
      { label: "Departments Covered", value: "5" }
    ],
    workflow: [
      { group: "SQL Server", items: ["Relational Schema", "Query Design", "Aggregations"] },
      { group: "Power BI", items: ["Data Modeling", "DAX Measures", "Client-Level Reporting"] }
    ],
    caseStudy: [
      { heading: "Business Problem", body: ["Leadership needed a consolidated view of revenue and service hours across regions, departments, and individual clients to spot performance gaps."] },
      { heading: "Data Structure", body: ["Modeled a relational structure in Power BI connecting clients, departments, regions, and revenue records sourced from SQL Server."] },
      { heading: "SQL Analysis", body: ["Wrote SQL Server queries to aggregate revenue and service hours by region, department, and client ahead of modeling."] },
      { heading: "Data Modeling", body: ["Built relationships between client, department, and region tables to support flexible cross-filtering in the dashboard."] },
      { heading: "DAX Measures", body: ["Created DAX measures for total revenue, revenue share by region, and monthly and quarterly trend comparisons."] },
      { heading: "Dashboard", body: ["Delivered an interactive dashboard covering revenue by region and department, client-level reporting, and monthly/quarterly trends."] },
      { heading: "Insights", body: ["Revenue is broadly balanced across the 4 regions, with department-level revenue concentrated across Audit, Management, Advisory, Tax, and Legal."] },
      { heading: "Recommendations", body: ["Use the client-level view to identify accounts contributing disproportionately to the 217K total service hours relative to revenue."] }
    ],
    recommendations: [
      "Review client accounts with high service hours relative to revenue",
      "Track quarterly trend shifts by region to inform staffing"
    ]
  },
  {
    slug: "superstore-sales-analysis",
    type: "Python · SQL · Excel",
    title: "Superstore Sales Analysis",
    objective:
      "Identify sales, profit, regional, category, and discount-related patterns in a retail order dataset.",
    description:
      "Analyzed a 9,994-order retail dataset using Python, SQL, and Excel to identify sales, profit, regional, category, and discount-related patterns.",
    tools: ["Python", "pandas", "SQL", "Excel"],
    datasetScale: "9,994 orders",
    keyResultLabel: "Total Sales",
    keyResultValue: "$2.29M",
    image: "/images/superstore-dashboard.png",
    insights: [
      { label: "Orders", value: "9,994" },
      { label: "Total Sales", value: "$2.29M" },
      { label: "Total Profit", value: "$286K" }
    ],
    workflow: [
      { group: "Python", items: ["Data Cleaning", "Exploratory Data Analysis"] },
      { group: "SQL", items: ["Join Operations", "Aggregations"] },
      { group: "Excel", items: ["Dashboard", "Slicers"] }
    ],
    caseStudy: [
      { heading: "Problem", body: ["The business needed to understand where profit was being lost despite healthy sales volume across 9,994 orders."] },
      { heading: "Data", body: ["A retail order dataset spanning region, category, ship mode, and discount level, with sales and profit recorded per order."] },
      { heading: "Data Cleaning", body: ["Cleaned the dataset in Python with pandas, preparing it for both SQL-based aggregation and exploratory analysis."] },
      { heading: "Analysis", body: ["Explored profit versus loss orders, the impact of discount level on profit, and regional and category-level performance."] },
      { heading: "SQL", body: ["Used SQL joins and aggregations to validate category- and region-level sales and profit totals."] },
      { heading: "Dashboard", body: ["Built an Excel dashboard with slicers for region, category, and ship mode, visualizing profit by category, profit by region, and profit trend over time."] },
      { heading: "Key Insights", body: ["Profit turns negative once discounts exceed roughly 20–30%, and profit contribution varies substantially by region and category."] },
      { heading: "Business Recommendations", body: ["Cap discounting in categories where profit erodes fastest, and reallocate focus toward regions and categories with stronger profit-to-sales ratios."] },
      { heading: "Conclusion", body: ["The analysis translates 9,994 raw orders into a clear view of where discounting is destroying profit."] }
    ],
    recommendations: [
      "Cap discounts above the 20–30% band where profit turns negative",
      "Focus growth investment on the strongest profit-to-sales regions"
    ]
  },
  {
    slug: "car-inventory-sales-dashboard",
    type: "Excel · Pivot Tables",
    title: "Car Inventory & Sales Dashboard",
    objective:
      "Track inventory status, dealer performance, and profitability across a multi-brand car dataset.",
    description:
      "Built a Microsoft Excel dashboard using pivot tables and pivot charts to analyze inventory status, dealer performance, and profitability.",
    tools: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Dashboard Design"],
    datasetScale: "1,000 records · 20 brands · 145 models · 10 categories",
    keyResultLabel: "Profit Margin",
    keyResultValue: "67%",
    image: "/images/car-inventory-dashboard.png",
    insights: [
      { label: "Sold", value: "575" },
      { label: "Available", value: "249" },
      { label: "Reserved", value: "112" },
      { label: "In Service", value: "64" },
      { label: "Profit Margin", value: "67%" },
      { label: "Avg Revenue / Sale", value: "$47.59K" }
    ],
    workflow: [
      { group: "Excel", items: ["Pivot Tables", "Pivot Charts", "Dashboard Design"] }
    ],
    caseStudy: [
      { heading: "Business Problem", body: ["Dealership management needed a single view of inventory status and profitability across 20 brands and 145 models."] },
      { heading: "Data", body: ["1,000 vehicle records spanning 10 categories, with fields for brand, model, region, dealer, fuel type, transmission, and sale status."] },
      { heading: "Data Modeling", body: ["Organized the dataset with pivot tables to summarize status, region, and dealer performance."] },
      { heading: "Dashboard", body: ["Built an Excel dashboard showing inventory status (sold, available, reserved, in service), dealer performance, regional splits, fuel and transmission mix, and profitability."] },
      { heading: "Key Insights", body: ["575 of 1,000 vehicles are sold at a 67% profit margin and $47.59K average revenue per sale, with SUVs and sedans as the dominant categories."] },
      { heading: "Business Recommendations", body: ["Prioritize restocking the categories and brands with the fastest sell-through, and review the 64 vehicles currently in service for turnaround time."] },
      { heading: "Conclusion", body: ["The dashboard gives management a real-time pivot view of inventory health and profitability without manual reporting."] }
    ],
    recommendations: [
      "Restock fastest-selling categories (SUV, Sedan) ahead of others",
      "Review in-service turnaround time for the 64 vehicles currently held"
    ]
  }
];

export const skillCategories = [
  {
    category: "Python",
    groups: [
      {
        title: "Core Libraries for Data Analysis:",
        items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"]
      },
      {
        title: "Web Scraping:",
        items: ["Beautiful Soup", "Scrapy"]
      }
    ]
  },
  {
    category: "Power BI",
    groups: [
      {
        title: "Key Skills:",
        items: [
          "Power Query",
          "Data Modeling",
          "Data Visualization",
          "Connecting to Multiple Data Sources",
          "Creating interactive, auto-updating dashboards with shareable links"
        ]
      }
    ]
  },
  {
    category: "SQL",
    groups: [
      {
        title: "Key Expertise:",
        items: [
          "DML (Data Manipulation Language)",
          "DDL (Data Definition Language)",
          "Window Functions",
          "Date & Time Functions",
          "Aggregation and Joins",
          "Writing complex queries for data extraction, transformation, and analysis"
        ]
      }
    ]
  },
  {
    category: "Excel",
    groups: [
      {
        title: "Key Expertise:",
        items: [
          "Complex Formulas",
          "Pivot Tables",
          "Power Query",
          "Power Pivot",
          "Data Visualization",
          "Transforming and analyzing data efficiently"
        ]
      }
    ]
  },
  {
    category: "Statistics",
    groups: [
      {
        title: "Key Expertise:",
        items: [
          "Descriptive Statistics: Measures of Frequency & Dispersion, Measures of Central Tendency & Position",
          "Inferential Statistics: Basics of Hypothesis Testing, Confidence Intervals"
        ]
      }
    ]
  }
];

export const workflowSteps = [
  { step: "01", title: "Understand the Business Problem" },
  { step: "02", title: "Collect & Inspect Data" },
  { step: "03", title: "Clean & Validate" },
  { step: "04", title: "Explore & Analyze" },
  { step: "05", title: "Model Data" },
  { step: "06", title: "Build KPIs" },
  { step: "07", title: "Visualize Insights" },
  { step: "08", title: "Communicate Recommendations" }
];

export const experience = [
  {
    role: "Data Analyst Intern",
    period: "Jul 2026 – Present",
    location: "Cairo, Egypt · Hybrid",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    points: [
      "Applied statistical analysis techniques on retail/service datasets using Python (pandas) as part of DEPI training, producing cleaned datasets ready for exploratory analysis.",
      "Performed exploratory data analysis and business reporting exercises using SQL and Excel during DEPI training, translating raw data into structured summaries for stakeholder review."
    ]
  },
  {
    role: "Workers Supervisor & HR Document Reviewer",
    period: "Summers 2024 – 2026",
    location: "10th of Ramadan City, Egypt · Seasonal",
    org: "Rotos",
    points: [
      "Supervised factory workers during seasonal shifts (~3 months per year), coordinating daily tasks and ensuring workflow discipline.",
      "Reviewed and organized HR documentation and worker records, supporting accurate administrative record-keeping."
    ]
  }
];

export const education = {
  degree: "B.Sc. in Computer Science and Artificial Intelligence",
  school: "Benha University",
  location: "Benha, Egypt",
  status: "Currently Pursuing — 3rd Year",
  cgpa: "3.2",
  grade: "Very Good"
};

export const certifications = [
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM / CognitiveClass.ai",
    date: "Issued Aug 2026",
    credentialId: "DB0101EN",
    image: "/images/certifications/ibm-sql-relational-databases.png",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/1c58bf806b9547238e7397436106360f"
  },
  {
    title: "Oracle Fusion AI Agent Studio Foundations Associate",
    issuer: "Oracle",
    date: "Issued Aug 2026",
    extra: "Score: 98%",
    credentialId: "1Z0-1145-1",
    image: "/images/certifications/oracle-foundations-associate.png"
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Issued Aug 2026",
    topics: ["Data Analysis", "Data Visualization", "Data Cleaning"],
    image: "/images/certifications/ibm-data-fundamentals.png",
    verifyUrl: "https://www.credly.com/badges/60621dc3-eba2-4ed2-a46c-41a7826c4230"
  }
];

export const heroStats = [
  { value: "3", label: "End-to-End Analytics Projects" },
  { value: "4", label: "Core Analytics Tools" },
  { value: "3", label: "Certifications Earned" },
  { value: "Power BI · SQL · Python · Excel", label: "Toolkit" }
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" }
];
