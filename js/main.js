const I={rocket:'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
box:'M21 8l-9-5-9 5v8l9 5 9-5zM3.3 7.5l8.7 5 8.7-5M12 22V12.5',moon:'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z',earth:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
bot:'M12 8V4H8M4 8h16v12H4zM2 14h2M20 14h2M15 13v2M9 13v2',map:'M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15',list:'M9 2h6v3H9zM5 4h4M15 4h4v18H5V4M8 12h8M8 16h8',
snow:'M12 2v20M2 12h20M5 5l14 14M19 5L5 19',shield:'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z',users:'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M21 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
book:'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM4 19.5V21h16',target:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z',scale:'M12 3v18M5 7h14M5 7l-3 8a4 4 0 0 0 6 0zM19 7l-3 8a4 4 0 0 0 6 0z'};
const svg=n=>`<svg viewBox="0 0 24 24"><path d="${I[n]}"/></svg>`;
const pages=[['index','Home'],['project','Project'],['research','Research'],['team','Team'],['bibliography','Bibliography']];
const cur=(location.pathname.split('/').pop()||'index.html').replace('.html','')||'index';
document.body.insertAdjacentHTML('afterbegin',`<nav><a class="brand" href="index.html">${svg('rocket')} NASA HUNCH · Pixel Packers</a><div>${pages.map(p=>`<a href="${p[0]}.html" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')}</div></nav>`);
document.body.insertAdjacentHTML('beforeend',`<footer>© 2026 Team Pixel Packers · Lewisville School of Science &amp; Technology · NASA HUNCH Program. Not an official NASA website. Image credits: <a href="bibliography.html#img">see bibliography</a>.</footer>`);
document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=svg(e.dataset.i));
document.querySelectorAll('img').forEach(i=>i.onerror=()=>{const f=i.closest('figure');if(f)f.style.display='none'});
const cont=document.getElementById('cont');
if(cont){const kits=['Food','EVA','Science','Maintenance','Medical','Emergency','Crew','Waste','Utility'];const out=document.getElementById('out');
for(let d=1;d<=14;d++){const b=document.createElement('button');b.textContent=d;b.style.background=d%2?'#f5c518':'#c084fc';b.onclick=()=>{[...cont.children].forEach(x=>x.classList.remove('sel'));b.classList.add('sel');
out.innerHTML=`<b>Day ${d} supplies</b> · Earth load order: <b>#${15-d} of 14</b> · Moon retrieval: <b>${d===1?'first (nearest the door)':'mission day '+d}</b><br>Example kit types (HUNCH categories <a class="c" href="bibliography.html#r1">[1]</a>): ${kits[d%9]}, ${kits[(d+3)%9]}.<br><span class="todo">Placeholder: real item list, mass and assigned actor will come from our manifest.</span>`};cont.appendChild(b)}
const run=m=>{document.getElementById('bE').classList.toggle('on',m=='E');document.getElementById('bM').classList.toggle('on',m=='M');
[...cont.children].forEach((b,k)=>{b.style.opacity=0;setTimeout(()=>b.style.opacity=1,(m=='E'?13-k:k)*120)})};
document.getElementById('bE').onclick=()=>run('E');document.getElementById('bM').onclick=()=>run('M');run('E')}
const mt=document.getElementById('mt');
if(mt){const M=window.MISSIONS,tb=document.getElementById('mtabs');
Object.keys(M).forEach((k,i)=>{const b=document.createElement('button');b.className='btn';b.textContent=k;b.onclick=()=>{[...tb.children].forEach(x=>x.classList.remove('on'));b.classList.add('on');mt.innerHTML=M[k].map(m=>`<div><b>${m[0]}</b> ${m[1]}</div>`).join('')};tb.appendChild(b);if(!i)b.click()})}
const sh=document.getElementById('shape');
if(sh){const f=()=>{const n=id=>parseFloat(document.getElementById(id).value)||0,cyl=sh.value=='c';
document.getElementById('row-box').style.display=cyl?'none':'grid';document.getElementById('row-cyl').style.display=cyl?'grid':'none';
const v=cyl?Math.PI*Math.pow(n('dia')/2,2)*n('len'):n('bl')*n('bw')*n('bh');
document.getElementById('vol').textContent=v?v.toFixed(2)+' m³ gross ('+(v*35.3147).toFixed(0)+' ft³)':'enter dimensions';
document.getElementById('core').textContent=cyl?'A rectangle inscribed in a circle is at most a square, covering 2/π ≈ 63.7% of the cross-section. The other ≈ 36.3% is corner space for soft cargo.':'A box cross-section has no corner loss, but usable volume is still below gross (racks, aisle, clearances).'};
document.querySelectorAll('#calc input,#shape').forEach(e=>e.oninput=f);f()}
