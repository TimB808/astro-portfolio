const projects = [
  {
    title: "Document Chat App",
    description: "App allowing users to upload PDFs and ask questions about the content. It combines a FastAPI backend with LanceDB for vector search, OpenAI embeddings for semantic understanding, and a Streamlit UI for interactive querying.",
    link: "https://doc-chat-ui-581282400880.europe-west3.run.app/",
    github: "https://github.com/TimB808/doc-chat-api",
    image: "/assets/doc-chat.png",
  },
  {
    title: "Climate Data Pipeline",
    description: "Data pipeline using xarray, pandas, Dask, and a geospatial stack (geopandas, shapely, regionmask) to transform ERA5 climate and World Bank/OWID socioeconomic data into tidy country-year metrics, stored in Parquet and published via Tableau dashboards.",
    link: "https://public.tableau.com/app/profile/tim.beyer6061/viz/GlobalheatingERA5AnnualTemps/Trend-AnnualTempC",
    github: "https://github.com/TimB808/climate-resilience-pipeline",
    image: "/assets/climate-change-2.jpg",
  },
  {
    title: "What’s in a name?",
    description: "Name generator app built with Python and SQLite, using a FastAPI/Uvicorn backend and deployed with Streamlit, Docker and Cloud Run, allowing users to create new, unique names based on simple patterns.",
    link: "https://name-gen-ui-581282400880.europe-west1.run.app/",
    github: "https://github.com/TimB808/name-generator-public",
    image: "/assets/name-gen.png",
  },
  {
    title: "Pot Luck",
    description: "Website using NLP embedding and K-Means clustering to allow individuals to search for recipes by ingredients, so they can find a dish to make whatever is in the kitchen.",
    link: "https://potluckimg1-581282400880.europe-west1.run.app/",
    github: "https://github.com/TimB808/potluck_project",
    image: "/assets/Potluck.jpg",
  },
  {
    title: "Career Compass (ongoing)",
    description: "Web app using web scraping, NLP and K-means clustering to allow users to focus their career search by describing their ideal job.",
    github: "https://github.com/TimB808/job_scraping",
    image: "/assets/career-compass.jpg",
  },
  {
    title: "Tableau Public",
    description: "I’m currently learning Tableau by exploring Tableau Public.",
    link: "http://public.tableau.com/app/profile/tim.beyer6061/",
    image: "/assets/icons8-tableau-software-480.png",
  },
  {
    title: "Portfolio site with Astro",
    description: "I’ve been getting to grips with Astro and a little CSS to build this site.",
    github: "https://github.com/TimB808/astro-portfolio",
    image: "/assets/Astro.png",
  },
];

export default projects;
