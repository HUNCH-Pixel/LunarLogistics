const I={rocket:'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',moon:'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z',earth:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',box:'M21 8l-9-5-9 5v8l9 5 9-5zM3.3 7.5l8.7 5 8.7-5M12 22V12.5',list:'M9 2h6v3H9zM5 4h4M15 4h4v18H5V4M8 12h8M8 16h8',bot:'M12 8V4H8M4 8h16v12H4zM2 14h2M20 14h2M15 13v2M9 13v2'};
const svg=n=>`<svg viewBox="0 0 24 24"><path d="${I[n]}"/></svg>`;
const ids=[['home','Home'],['team','Team'],['project','Project'],['research','Research'],['bibliography','Bibliography']];
const one=!!document.getElementById('home');const pg=location.pathname.split('/').pop().replace('.html','');
document.body.insertAdjacentHTML('afterbegin',`<nav><a class="brand" href="${one?'#home':'index.html'}">${svg('rocket')} Pixel Packers</a><div>${ids.map(p=>`<a data-id="${p[0]}" href="${one?'#'+p[0]:(p[0]=='home'?'index.html':p[0]+'.html')}" class="${p[0]==pg?'on':''}">${p[1]}</a>`).join('')}</div></nav>`);
document.body.insertAdjacentHTML('beforeend',`<footer>© 2026 Team Pixel Packers · Lewisville School of Science &amp; Technology · NASA HUNCH Program · <a href="${one?'#bibliography':'bibliography.html'}">Sources</a></footer>`);
document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=svg(e.dataset.i));
const split=(n,i)=>{[...n.childNodes].forEach(c=>{if(c.nodeType==3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(w=>{if(/^\s+$/.test(w)||!w){f.append(w);return}const s=document.createElement('span');s.className='w';[...w].forEach(ch=>{const l=document.createElement('span');l.className='lt';l.style.setProperty('--i',i.n++);l.textContent=ch;s.append(l)});f.append(s)});c.replaceWith(f)}else if(c.nodeType==1)split(c,i)})};
document.querySelectorAll('.sp').forEach(e=>split(e,{n:0}));
const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.2});document.querySelectorAll('.sp,.rv').forEach(e=>io.observe(e));
const px=document.querySelectorAll('.px');addEventListener('scroll',()=>px.forEach(e=>e.style.transform=`translateY(${scrollY*e.dataset.s}px)`),{passive:true});
if(one){const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)document.querySelectorAll('nav [data-id]').forEach(a=>a.classList.toggle('on',a.dataset.id==x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});document.querySelectorAll('[id].sec').forEach(s=>so.observe(s))}
const g=document.getElementById('game');
if(g){const kits=['Food','EVA gear','Science','Spare parts','Medical','Clothing','Batteries','Tools','Water','Hygiene'];let need,t0,pen,tick,best=null;const $=id=>document.getElementById(id);
const start=()=>{clearInterval(tick);t0=null;pen=0;$('gt').textContent='0.0 s';$('bay').innerHTML='<small>door side →</small>';$('gm').textContent='Click the crates in the order we would LOAD them. Supplies needed last go in first.';
let d=[...Array(14).keys()].map(x=>x+1).sort(()=>Math.random()-.5).slice(0,6);need=[...d].sort((a,b)=>b-a);$('crates').innerHTML='';
d.forEach(n=>{const b=document.createElement('button');b.className='crate';b.innerHTML='<b>Day '+n+'</b><br>'+kits[n%10];b.onclick=()=>pick(b,n);$('crates').appendChild(b)})};
const pick=(b,n)=>{if(!t0){t0=Date.now();tick=setInterval(()=>$('gt').textContent=((Date.now()-t0)/1000+pen).toFixed(1)+' s',100)}
if(n===need[0]){need.shift();b.disabled=true;b.style.opacity=.25;const s=document.createElement('span');s.className='blk';s.textContent=n;s.style.background=n%2?'#f2c94c':'#86efac';$('bay').insertBefore(s,$('bay').querySelector('small'));
if(!need.length){clearInterval(tick);const t=(Date.now()-t0)/1000+pen;if(best===null||t<best)best=t;$('gt').textContent=t.toFixed(1)+' s';$('gm').innerHTML='Packed! Day 1 is nearest the door, just like on the Moon. Your best: <b>'+best.toFixed(1)+' s</b>.'}}
else{pen+=2;b.classList.add('no');setTimeout(()=>b.classList.remove('no'),300);$('gm').textContent='Not yet. Something is needed later than Day '+n+', so it goes in first (+2 s).'}};
$('again').onclick=start;start()}
