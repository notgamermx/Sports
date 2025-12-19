// --- 1. THE DATA (50 Sports) ---
const sports = [
    { id: 1, name: "Cricket", year: "1721", player: "Virat Kohli", stat: "2 World Cups", desc: "The unofficial religion. Brought by the British, perfected by locals. It unites the nation from gully to stadium.", imgText: "BATSMAN" },
    { id: 2, name: "Hockey", year: "1928", player: "Dhyan Chand", stat: "8 Olympic Golds", desc: "The Wizard's game. India dominated the world for decades with artistic stick-work and unmatched speed.", imgText: "HOCKEY" },
    { id: 3, name: "Kabaddi", year: "Ancient", player: "Pardeep Narwal", stat: "Indigenous", desc: "Born from the soil. A test of breath and bravery. Now a massive pro league spectacle.", imgText: "RAIDER" },
    { id: 4, name: "Chess", year: "6th Century", player: "V. Anand", stat: "Chaturanga", desc: "India's gift to the world. Viswanathan Anand sparked a revolution of young Grandmasters.", imgText: "KING" },
    { id: 5, name: "Badminton", year: "1870", player: "PV Sindhu", stat: "Poona Roots", desc: "Invented in Pune. India is now a global powerhouse with multiple Olympic medals.", imgText: "SHUTTLE" },
    { id: 6, name: "Football", year: "1889", player: "Sunil Chhetri", stat: "Mohun Bagan", desc: "The giant awakes. Massive in Bengal, Kerala, Goa. Chhetri is a global top scorer.", imgText: "STRIKER" },
    { id: 7, name: "Wrestling", year: "Vedic Era", player: "Sushil Kumar", stat: "Kushti", desc: "Mud pit heritage. Akharas produce Olympians who dominate with raw power.", imgText: "WRESTLER" },
    { id: 8, name: "Boxing", year: "1925", player: "Mary Kom", stat: "6 World Titles", desc: "Fighting spirit. From Manipur to Haryana, boxers punch above their weight globally.", imgText: "BOXER" },
    { id: 9, name: "Athletics", year: "1900", player: "Neeraj Chopra", stat: "Javelin Gold", desc: "The Golden Arm. Neeraj Chopra ended the century-long wait for a track and field medal.", imgText: "JAVELIN" },
    { id: 10, name: "Shooting", year: "Modern", player: "Abhinav Bindra", stat: "First Indv Gold", desc: "Focus and aim. Bindra's gold in 2008 shattered the glass ceiling for individual glory.", imgText: "RIFLE" },
    { id: 11, name: "Archery", year: "Mythic", player: "Deepika Kumari", stat: "Dhanurvidya", desc: "Ancient art of war. Tribal talent consistently ranks world number one.", imgText: "BOW+ARROW" },
    { id: 12, name: "Tennis", year: "1885", player: "Leander Paes", stat: "18 Slams", desc: "Doubles dominance. Paes and Bhupathi put Indian tennis on the Grand Slam map.", imgText: "TENNIS" },
    { id: 13, name: "Table Tennis", year: "1920", player: "Sharath Kamal", stat: "CWG Gold", desc: "Speed and spin. Manika Batra and Sharath Kamal challenge the Asian giants.", imgText: "PADDLE" },
    { id: 14, name: "Weightlifting", year: "1940", player: "Mirabai Chanu", stat: "Olympic Silver", desc: "Pure strength. Malleswari and Chanu have made this a stronghold for Indian women.", imgText: "BARBELL" },
    { id: 15, name: "Kho Kho", year: "Ancient", player: "Indigenous", stat: "Tag Sport", desc: "Chase and dodge. A high-speed tag game played on soft earth, demanding agility.", imgText: "RUNNER" },
    { id: 16, name: "Mallakhamb", year: "12th Century", player: "Traditional", stat: "Pole Yoga", desc: "Aerial yoga on a wooden pole. The ultimate test of core strength and balance.", imgText: "POLE+YOGA" },
    { id: 17, name: "Sepak Takraw", year: "1982", player: "Northeast", stat: "Kick Volley", desc: "Gravity defying. Popular in the Northeast, using feet to spike a rattan ball.", imgText: "KICK" },
    { id: 18, name: "Silambam", year: "1000 BC", player: "Tamil Nadu", stat: "Martial Art", desc: "Stick fighting. An ancient martial art from Tamil Nadu focusing on fluid defense.", imgText: "STAFF" },
    { id: 19, name: "Squash", year: "Modern", player: "Dipika Pallikal", stat: "CWG Gold", desc: "Glass court battles. Consistent medals at Commonwealth and Asian Games.", imgText: "RACQUET" },
    { id: 20, name: "Golf", year: "1829", player: "Aditi Ashok", stat: "RCGC Kolkata", desc: "Oldest club outside UK. Aditi Ashok's Olympic run captivated the nation.", imgText: "GOLFER" }
];

// Fill to 50
while(sports.length < 50) {
    const temp = sports[sports.length % 20];
    sports.push({...temp, name: temp.name + " II", id: sports.length + 1});
}

// --- 2. RENDER THE LIST ---
const listContainer = document.getElementById('sports-list');

sports.forEach((sport, index) => {
    const row = document.createElement('div');
    row.className = "grid-row p-6 md:p-8 b-bottom border-dynamic group cursor-pointer hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all relative";
    row.onclick = () => openModal(index);
    
    row.innerHTML = `
        <div class="flex items-baseline justify-between mb-2 pointer-events-none">
            <span class="mono text-xs opacity-60">${index < 9 ? '0' + (index + 1) : index + 1}</span>
            <span class="mono text-xs font-bold">${sport.year}</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black uppercase group-hover:text-[var(--accent-color)] transition-colors pointer-events-none">${sport.name}</h2>
        <div class="flex justify-between mt-2 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span class="mono text-xs uppercase">${sport.player}</span>
            <span class="mono text-xs uppercase text-right">${sport.stat}</span>
        </div>
        <div class="hover-img bg-[var(--text-color)] border border-[var(--bg-color)] mt-2 flex items-center justify-center text-[var(--bg-color)] pointer-events-none">
            <span class="mono text-sm">CLICK TO VIEW PAGE</span>
        </div>
    `;
    listContainer.appendChild(row);
});

// --- 3. MODAL LOGIC ---
const modal = document.getElementById('sport-modal');
const mTitle = document.getElementById('modal-title');
const mImage = document.getElementById('modal-image');
const mDesc = document.getElementById('modal-desc');
const mPlayer = document.getElementById('modal-player');
const mStat = document.getElementById('modal-stat');
const mCaption = document.getElementById('modal-img-caption');

gsap.set(modal, { yPercent: 100 }); 

window.openModal = function(index) {
    const data = sports[index];
    mTitle.innerText = data.name;
    mDesc.innerText = data.desc;
    mPlayer.innerText = data.player;
    mStat.innerText = data.stat;
    mCaption.innerText = data.imgText;
    mImage.src = `https://placehold.co/600x800/111/FFF.png?text=${data.imgText}&font=roboto`; 
    gsap.to(modal, { yPercent: 0, duration: 0.8, ease: "expo.out", overwrite: "auto" });
};

window.closeModal = function() {
    gsap.to(modal, { yPercent: 100, duration: 0.6, ease: "power2.in", overwrite: "auto" });
};

// --- 4. THEME TOGGLE ---
const themeBtn = document.getElementById('theme-btn');
let isDark = false;

window.toggleTheme = function() {
    isDark = !isDark;
    if(isDark) {
        document.body.setAttribute('data-theme', 'dark');
        themeBtn.innerText = "DARK MODE";
    } else {
        document.body.removeAttribute('data-theme');
        themeBtn.innerText = "LIGHT MODE";
    }
};

// --- 5. ANIMATIONS ---
const loader = document.getElementById('loader');
const counterElement = document.querySelector('.counter');

let count = 0;
const interval = setInterval(() => {
    count += 4; 
    if(count > 100) count = 100;
    counterElement.innerText = count < 10 ? '00' + count : count < 100 ? '0' + count : count;
    
    if (count === 100) {
        clearInterval(interval);
        gsap.to(loader, { yPercent: -100, duration: 0.8, ease: "power4.inOut", delay: 0.2 });
        startMainAnimations();
    }
}, 20);

function startMainAnimations() {
    // Hero Reveal
    const tl = gsap.timeline();
    tl.from(".reveal-child", { yPercent: 100, duration: 1.2, stagger: 0.2, ease: "power4.out" })
      .from(".reveal-text", { width: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");

    // Marquee
    gsap.to(".marquee-inner", { xPercent: -50, repeat: -1, duration: 20, ease: "linear" });

    // Cube Interaction
    const cube = document.querySelector('.cube');
    const scene = document.querySelector('#scene-container');
    
    // Infinite Spin
    gsap.to(cube, { rotationY: 360, rotationX: 360, duration: 20, repeat: -1, ease: "none" });

    // Mouse Interaction
    if(scene) {
        scene.addEventListener('mousemove', (e) => {
            const rect = scene.getBoundingClientRect();
            const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const mouseY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
            gsap.to(cube, { rotationY: mouseX * 180, rotationX: -mouseY * 180, duration: 1, overwrite: "auto", ease: "power2.out" });
        });
        scene.addEventListener('mouseleave', () => {
            gsap.to(cube, { rotationY: "+=360", rotationX: "+=360", duration: 20, repeat: -1, ease: "none", overwrite: "auto" });
        });
    }

    // Scroll Triggers for List
    gsap.utils.toArray('.grid-row').forEach((row, i) => {
        gsap.from(row, {
            scrollTrigger: { trigger: row, start: "top 95%" },
            y: 30, opacity: 0, duration: 0.5
        });
    });
}
