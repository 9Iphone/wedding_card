const openBtn = document.getElementById('open-btn');
const envelopeCover = document.getElementById('envelope-cover');
const video = document.getElementById('envelope-video');

openBtn.addEventListener('click', () => {
    // ซ่อนหน้าปก
    envelopeCover.style.display = 'none';
    
    // แสดงและเล่นวิดีโอ
    video.hidden = false;
    video.play();
});