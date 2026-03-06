// สั่งให้รอจนกว่าหน้าเว็บ (DOM) จะโหลดโครงสร้างเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    
    // ค่อยมาค้นหาปุ่มและซองจดหมาย
    const envelope = document.getElementById('envelope');
    const toggleBtn = document.getElementById('toggle-btn');

    // ฟังก์ชันเปิด-ปิด
    function toggleEnvelope() {
        envelope.classList.toggle('open');
        
        if (envelope.classList.contains('open')) {
            toggleBtn.textContent = 'ปิดซอง';
        } else {
            toggleBtn.textContent = 'เปิดซอง';
        }
    }

    // ผูกคำสั่งเข้ากับปุ่มและซอง
    toggleBtn.addEventListener('click', toggleEnvelope);
    envelope.addEventListener('click', toggleEnvelope);
    
});