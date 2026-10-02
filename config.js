// ================================================
// KONFIGURASI ABSENSI GURU & STAF TU
// SMA NEGERI 3 SARMI
// ================================================

// 1. GANTI dengan URL Web App Google Apps Script Anda.
const API_URL = "https://script.google.com/macros/s/AKfycbymF7-dSBBpMn-5DQ2IyJE5cLT8fZSeWTMAsgy2bMGYlZI5fKKkkGofeCa5wCs7fpUP/exec";

// 2. MODEL FACE ID
// Model sengaja menggunakan CDN resmi/referensi publik face-api.js
// sehingga tidak lagi mencari file ./models yang menyebabkan 404.
// Jika nanti Anda ingin menyimpan model sendiri di GitHub Pages,
// ubah menjadi: const MODEL_URL = "./models";
const MODEL_URL = "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights";
