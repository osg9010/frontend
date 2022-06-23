// $(document).ready()의 축약형
$(function() {
    // 1. 태그(요소) 선택자
    $('h5').css('color', 'blue');
    $('h5, p').css('background-color', 'yellow');

    // 2. 아이디 선택자
    // 1) 자바스크립트 방식
    let id1 = document.getElementById('id1');

    id1.style.color = 'red';

    // 2) 제이쿼리 방식
    let id2 = $('#id2').css('color', 'hotpink');

    // 3. 클래스 선택자
    $('.item').css({'color': 'orange', 'background-color': 'yellow'})
});