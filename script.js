/* Minimal interactivity: smooth scroll to "associar" anchor (placeholder) and small WA fallback */
document.addEventListener('click', (e)=>{
  const t = e.target.closest('a[href^="#"]');
  if(!t) return;
  const id = t.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'center'});
  }
});

