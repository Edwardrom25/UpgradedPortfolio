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
      name: "Arduino",
      icon: arduino,
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
      name: "LabVIEW",
      icon: labview,
    },
  ];
  
  const experiences = [
    {
      title: "High Power Graduate Engineer",
      company_name: "SpaceX",
      icon: spacex,
      iconBg: "#000000",
      date: "May 2025 - August 2025",
      points: [
        "Starting May 2025.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "NASA Kennedy Space Center",
      icon: nasawork,
      iconBg: "#FFFFFF",
      date: "January 2025 - May 2025",
      points: [
        "Developed a Python-based GUI application to enable space biology investigators to validate that their ground-based simulators achieve microgravity and partial gravity.",
      ],
    },
    {
      title: "Electrical Engineering Intern",
      company_name: "Milhouse Engineering and Construction, Inc.",
      icon: milhouse,
      iconBg: "#FFFFFF",
      date: "September 2024 - December 2024",
      points: [
        "Designed overhead and underground electrical distribution systems (4-69 kV) for 40+ solar interconnection projects by preparing field notes, drawings in AutoCAD, and load calculations.",
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
        "Co-authored a proposal on flight computing and avionics technologies to secure a $10K seed fund from NASA Marshall Space Flight Center’s Chief Technologist.",
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
        "Co-led a team of 16 students to prepare an MCR, SRR, MDR, and PDR for a rover in search of lunar pits that provide stable temperatures for human habitation.",
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
        "Acted as an Electronic Hardware Engineer for the Illinois Space Society's Spaceshot Project by designing electronic boards and circuits critical for the operation of the avionics bay in rockets competing in events such as FAR-51025 and the Spaceport America Cup.",
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