let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let div1 = document.getElementById("div1");
let something = null;
const series = [
    { id: 1, nickname: "nazar125st", dhv: "198 днів" },
    { id: 2, nickname: "Marberd", dhv: "198 днів" },
    { id: 3, nickname: "Mr_gneg", dhv: "196 днів" },
    { id: 3, nickname: "Bobe256", dhv: "101 днів" },
    { id: 3, nickname: "xShadow16", dhv: "36 днів" }
];
const times = [
    { id: 1, nickname: "Nezila", dhv: "2695 годин" },
    { id: 2, nickname: "Han__Salo", dhv: "1804 годин" },
    { id: 3, nickname: "Marbed", dhv: "1415 годин" },
    { id: 3, nickname: "Pavlic_Sherlock", dhv: "1229 гоодин" },
    { id: 3, nickname: "Szepike", dhv: "1220 годин" }
];
const voite = [
    { id: 1, nickname: "_zipa", dhv: "54 голосів" },
    { id: 2, nickname: "Maykamine_cat", dhv: "48 голосів" },
    { id: 3, nickname: "Marbed", dhv: "43 голосів" },
    { id: 3, nickname: "Han__Salo", dhv: "41 голосів" },
    { id: 3, nickname: "mainmagister", dhv: "37 голосів" }
];

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
        let h1 = document.createElement("h1");
        h1.textContent = series[i].nickname;
        let p = document.createElement("p");
        p.textContent = series[i].dhv;
        div.appendChild(h1);
        div.appendChild(p);
        div1.appendChild(div);
    }
}
