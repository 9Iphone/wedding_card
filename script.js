const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// ฟังก์ชันเปิดจดหมาย (เพิ่มคลาส 'open')
function openLetter() {
    envelope.classList.add('open');
}

// ฟังก์ชันปิดจดหมาย (เอาคลาส 'open' ออก)
function closeLetter() {
    envelope.classList.remove('open');
}

// สั่งงานเมื่อกดปุ่ม
openBtn.addEventListener('click', openLetter);
closeBtn.addEventListener('click', closeLetter);

// เพิ่มลูกเล่น: ให้กดที่ตัวซองจดหมายตรงๆ เพื่อเปิดได้ด้วย
envelope.addEventListener('click', openLetter);