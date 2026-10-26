const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));
const imgs=[...document.querySelectorAll('.card img')],lb=document.getElementById('lb'),li=lb.querySelector('img'),lp=lb.querySelector('p');let i=0;
const show=n=>{i=(n+imgs.length)%imgs.length;li.src=imgs[i].src;lp.textContent=imgs[i].dataset.cap;lb.hidden=false};
imgs.forEach((im,n)=>im.parentElement.addEventListener('click',()=>show(n)));
lb.querySelector('.x').onclick=()=>lb.hidden=true;lb.querySelector('.prev').onclick=e=>{e.stopPropagation();show(i-1)};lb.querySelector('.next').onclick=e=>{e.stopPropagation();show(i+1)};
lb.onclick=e=>{if(e.target===lb)lb.hidden=true};document.onkeydown=e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)};
