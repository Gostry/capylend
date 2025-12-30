let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let div1 = document.getElementById("div1");
let something = null;
const series = [
    { id: 1, nickname: "Marbed", dhv: "203 днів", path: "img/s-1.png" },
    { id: 2, nickname: "nazar125st", dhv: "202 днів", path: "img/s-2.png" },
    { id: 3, nickname: "Squdix", dhv: "201 днів", path: "img/s-3.png" },
    { id: 4, nickname: "Mr_gneg", dhv: "200 днів", path: "img/s-4.png" },
    { id: 5, nickname: "Bobe256", dhv: "106 днів", path: "img/s-5.png" },
    { id: 6, nickname: "xShadow16", dhv: "40 днів", path: "img/s-6.png" },
    { id: 7, nickname: "xShadow16", dhv: "39 днів", path: "img/s-7.png" },
    { id: 8, nickname: "djjs109", dhv: "16 днів", path: "img/s-8.png" },
    { id: 9, nickname: "bpyno", dhv: "13 днів", path: "img/s-9.png" },
    { id: 10, nickname: "Maykamine_cat", dhv: "13 днів", path: "img/s-10.png" }
];
const times = [
    { id: 1, nickname: "Nezila", dhv: "2722 годин", path: "img/h-1.png" },
    { id: 2, nickname: "Han__Salo", dhv: "1805 годин", path: "img/h-2.png" },
    { id: 3, nickname: "Marbed", dhv: "1431 годин", path: "img/h-3.png" },
    { id: 4, nickname: "Pavlic_Sherlock", dhv: "1232 гоодин", path: "img/h-4.png" },
    { id: 5, nickname: "Szepike", dhv: "1226 годин", path: "img/h-5.png" },
    { id: 6, nickname: "Kyryl_Kruhliak", dhv: "1130 годин", path: "img/h-6.png" },
    { id: 7, nickname: "Petrenko_Ivan", dhv: "1093 годин", path: "img/h-7.png" },
    { id: 8, nickname: "_zipa", dhv: "1029 годин", path: "img/h-8.png" },
    { id: 9, nickname: "nazar125st", dhv: "978 гоодин", path: "img/h-9.png" },
    { id: 10, nickname: "Asosinchik", dhv: "974 годин", path: "img/h-10.png" }
];
const voite = [
    { id: 1, nickname: "_zipa", dhv: "54 голосів", path: "img/v-1.png" },
    { id: 2, nickname: "Maykamine_cat", dhv: "48 голосів", path: "img/v-2.png" },
    { id: 3, nickname: "Marbed", dhv: "43 голосів", path: "img/v-3.png" },
    { id: 4, nickname: "Han__Salo", dhv: "41 голосів", path: "img/v-4.png" },
    { id: 5, nickname: "mainmagister", dhv: "37 голосів", path: "img/v-5.png" },
    { id: 6, nickname: "Asosinchik", dhv: "34 голосів", path: "img/v-6.png" },
    { id: 7, nickname: "youggurt", dhv: "33 голосів", path: "img/v-7.png" },
    { id: 8, nickname: "PriLair", dhv: "32 голосів", path: "img/v-8.png" },
    { id: 9, nickname: "Zlotik", dhv: "32 голосів", path: "img/v-9.png" },
    { id: 10, nickname: "Mercyako", dhv: "25 голосів", path: "img/v-10.png" }
];
staticPlayer(1);
function staticPlayer(x) {
    let h2 = document.createElement("h2");

    if (x == 1) {
        button1.style.color = "rgb(251 146 60)";
        button2.style.color = "rgb(156 163 175)";
        button3.style.color = "rgb(156 163 175)";
        h2.textContent = "Топ серіq гравців";

        something = series;
    } else if (x == 2) {
        button2.style.color = "rgb(251 146 60)";
        button1.style.color = "rgb(156 163 175)";
        button3.style.color = "rgb(156 163 175)";
        h2.textContent = "Топ гравців за часом гри";
        something = times;
    } else if (x == 3) {
        button3.style.color = "rgb(251 146 60)";
        button1.style.color = "rgb(156 163 175)";
        button2.style.color = "rgb(156 163 175)";
        h2.textContent = "Топ голосуючих гравців";
        something = voite;
    }

    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    div1.appendChild(h2);

    for (let i = 0; i < something.length; i = i + 1) {
        let div0 = document.createElement("div");
        div0.classList.add("numb");
        let numb = document.createElement("p");
        numb.textContent = something[i].id;

        div0.appendChild(numb);
        let div = document.createElement("div");
        div.classList.add("divFull");
        let div2 = document.createElement("div");
        div2.classList.add("divTwo");
        let div3 = document.createElement("div");
        div3.classList.add("div3");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        img.src = something[i].path;
        h3.textContent = something[i].nickname;
        let p = document.createElement("p");
        p.style.color = "rgb(251 146 60)";
        p.textContent = something[i].dhv;
        div.appendChild(div0);
        div2.appendChild(img);
        div3.appendChild(h3);
        div3.appendChild(p);
        div.appendChild(div2);
        div.appendChild(div3);
        div1.appendChild(div);
    }
}
