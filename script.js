let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let div1 = document.getElementById("div1");
let something = null;
const series = [
    { id: 1, nickname: "Marbed", dhv: "203 днів" },
    { id: 2, nickname: "nazar125st", dhv: "202 днів" },
    { id: 3, nickname: "Squdix", dhv: "201 днів" },
    { id: 4, nickname: "Mr_gneg", dhv: "200 днів" },
    { id: 5, nickname: "Bobe256", dhv: "106 днів" },
    { id: 6, nickname: "xShadow16", dhv: "40 днів" },
    { id: 7, nickname: "xShadow16", dhv: "39 днів" },
    { id: 8, nickname: "djjs109", dhv: "16 днів" },
    { id: 9, nickname: "bpyno", dhv: "13 днів" },
    { id: 10, nickname: "Maykamine_cat", dhv: "13 днів" }
];
const times = [
    { id: 1, nickname: "Nezila", dhv: "2722 годин" },
    { id: 2, nickname: "Han__Salo", dhv: "1805 годин" },
    { id: 3, nickname: "Marbed", dhv: "1431 годин" },
    { id: 4, nickname: "Pavlic_Sherlock", dhv: "1232 гоодин" },
    { id: 5, nickname: "Szepike", dhv: "1226 годин" },
    { id: 6, nickname: "Kyryl_Kruhliak", dhv: "1130 годин" },
    { id: 7, nickname: "Petrenko_Ivan", dhv: "1093 годин" },
    { id: 8, nickname: "_zipa", dhv: "1029 годин" },
    { id: 9, nickname: "nazar125st", dhv: "978 гоодин" },
    { id: 10, nickname: "Asosinchik", dhv: "974 годин" }
];
const voite = [
    { id: 1, nickname: "_zipa", dhv: "54 голосів" },
    { id: 2, nickname: "Maykamine_cat", dhv: "48 голосів" },
    { id: 3, nickname: "Marbed", dhv: "43 голосів" },
    { id: 4, nickname: "Han__Salo", dhv: "41 голосів" },
    { id: 5, nickname: "mainmagister", dhv: "37 голосів" },
    { id: 6, nickname: "Asosinchik", dhv: "34 голосів" },
    { id: 7, nickname: "youggurt", dhv: "33 голосів" },
    { id: 8, nickname: "PriLair", dhv: "32 голосів" },
    { id: 9, nickname: "Zlotik", dhv: "32 голосів" },
    { id: 10, nickname: "Mercyako", dhv: "25 голосів" }
];
staticPlayer(1);
function staticPlayer(x) {
    if (x == 1) {
        button1.style.color = "rgb(251 146 60)";
        button2.style.color = "rgb(156 163 175)";
        button3.style.color = "rgb(156 163 175)";
        something = series;
    } else if (x == 2) {
        button2.style.color = "rgb(251 146 60)";
        button1.style.color = "rgb(156 163 175)";
        button3.style.color = "rgb(156 163 175)";
        something = times;
    } else if (x == 3) {
        button3.style.color = "rgb(251 146 60)";
        button1.style.color = "rgb(156 163 175)";
        button2.style.color = "rgb(156 163 175)";
        something = voite;
    }
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    for (let i = 0; i < something.length; i = i + 1) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.textContent = something[i].nickname;
        let p = document.createElement("p");
        p.textContent = something[i].dhv;
        div.appendChild(h3);
        div.appendChild(p);
        div1.appendChild(div);
    }
}
