
const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.navlinks');if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'))}
document.querySelectorAll('a[href="/go/"]').forEach(a=>{a.setAttribute('rel','nofollow sponsored noopener')});
const c=document.querySelector('.cookie-note');if(c&&!localStorage.getItem('b50-cookie')){setTimeout(()=>c.classList.add('show'),700)};document.querySelector('[data-cookie-ok]')?.addEventListener('click',()=>{localStorage.setItem('b50-cookie','1');c?.classList.remove('show')});
