function showSection(sectionId) {
  // Barcha bo‘limlarni yashiradi
  document.querySelectorAll('.app-section').forEach(section => {
    section.classList.add('hidden');
  });

  // Tanlangan bo‘limni ko‘rsatadi
  document.getElementById(sectionId).classList.remove('hidden');
}
