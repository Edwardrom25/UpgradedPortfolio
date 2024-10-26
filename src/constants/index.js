import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mrg,
    milhouse,
    nasa,
    FHCS,
    katz,
    ECGm,
    shomigo,
    lottus,
    khamis,
    pacific,
    go,
    java,
    postgres,
    nasawork,
    spring,
    mrgtravel,
    ventures,
    next,
    solidworks,
    matlab,
    python,
    c,
    altium,
    homepage,
    labview,
    siemens,
    autocad,
    PID,
    PIDm,
    ECG,
    fusion,
    microsoft,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Electrical Systems",
      icon: backend,
    },
    {
      title: "Materials & Processes",
      icon: web,
    },
    {
      title: "Manufacturing",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: solidworks,
    },
    {
      name: "Go",
      icon: siemens,
    },
    {
      name: "JavaScript",
      icon: autocad,
    },
    {
      name: "TypeScript",
      icon: fusion,
    },
    {
      name: "HTML 5",
      icon: matlab,
    },
    {
      name: "CSS 3",
      icon: python,
    },
    {
      name: "React JS",
      icon: c,
    },
    {
      name: "Next JS",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: html,
    },
    {
      name: "MongoDB",
      icon: css,
    },
    {
      name: "Spring Boot",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: altium,
    },
    {
      name: "git",
      icon: labview,
    },
    {
      name: "docker",
      icon: microsoft,
    },
  ];
  
  const experiences = [
    {
      title: "Microgravity Simulation Support Facility (MSSF) Engineering Intern",
      company_name: "NASA Kennedy Space Center",
      icon: nasawork,
      iconBg: "#FFFFFF",
      date: "Jan. 2025 - May 2025",
      points: [
        "Awarded a NASA Illinois Space Grant to fund upcoming internship at NASA Kennedy Space Center, focused on researching the effects of microgravity on biological organisms.",
        "Conducting computational fluid dynamics (CFD) simulations on plant cells in ANSYS to optimize nutrient transport and gas exchange for life support systems in the International Space Station (ISS).",
        "Developing MATLAB and Python scripts to calculate the net gravitational force experienced by cell cultures in Gravite microgravity simulators.",
      ],
    },
    {
      title: "Electrical Engineering Intern",
      company_name: "Milhouse Engineering and Construction, Inc.",
      icon: milhouse,
      iconBg: "#FFFFFF",
      date: "Sept. 2024 - Dec. 2024",
      points: [
        "Collaborated with 12 engineers to design overhead and underground power distribution systems (4-69 kV) for ComEd, the largest electric utility provider in Illinois.",
        "Developed interconnection diagrams in AutoCAD and MicroStation for 15+ FEJA solar projects, leveraging Google Earth KMZ files and ComEd GIS to assess the feasibility of customer’s proposed designs.",
        "Simulated wind, ice, and line load forces in PoleForeman to analyze the structural integrity of 10+ overhead poles, as outlined in NESC Rule 250B.",
        "Conducted field walk-downs to audit design packages and construction jobs, verifying that installations and operations complied with the National Electrical Safety Code and client requirements."
      ],
    },
    {
      title: "Project Engineering Intern",
      company_name: "Freudenberg Household Products",
      icon: FHCS,
      iconBg: "#FFFFFF",
      date: "June 2024 - Aug. 2024",
      points: [
        "Supported 4 engineers and 1 marketing & innovation specialist in the manufacturing and quality assurance of new and existing cleaning products for cleanrooms in pharmaceutical and microelectronics manufacturing.",
        "Developed 2D drawings in SolidWorks for 9 parts of a flagship product launching in 2025, incorporating geometric dimensioning and tolerancing (GD&T) in connection areas to minimize assembly issues for end users.",
        "Created bills of materials, quality control plans, and packaging specifications in Word, and optimized pallet patterns using TOPS Pro, improving sustainability, cost savings, and protection for 6 new products.",
        "Coordinated third-party particle release testing and conducted internal testing in the R&D lab on the autoclavability and chemical resistance of 3 prototypes, compiling the data into PowerPoint reports.",
        "Programmed a Universal Robots UR5 Cobot Arm to simulate a trolley passing through a wheel cleaner prototype 1,000 times, automating life cycle testing of the components.",
        "Designed and validated a test method to compute the coefficient of friction of mops, enabling the sales team to quantify and compare the friction experienced by users with Vileda Professional mops versus competitor mops."
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Katz Diagnostics, Inc.",
      icon: katz,
      iconBg: "#FFFFFF",
      date: "Jan. 2024 - May 2024",
      points: [
        "Collaborated with 2 engineers and 4 students to provide the first noninvasive method for diagnosing fibromyalgia by developing a near-infrared spectroscopy prototype that measures muscle oxygenation in a patient’s hand.",
        "Developed C++ code in Arduino IDE for an Arduino Nano that computes and displays SmO₂% on an LCD, reducing readout time for muscle oxygenation to under 15 seconds.",
        "Created Python scripts to generate time series analyses of patient SmO₂% levels and securely store them in Amazon Web Services (AWS), automating data collection for electronic health records.",
        "Leveraged Git and GitHub for version control and issue tracking, enabling the team to contribute code, review changes, and report bugs.",
        "Verified that the prototype’s design conforms with user needs by interviewing 2 fibromyalgia patients to gain insights into their preferences and challenges with the current diagnostic process.",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "NASA L'SPACE Mission Concept Academy",
      description:
        "Led a team of 16 students to prepare a MCR, SRR, MDR, and PDR for a rover that characterizes lunar pits, potentially identifying stable environments for long-term habitation on the Moon for the Artemis missions.",
      tags: [
        {
          name: "Siemens NX",
          color: "blue-text-gradient",
        },
        {
          name: "JMARS",
          color: "orange-text-gradient",
        },
      ],
      image: nasa,
      deploy_link: "https://www.lspace.asu.edu/mission-concept-academy"
    },
    {
      name: "NASA International Space Apps Challenge",
      description:
        "Developed a React website using TypeScript, overlaying emission datasets from the U.S. Greenhouse Gas Center onto a 3D model of Earth to create an interactive tool that simplified climate change data for users.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: homepage,
      deploy_link: "https://carbon0.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };