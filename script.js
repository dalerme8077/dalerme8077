const androidBtn = document.getElementById('androidBtn');
const iosBtn = document.getElementById('iosBtn');
const androidApps = document.getElementById('androidApps');
const iosApps = document.getElementById('iosApps');

androidBtn.addEventListener('click', () => {
    androidApps.classList.remove('hidden');
    iosApps.classList.add('hidden');
    androidBtn.classList.add('active');
    iosBtn.classList.remove('active');
});

iosBtn.addEventListener('click', () => {
    iosApps.classList.remove('hidden');
    androidApps.classList.add('hidden');
    iosBtn.classList.add('active');
    androidBtn.classList.remove('active');
});
