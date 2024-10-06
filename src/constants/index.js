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
        "Conduct computational fluid dynamics (CFD) simulations on plant cells in ANSYS to optimize nutrient transport and gas exchange for life support systems in the International Space Station (ISS).",
        "Develop MATLAB and Python scripts to calculate the net gravitational force experienced by cell cultures in Gravite microgravity simulators.",
      ],
    },
    {
      title: "Electrical Engineering Intern",
      company_name: "Milhouse Engineering and Construction, Inc.",
      icon: milhouse,
      iconBg: "#FFFFFF",
      date: "Sept. 2024 - Dec. 2024",
      points: [
        "Collaborated with 12 engineers to design overhead and underground power distribution systems (4-69 kV) for Exelon Corporation.",
        "Developed 15+ one-line utility drawings in AutoCAD and MicroStation for 10+ clients, leveraging Google Earth and CEGIS to assess the feasibility of proposed designs.",
        "Simulated wind, ice, and line load forces in PoleForeman to analyze the structural integrity of 10+ overhead poles, reinforcing unstable poles with guy wires as recommended by ComEd Standards C7022 and C7150.",
        "Conducted field walk-downs to review drawings, specifications, and construction jobs, ensuring installations and operations comply with IEEE standards, EIC standards, and client requirements."
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
        "Designed and validated a test method to compute the coefficient of friction of mops, enabling the sales team to quantify and compare the friction experienced by users with Vileda Professional mops versus competitor mops.",
        "Developed 2D SolidWorks drawings for 9 parts of a flagship product launching in 2025, incorporating geometric dimensioning and tolerancing (GD&T) in connection areas to minimize assembly issues for end users.",
        "Created bills of materials, quality control plans, and packaging specifications in Word, and optimized pallet patterns using TOPS Pro, improving sustainability, cost savings, and protection for 6 new products.",
        "Expedited clients’ compliance documentation by compiling internal and third party testing data on the particle release and chemical resistance of 3 prototypes into PowerPoint reports.",
        "Programmed a Universal Robots UR5 Cobot Arm to simulate a trolley passing through a wheel cleaner prototype 1,000 times, automating life cycle testing of the components."
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
        "Reduced readout time for muscle oxygenation to under 15 seconds by developing and implementing C++ code into Arduino IDE for an Arduino Nano that computes and displays SmO₂% on an LCD.",
        "Automated data collection for electronic health records by creating Python scripts in Jupyter Notebook to generate plots for tracking trends in patient SmO₂% levels.",
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
        "Teamed up with 16 students to prepare a Preliminary Design Review (PDR) for a spacecraft that characterizes lunar pits, potentially identifying stable environments for long-term habitation on the Moon for the Artemis missions.",
      tags: [
        {
          name: "Siemens NX",
          color: "blue-text-gradient",
        }
      ],
      image: nasa,
      deploy_link: "https://www.lspace.asu.edu/"
    },
    {
      name: "NASA International Space Apps Challenge",
      description:
        "Developed an interactive platform in React.js for NASA’s Space Apps Challenge, overlaying global emission data from the U.S. GHG Center on a 3D model of Earth, making climate information accessible and engaging for the public.",
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
          color: "blue-text-gradient",
        },
      ],
      image: homepage,
      deploy_link: "https://carbon0.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };