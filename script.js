document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('my-envelope');
    const toggleBtn = document.getElementById('toggle-btn');

    function toggleEnvelope() {
        // สลับคลาส open
        envelope.classList.toggle('open');
        
        // เปลี่ยนข้อความปุ่ม
        if (envelope.classList.contains('open')) {
            toggleBtn.textContent = 'พับเก็บซอง';
        } else {
            toggleBtn.textContent = 'เปิดซอง';
        }
    }

    // กดที่ปุ่มเพื่อเปิด/ปิด
    toggleBtn.addEventListener('click', toggleEnvelope);
    
    // กดที่ตัวซองตรงๆ เพื่อเปิด/ปิดได้ด้วย
    envelope.addEventListener('click', toggleEnvelope);
});