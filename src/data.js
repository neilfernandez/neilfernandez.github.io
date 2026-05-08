export const resume = {
  profile: {
    name: "Neil Fernandez",
    title: "Oracle principal engineer / systems generalist",
    email: "neilfernandezdev@gmail.com",
    website: "blog.neilfernandez.com",
    linkedin: "fernandezneil",
    github: "nelifernandez"
  },
  careerProfile:
    "Principal Member of Technical Staff on the Oracle APEX team, building across the stack: platform product features and bug fixes, AI agents and skills, internal AI interfaces, database-backed applications, CI/CD infrastructure, database schema evolution systems, PL/SQL, JavaScript, REST integrations, and system design. I tend to sit in the connective tissue of a team: front-end, back-end, architecture, demos, automation, and the places where product ideas need to become reliable systems.",
  layers: [
    {
      key: "ai",
      number: "01",
      title: "AI Interface Lab",
      summary: "agents, skills, demos, internal integrations",
      body:
        "Engineering agents, skills, and AI-facing integrations that make platform capabilities easier to demonstrate, test, and use.",
      code: "route_request -> enrich_context -> invoke_agent -> return_actionable_surface"
    },
    {
      key: "delivery",
      number: "02",
      title: "Delivery Pipeline",
      summary: "CI/CD architecture, schema evolution, release systems",
      body:
        "Helping architect CI/CD and database schema evolution systems with repeatable validation, safer change management, and clearer release paths.",
      code: "commit -> validate_change -> evolve_schema -> package -> deploy"
    },
    {
      key: "database",
      number: "03",
      title: "Database Core",
      summary: "Oracle, PL/SQL, schema-first application work",
      body:
        "Designing and building database-backed applications with Oracle, PL/SQL, REST interfaces, and schema-aware delivery habits.",
      code: "model_domain -> design_schema -> expose_service -> monitor_change"
    },
    {
      key: "product",
      number: "04",
      title: "Product Surface",
      summary: "Oracle APEX, platform features, user workflows",
      body:
        "Building on the Oracle APEX platform product itself, from feature work and bug fixes to front-end flows, JavaScript behavior, and user-facing surfaces around complex systems.",
      code: "workflow -> component -> interaction -> feedback_loop"
    },
    {
      key: "architecture",
      number: "05",
      title: "Architecture Mesh",
      summary: "system design, APIs, connecting teams",
      body:
        "Connecting dots across teams, tools, APIs, infrastructure, demos, and system boundaries so ideas become durable platforms.",
      code: "discover_constraints -> map_system -> align_interfaces -> ship"
    }
  ],
  experiences: [
    {
      role: "Principal Member of Technical Staff",
      time: "Aug 2021 - Present",
      company: "Oracle, Remote",
      details: [
        "Building on the Oracle APEX platform product as part of the APEX team, including product features, bug fixes, and user-facing platform improvements",
        "Engineering AI agents, skills, and internal AI-facing integrations across Oracle product and demo surfaces",
        "Helping architect CI/CD and database schema evolution software, with emphasis on repeatable delivery, safer change management, and reliable release workflows",
        "Working across front-end, back-end, architecture, system design, infrastructure, demos, and cross-team integration points",
        "Building with Oracle technologies, database-centered application patterns, REST interfaces, JavaScript, PL/SQL, and automation tooling"
      ]
    },
    {
      role: "Senior IT Engineer",
      time: "Jan 2021 - Aug 2021",
      company: "ngena, Remote",
      details: [
        "Responsible for the evolution, development, maintenance and support of ngena IT products viz. CPQ (Telco Customer Price Quote)",
        "Owned and supported Dev/Ops rollouts and deployments utilizing Jenkins and Liquibase",
        "Continuously improved the product and related data model for changing business needs following SAFe protocols",
        "Worked with teams to create APIs and integrate Elasticsearch, Logstash, Kibana, and Okta"
      ]
    },
    {
      role: "Consultant / Web Developer",
      time: "Jan 2016 - Jan 2021",
      company: "Insum Solutions, New York / Remote",
      details: [
        "Built custom Oracle APEX applications with PL/SQL, JavaScript, jQuery, CSS, and Oracle Database",
        "Worked directly with large clients, including Carnival Cruise Lines and government entities, from development through production deployment",
        "Led interns on a geographical insight application, including tickets, code review, analysis, and delivery standards",
        "Ran weekly TechnoScrums for employees to share tools, techniques, and technology demos"
      ]
    },
    {
      role: "Brazilian Jiu Jitsu Co-instructor",
      time: "Jan 2019 - Aug 2019",
      company: "Robert Hugus Brazilian Jiu Jitsu, New York",
      details: [
        "Assisted the head coach with class instruction and teaching duties"
      ]
    },
    {
      role: "EOP Computer Science Tutor",
      time: "Aug 2015 - May 2016",
      company: "SUNY Plattsburgh EOP, New York",
      details: [
        "Explained complex concepts using approachable language for EOP students",
        "Tracked student progress through evaluations and reports"
      ]
    },
    {
      role: "Student Network Field Tech",
      time: "May 2014 - Jan 2016",
      company: "SUNY Plattsburgh Network Operations, Plattsburgh",
      details: [
        "Programmed switches, changed IP addresses, diagnosed hardware, installed patch panels, and tested cabling",
        "Built a Raspberry Pi port-knocking project for secure SSH access using iptables"
      ]
    }
  ],
  projects: [
    {
      title: "Google Places Autocomplete Plugin",
      link: "https://github.com/insum-labs/apex-plugin-google-places-autocomplete",
      tagline:
        "An Oracle APEX plugin integrating Google Places Autocomplete for easier form filling and application development."
    },
    {
      title: "Paulo Santana Brazilian Jiu Jitsu",
      link: "https://www.paulosantanabjj.com/",
      tagline: "A website for a local Brazilian Jiu Jitsu academy."
    },
    {
      title: "Robert Hugus Brazilian Jiu Jitsu",
      link: "https://www.roberthugusbjj.com",
      tagline: "A website for a local Brazilian Jiu Jitsu academy."
    }
  ],
  skills: [
    { name: "AI Agents & Skills", level: 90 },
    { name: "CI/CD & Schema Evolution", level: 90 },
    { name: "Oracle / PL/SQL", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "HTML5 & CSS", level: 80 },
    { name: "RESTful Web Services", level: 75 },
    { name: "Consulting", level: 85 }
  ]
};
