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
    ignition,
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
    MCA,
    NPWEE,
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
      title: "Experience",
    },
    {
      id: "tech",
      title: "Skills",
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
      title: "Electric Power",
      icon: mobile,
    },
    {
      title: "Modeling and Simulation",
      icon: web,
    },
  ];
  
  const technologies = [
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
      name: "LabVIEW",
      icon: labview,
    },
    {
      name: "Ignition",
      icon: ignition,
    },
    {
      name: "AutoCAD",
      icon: autocad,
    },
    {
      name: "Siemens NX",
      icon: siemens,
    },
  ];
  
  const experiences = [
    {
      title: "Electrical Engineering Intern, Facilities Infrastructure",
      company_name: "SpaceX",
      icon: spacex,
      iconBg: "#000000",
      date: "May 2025 - August 2025",
      points: [
        "Supported the Facilities Infrastructure Engineering department in designing and operating critical electric infrastructure for SpaceX’s east coast launch facilities.",
        "Created a graphical user interface in LabVIEW to enable Falcon Recovery Controllers to monitor the Just Read the Instructions droneship’s onboard electric power systems.",
      ],
    },
    {
      title: "Software Engineering Intern, Exploration Research and Technology",
      company_name: "NASA Kennedy Space Center",
      icon: nasawork,
      iconBg: "#FFFFFF",
      date: "January 2025 - May 2025",
      points: [
        "Supported the Microgravity Simulation Support Facility in examining the impacts of spaceflight on biological systems to enable a sustained human presence on the Moon, Mars, and beyond.",
        "Created a graphical user interface in Python to enable Project Scientists to monitor the G-forces experienced by a biospecimen in a ground-based microgravity simulator.",
      ],
    },
    {
      title: "Electrical Engineering Intern, Distribution",
      company_name: "Milhouse Engineering and Construction, Inc.",
      icon: milhouse,
      iconBg: "#FFFFFF",
      date: "September 2024 - December 2024",
      points: [
        "Supported ComEd’s transition to sustainable energy under the Future Energy Jobs Act, which requires at least 4,300 MW of new solar and wind power to be built in Illinois by 2030.",
        "Created construction drawings in AutoCAD and performed loading calculations in IKE PoleForeman to facilitate the interconnection of 35 solar farms to ComEd's electric grid.",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "Student Pilot",
      description:
        "Completing Private Pilot I and Private Pilot II at Parkland College. The courses include 29.7 and 37.4 flight with simulator hours, respectively.",
      tags: [
        {
          name: "ForeFlight",
          color: "orange-text-gradient",
        },
      ],
      image: FAA,
      deploy_link: "https://www.parkland.edu/Main/Academics/Departments/Aviation/Explore/Academics"
    },
    {
      name: "NASA Proposal Writing and Evaluation Experience Academy",
      description:
        "Co-authored a proposal for a flight computing and avionics technology to secure a $10K seed fund from NASA Marshall Space Flight Center.",
      tags: [
        {
          name: "NX",
          color: "green-text-gradient",
        },
      ],
      image: nasaproject,
      source_code_link: NPWEE,
      deploy_link: "https://www.lspace.asu.edu/proposal-writing-academy"
    },
    {
      name: "Mission Concept Academy",
      description:
        "Co-authored an MCR, SRR, MDR, and PDR for a rover in search of lunar pits that provide stable temperatures for human habitation.",
      tags: [
        {
          name: "NX",
          color: "pink-text-gradient",
        },
        {
          name: "JMARS",
          color: "blue-text-gradient",
        },
      ],
      image: nasaproject,
      source_code_link: MCA,
      deploy_link: "https://www.lspace.asu.edu/mission-concept-academy"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };