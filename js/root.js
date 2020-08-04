
var portfolio=document.getElementById("portfolio")



var dataReload = document.querySelectorAll("[data-reload");

var language = {
  cat: {
    portfoli: "Portfoli en manteniment, provi més endavant.",
  },
  es: {
    portfoli: "Portfolio en mantenimiento, pruebe más adelante.",
  },
  en: {
    portfoli: "Portfolio in maintenance, try later.",
  },
};

//define language via window hash
if (window.location.hash) {
  if (window.location.hash === "#es") {
    portfolio.textContent = language.es.portfoli;
  }
  if (window.location.hash === "#cat") {
    portfolio.textContent = language.cat.portfoli;
  }
  if (window.location.hash === "#en") {
    portfolio.textContent = language.en.portfoli;
  }
}

//define language reload onclick illiteration
for (i= 0; i<=dataReload.length; i++){
    dataReload[i].onclick=function(){
    location.reload(true);
}};