// Bottom nav interaksi
const navItems = document.querySelectorAll('.bottom-nav .nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Interaksi tombol submit
const submitBtn = document.querySelector('.attendance-btn button');
submitBtn.addEventListener('click', () => {
  alert('Attendance submitted successfully!');
  // animasi efek klik
  submitBtn.classList.add('clicked');
  setTimeout(() => {
    submitBtn.classList.remove('clicked');
  }, 200);
});

// Notifikasi dari icon bell
const bellIcon = document.querySelector('.bi-bell');
bellIcon.addEventListener('click', () => {
  const msg = document.createElement('div');
  msg.textContent = 'You have no new notifications.';
  msg.className = 'notification-msg alert alert-info position-fixed top-0 start-50 translate-middle-x mt-3 px-3 py-2 shadow rounded';
  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);
});

// Highlight menu grid saat diklik
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Scroll ke bottom saat center-icon diklik
const centerIcon = document.querySelector('.center-icon');
centerIcon.addEventListener('click', () => {
  document.querySelector('.bottom-nav').scrollIntoView({ behavior: 'smooth' });
});
