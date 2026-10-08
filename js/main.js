const I={rocket:'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
box:'M21 8l-9-5-9 5v8l9 5 9-5zM3.3 7.5l8.7 5 8.7-5M12 22V12.5',moon:'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z',earth:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
bot:'M12 8V4H8M4 8h16v12H4zM2 14h2M20 14h2M15 13v2M9 13v2',map:'M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15',list:'M9 2h6v3H9zM5 4h4M15 4h4v18H5V4M8 12h8M8 16h8',
snow:'M12 2v20M2 12h20M5 5l14 14M19 5L5 19',shield:'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z',users:'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M21 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
book:'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM4 19.5V21h16',target:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z',scale:'M12 3v18M5 7h14M5 7l-3 8a4 4 0 0 0 6 0zM19 7l-3 8a4 4 0 0 0 6 0z'};
const svg=n=>`<svg viewBox="0 0 24 24"><path d="${I[n]}"/></svg>`;
const pages=[['index','Home'],['team','Team'],['project','Project'],['research','Research'],['bibliography','Bibliography']];
const cur=(location.pathname.split('/').pop()||'index.html').replace('.html','')||'index';
document.body.insertAdjacentHTML('afterbegin',`<nav><a class="brand" href="index.html">${svg('rocket')} NASA HUNCH · Pixel Packers</a><div>${pages.map(p=>`<a href="${p[0]}.html" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')}</div></nav>`);
document.body.insertAdjacentHTML('beforeend',`<footer>© 2026 Team Pixel Packers · Lewisville School of Science &amp; Technology · NASA HUNCH Program. Not an official NASA website. Sources: <a href="bibliography.html">bibliography</a>.</footer>`);
document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=svg(e.dataset.i));
document.querySelectorAll('img').forEach(i=>i.onerror=()=>{const f=i.closest('figure');if(f)f.style.display='none'});
const g=document.getElementById('game');
if(g){const kits=['Food','EVA gear','Science','Spare parts','Medical','Clothing','Batteries','Tools','Water','Hygiene'];let need,t0,pen,tick,best=null;
const $=id=>document.getElementById(id);
const start=()=>{clearInterval(tick);t0=null;pen=0;$('gt').textContent='0.0 s';$('bay').innerHTML='';$('gm').textContent='Click the crates in the order we would LOAD them. Supplies needed last go in first.';
let d=[...Array(14).keys()].map(x=>x+1).sort(()=>Math.random()-.5).slice(0,6);need=[...d].sort((a,b)=>b-a);
$('crates').innerHTML='';d.forEach(n=>{const b=document.createElement('button');b.className='crate';b.innerHTML='<b>Day '+n+'</b><br>'+kits[n%10];b.onclick=()=>pick(b,n);$('crates').appendChild(b)})};
const pick=(b,n)=>{if(!t0){t0=Date.now();tick=setInterval(()=>$('gt').textContent=((Date.now()-t0)/1000+pen).toFixed(1)+' s',100)}
if(n===need[0]){need.shift();b.disabled=true;b.style.opacity=.25;const s=document.createElement('span');s.className='blk';s.textContent=n;s.style.background=n%2?'#f5c518':'#c084fc';$('bay').appendChild(s);
if(!need.length){clearInterval(tick);const t=(Date.now()-t0)/1000+pen;if(best===null||t<best)best=t;$('gt').textContent=t.toFixed(1)+' s';$('gm').innerHTML='Packed! Day 1 is nearest the door, just like on the Moon. Your best: <b>'+best.toFixed(1)+' s</b>.'}}
else{pen+=2;b.classList.add('no');setTimeout(()=>b.classList.remove('no'),300);$('gm').textContent='Not yet. Something is needed later than Day '+n+', so it has to go in first (+2 s).'}};
$('again').onclick=start;start()}
