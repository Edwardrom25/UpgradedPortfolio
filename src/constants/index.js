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
    spaceapps,
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
      title: "Launch High Power Electrical Graduate Engineer",
      company_name: "SpaceX",
      icon: spacex,
      iconBg: "#000000",
      date: "May 2025 - August 2025",
      points: [
        "Supporting the design and troubleshooting of electrical components and systems critical to launch and recovery operations, including switchgears, motor control centers, and power monitoring hardware and software.",
        "Coordinating electrical installations with local Kennedy Space Center and Cape Canaveral Air Force Station electrical utilities personnel, utilizing NFPA 70E, NFPA 70 NEC, NFPA 497, NFPA 101, Vol 5 & 6 AFSPCMAN 91-710, and IBC standards.",
        "Performing load flow analyses to evaluate voltage levels, current flows, and system losses, ensuring electrical power distribution systems remain compatible with facility power budgets and integrated equipment.",
      ],
    },
    {
      title: "Modeling and Simulation Intern",
      company_name: "NASA Kennedy Space Center",
      icon: nasawork,
      iconBg: "#FFFFFF",
      date: "January 2025 - May 2025",
      points: [
        "Awarded a NASA Space Grant for an internship at NASA Kennedy Space Center's Microgravity Simulation Support Facility, collaborating with scientists to research the effects of microgravity on biological organisms to advance space medicine.",
        "Conducting computational fluid dynamics (CFD) simulations in ANSYS to quantify the stress on cells and model fluid and particle motion under various simulated microgravity conditions.",
        "Developing MATLAB and Python scripts to calculate the net gravitational force experienced by cell cultures in Airbus microgravity simulators.",
        "Assisting with the back-end development of an internal NASA database, designed to streamline access and comparison of data from spaceflight studies and Earth-based microgravity simulations.",
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
        "Developed interconnection diagrams in AutoCAD for 30+ FEJA solar power projects, ensuring installations complied with customer requirements and the National Electrical Safety Code (NESC).",
        "Conducted site visits to identify and document potential electrical feeder extensions and equipment placements that could interface with customers' existing electrical systems and support future solar farm expansions.",
        "Simulated wind, ice, and line load forces in PoleForeman to analyze the structural integrity of existing and proposed overhead poles, adhering to NESC Rule 250B.",
        "Trained a newly hired full-time electrical engineer on how to use AutoCAD and ComEd's internal GIS platform to create geo-spatially accurate interconnection diagrams, enabling them to contribute independently within two weeks."
      ],
    },
    {
      title: "Project Engineering Intern",
      company_name: "Freudenberg Household Products",
      icon: FHCS,
      iconBg: "#FFFFFF",
      date: "June 2024 - August 2024",
      points: [
        "Supported the new product development (NPD) and quality assurance teams with designing and testing new and existing cleaning products for ISO 5-ISO 8 cleanrooms in the aerospace industry.",
        "Developed 2D drawings in SolidWorks for 9 parts of a flagship product launching in 2025, incorporating geometric dimensioning and tolerancing (GD&T) in connection areas to minimize assembly issues for end users.",
        "Programmed a Universal Robots UR5 Cobot Arm to simulate a trolley passing through a wheel cleaner prototype 1,000 times, automating life cycle testing of the components.",
        "Coordinated third-party particle release testing and conducted internal testing in the R&D lab on the autoclavability and chemical resistance of 3 prototypes, compiling the data into PowerPoint reports.",
        "Created bills of materials, quality control plans, and packaging process specifications for 6 products, utilizing TOPS Pro to optimize pallet patterns for improved cost savings.",
        "Designed and validated a test method to compute the coefficient of friction of mops, enabling the sales team to quantify and compare the friction experienced by users with Vileda Professional mops versus competitor mops."
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "NASA L'SPACE Proposal Writing and Evaluation Experience",
      description:
        "Co-leading a team of 16 students to write a 7-page technical proposal on advanced electronics and computing hardware for atmospheric and space flight systems for NASA Marshall’s Chief Technologist.",
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
      image: lspace,
      deploy_link: "https://www.lspace.asu.edu/proposal-writing-academy"
    },
    {
      name: "NASA L'SPACE Mission Concept Academy",
      description:
        "Co-led a team of 16 students as the lead systems engineer, preparing a Mission Concept Review (MCR), System Requirements Review (SRR), Mission Design Review (MDR), and Preliminary Design Review (PDR) for a rover that characterizes lunar pits as potential stable environments for long-term habitation on the Moon for the Artemis missions.",
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
      image: lspace,
      deploy_link: "https://www.lspace.asu.edu/mission-concept-academy"
    },
    {
      name: "2024 NASA International Space Apps Challenge",
      description:
        "Built a web app with React and TypeScript to overlay emission datasets from the U.S. Greenhouse Gas Center onto a 3D model of Earth, creating an interactive tool that simplified climate change data for users.",
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
      image: spaceapps,
      deploy_link: "https://carbon0.netlify.app/"
    },
    {
      name: "The Illinois Space Society",
      description:
        "Supported the avionics team as a GNC engineer, developing and testing multi-stage rocket systems capable of reaching the Kármán line for the Illinois Space Society's Spaceshot competitions.",
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