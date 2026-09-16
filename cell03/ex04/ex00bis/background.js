$(document).ready(function() {
    $('#change-bg-button').on('click', function() {
        // สุ่มสี RGB
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        
        // เปลี่ยนสีพื้นหลังของ body
        $('body').css('background-color', randomColor);
    });
});