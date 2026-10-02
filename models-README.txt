MODEL FACE ID
=============

Versi paket ini menggunakan CDN jsDelivr untuk model face-api.js, sehingga folder models lokal tidak wajib dan error 404 ./models dapat dihindari.

MODEL_URL yang dipakai:
https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@0.22.2/weights

Model yang digunakan:
- tiny_face_detector_model
- face_landmark_68_model
- face_recognition_model

Jika ingin hosting model sendiri, salin file model dari repository face-api.js ke folder /models dan ubah MODEL_URL menjadi ./models.
