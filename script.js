document.getElementById('startButton').addEventListener('click', function() {
  // Menampilkan pesan ulang tahun
  document.getElementById('birthdayMessage').classList.remove('hidden');
  
  // Memulai lagu ulang tahun
  document.getElementById('birthdaySong').play();
  
  // Menyembunyikan tombol mulai
  this.classList.add('hidden');
});

document.getElementById('showMessageButton').addEventListener('click', function() {
  // Menampilkan pesan khusus
  const specialMessage = document.getElementById('specialMessage');
  specialMessage.textContent = "Valen, kamu adalah orang yang sangat spesial. Semoga hari ulang tahunmu penuh dengan kebahagiaan dan keceriaan!";
  specialMessage.classList.remove('hidden');
  
  // Menyembunyikan tombol pesan khusus
  this.classList.add('hidden');
});