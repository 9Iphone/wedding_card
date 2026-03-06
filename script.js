const envelope = document.getElementById('envelope');
const toggleBtn = document.getElementById('toggle-btn');

function toggleEnvelope() {
    // สลับคลาส open
    envelope.classList.toggle('open');
    
    // เปลี่ยนข้อความบนปุ่ม
    if (envelope.classList.contains('open')) {
        toggleBtn.textContent = 'ปิดซอง';
    } else {
        toggleBtn.textContent = 'เปิดซอง';
    }
}

// ผูกการทำงานกับปุ่มและตัวซอง
toggleBtn.addEventListener('click', toggleEnvelope);
envelope.addEventListener('click', toggleEnvelope);