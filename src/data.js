// ============================================================
//  EDIT YOUR LINKS HERE. Any URL containing "YOUR-" is treated
//  as a placeholder and shown as a disabled "(add URL)" button.
// ============================================================
export const profile = {
  name: "Kumili Vinesh",
  headline: "AI & Data Science Student | Machine Learning | Python Developer",
  summary:
    "B.Tech student specializing in Artificial Intelligence and Data Science, with hands-on experience building ML applications, AI-powered solutions and full-stack web platforms, plus internship experience in ML model development, deployment and MLOps.",
  email: "vineshkumili45@gmail.com",
  phone: "+91 9063945122",
  location: "Parvathipuram, Andhra Pradesh",
  resume: "/Kumili_Vinesh_Resume.pdf", // file lives in /public
  linkedin: "https://www.linkedin.com/in/kumili-vinesh-103a7a30b/?isSelfProfile=true", // file lives in /public
  github: "https://github.com/Vineshkumili", // file lives in /public
};

export const education = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  school: "Vignan's Institute of Information Technology",
  years: "2023 – 2027",
  cgpa: "8.43",
  coursework: [
    "Data Structures and Algorithms", "Operating Systems", "DBMS", "Computer Networks", "OOP",
    "Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing",
  ],
};

export const skills = [
  { group: "Programming", icon: "Code2", items: ["C","Java","Python", "SQL", "JavaScript"] },
  { group: "Machine Learning", icon: "Brain", items: ["Scikit-learn", "TensorFlow", "Keras", "Random Forest", "SMOTE", "Model Evaluation", "Feature Engineering", "OpenCV"] },
  { group: "Data Science", icon: "Database", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { group: "Web Development", icon: "Globe", items: ["HTML", "CSS", "Node.js", "MongoDB", "NodeMailer", "Gradio", "Render"] },
  { group: "Cloud", icon: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud Platform"] },
  { group: "Tools", icon: "Wrench", items: ["Git", "GitHub", "GitHub Actions", "VS Code", "Jupyter Notebook", "Google Colab", "PyCharm"] },
];

export const projects = [
  {
    title: "Transformer Monitoring System",
    date: "May 2025",
    description:
      "A machine learning based transformer health monitoring system that predicts operating conditions from oil and dissolved gas analysis data, with an interactive Gradio interface.",
    features: [
      "Random Forest classifier trained on oil and dissolved gas analysis data",
      "SMOTE to handle class imbalance",
      "Interactive Gradio interface for real-time predictions and visualization",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "SMOTE", "Joblib", "Gradio"],
    github: "https://github.com/Vineshkumili/-Transformer-monitoring-system/tree/main",
    demo: "https://transformer-monitoring-system.vercel.app/", // fill in with your demo URL or remove the line if not applicable
  },
  {
    title: "Vignan Virtual Assistance",
    date: "Jul 2026",
    description:
      "A web-based college assistance platform that brings an AI chatbot, an admission eligibility checker and an online complaint management system together in one place.",
    features: [
      "AI chatbot and admission eligibility checker",
      "Online complaint management backed by MongoDB",
      "Automated email notifications to concerned authorities via NodeMailer",
      "Deployed on Render",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "NodeMailer"],
    github: "https://github.com/Vineshkumili/CSP", // final project repository link
    demo: "https://csp-cbj7.onrender.com/",
  },
];

export const internships = [
  {
    role: "Machine Learning Intern",
    company: "Mainflow Services and Technologies",
    dates: "Apr 2025 – Jun 2025",
    points: [
      "Collaborated on client-focused machine learning projects involving model development and deployment.",
      "Tracked, containerized and deployed ML models using MLflow and Docker with CI/CD automation.",
      "Integrated scalable ML solutions using cloud infrastructure.",
    ],
    tools: ["Machine Learning", "Deep Learning", "MLflow", "Docker", "AWS", "Azure", "MLOps", "CI/CD Pipelines"],
  },
  {
    role: "Data Analyst Intern",
    company: "Bluestock.in",
    dates: "20 June 2026 - 20 Aug 2026",
    points: [
      "Analyzed and interpreted complex datasets to provide actionable insights for business decision-making.",
      "Developed and maintained dashboards and reports to visualize key performance indicators (KPIs) and trends.",
      "Collaborated with cross-functional teams to identify data requirements and implement data-driven solutions.",
      "Utilized statistical techniques and data mining methods to identify patterns and correlations within large datasets.",
      "Assisted in the development and implementation of data collection processes and data quality assurance measures.",
    ],
    tools: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Microsoft Excel", "Power BI", "Jupyter Notebook"],
  },
];


export const certifications = [
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", url: "https://drive.google.com/file/d/1yzGeY8knPMIZ3xvPBBz6b-pII_sYqPii/view" },
  { title: "Python Essentials 2", issuer: "Cisco Networking Academy", url: "https://drive.google.com/file/d/1jYOGIvrqKhr020HYQBQriC1U6mnC_KLW/view" },
  { title: "Data Science BootCamp: From Analysing Data To Creating ML Models", issuer: "GeeksforGeeks", url: "https://media.geeksforgeeks.org/courses/certificates/8de02f8105520564add4742ac9626b2e.pdf" },
  { title: "Introduction to Generative AI Studio", issuer: "Google Cloud", url: "https://certificates.simplicdn.net/share/9674663_9937399_1767449490200.pdf" },
];
