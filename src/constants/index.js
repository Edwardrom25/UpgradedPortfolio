import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    vileda,
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
    collins,
    katzfull,
    FBI,
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
    spaceshot,
    ansys,
    matlab,
    python,
    c,
    nasaproject,
    spacex,
    ISS,
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
      id: "activities",
      title: "Activities",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Systems Engineering",
      icon: backend,
    },
    {
      title: "Electrical Systems",
      icon: web,
    },
    {
      title: "Materials & Processes",
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
      icon: c,
    },
    {
      name: "HTML 5",
      icon: python,
    },
    {
      name: "CSS 3",
      icon: matlab,
    },
    {
      name: "React JS",
      icon: javascript,
    },
    {
      name: "Next JS",
      icon: html,
    },
    {
      name: "Node JS",
      icon: css,
    },
    {
      name: "MongoDB",
      icon: git,
    },
    {
      name: "Spring Boot",
      icon: ansys,
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
      date: "January 2025 - May 2025",
      points: [
        "Awarded a NASA Illinois Space Grant for an internship at NASA Kennedy Space Center, supporting a team of project scientists researching the effects of microgravity on biological organisms.",
        "Conducted computational fluid dynamics (CFD) simulations in ANSYS to quantify the stress on cells and model fluid and particle motion under various simulated microgravity conditions.",
        "Developed MATLAB and Python scripts to calculate the net gravitational force experienced by cell cultures in Airbus microgravity simulators.",
        "Contributed to the back-end development of an internal NASA database, designed to streamline access and comparison of data from spaceflight studies and Earth-based microgravity simulations.",
      ],
    },
    {
      title: "Electrical Engineering Intern",
      company_name: "Milhouse Engineering and Construction, Inc.",
      icon: milhouse,
      iconBg: "#FFFFFF",
      date: "September 2024 - December 2024",
      points: [
        "Collaborated with electrical engineers to design overhead and underground power distribution systems (4-69 kV) for ComEd, the largest electric utility provider in Illinois.",
        "Developed interconnection diagrams in AutoCAD and MicroStation for 30+ FEJA solar projects, leveraging Google Earth KMZ files and ComEd GIS to assess the feasibility of customer’s proposed designs.",
        "Simulated wind, ice, and line load forces in PoleForeman to analyze the structural integrity of 10+ overhead poles, as outlined in NESC Rule 250B.",
        "Conducted field walk-downs to audit design packages and construction jobs, verifying that installations and operations complied with the National Electrical Safety Code and client requirements."
      ],
    },
    {
      title: "Project Engineering Intern",
      company_name: "Freudenberg Household Products",
      icon: FHCS,
      iconBg: "#FFFFFF",
      date: "June 2024 - August 2024",
      points: [
        "Supported the new product development (NPD) and quality assurance teams with designing and testing new and existing cleaning products for ISO 5-ISO 8 cleanrooms.",
        "Developed 2D drawings in SolidWorks for 9 parts of a flagship product launching in 2025, incorporating geometric dimensioning and tolerancing (GD&T) in connection areas to minimize assembly issues for end users.",
        "Created bills of materials, quality control plans, and packaging process specifications for 6 products, utilizing TOPS Pro to optimize pallet patterns for improved cost savings.",
        "Coordinated third-party particle release testing and conducted internal testing in the R&D lab on the autoclavability and chemical resistance of 3 prototypes, compiling the data into PowerPoint reports.",
        "Programmed a Universal Robots UR5 Cobot Arm to simulate a trolley passing through a wheel cleaner prototype 1,000 times, automating life cycle testing of the components.",
        "Designed and validated a test method to compute the coefficient of friction of mops, enabling the sales team to quantify and compare the friction experienced by users with Vileda Professional mops versus competitor mops."
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Katz Diagnostics, Inc.",
      icon: katzfull,
      iconBg: "#FFFFFF",
      date: "January 2024 - May 2024",
      points: [
        "Assisted Dr. Robert Katz's startup in developing the first noninvasive test for diagnosing fibromyalgia by designing a near-infrared spectroscopy prototype that measures muscle oxygenation in a patient's hand.",
        "Developed C++ code in Arduino IDE for an Arduino Nano that computes and displays SmO₂% on an LCD, reducing the readout time for muscle oxygenation to under 15 seconds.",
        "Created Python scripts to generate time series analyses of patient SmO₂% levels and securely store them in Amazon Web Services (AWS), automating data collection for electronic health records.",
        "Leveraged Git and GitHub for version control, enabling the team to contribute code, review changes, and report bugs.",
        "Verified that the prototype’s design conformed with user needs by interviewing 2 fibromyalgia patients to gain insights into their preferences and challenges with the current diagnostic process.",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "NASA L'SPACE Proposal Writing and Evaluation Experience Academy",
      description:
        "Co-led a team of 16 students to successfully write a 7-page technical proposal on a tumbling ball rover for NASA Marshall's Chief Technologist.",
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
      image: nasaproject,
      deploy_link: "https://www.lspace.asu.edu/proposal-writing-academy"
    },
    {
      name: "NASA L'SPACE Mission Concept Academy",
      description:
        "Co-led a team of 16 students as the lead systems engineer, preparing a MCR, SRR, MDR, and PDR for a rover that characterizes lunar pits to identify stable environments for long-term habitation on the Moon for the Artemis missions.",
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
      image: nasaproject,
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
          name: "TypeScript",
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
    {
      name: "The Illinois Space Society",
      description:
        "Supported the avionics team in developing and testing multi-stage rocket systems targeting the Karman line for the Illinois Space Society's Spaceshot projects.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "MATLAB",
          color: "orange-text-gradient",
        },
      ],
      image: spaceshot,
      deploy_link: "https://www.illinoisspacesociety.org/spaceshot"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };