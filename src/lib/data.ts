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
  resumeUrl: "/Adham-Reda-Resume.pdf",
  cvUrl: "/Adham_Reda_CV.pdf"
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
  gallery?: { src: string; caption: string }[];
  insights: Insight[];
  workflow: { group: string; items: string[] }[];
  caseStudy: CaseStudySection[];
  recommendations: string[];
};

export const projects: Project[] = [
  {
    slug: "sales-analytics-dashboard-end-to-end",
    type: "Power BI · DAX · End-to-End Analytics",
    title: "Sales Analytics Dashboard – End to End",
    objective:
      "Build a full, multi-page Power BI reporting suite covering sales, product, territory, and order-fulfillment performance from a single data model.",
    description:
      "Designed an end-to-end Power BI solution — star-schema data model, 25+ custom DAX measures, a custom dark theme, and a 5-page interactive report — to track $30.09M in sales across products, territories, and order operations.",
    tools: ["Power BI", "DAX", "Data Modeling", "Report Design"],
    datasetScale: "1,465 orders · 85,866 units · 250 products",
    keyResultLabel: "Total Sales",
    keyResultValue: "$30.09M",
    image: "/images/salesdepi/overview.png",
    gallery: [
      { src: "/images/salesdepi/overview.png", caption: "Overview — company-wide KPIs at a glance" },
      { src: "/images/salesdepi/sales-analysis.png", caption: "Sales Analysis — trend, YTD/QTD and growth vs. last year" },
      { src: "/images/salesdepi/product-performance.png", caption: "Product Performance — category, sub-category and top-10 products" },
      { src: "/images/salesdepi/territory-performance.png", caption: "Territory Performance — regional map and top territories" },
      { src: "/images/salesdepi/orders-operations.png", caption: "Orders & Operations — fulfillment status and delivery performance" },
      { src: "/images/salesdepi/data-model.png", caption: "Star-schema data model with a dedicated DAX measures table" }
    ],
    insights: [
      { label: "Total Sales", value: "$30.09M" },
      { label: "Total Orders", value: "1,465" },
      { label: "Sales Growth", value: "146.56%" },
      { label: "On-Time Delivery", value: "100%" },
      { label: "Total Quantity", value: "85,866" },
      { label: "Avg Order Value", value: "$20.54K" }
    ],
    workflow: [
      { group: "Data Modeling", items: ["Star Schema", "Fact/Dimension Tables", "Date Table"] },
      { group: "DAX", items: ["25+ Custom Measures", "YoY & YTD/QTD Comparisons", "Ranking & Status Logic"] },
      { group: "Report Design", items: ["5-Page Navigation", "Custom Dark Theme", "Cross-Filtering"] }
    ],
    caseStudy: [
      { heading: "Business Problem", body: ["Sales, product, territory, and fulfillment performance were scattered across raw order data with no single, decision-ready view for stakeholders."] },
      { heading: "Data Modeling", body: ["Built a star-schema model in Power BI: a central factSales table (order, product, customer, ship method, status, and territory keys, plus sales, quantity, freight, and tax) connected to DimProduct, DimTerritory, DimShipmethod, DimStatus, and a dedicated calendar table."] },
      { heading: "DAX Measures", body: ["Created a dedicated measures table with 25+ DAX measures, including Average Order Value, Average Monthly Sales, Sales Growth %, Sales LY/PY, QTD Sales, On-Time Delivery %, Late Orders %, and Top Product."] },
      { heading: "Sales Analysis", body: ["Tracked total, YTD ($5.93M), and QTD ($1.76M) sales alongside a monthly sales trend and year-over-year growth reaching 146.56%."] },
      { heading: "Product Performance", body: ["Broke down sales across 250 products by category and sub-category, surfacing the top 10 sub-categories by sales and revealing Bikes as the dominant category at 80.54% of total sales."] },
      { heading: "Territory Performance", body: ["Mapped sales by territory and territory group, ranking the top 5 territories: Canada (35.20%), Northwest (20.45%), France (15.31%), and the United Kingdom (14.22%)."] },
      { heading: "Orders & Operations", body: ["Monitored 1,465 orders and 85,866 units across order status (shipped, approved, in process, cancelled, rejected, backordered), freight cost, and a 7-day average delivery time at a 100% on-time delivery rate."] },
      { heading: "Report Design", body: ["Designed a custom dark 'Sales Performance' theme applied consistently across all 5 report pages for a cohesive, presentation-ready look."] },
      { heading: "Key Insights", body: ["Canada and Northwest together generate over 55% of total sales, Bikes alone drives 80.5% of category revenue, and delivery performance holds at 100% on-time despite the order volume."] },
      { heading: "Business Recommendations", body: ["Prioritize account growth in Canada and Northwest given their outsized share of revenue, and diversify the category mix to reduce reliance on Bikes for the bulk of sales."] },
      { heading: "Conclusion", body: ["The result is a single, end-to-end Power BI suite that turns raw order data into a 5-page reporting system covering sales, product, territory, and operations performance."] }
    ],
    recommendations: [
      "Prioritize account growth in Canada and Northwest, which together generate over 55% of total sales",
      "Diversify the category mix given Bikes alone drives 80.5% of total sales"
    ]
  },
  {
    slug: "space-tourism-booking-dashboard",
    type: "Python · Streamlit · Power BI",
    title: "Space Tourism Booking Dashboard",
    objective:
      "Analyze three years of space tourism booking data to understand revenue drivers, customer segments, and provider performance.",
    description:
      "Built a Streamlit app for interactive, documented data cleaning against a SQL Server backend, then modeled the cleaned data in Power BI to analyze 3 years of space tourism booking data from 2024 to 2026.",
    tools: ["Python", "Streamlit", "SQL Server", "Power BI", "DAX", "Data Modeling"],
    datasetScale: "9.02K bookings after cleaning",
    keyResultLabel: "Total Revenue",
    keyResultValue: "$306.09B",
    image: "/images/space-tourism-dashboard.png",
    gallery: [
      { src: "/images/spacetourism-gallery/powerbi-dashboard.png", caption: "Power BI dashboard — revenue, bookings and provider performance" },
      { src: "/images/spacetourism-gallery/notebook-raw-data.png", caption: "Raw booking data pulled from SQL Server via SQLAlchemy" },
      { src: "/images/spacetourism-gallery/notebook-distributions.png", caption: "Distribution of numeric features before cleaning" },
      { src: "/images/spacetourism-gallery/notebook-eda-functions.png", caption: "Reusable EDA and outlier-detection functions" }
    ],
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
      { group: "Python / Streamlit", items: ["Interactive Cleaning App", "IQR Outlier Detection", "Before/After EDA", "Data Validation"] },
      { group: "SQL Server", items: ["Source Extraction", "Cleaned Table Write-Back"] },
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
          "Built a self-contained Streamlit app that reads the raw bookings table directly from SQL Server, profiles it column by column, and applies a documented set of cleaning rules: range validation (e.g. age 18–90, health clearance 0–100), IQR-based outlier treatment on price and physiological fields, mixed-date-format parsing, and text standardization — before writing the cleaned table back to SQL Server."
        ]
      },
      {
        heading: "Exploratory Analysis",
        body: [
          "The same app renders before/after histograms, boxplots, countplots, and a correlation heatmap for every column, so the effect of each cleaning rule is visible rather than just asserted."
        ]
      },
      {
        heading: "Structural Missingness",
        body: [
          "Handled a real edge case explicitly: post-flight rating is only imputed for confirmed bookings whose flight has already happened — every other row is left missing on purpose, since a rating can't logically exist yet."
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
    type: "Python · Excel",
    title: "Superstore Sales Analysis",
    objective:
      "Identify sales, profit, regional, category, and discount-related patterns in a retail order dataset.",
    description:
      "Built an OOP-based Python pipeline (loading, cleaning, feature engineering, EDA, KPI reporting) alongside an interactive Excel dashboard to analyze 9,994 retail order records.",
    tools: ["Python", "pandas", "matplotlib", "seaborn", "Excel"],
    datasetScale: "9,994 records · 5,009 orders",
    keyResultLabel: "Total Sales",
    keyResultValue: "$2.29M",
    image: "/images/superstore-gallery/excel-dashboard.png",
    gallery: [
      { src: "/images/superstore-gallery/excel-dashboard.png", caption: "Excel dashboard — sales & profit performance with slicers" },
      { src: "/images/superstore-gallery/notebook-raw-data.png", caption: "Python notebook — raw dataset structure and summary statistics" },
      { src: "/images/superstore-gallery/notebook-eda-classes.png", caption: "Object-oriented EDA pipeline (FeatureEngineer, EDAAnalyzer classes)" },
      { src: "/images/superstore-gallery/notebook-boxplot-chart.png", caption: "Profit distribution by category (outlier-aware boxplot)" },
      { src: "/images/superstore-gallery/notebook-scatter-chart.png", caption: "Sales vs. profit by category after outlier capping" },
      { src: "/images/superstore-gallery/cleaned-dataset-excel.png", caption: "Feature-engineered dataset exported from the pipeline" }
    ],
    insights: [
      { label: "Orders", value: "9,994" },
      { label: "Total Sales", value: "$2.29M" },
      { label: "Total Profit", value: "$286K" },
      { label: "Profit Margin (Python)", value: "11.45%" },
      { label: "Avg Discount (Python)", value: "14%" },
      { label: "Avg Shipping (Python)", value: "3.96 days" }
    ],
    workflow: [
      { group: "Python", items: ["OOP Data Pipeline", "Outlier Handling (IQR)", "Feature Engineering", "EDA & Visualization"] },
      { group: "Excel", items: ["Dashboard", "Slicers", "Pivot Tables"] }
    ],
    caseStudy: [
      { heading: "Problem", body: ["The business needed to understand where profit was being lost despite healthy sales volume across 9,994 order records."] },
      { heading: "Data", body: ["A retail order dataset spanning region, category, ship mode, and discount level, with sales and profit recorded per line item across 5,009 unique orders."] },
      { heading: "Data Pipeline (Python)", body: ["Built a reusable, object-oriented pipeline in pandas: a loader class, a DataCleaner (missing-value imputation, deduplication, IQR-based outlier capping on sales, profit, discount and quantity), and a FeatureEngineer that added profit margin, shipping duration, and a sales-performance tier per order."] },
      { heading: "Statistical Analysis (Python)", body: ["On the cleaned, outlier-capped dataset: total sales of $1.40M, total profit of $160.6K, an 11.45% profit margin, a 14% average discount, and a 3.96-day average shipping time. Office Supplies led sales by category and the West led by region; Paper was the most profitable sub-category and Tables the least."] },
      { heading: "Exploratory Analysis", body: ["Used matplotlib and seaborn to visualize a correlation heatmap, sales and profit distributions, profit by category and sub-category, and sales-vs-profit relationships, plus an automated KPI report generator."] },
      { heading: "Dashboard (Excel)", body: ["Built a separate interactive Excel dashboard directly on the full raw dataset (9,994 orders, $2.29M in sales, $286K in profit) with slicers for region, category, and ship mode, visualizing profit by category, profit by region, and profit trend over time."] },
      { heading: "Key Insights", body: ["On the raw dashboard data, profit turns negative once discounts exceed roughly 20–30%, and profit contribution varies substantially by region and category — consistent with the Python analysis showing Office Supplies and the West as the strongest performers."] },
      { heading: "Business Recommendations", body: ["Cap discounting in categories where profit erodes fastest, and reallocate focus toward regions and categories — like Office Supplies in the West — with stronger profit-to-sales ratios."] },
      { heading: "Conclusion", body: ["The result is a two-part deliverable: a reusable Python pipeline for outlier-aware statistical analysis, and a raw-data Excel dashboard for interactive, day-to-day exploration."] }
    ],
    recommendations: [
      "Cap discounts above the 20–30% band where profit turns negative",
      "Focus growth investment on the strongest profit-to-sales regions and categories"
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
  },
  {
    slug: "central-superstore-sales-analytics",
    type: "SQL Server · T-SQL · Data Modeling",
    title: "Central Superstore Sales Analytics",
    objective:
      "Transform transactional Superstore data into a structured, reporting-ready analytical database using SQL Server.",
    description:
      "Designed a star-schema data warehouse in SQL Server for the Central Superstore dataset, with dimension and fact tables, deduplication, surrogate keys, indexing, KPI views, and stored procedures for reusable reporting.",
    tools: ["SQL Server", "T-SQL", "Data Modeling", "Analytical SQL"],
    datasetScale: "2,323 records · 1,175 orders · 629 customers",
    keyResultLabel: "Total Sales",
    keyResultValue: "$501.2K",
    image: "/images/centralsuperstore-gallery/star-schema.png",
    gallery: [
      { src: "/images/centralsuperstore-gallery/star-schema.png", caption: "Star-schema data model — FactSales linked to 5 dimension tables" },
      { src: "/images/centralsuperstore-gallery/ddl-dimensions.png", caption: "DDL for the date, customer, location and product dimensions" },
      { src: "/images/centralsuperstore-gallery/deduplication.png", caption: "Defensive deduplication with ROW_NUMBER() before loading dimensions" },
      { src: "/images/centralsuperstore-gallery/fact-load-indexing.png", caption: "Fact table load via multi-table JOIN, plus indexing for query performance" },
      { src: "/images/centralsuperstore-gallery/window-functions.png", caption: "Monthly sales trend with a running total via window functions" },
      { src: "/images/centralsuperstore-gallery/stored-procedures.png", caption: "Stored procedures for reusable KPI queries" }
    ],
    insights: [
      { label: "Total Sales", value: "$501.2K" },
      { label: "Total Profit", value: "$39.7K" },
      { label: "Profit Margin", value: "7.92%" },
      { label: "Orders", value: "1,175" },
      { label: "Customers", value: "629" },
      { label: "Products", value: "1,310" }
    ],
    workflow: [
      { group: "Data Modeling", items: ["Star Schema", "Fact/Dimension Tables", "Surrogate Keys", "Foreign Keys"] },
      { group: "T-SQL", items: ["CTEs & Window Functions", "Deduplication (ROW_NUMBER)", "Views", "Stored Procedures", "Indexing"] }
    ],
    caseStudy: [
      { heading: "Business Problem", body: ["Raw Central-region transactional data had no structured, query-friendly foundation for recurring sales, profitability, and customer reporting."] },
      { heading: "Data Modeling", body: ["Designed a star schema in SQL Server: a FactSales table (order, date, customer, location, product, and ship-mode keys, plus sales, quantity, discount, and profit) connected via foreign keys to DimDate, DimCustomer, DimLocation, DimProduct, and DimShipMode, each with an IDENTITY surrogate key."] },
      { heading: "Data Engineering", body: ["Generated a full date dimension from 2013 to 2017 with a recursive CTE, and defensively deduplicated customer and product records with ROW_NUMBER() before loading dimensions, since the same ID occasionally appeared with slightly different name text."] },
      { heading: "Fact Loading & Optimization", body: ["Populated FactSales by joining the source table to each dimension on its natural key to resolve surrogate keys, then added nonclustered indexes on the fact table's foreign-key columns to speed up downstream queries."] },
      { heading: "Analytical SQL", body: ["Wrote CTE-based monthly sales trends with running totals, year-over-year growth using LAG(), profitability classification with CASE, and top-customer and top-product analysis using window functions and aggregates."] },
      { heading: "KPI Layer", body: ["Built reusable views for profit margin by category, customer behavior by segment, and monthly sales/profit trends, plus stored procedures (usp_GetProfitMarginByCategory, usp_GetSalesTrendByYear, usp_GetTopCustomers) so the same KPIs can be re-run on demand."] },
      { heading: "Key Insights", body: ["Technology leads both sales ($170.4K) and profit ($33.7K) among the three categories, while Furniture is sold at an overall loss (-$2.9K) despite comparable sales volume ($163.8K) \u2014 a 7.92% blended profit margin across 1,175 orders."] },
      { heading: "Business Recommendations", body: ["Investigate Furniture's pricing and discount structure given its negative profit despite strong sales volume, and prioritize Technology for continued investment given its outsized profit contribution."] },
      { heading: "Conclusion", body: ["The result is a proper analytical database \u2014 not just a query \u2014 where sales, profitability, and customer insight can be pulled repeatedly through views and stored procedures instead of rebuilt from scratch each time."] }
    ],
    recommendations: [
      "Review Furniture's discounting and cost structure \u2014 it sells nearly as much as Technology but loses money overall",
      "Prioritize Technology for continued investment given its outsized share of total profit"
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
      "Applied statistical analysis techniques on retail and service datasets using Python (pandas), producing cleaned, analysis-ready datasets.",
      "Performed exploratory data analysis and business reporting using SQL and Excel, translating raw data into structured summaries for stakeholder review."
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
  status: "In Progress",
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
