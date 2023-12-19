const whoamiObj = {
  messages: [
    {
      title: "Early Coding Journey",
      content:
        "Began coding journey in 2019 with Python, delving into Data Structures and Algorithms.",
    },
    {
      title: "UI/UX and React Expertise",
      content:
        "Skilled in React, RESTful APIs, and UI/UX design, focusing on impactful digital experiences.",
    },
    {
      title: "Blockchain Exploration",
      content:
        "Started exploring blockchain in 2020; proficient in smart contracts, cryptography, and infrastructure.",
    },
    {
      title: "Educational Milestone",
      content:
        "Completed Harvard CS50, solidifying foundation in computer science principles.",
    },
    {
      title: "Innovation in Healthcare",
      content:
        "As Lead Developer at Hemora, used React Native to provide telemedicine solutions.",
    },
    {
      title: "Leadership and Collaboration",
      content:
        "Excel in leading teams, guiding project milestones, and fostering collaboration.",
    },
    {
      title: "Technical Excellence",
      content:
        "Implemented robust Continuous Integration process at Hemora, balancing development speed with quality.",
    },
    {
      title: "Commitment to Learning",
      content:
        "Embraces lifelong learning, staying abreast of emerging tech trends.",
    },
  ],
};

export const createWhoami = (): string[] => {
  const whoami: string[] = [];
  whoami.push("<br>");

  whoamiObj.messages.forEach((entry) => {
    whoami.push(`<strong>${entry.title}</strong>: ${entry.content}`);
    whoami.push("<br>");
  });

  return whoami;
};
