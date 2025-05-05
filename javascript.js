// Kleine animatie op nav-items bij binnenkomst
document.querySelectorAll('nav a').forEach((link, index) => {
    link.style.opacity = 0;
    setTimeout(() => {
      link.style.transition = 'opacity 1s ease';
      link.style.opacity = 1;
    }, 500 + index * 200);
  });
  // Fade-in bij scroll
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
const text = "Coming soon... Programmeerpagina in aanbouw!";
let i = 0;
const typing = document.getElementById("typing");

function type() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
  const dot = document.querySelector('.cursor-dot');
  const bg = document.querySelector('.parallax-bg');
  const btn = document.querySelector('.magnetic-btn');
  
  document.addEventListener('mousemove', (e) => {
    dot.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
  
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    bg.style.transform = `translate(${x}px, ${y}px)`;
  });
  
  // Magnetic button effect
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${offsetX * 0.2}px, ${offsetY * 0.2}px)`;
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
  const track = document.querySelector('.slider-track');
  track.addEventListener('mouseover', () => track.style.animationPlayState = 'paused');
  track.addEventListener('mouseout', () => track.style.animationPlayState = 'running');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      
      projects.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'nl',
      includedLanguages: 'en,nl,fr,de,es,it', // Voeg hier andere talen toe
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
}


