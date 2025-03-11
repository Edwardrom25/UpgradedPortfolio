import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    vileda,
    typescript,
    creo,
    arduino,
    html,
    css,
    reactjs,
    spaceappscertificate,
    lucy,
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
    lspace,
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
    FAA,
    go,
    java,
    postgres,
    nasawork,
    spring,
    mrgtravel,
    ventures,
    next,
    solidworks,
    mcacertificate,
    spaceshot,
    ansys,
    matlab,
    python,
    c,
    nasaproject,
    spacex,
    ISS,
    spaceapps,
    altium,
    KiCAD,
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
      title: "Electrical Systems",
      icon: backend,
    },
    {
      title: "Materials & Processes",
      icon: mobile,
    },
    {
      title: "Modeling & Simulation",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "SolidWorks",
      icon: solidworks,
    },
    {
      name: "Siemens NX",
      icon: siemens,
    },
    {
      name: "Creo Parametric",
      icon: creo,
    },
    {
      name: "AutoCAD",
      icon: autocad,
    },
    {
      name: "KiCAD",
      icon: KiCAD,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MATLAB",
      icon: matlab,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Arduino",
      icon: arduino,
    },
    {
      name: "LabVIEW",
      icon: labview,
    },
  ];
  
  const experiences = [
    {
      title: "High Power Electrical Engineering Intern",
      company_name: "SpaceX",
      icon: spacex,
      iconBg: "#000000",
      date: "May 2025 - August 2025",
      points: [
        "Starting May 2025.",
      ],
    },
    {
      title: "Microgravity Simulation Engineering Intern",
      company_name: "NASA Kennedy Space Center",
      icon: nasawork,
      iconBg: "#FFFFFF",
      date: "January 2025 - May 2025",
      points: [
        "Provided engineering support to scientists researching the effects of altered gravity environments on biological organisms to better enable human spaceflight to the Moon, Mars, and beyond.",
        "Developed a mathematical model in Python that determines the time-averaged magnitude and distribution of the gravity vector to evaluate the efficacy of microgravity simulators.",
        "Utilized Creo Parametric and in-house 3D printer capabilities to develop customized science modules for the microgravity simulators based on the unique science requirements of each project.",
      ],
    },
    {
      title: "Electrical Engineering Intern",
      company_name: "Milhouse Engineering and Construction, Inc.",
      icon: milhouse,
      iconBg: "#FFFFFF",
      date: "September 2024 - December 2024",
      points: [
        "Executed designs for overhead and underground electrical distribution systems (4-69 kV) to support ComEd’s expansion of renewable energy infrastructure under Illinois' Future Energy Jobs Act (FEJA).",
        "Conducted field walkdowns to document existing conditions and generate material and labor specifications.",
        "Prepared design drawings in AutoCAD for 40+ solar interconnection projects, ensuring conformance to applicable codes and regulations.",
        "Performed pole loading analysis in IKE PoleForeman using NESC extreme wind and ice load cases to reduce outages and restoration times.",
        "Utilized the Tools for Engineering Design (TED) module within ComEd's Geographic Information System (CEGIS) to create work orders and integrate associated sketches into ComEd's distribution network model."
      ],
    },
    {
      title: "Test Engineering Intern",
      company_name: "Freudenberg Household Products",
      icon: FHCS,
      iconBg: "#FFFFFF",
      date: "June 2024 - August 2024",
      points: [
        "Supported the new product development and quality teams in designing and testing metal and plastic components for microfiber cleaning systems used to clean controlled environments.",
        "Conducted gamma irradiation, particle release, cleaning efficacy, autoclavability, and chemical resistance testing on prototypes to ensure reliability goals were consistently met.",
        "Programmed a Universal Robots UR5 Cobot Arm to continually expose prototypes to the forces they are expected to sustain over their lifetime to reveal component shortcomings.",
        "Investigated and resolved quality complaints by identifying root causes and implementing corrective actions.",
        "Created product specifications, bills of materials, quality control plans, and packaging process specifications for new and existing products.",
        "Developed detailed component and assembly drawings in SolidWorks, incorporating geometric dimensioning and tolerancing (GD&T)."
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "Student Pilot",
      description:
        "Completing the Private Pilot Program at Parkland College during the fall 2025 and spring 2026 semesters. The private pilot training consists of two classes taken over the course of two semesters: AVI 101 (Private Pilot I) and AVI 120 (Private Pilot II), which provide 29.7 and 37.4 flight with simulator hours, respectively.",
      tags: [
        {
          name: "ForeFlight",
          color: "blue-text-gradient",
        },
        {
          name: "Frasca Flight Simulators",
          color: "orange-text-gradient",
        },
      ],
      image: FAA,
      deploy_link: "https://www.parkland.edu/Main/Academics/Departments/Aviation/Explore/Academics"
    },
    {
      name: "NASA L'SPACE Proposal Writing and Evaluation Experience",
      description:
        "Co-authored a 7-page proposal on flight computing and avionics technologies to secure a $10K seed fund from NASA Marshall Space Flight Center’s Chief Technologist.",
      tags: [
        {
          name: "Siemens NX",
          color: "green-text-gradient",
        },
      ],
      image: nasaproject,
      deploy_link: "https://www.lspace.asu.edu/proposal-writing-academy"
    },
    {
      name: "NASA L'SPACE Mission Concept Academy",
      description:
        "Co-led a team of 16 students as Lead Systems Engineer to prepare a MCR, SRR, MDR, and PDR for a rover testing the thermal isolation and structural integrity of lunar pits to identify long-term habitation sites for the Artemis missions.",
      tags: [
        {
          name: "Siemens NX",
          color: "pink-text-gradient",
        },
        {
          name: "JMARS",
          color: "blue-text-gradient",
        },
      ],
      image: nasaproject,
      source_code_link: mcacertificate,
      deploy_link: "https://www.lspace.asu.edu/mission-concept-academy"
    },
    {
      name: "The Illinois Space Society",
      description:
        "Acted as an Electronic Hardware Engineer for the Illinois Space Society's Spaceshot Project, designing electronic boards and circuits critical for the operation of the avionics bay in rockets competing in events such as FAR-51025 and the Spaceport America Cup.",
      tags: [
        {
          name: "KiCad EDA",
          color: "orange-text-gradient",
        },
      ],
      image: spaceshot,
      deploy_link: "https://www.illinoisspacesociety.org/spaceshot"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };