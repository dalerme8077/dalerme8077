function showAndroid() {
  document.getElementById('android').classList.add('active');
  document.getElementById('ios').classList.remove('active');
  document.getElementById('android-tab').classList.add('active');
  document.getElementById('ios-tab').classList.remove('active');
}

function showIos() {
  document.getElementById('ios').classList.add('active');
  document.getElementById('android').classList.remove('active');
  document.getElementById('ios-tab').classList.add('active');
  document.getElementById('android-tab').classList.remove('active');
}
