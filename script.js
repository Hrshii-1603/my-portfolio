/* Add your profile links here */
const LINKS = {
  whatsapp: "https://wa.me/919811591462",
  linkedin: "https://www.linkedin.com/in/harshita-gupta-50b282268",
  behance: "https://www.behance.net/harshitagupta77",
  cv: "https://drive.google.com/file/d/1WrMnftQb3C-EYvt72pkqkUIDHMUMHyrZ/view?usp=drivesdk"
};

const IMG = {
  "p1": "images/dark magazine.png",
  "p2": "images/fashion magazine.png",
  "p6": "images/luxury website.jpg",
  "infly": "images/Infly_website.png",
  "jewel": "images/jewelery website.png",
  "xntrova": "images/digital_website.png"
};

const PROJECTS = [
  {t:"Infly Entertainment Music Website", k:"Responsive Web Design", img:"infly", link:"https://inflyentertainment.netlify.app/", cta:"Visit Website", d:"A responsive website for Infly Entertainment, a music promotion and artist development agency for Punjabi, Folk, Hindi and Haryanvi artists. It brings together their services, featured artists, a five-step growth process and campaign case studies in a bold, modern layout."},
  {t:"Xntrova Digital Marketing Website", k:"Landing Page", img:"xntrova", link:"https://www.behance.net/gallery/256709553/Digital-Marketing-Website", cta:"View on Behance", d:"A clean, conversion-focused landing page for Xntrova, a digital marketing and technology agency. It presents SEO, performance ads, social media and web services with a bold headline, clear calls to action and trust points that guide visitors toward a free growth audit."},
  {t:"E-commerce Jewelry Website", k:"E-commerce", img:"jewel", link:"https://www.behance.net/gallery/252994701/E-commerce-Jewelry-Website", cta:"View on Behance", d:"An elegant e-commerce jewelry website designed to showcase fine pieces beautifully, with easy category browsing and a smooth, refined shopping experience."},
  {t:"Luxury Salon Website", k:"Web Design", img:"p6", link:"https://www.behance.net/gallery/243302317/Luxury-Salon-Website", cta:"View on Behance", d:"A responsive luxury salon website designed to deliver an elegant and smooth user experience."},
  {t:"Dark Luxury Magazine Design", k:"Editorial", img:"p1", link:"https://www.behance.net/gallery/246849961/Dark-Luxury-Magazine-Design", cta:"View on Behance", d:"A bold, elegant magazine cover showcasing modern Indian fashion with flowing red fabric and a classy, powerful aesthetic."},
  {t:"A Fashion Magazine", k:"Editorial", img:"p2", link:"https://www.behance.net/gallery/246849543/A-Fashion-Magazine", cta:"View on Behance", d:"A premium magazine cover series for The Fashion Vila exploring 2026 trends in a bold “Dark Luxury” style with clean, modern typography."}
];
const SKILLS = [
  {t:"UI Design", d:"Creating visually stunning and functional user interfaces", c:"#FFE3EE", i:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 9h16M9 9v11"/>'},
  {t:"UX Research & Testing", d:"Understanding user needs through interviews, surveys and usability testing", c:"#FFF0C9", i:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>'},
  {t:"Wireframing", d:"Sketching low and high fidelity layouts to shape structure and flow", c:"#E4DBFF", i:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h8M8 16h5"/>'},
  {t:"Prototyping", d:"Bringing ideas to life with clickable, interactive prototypes", c:"#E4DBFF", i:'<path d="M5 3l14 8-6 2-2 6z"/><path d="M13 13l6 6"/>'},
  {t:"Interaction Design", d:"Designing micro-interactions and motion that make interfaces feel natural", c:"#FFE3EE", i:'<path d="M9 11V5a2 2 0 014 0v6"/><path d="M13 9a2 2 0 014 0v3a7 7 0 01-7 7h-.5A5.5 5.5 0 014 13.5V12a2 2 0 014 0"/>'},
  {t:"Information Architecture", d:"Organizing content and navigation so users find what they need", c:"#FFF0C9", i:'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>'},
  {t:"Design Systems", d:"Building scalable and consistent components, styles and guidelines", c:"#FFF0C9", i:'<circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="7" cy="17" r="3"/><rect x="14" y="14" width="6" height="6" rx="1"/>'},
  {t:"AI-Assisted Design", d:"Using AI tools like Stitch and Lovable to explore ideas and turn designs into working prototypes faster", c:"#E4DBFF", i:'<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8z"/>'},
  {t:"Graphic Design", d:"Crafting posters, magazine covers and emailers with strong visual storytelling", c:"#FFE3EE", i:'<path d="M12 19l7-7 3 3-7 7z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>'}
];
const TOOLS = ["Figma","FigJam","Framer","Canva","Google Stitch","Lovable","Claude","Figma Make","Notion"];
const SOC = [
  {n:"WhatsApp", k:"whatsapp", p:'<path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2z"/>'},
  {n:"LinkedIn", k:"linkedin", p:'<path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/>'},
  {n:"Behance", k:"behance", p:'<path d="M8.2 11.2c.9-.4 1.5-1.2 1.5-2.4C9.7 6.6 8 5.5 6 5.5H1v13h5.3c2.2 0 4.2-1.1 4.2-3.6 0-1.6-.8-2.9-2.3-3.7zM3.9 7.8h1.8c.8 0 1.4.3 1.4 1.2 0 .8-.6 1.2-1.4 1.2H3.9zm2 8.4h-2v-3.4h2.1c1 0 1.7.4 1.7 1.7s-.8 1.7-1.8 1.7zM18 8.6c-2.9 0-4.9 2.2-4.9 5s1.9 5 4.9 5c2.3 0 3.8-1 4.5-3.2h-2.4c-.3.8-1.2 1.2-2 1.2-1.5 0-2.3-.9-2.3-2.4H23c.2-3.1-1.5-5.6-5-5.6zm-2.2 4c.1-1.2.9-2 2.1-2 1.3 0 1.9.7 2 2zM15.2 6h5.6v1.4h-5.6z"/>'}
];

const $ = s => document.querySelector(s);
document.documentElement.classList.add("js");

/* build work */
$("#workList").innerHTML = PROJECTS.map((p,i)=>`
  <article class="case rv ${i%2?'r':'l'}">
    <div class="case-text">
      <span class="num">project ${String(i+1).padStart(2,"0")}</span>
      <h3>${p.t}</h3>
      <p>${p.d}</p>
      ${p.link ? `<a class="case-link" href="${p.link}" target="_blank" rel="noopener">View Project <span>↗</span></a>` : `<button class="case-link" data-i="${i}">View Project <span>→</span></button>`}
    </div>
    <div class="case-media" data-i="${i}" role="button" tabindex="0" aria-label="Open ${p.t}">
      <img src="${IMG[p.img]}" alt="${p.t} preview" loading="lazy">
      <span class="pill">${p.k}</span>
    </div>
  </article>`).join("");

function equalCards(){
  const cards=[...document.querySelectorAll(".case")];
  cards.forEach(c=>c.style.minHeight="");
  const mx=Math.max(...cards.map(c=>c.getBoundingClientRect().height));
  cards.forEach(c=>c.style.minHeight=mx+"px");
}
equalCards(); addEventListener("resize",equalCards);
(document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(equalCards);
const POLA = [{i:3,r:"-9deg",x:"-22%",y:"4%",r2:"-14deg",x2:"-42%",y2:"6%"},{i:2,r:"7deg",x:"20%",y:"6%",r2:"12deg",x2:"40%",y2:"8%"},{i:4,r:"-2deg",x:"0%",y:"-6%",r2:"0deg",x2:"0%",y2:"-12%"}];
$("#stack").innerHTML = POLA.map(o=>`<button class="polaroid" data-i="${o.i}" style="--r:${o.r};--x:${o.x};--y:${o.y};--r2:${o.r2};--x2:${o.x2};--y2:${o.y2}" aria-label="Open ${PROJECTS[o.i].t}"><img src="${IMG[PROJECTS[o.i].img]}" alt=""><span>${PROJECTS[o.i].k}</span></button>`).join("");
$("#skillGrid").innerHTML = SKILLS.map((s,i)=>`
  <div class="skill rv" style="--c:${s.c};transition-delay:${(i%3)*.08}s">
    <div class="ic"><svg viewBox="0 0 24 24">${s.i}</svg></div>
    <h3>${s.t}</h3><p>${s.d}</p>
  </div>`).join("");

const pills = TOOLS.map(t=>`<span class="tool">${t}</span>`).join("");
$("#t1").innerHTML = pills + pills;

const ico = s => `<svg viewBox="0 0 24 24" aria-hidden="true">${s.p}</svg>`;
$("#socials").innerHTML = SOC.map(s=>`<a class="soc" href="${LINKS[s.k]}" target="_blank" rel="noopener" aria-label="${s.n}" title="${s.n}">${ico(s)}</a>`).join("");
$("#footSoc").innerHTML = SOC.map(s=>`<li><a href="${LINKS[s.k]}" target="_blank" rel="noopener">${s.n}</a></li>`).join("");
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener("click",e=>e.preventDefault()));

/* reveal: only hide what's below the fold, so the first frame is complete */
const rvs = [...document.querySelectorAll(".rv")];
const vh = innerHeight;
rvs.forEach(el=>{ if(el.getBoundingClientRect().top > vh*0.92) el.classList.add("wait"); else el.classList.add("in"); });
const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.remove("wait"); e.target.classList.add("in"); io.unobserve(e.target);} }),{threshold:.15, rootMargin:"0px 0px -40px 0px"});
rvs.forEach(el=>el.classList.contains("wait") && io.observe(el));

/* scroll: progress, header, active link, to-top */
const navLinks = [...document.querySelectorAll(".links a")];
const secs = navLinks.map(a=>document.querySelector(a.getAttribute("href")));
let activeIdx = 0, navLock = 0;
const ind = document.createElement("li"); ind.className = "nav-ind"; ind.setAttribute("aria-hidden","true");
const linkList = $("#links"); linkList.prepend(ind);
function placeInd(i, hover){
  const a = navLinks[i];
  if(!a){ ind.style.width = "0px"; navLinks.forEach(l=>l.classList.remove("on")); return; }
  ind.style.width = a.offsetWidth + "px";
  ind.style.transform = `translateX(${a.offsetLeft}px)`;
  ind.classList.toggle("hov", !!hover && i !== activeIdx);
  navLinks.forEach((l,j)=>l.classList.toggle("on", j===i));
}
function setActive(i){
  if(i === activeIdx && linkList.classList.contains("ready")) return;
  activeIdx = i;
  navLinks.forEach((a,j)=>{ a.classList.toggle("active", j===i); if(j===i) a.setAttribute("aria-current","true"); else a.removeAttribute("aria-current"); });
  if(!linkList.matches(":hover")) placeInd(i);
}
navLinks.forEach((a,i)=>{
  a.addEventListener("mouseenter",()=>placeInd(i,true));
  a.addEventListener("focus",()=>placeInd(i,true));
  a.addEventListener("blur",()=>placeInd(activeIdx));
  a.addEventListener("click",()=>{ navLock = Date.now() + 1000; activeIdx = -1; setActive(i); placeInd(i); });
});
linkList.addEventListener("mouseleave",()=>placeInd(activeIdx));
function initInd(){ ind.style.transition = "none"; placeInd(activeIdx); ind.offsetWidth; ind.style.transition = ""; linkList.classList.add("ready"); }
addEventListener("resize",()=>placeInd(activeIdx));
(document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(initInd);
setTimeout(initInd, 50);
function onScroll(){
  const h = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.transform = `scaleX(${h>0?scrollY/h:0})`;
  $("#top").classList.toggle("scrolled", scrollY>20);
  $("#totop").classList.toggle("show", scrollY>600);
  document.querySelectorAll(".rv.wait").forEach(el=>{ if(el.getBoundingClientRect().top < innerHeight*.95){ el.classList.remove("wait"); el.classList.add("in"); } });
  if(Date.now() < navLock) return;
  let best = 0, bt = -Infinity;
  secs.forEach((s,i)=>{ if(!s) return; const t = s.getBoundingClientRect().top; if(t < innerHeight*.4 && t > bt){ bt = t; best = i; } });
  const contact = $("#contact"), atContact = contact.getBoundingClientRect().top < innerHeight*.4 || innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
  $("#hire").classList.toggle("here", atContact);
  setActive(atContact ? -1 : best);
}
addEventListener("scroll", onScroll, {passive:true}); onScroll();
$("#totop").onclick = ()=>scrollTo({top:0,behavior:"smooth"});

/* mobile menu */
const burger = $("#burger"), links = linkList;
burger.onclick = ()=>{ const o = links.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
navLinks.forEach(a=>a.addEventListener("click",()=>{ links.classList.remove("open"); burger.setAttribute("aria-expanded",false); }));

/* get in touch */
$("#getInTouch").href = LINKS.whatsapp;
$("#cvBtn").href = LINKS.cv;

/* modal */
let cur = 0; const modal = $("#modal"); let lastFocus;
function show(i){
  cur = (i+PROJECTS.length)%PROJECTS.length; const p = PROJECTS[cur];
  $("#mImg").src = IMG[p.img]; $("#mImg").alt = p.t + " preview";
  $("#mNum").textContent = `project ${String(cur+1).padStart(2,"0")} · ${p.k}`;
  $("#mTitle").textContent = p.t; $("#mDesc").textContent = p.d;
  const ml = $("#mLink"); ml.hidden = !p.link; if(p.link){ ml.href = p.link; ml.firstChild.textContent = p.cta + " "; }
}
function openM(i){ lastFocus=document.activeElement; show(i); modal.classList.add("open"); document.body.style.overflow="hidden"; $("#mClose").focus(); }
function closeM(){ modal.classList.remove("open"); document.body.style.overflow=""; lastFocus && lastFocus.focus(); }
document.addEventListener("click",e=>{ const t=e.target.closest("[data-i]"); if(t) openM(+t.dataset.i); });
document.addEventListener("keydown",e=>{
  const t=e.target.closest && e.target.closest(".case-media"); if(t && (e.key==="Enter"||e.key===" ")){ e.preventDefault(); openM(+t.dataset.i); }
  if(!modal.classList.contains("open")) return;
  if(e.key==="Escape") closeM(); if(e.key==="ArrowRight") show(cur+1); if(e.key==="ArrowLeft") show(cur-1);
});
$("#mClose").onclick = closeM; $("#mNext").onclick = ()=>show(cur+1); $("#mPrev").onclick = ()=>show(cur-1);
modal.addEventListener("click",e=>{ if(e.target===modal) closeM(); });

/* pointer effects (desktop only) */
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches;
if(fine){
  const c = $("#cursor"); let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
  addEventListener("mousemove",e=>{x=e.clientX;y=e.clientY;});
  (function loop(){ cx+=(x-cx)*.18; cy+=(y-cy)*.18; c.style.left=cx+"px"; c.style.top=cy+"px"; requestAnimationFrame(loop); })();
  document.querySelectorAll("a,button,.case-media,.skill,.tool,.values li").forEach(el=>{
    el.addEventListener("mouseenter",()=>c.classList.add("big")); el.addEventListener("mouseleave",()=>c.classList.remove("big"));
  });
  document.querySelectorAll(".mag").forEach(b=>{
    b.addEventListener("mousemove",e=>{ const r=b.getBoundingClientRect(); b.style.translate=`${(e.clientX-r.left-r.width/2)*.18}px ${(e.clientY-r.top-r.height/2)*.25}px`; });
    b.addEventListener("mouseleave",()=>b.style.translate="");
  });
  const art=$("#heroArt"), por=$("#portrait");
  addEventListener("mousemove",e=>{ const dx=(e.clientX/innerWidth-.5), dy=(e.clientY/innerHeight-.5); por.style.translate=`${dx*18}px ${dy*14}px`; art.querySelectorAll(".doodle").forEach((d,i)=>d.style.translate=`${dx*(i+1)*-10}px ${dy*(i+1)*-8}px`); });
  document.querySelectorAll(".case-media img").forEach(img=>{
    const m=img.parentElement;
    m.addEventListener("mousemove",e=>{ const r=m.getBoundingClientRect(); img.style.transform=`scale(1.08) rotateY(${((e.clientX-r.left)/r.width-.5)*8}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*8}deg)`; });
    m.addEventListener("mouseleave",()=>img.style.transform="");
  });
}