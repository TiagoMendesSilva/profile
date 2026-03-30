// ── Background image with fallback ──
const bgCandidates = [
  'https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=1000&q=85&fit=crop&crop=top',
  'https://images.unsplash.com/photo-1590596900791-81efa14cebe2?w=1000&q=85&fit=crop',
  'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=1000&q=85&fit=crop',
  'https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=1000&q=85&fit=crop'
];
const bgEl = document.querySelector('.bg-city');
let bgLoaded = false;
bgCandidates.forEach((url) => {
  const img = new Image();
  img.onload = () => {
    if (!bgLoaded) {
      bgLoaded = true;
      bgEl.style.backgroundImage = `linear-gradient(180deg,rgba(4,16,50,0.45) 0%,rgba(8,35,85,0.60) 30%,rgba(6,25,65,0.78) 65%,rgba(3,12,40,0.92) 100%), url('${url}')`;
    }
  };
  img.src = url;
});

// ── Staggered button animations ──
document.querySelectorAll('#links .btn').forEach(btn => {
  const delay = btn.dataset.delay || '0.3';
  btn.style.animationDelay = delay + 's';
});

// ── Ripple effect ──
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top  = (e.clientY - rect.top  - size / 2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// ── Floating particles ──
const container = document.getElementById('particles');
for (let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 6 + 2;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random() * 100}%;
    bottom:${Math.random() * -20}%;
    animation-duration:${8 + Math.random() * 12}s;
    animation-delay:${Math.random() * 8}s;
    opacity:${0.2 + Math.random() * 0.4};
  `;
  container.appendChild(p);
}