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
    shomigo,
    lottus,
    khamis,
    pacific,
    go,
    java,
    postgres,
    spring,
    mrgtravel,
    ventures,
    next,
    solidworks,
    matlab,
    python,
    c,
    altium,
    labview,
    siemens,
    autocad,
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
      title: "Electrical Engineering Intern",
      company_name: "Milhouse Engineering and Construction, Inc.",
      icon: milhouse,
      iconBg: "#FFFFFF",
      date: "Sept. 2024 - Present",
      points: [
        "Prepare field notes, drawings, specifications, and calculations to support a team of 12 engineers in designing overhead and underground power distribution systems for ComEd",
        "Design circuit schematics for transformers in AutoCAD, optimizing safety and constructability by utilizing GIS to identify nearby substations that are not at maximum capacity and easily accessible",
        "Perform field walk‐downs to document conditions and generate material and labor specifications, ensuring installation and operations comply with all specifications, codes, and client requirements"
      ],
    },
    {
      title: "Project Engineering Intern",
      company_name: "Freudenberg Household Products",
      icon: FHCS,
      iconBg: "#FFFFFF",
      date: "June 2024 - Aug. 2024",
      points: [
        "Supported 4 engineers and 1 marketing & innovation specialist with the development and quality control of new and existing cleaning products for controlled environments in pharmaceutical and microelectronics manufacturing",
        "Designed and validated a test method to compute the coefficient of friction of mops, enabling the sales team to quantify and compare the friction experienced by users with Vileda Professional mops versus competitor mops",
        "Developed 2D SolidWorks drawings for 9 parts of a flagship product launching in 2025, ensuring precise geometric dimensioning and tolerancing (GD&T) in connection areas to minimize assembly issues for end users",
        "Created bills of materials, packaging specifications, and pallet patterns for 6 new products, optimizing for sustainability, cost, protection, and sales appeal",
        "Expedited clients’ cleanroom compliance documentation by compiling internal and third party testing data for 3 prototypes into PowerPoint reports",
        "Programmed a Universal Robots UR5 Cobot Arm to simulate a trolley passing through a wheel cleaner prototype 1,000 times, automating life cycle testing of the components"
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Katz Diagnostics, Inc.",
      icon: katz,
      iconBg: "#FFFFFF",
      date: "Jan. 2024 - May 2024",
      points: [
        "Collaborated with 2 engineers and 4 students to provide the first noninvasive method for diagnosing fibromyalgia by developing a near-infrared spectroscopy prototype that measures muscle oxygenation in a patient’s hand",
        "Reduced readout time for muscle oxygenation to under 15 seconds by developing and implementing C++ code into Arduino IDE for an Arduino Nano that computes and displays SmO₂% on an LCD",
        "Developed Python code to store and plot patients’ muscle oxygenation readings over time in an Excel file using the Pandas library, facilitating data collection for electronic health records",
        "Leveraged Git and GitHub for version control and issue tracking, enabling the team to contribute code, review changes, and report bugs",
        "Verified that the prototype’s design conforms with user needs by interviewing 2 fibromyalgia patients to gain insights into their preferences and challenges with the current diagnostic process",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "NASA L'SPACE Mission Concept Academy",
      description:
        "Collaborated with a team of 12 students to design a rover for an exploration mission on Mars, planning a 5‐year mission timeline and optimizing a $300M budget for a Preliminary Design Review",
      tags: [
        {
          name: "Siemens NX",
          color: "blue-text-gradient",
        }
      ],
      image: nasa,
      deploy_link: "https://www.travelmrg.com/"
    },
    {
      name: "PID Controller for Infusion Pump for Anesthesia",
      description:
        "Led a team of 2 students to design a PID controller in Simulink that provides adequate depth of anesthesia to a patient undergoing surgery based on measured EEG signals of alertness",
      tags: [
        {
          name: "MATLAB",
          color: "blue-text-gradient",
        },
        {
          name: "Simulink",
          color: "orange-text-gradient",
        },
      ],
      image: mrgtravel,
      deploy_link: "https://www.travelmrg.com/"
    },
    {
      name: "Electrocardiogram Circuit",
      description:
        "Teamed up with a student to give doctors a tool for monitoring irregularities in heart rhythm by designing a circuit that amplifies electrical signals from the heart and filters outside and internal noise",
      tags: [
        {
          name: "Autodesk Tinkercad",
          color: "blue-text-gradient",
        },
        {
          name: "Simulink",
          color: "orange-text-gradient",
        },
        {
          name: "Electronics Lab Equipment",
          color: "green-text-gradient"
        },
      ],
      image: ventures,
      source_code_link: "https://github.com/wasifsomji/McGillVentures",
      deploy_link: "https://mcgillvc.ca/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };