import command from "../../config.json" assert { type: "json" };

const createProject = (): string[] => {
  let string = "";
  const projects: string[] = [];
  const files = `${command.projects.length} File(s)`;
  const SPACE = "&nbsp;";
  const ACCOLADE_EMOJI = "🏆";
  // Emoji for accolade

  projects.push("<br>");

  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(30 - ele[0].length);
    string += ele[1];
    projects.push(string);

    // Check for accolade and add it if present
    if (ele.length > 3 && ele[3] !== "No") {
      projects.push("<br>" + SPACE.repeat(40) + ACCOLADE_EMOJI + " " + ele[3]);
    }

    string = "";
    projects.push("<br>"); // Add a break after each project (and possible accolade)
  });

  projects.push(files);
  projects.push("<br>");
  return projects;
};

export const PROJECTS = createProject();
