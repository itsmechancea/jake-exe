// ===== PERSONALIZE =====
const profile = {
  name: "Jake",
  partner: "Chance",
  cgm: "Dexcom",
  emergencySnacks: "chemist jelly beans + choc teddies",
  stack: "Unknown stack (but 100% includes ChatGPT-as-a-service)",
  spidermanMode: true
};

// ===== STATUS PILL SETS =====
const pillSets = [
  [
    {text:"build: green", cls:"ok"},
    {text:"Dexcom: online", cls:"blue"},
    {text:"pump: armed", cls:"ok"}
  ],
  [
    {text:"warning: 03:00 event", cls:"warn"},
    {text:"snack stash: stocked", cls:"ok"},
    {text:"responsibility: great", cls:"blue"}
  ],
  [
    {text:"sensor: ???", cls:"warn"},
    {text:"vibes: immaculate", cls:"ok"},
    {text:"math: unstoppable", cls:"blue"}
  ],
  [
    {text:"blockage: detected", cls:"err"},
    {text:"recovery: legendary", cls:"ok"},
    {text:"villain: defeated", cls:"ok"}
  ],
  [
    {text:"after-lunch drop: dodged", cls:"ok"},
    {text:"ease-off: activated", cls:"blue"},
    {text:"Chance buff: +999", cls:"ok"}
  ],
  [
    {text:"ChatGPT: open (again)", cls:"warn"},
    {text:"commit: love", cls:"ok"},
    {text:"forever: true", cls:"ok"}
  ]
];

// ===== QUEST LOG =====
const quests = [
  {icon:"✓", cls:"ok", text:"Carb-counting in your head like it’s casual (it’s not casual)"},
  {icon:"⚡", cls:"blue", text:"Micro-decisions all day: bolus, adjust, predict, prevent"},
  {icon:"!", cls:"warn", text:"3am low: wake up, treat, re-check, fight the boss, go back to sleep"},
  {icon:"⛔", cls:"err", text:"Blocked pump: troubleshoot + swap site + keep breathing"},
  {icon:"?", cls:"warn", text:"Failed sensor: restart, re-tape, re-try, carry on"},
  {icon:"🍬", cls:"ok", text:`Emergency loot: ${profile.emergencySnacks}`}
];

// ===== COMMIT HISTORY =====
const commits = [
  {hash:"a1c3e9f", msg:"init: met Jake, immediately suspected he was main-character material"},
  {hash:"b7d2c10", msg:"feat: discovered he’s quiet-soft AND big-gesture coded (dangerous combo)"},
  {hash:"c0ffee0", msg:"chore: stocked emergency snacks (jelly beans + choc teddies) like a responsible teammate"},
  {hash:"d3xC0m9", msg:"fix: survived Dexcom beeps + pump drama without rage-quitting love"},
  {hash:"e5a5e0f", msg:"feat: learned the 3am low boss fight exists and started cheering from the party chat"},
  {hash:"f17babe", msg:"release: fiancé_patch — forever enabled"}
];

// ===== TERMINAL SLIDES =====
const slides = [
`<span class="prompt">$</span> boot --target=${profile.name.toLowerCase()} --mode=fiancé
<span class="ok">✓</span> initializing heart_module...
<span class="ok">✓</span> loading patience.dll
<span class="ok">✓</span> loading humor.js
<span class="ok">✓</span> loading love.css (overrides everything)
<span class="muted">info:</span> tech stack: ${profile.stack}
<span class="muted">note:</span> user '${profile.name}' detected: quiet + sentimental + big-gesture energy
<span class="ok">✓</span> ready.`,

`<span class="prompt">$</span> scan --daily_processes
Most people wake up and… exist.
You wake up and instantly run background processes:
  • check glucose
  • interpret trends
  • calculate insulin
  • plan food/activity like chess

And you do it quietly, like it’s normal.

<span class="warn">⚠</span> reminder: “normal” ≠ “easy.”
<span class="ok">✓</span> ${profile.partner} sees you.`,

`<span class="prompt">$</span> play --soundtrack
Some couples have “our song.”
We have:
  🎶 *beep* 🎶
  🎶 *beep-beep* 🎶
  🎶 “URGENT LOW” (a certified banger) 🎶

Your ${profile.cgm} isn’t just noise.
It’s proof you’re doing the work.
Every day.
Even when nobody claps for it.`,

`<span class="prompt">$</span> encounter --time=03:00 --boss=LOW
<span class="warn">event:</span> 3am low
<span class="muted">symptoms:</span> sleep interrupted, body on hard mode, brain = fog.exe
<span class="muted">response:</span> treat low, re-check, treat again if needed, try to go back to sleep

<span class="ok">✓</span> outcome: you handled it.
<span class="muted">side note:</span> you should not have to be this tough.
And yet… you are.`,

`<span class="prompt">$</span> lunch.exe --postmeal=watch
<span class="warn">risk:</span> after-lunch drop
<span class="muted">Jake move:</span> “ease off” so you don’t hypo later

That’s the part that blows my mind:
You’re constantly thinking ahead to protect future-you.
You’re the brains for yourself <i>and</i> the CGM.`,

`<span class="prompt">$</span> debug --issue="blocked pump"
<span class="err">ERROR:</span> infusion blocked / delivery interrupted
<span class="muted">recommended fix:</span> troubleshoot, swap site, restart, keep calm-ish

And you do it.
Even when it’s annoying.
Even when it’s unfair.
Even when it steals time and induces anxiety.

<span class="ok">✓</span> ${profile.partner} update: I see the strength and resilience behind the calm exterior.`,

`<span class="prompt">$</span> sensor.start --device=${profile.cgm.toLowerCase()}
<span class="warn">WARNING:</span> sensor failed / won’t calibrate / adhesive said “not today”
<span class="muted">action:</span> restart, re-tape, re-try, carry on

You’ve rebuilt your day a thousand times and made 2,000 more decisions than anyone else.
That’s superhero behavior.
(Like… spiderman, but with insulin.)`,

`<span class="prompt">$</span> open --file="love_letter.txt"
Jake,

You do so much every day just to keep yourself alive.
And it’s so easy for people to miss it because you’re quiet about it.
But I don't miss it.
Not now.
Not ever.

I see the planning.
I see the interruptions.
I see the strength.
I see you.

And I love you more for all of it.

— Chance`,

`<span class="prompt">$</span> enable spiderman_mode
<span class="ok">✓</span> web_developer = true
<span class="ok">✓</span> web_slinger = spiritually true
<span class="muted">quote:</span> “with great power comes great responsibility”

You carry a kind of responsibility every day that most people never have to think about.
And you carry it with so much grace it’s almost unfair.

But listen:
You don’t have to carry it alone anymore.`,

`<span class="prompt">$</span> final --confirm
<span class="ok">✓</span> proposal_received = true
<span class="ok">✓</span> answer = YES (still yes. always yes.)
<span class="ok">✓</span> forever = enabled

<span class="ok">You are seen.</span>
<span class="ok">You are loved.</span>
<span class="ok">And you’re stuck with me.</span>

Now come here so I can kiss your face.`,
  `<span class="prompt">$</span> deploy --env=forever
<span class="ok">✓</span> merging branches: jake + chance
<span class="ok">✓</span> conflict resolution: none required
<span class="ok">✓</span> build status: stable
<span class="ok">✓</span> uptime: lifetime

<span class="muted">commit message:</span>
"marrying my best friend and favorite superhero."

<span class="ok">Deployment successful.</span>`

];

// ===== DOM =====
const term = document.getElementById("terminal");
const pills = document.getElementById("statusPills");
const questList = document.getElementById("questList");
const gitList = document.getElementById("gitList");
const cmd = document.getElementById("command");
const send = document.getElementById("send");

const overlay = document.getElementById("overlay");
const bossResult = document.getElementById("bossResult");

const dexNow = document.getElementById("dexNow");
const dexTrend = document.getElementById("dexTrend");
const dexPath = document.getElementById("dexPath");
const dexDot = document.getElementById("dexDot");

let idx = 0;
let typing = false;
let typeTimer = null;

// ===== UI BUILD =====
function renderQuests(){
  questList.innerHTML = quests.map(q => `
    <div class="item">
      <div class="icon ${q.cls}">${q.icon}</div>
      <div>${q.text}</div>
    </div>
  `).join("");
}

function renderCommits(){
  gitList.innerHTML = commits.map(c => `
    <div class="item">
      <div class="icon blue">⎇</div>
      <div><span class="muted">${c.hash}</span> — ${c.msg}</div>
    </div>
  `).join("");
}

function renderPills(){
  const set = pillSets[idx % pillSets.length];
  pills.innerHTML = set.map(p => `<span class="pill ${p.cls}">${p.text}</span>`).join("");
}

// fake dexcom line generator (mmol/L)
function buildDexPath(){
  const pts = [];
  let y = 62;
  for (let x=0; x<=300; x+=20){
    y += (Math.sin((x/35)+1.4)*6) + (Math.cos((x/60)+0.7)*4);
    y = Math.max(18, Math.min(108, y));
    pts.push([x, y]);
  }

  const d = pts.map((p, i) => (i===0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
  dexPath.setAttribute("d", d);

  const last = pts[pts.length-1];
  dexDot.setAttribute("cx", last[0]-10);
  dexDot.setAttribute("cy", last[1]);

  // ✅ mmol/L
  const nowMmol = 4.8 + Math.random() * 4.2; // 4.8–9.0
  dexNow.textContent = `${nowMmol.toFixed(1)} mmol/L`;
  dexNow.className = (nowMmol < 3.9) ? "err" : (nowMmol > 10) ? "warn" : "ok";

  const r = Math.random();
  dexTrend.textContent = (r < 0.55) ? "→ steady" : (r < 0.8) ? "↘ drifting" : "↗ climbing";
}

// typing effect
function typeHTML(html){
  typing = true;
  clearTimeout(typeTimer);

  const temp = document.createElement("div");
  temp.innerHTML = html.replaceAll("<br>", "\n").replaceAll("<br/>", "\n").replaceAll("<br />", "\n");
  const text = temp.textContent || temp.innerText || "";

  term.innerHTML = "";
  let i = 0;

  const tick = () => {
    if (i <= text.length){
      term.textContent = text.slice(0, i) + (i < text.length ? "▌" : "");
      i += Math.max(1, Math.round(text.length / 260));
      typeTimer = setTimeout(tick, 12);
    } else {
      term.innerHTML = html + `<span class="caret" aria-hidden="true"></span>`;
      typing = false;
    }
  };
  tick();
}

function show(){
  renderPills();
  typeHTML(slides[idx]);
}

// ===== NAV BUTTONS =====
document.getElementById("next").onclick = () => {
  if (typing) return;
  idx = (idx + 1) % slides.length;
  show();
};
document.getElementById("back").onclick = () => {
  if (typing) return;
  idx = (idx - 1 + slides.length) % slides.length;
  show();
};
document.getElementById("random").onclick = () => {
  if (typing) return;
  idx = Math.floor(Math.random() * slides.length);
  show();
};
document.getElementById("replay").onclick = () => {
  if (typing) return;
  idx = 0;
  show();
};

// ===== spider-web confetti =====
function launchSpiderWebConfetti({
  count = 70,
  durationMs = 9000,
  colors = ["#e9eefc", "#7aa7ff", "#60ff9a", "#ffd166", "#ff5d7a"]
} = {}) {

  const layer = document.createElement("div");
  layer.className = "web-confetti-layer";
  document.body.appendChild(layer);

  const webSvg = (stroke) => `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="26" stroke="${stroke}" stroke-width="2" opacity="0.95"/>
      <path d="M32 6V58M6 32H58M14 14L50 50M50 14L14 50" stroke="${stroke}" stroke-width="2" opacity="0.95"/>
      <circle cx="32" cy="32" r="19" stroke="${stroke}" stroke-width="2" opacity="0.75"/>
      <circle cx="32" cy="32" r="12" stroke="${stroke}" stroke-width="2" opacity="0.6"/>
      <circle cx="32" cy="32" r="6"  stroke="${stroke}" stroke-width="2" opacity="0.45"/>
      <path d="M18 22c6 4 22 4 28 0M18 42c6-4 22-4 28 0" stroke="${stroke}" stroke-width="2" opacity="0.6"/>
    </svg>
  `;

  for (let i = 0; i < count; i++){
    const piece = document.createElement("div");
    piece.className = "web-confetti";

    const x = Math.random() * 100;
    const drift = (Math.random() * 180 - 90);
    const wobble = (Math.random() * 16 - 8);
    const dur = 3.8 + Math.random() * 3.4;
    const size = 14 + Math.random() * 18;
    const stroke = colors[Math.floor(Math.random() * colors.length)];

    piece.style.left = x + "vw";
    piece.style.setProperty("--drift", drift + "px");
    piece.style.setProperty("--wobble", wobble.toFixed(2));
    piece.style.setProperty("--dur", dur.toFixed(2) + "s");
    piece.style.setProperty("--s", size.toFixed(0) + "px");

    piece.innerHTML = webSvg(stroke);
    layer.appendChild(piece);
  }

  setTimeout(() => layer.remove(), durationMs);
}

// ===== BOSS FIGHT (upgraded) =====
let bossHP = 3;

function renderBossHP(){
  const bar = overlay.querySelector(".hp > div");
  const pct = Math.max(0, (bossHP / 3) * 100);
  bar.style.width = pct + "%";
}

function hitBoss(message){
  if (bossHP === 0) return;

  bossHP = Math.max(0, bossHP - 1);
  bossResult.textContent = message;
  renderBossHP();

  if (bossHP === 0){
    bossResult.textContent =
      "VICTORY: 3AM LOW defeated. You win anyway (as usual). Now go back to sleep, superhero.";

    launchSpiderWebConfetti({ count: 90, durationMs: 9000 });

    setTimeout(() => overlay.classList.remove("show"), 10000);
  }
}

document.getElementById("bossBtn").onclick = () => {
  bossResult.textContent = "";
  bossHP = 3;
  renderBossHP();
  overlay.classList.add("show");
};
document.getElementById("closeBoss").onclick = () => overlay.classList.remove("show");

document.getElementById("actTreat").onclick = () =>
  hitBoss(`You deploy ${profile.emergencySnacks}. CRITICAL HEAL. The boss flinches.`);
document.getElementById("actRecheck").onclick = () =>
  hitBoss("You recheck like a responsible legend. Data acquired. Boss weakened.");
document.getElementById("actEaseOff").onclick = () =>
  hitBoss("You adjust like a pro. “Nice try,” you whisper to the boss.");
document.getElementById("actPanic").onclick = () =>
  hitBoss("You panic for 0.7 seconds, then immediately become competent again. Relatable.");
document.getElementById("actWin").onclick = () =>
  hitBoss("You win anyway. Because you always do. And because Chance is cheering from the party chat.");

// ===== COMMAND EASTER EGGS =====
function appendToTerminal(html){
  term.innerHTML = term.innerHTML.replace(/<span class="caret"[\s\S]*?<\/span>/, "");
  term.innerHTML += `\n\n` + html + `<span class="caret" aria-hidden="true"></span>`;
}

function handleCommand(raw){
  const input = (raw || "").trim().toLowerCase();
  if (!input) return;

  appendToTerminal(`<span class="prompt">$</span> ${escapeHtml(raw)}`);

  if (input === "help"){
    appendToTerminal(
`<span class="ok">Commands:</span>
<span class="muted">help</span> — show this list
<span class="muted">i_love_you</span> — reveal a secret message
<span class="muted">spiderman</span> — toggle spidey lore
<span class="muted">treat()</span> — emergency snack protocol
<span class="muted">commit --log</span> — print the love git log
<span class="muted">bossfight()</span> — open the 3am low boss fight`);
    return;
  }

  if (input === "i_love_you" || input === "iloveyou"){
    appendToTerminal(
`<span class="ok">SECRET UNLOCKED:</span>
Babe… you are my favorite person and my favorite part of every day.
I see every invisible thing you do to stay alive.
And I love you so much it makes my chest hurt.
— Chance`);
    return;
  }

  if (input === "spiderman"){
    appendToTerminal(
`<span class="blue">SPIDER-MAN MODE:</span>
Friendly neighborhood ${profile.name} detected.
With great power comes great responsibility…
and you carry both with ridiculous grace.
Also: being a web developer is basically web-slinging. I don’t make the rules.`);
    return;
  }

  if (input === "treat()"){
    appendToTerminal(
`<span class="warn">LOW PROTOCOL:</span>
deploy(${profile.emergencySnacks})
<span class="ok">✓</span> heal applied
<span class="muted">note:</span> Chance would like to add one (1) forehead kiss to the protocol.`);
    return;
  }

  if (input === "commit --log" || input === "git log" || input === "commit"){
    const log = commits.map(c => `• <span class="muted">${c.hash}</span> ${escapeHtml(c.msg)}`).join("\n");
    appendToTerminal(`<span class="ok">git log --oneline</span>\n${log}`);
    return;
  }

  // NEW: inside nickname
  if (input === "my whatever" || input === "mywhatever"){
    appendToTerminal(
`<span class="ok">NICKNAME DETECTED:</span>
<span class="muted">alias:</span> “my whatever”
<span class="ok">✓</span> status: Jake’s favorite person
<span class="muted">note:</span> “my whatever” actually means:
<i>my home, my best friend, my forever.</i>`);
    return;
  }

  // NEW: jellybeans inventory
  if (input === "jellybeans" || input === "jelly beans"){
    appendToTerminal(
`<span class="warn">INVENTORY CHECK:</span>
• jelly beans: <span class="ok">available</span>
• choc teddies: <span class="ok">available</span>
• spare charger: <span class="muted">probably not</span>
• emotional support fiancée: <span class="ok">always online</span>

<span class="muted">tip:</span> if low → run <span class="warn">treat()</span> immediately.`);
    return;
  }

  // NEW: marry me moment
  if (input === "marry me" || input === "marry_me" || input === "marryme"){
    appendToTerminal(
`<span class="ok">PROMPT:</span> marry_me?
<span class="ok">RESPONSE:</span> yes. yes. a thousand times yes.
<span class="muted">author:</span> Chance
<span class="muted">ps:</span> come here so I can kiss your face, fiancé.`);
    return;
  }

  if (input === "bossfight()" || input === "boss fight" || input === "bossfight"){
    overlay.classList.add("show");
    appendToTerminal(`<span class="warn">Opening encounter:</span> 03:00_LOW.exe`);
    return;
  }

  appendToTerminal(`<span class="muted">command not found:</span> ${escapeHtml(raw)}\n<span class="muted">try:</span> help`);
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

send.onclick = () => {
  if (typing) return;
  const v = cmd.value;
  cmd.value = "";
  handleCommand(v);
};

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") send.click();
});

// ===== INIT =====
renderQuests();
renderCommits();
buildDexPath();
show();
