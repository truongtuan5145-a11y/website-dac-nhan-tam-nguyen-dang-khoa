document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const ten = document.getElementById('ten').value;
    const email = document.getElementById('email').value;
    const ykien = document.getElementById('ykien').value;
    
    if (ten && email && ykien) {
        alert(`Cảm ơn bạn ${ten}!\nÝ kiến của bạn đã được gửi:\n"${ykien}"\nChúng tôi sẽ phản hồi qua email ${email} sớm nhất có thể.`);
        this.reset(); // Xóa form sau khi gửi
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});