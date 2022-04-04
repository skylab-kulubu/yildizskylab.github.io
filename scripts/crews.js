class Crew {
  constructor(name, description, imgSource) {
    this.name = name;
    this.description = description;

    this.imgSource = !imgSource ? "sources/crews/default.png" : imgSource;
  }
}

const crews = [
  // ekip oluşturma şeması:
  // new Crew("ekip ismi", "ekip açıklaması", "ekiple alakalı görsel(statik URL veya directory URL)")
  new Crew(
    "WEBLAB",
    "Hem Front End, hem de Back End alanında araştırmalar yapan, eğitimler düzenleyen, projeler üreterek kendilerini geliştiren AR-GE ekibidir."
  ),
  new Crew(
    "Mobil Geliştirme Ekibi",
    "Flutter Framework’ü ile cross-platform uygulama geliştiren, bunun eğitimini veren ve projeler geliştirerek bilgilerini pratiğe döken AR-GE ekibidir."
  ),
  new Crew(
    "GAMELAB",
    "Unity Engine kullanarak hem mobil hem de masaüstü oyun geliştiren bunların eğitimini veren, Game Jamlere katılan ve kendi aralarında düzenleyen; Steam, Play Store gibi çeşitli platformlarda oyunlarını paylaşmayı hedefleyen ekibimiz."
  ),
  new Crew(
    "AI Research",
    "Yapay zekanın çeşitli alt disiplinlerinde araştırmalar yapan; makine öğrenmesi ve derin öğrenme alanlarında çalışan AR-GE ekibidir."
  ),
  new Crew(
    "ALGO LAB",
    "Algoritma geliştirme, mantıksal ve matematiksel problemlerin optimize çözümleri üzerine çalışan, programlama yarışmalarına katılan, kendilerini competitive-programming alanında geliştiren ekibimiz.",
    "sources/crews/algolab.jpeg"
  ),
  new Crew(
    "SKY SEC",
    "Siber güvenlik alanında makale yazma, tool geliştirme ve çeşitli etkinlikler düzenleme üzerine çalışan; aynı zamanda ekip üyelerine bu alanda hem teorik hem de pratik eğitim veren ekibimizdir.",
    "sources/crews/skysec.jpeg"
  ),
  new Crew(
    "SKYSİS",
    "Gömülü sistemler ve IoT üzerine projeler geliştirmeyi hedefleyen; bu alanda pratik ve teorik eğitimler, atölye çalışmaları ve makale yazma gibi çalışmalar yapmayı amaçlayan ekiptir."
  ),
];

const crewInfoTemplate =
  '<div class="crewinfoheader"><button onclick=\'closeinfo()\' id="closeinfo" title="Ekip görünümünü kapat"><i class="fa-solid fa-xmark"></i></button><img src="{@!IMG}" /><h1>{@!NAME}</h1><p>{@!DESCRIPTION}</p></div>';

const crewCardTemplate =
  '<li data-cid="{@!ID}"><img src="{@!IMG}" /><h2>{@!NAME}</h2></li>';

$(document).ready(function () {
  let crewPreviewString = "";
  let crewCounter = 0;

  let cardTemplate = crewCardTemplate;
  crews.map((el) => {
    let crewCard = cardTemplate
      .replace("{@!ID}", crewCounter)
      .replace("{@!IMG}", el.imgSource)
      .replace("{@!NAME}", el.name);
    crewCounter++;
    crewPreviewString += crewCard;
  });
  $("ul.crews").html(crewPreviewString);

  $("ul.crews > li").click(function () {
    $(".crewinfo").show();

    document.querySelector(".crewinfo").scrollIntoView();

    const crewID = $(this).data("cid");
    const crew = crews[crewID];

    if (crew === undefined) {
      $(".crewinfo").html("<h1>Ekibe ait bilgi bulunamadı.</h1>");
      return;
    }

    let infoTemplate = crewInfoTemplate;
    let output = infoTemplate
      .replace("{@!NAME}", crew.name)
      .replace("{@!DESCRIPTION}", crew.description)
      .replace("{@!IMG}", crew.imgSource);

    $(".crewinfo").html(output);
  });
});
