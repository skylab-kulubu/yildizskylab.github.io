class Project {
  constructor(name, description, link, imgSource) {
    this.name = name;
    if (!description) this.description = undefined;
    else this.description = description;

    this.link = link;

    this.imgSource = !imgSource ? "sources/projects/default.png" : imgSource;
  }
}

const projects = [
  // yeni proje şeması
  // new Project("proje ismi", "proje açıklaması", "varsa projenin URL'si, yoksa null veya undefined girilmeli", "projeyle alakalı görsel(statik URL veya directory URL)")
  new Project(
    "eAçık Kaynak",
    "buraya açıklama gelecek",
    "https://eacikkaynak.com/",
    "https://eacikkaynak.com/public/icons/acikkaynakmavi.png"
  ),
];

const projectTemplate =
  '<a{@!LINK}><div id="projectelement"><img alt="{@!NAME}" src="{@!IMG}" /><h2>{@!NAME}</h2></div></a>';

$(document).ready(function () {
  let projectPreviewString = "";
  let template = projectTemplate;
  projects.map((el) => {
    let projectCard = template
      .replace(/{@!NAME}/g, el.name)
      .replace("{@!IMG}", el.imgSource);

    if (el.link) {
      projectCard = projectCard.replace(
        "{@!LINK}",
        ` href="${el.link}" target="_blank"`
      );
    } else {
      projectCard = projectCard.replace("{@!LINK}", "");
    }

    projectPreviewString += projectCard;
  });
  $("#projectlist").html(projectPreviewString);
});
