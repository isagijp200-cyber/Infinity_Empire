// tribes.js - 30 قبيلة تابعة لإمبراطورية إنفينيتي

const tribesData = [
    { name: "العـاصـمـة 𝑫𝑹𝑨𝑮𝑶𝑵", image: "https://files.catbox.moe/2lnsrh.png", founder: "NARUTO", members: 300 },
    { name: "𝑴𝑨𝑹𝑰𝑵𝑬", image: "https://files.catbox.moe/ggtoff.png", founder: "LUFFY", members: 285 },
    { name: "𝑨𝑺𝑰𝑬𝑳𝑨𝑵𝑫", image: "https://files.catbox.moe/ufsrea.png", founder: "GOJO", members: 280 },
    { name: "𝑲𝑹𝑨𝑲𝑬𝑵", image: "https://files.catbox.moe/qiqpt7.png", founder: "LEVI", members: 225 },
    { name: "𝑻𝑯𝑨𝑰𝑳𝑨𝑵𝑫", image: "https://files.catbox.moe/pfeolt.png", founder: "ITACHI", members: 220 },
    { name: "𝑱𝑼𝑱𝑼𝑻𝑺𝑼", image: "https://files.catbox.moe/ks0ss0.png", founder: "ZORO", members: 210 },
    { name: "𝑻𝑶𝑲𝒀𝑶", image: "https://files.catbox.moe/j0bj0a.png", founder: "KANAKI", members: 200 },
    { name: "𝑱𝑼𝑳𝑰𝑼𝑺", image: "https://files.catbox.moe/hio1di.png", founder: "SASUKE", members: 190 },
    { name: "𝑶𝑻𝑨𝑲𝑼", image: "https://files.catbox.moe/dpyya3.png", founder: "GOKU", members: 180 },
    { name: "𝑨𝑺𝑻𝑨𝑹𝒁", image: "https://files.catbox.moe/qd4w8s.png", founder: "ASTA", members: 170 },
    { name: "𝑯𝑬𝑹𝑶", image: "https://files.catbox.moe/sqhcuf.png", founder: "TANJIRO", members: 160 },
    { name: "𝑪𝑹𝒀𝑺𝑻𝑨𝑳", image: "https://files.catbox.moe/veub8q.png", founder: "MADARA", members: 155 },
    { name: "𝑫𝑬𝑴𝑶𝑵", image: "https://files.catbox.moe/rjvoom.png", founder: "EREN", members: 150 },
    { name: "𝑹𝑨𝑮𝑵𝑨𝑹𝑶𝑲", image: "https://files.catbox.moe/78ndyy.png", founder: "MELIODAS", members: 130 },
    { name: "𝑶𝑪𝑯𝑰𝑯𝑨", image: "https://files.catbox.moe/fmzgt3.png", founder: "OBITO", members: 125 },
    { name: "𝑾𝑰𝑵𝑫 𝑩𝑹𝑬𝑨𝑲𝑬𝑹", image: "https://files.catbox.moe/fz2rux.jpg", founder: "RIMURU", members: 120 },
    { name: "𝑨𝑲𝑨𝑻𝑺𝑼𝑲𝑰", image: "https://files.catbox.moe/wuopu6.jpg", founder: "PAIN", members: 120 },
    { name: "𝑩𝑳𝑬𝑨𝑪𝑯", image: "https://files.catbox.moe/kwco11.jpg", founder: "ICHIGO", members: 120 },
    { name: "𝑲𝑰𝑵𝑶𝑯𝑨", image: "https://files.catbox.moe/sxjnmi.jpg", founder: "MINATO", members: 130 },
    { name: "𝑻𝑶𝑲𝒀𝑶 𝑹𝑬𝑽𝑬𝑵𝑮𝑬𝑹𝑺", image: "https://files.catbox.moe/drstu9.jpg", founder: "MIKEY", members: 110 },
    { name: "𝑫𝑹𝑨𝑮𝑶𝑵 𝑩𝑨𝑳𝑳", image: "https://files.catbox.moe/7j3akg.jpg", founder: "VEGETA", members: 105 },
    { name: "𝑶𝑵𝑬 𝑷𝑰𝑬𝑪𝑬", image: "https://files.catbox.moe/svrqso.jpg", founder: "SHANKS", members: 105 },
    { name: "𝑫𝑹.𝑺𝑻𝑶𝑵𝑬", image: "https://files.catbox.moe/t3906q.jpg", founder: "SENKU", members: 100 },
    { name: "𝑺𝑶𝑳𝑶 𝑳𝑬𝑽𝑬𝑳𝑰𝑵𝑮", image: "https://files.catbox.moe/ytnmjb.jpg", founder: "SUNG JIN-WOO", members: 100 },
    { name: "𝑫𝑬𝑨𝑻𝑯 𝑵𝑶𝑻𝑬", image: "https://files.catbox.moe/wqgu84.jpg", founder: "LIGHT", members: 100 },
    { name: "𝑯𝑼𝑵𝑻𝑬𝑹 𝑿 𝑯𝑼𝑵𝑻𝑬𝑹", image: "https://files.catbox.moe/asgyft.jpg", founder: "GON", members: 90 },
    { name: "𝑨𝑻𝑻𝑨𝑪𝑲 𝑶𝑵 𝑻𝑰𝑻𝑨𝑵", image: "https://files.catbox.moe/0nubmg.jpg", founder: "ARMIN", members: 90 },
    { name: "𝑽𝑰𝑵𝑳𝑨𝑵𝑫", image: "https://files.catbox.moe/ijykhx.jpg", founder: "THORFINN", members: 80 },
    { name: "𝑭𝑨𝑳𝑪𝑶𝑵", image: "https://files.catbox.moe/hang7b.png", founder: "KILLUA", members: 70 },
    { name: "𝑷𝑯𝑶𝑬𝑵𝑰𝑿", image: "https://files.catbox.moe/jsivwo.jpg", founder: "ACE", members: 75 }
];

// عرض القبائل في الصفحة
function loadTribes() {
    const grid = document.getElementById('tribesGrid');
    if (!grid) return;
    
    grid.innerHTML = tribesData.map(tribe => `
        <div class="tribe-card">
            <div class="tribe-image">
                <img src="${tribe.image}" alt="${tribe.name}">
            </div>
            <h3 class="tribe-name">${tribe.name}</h3>
            <p class="tribe-founder">👑 المؤسس: ${tribe.founder}</p>
            <div class="tribe-members">
                👥 عدد الأعضاء: <span>${tribe.members.toLocaleString()}</span>
            </div>
        </div>
    `).join('');
}

// تحميل القبائل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadTribes);