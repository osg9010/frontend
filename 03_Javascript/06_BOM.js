window.onload = () => {
    // 1. window 객체
    // 1) window.open() 
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        // window.open('URL', '창이름', '특성');
        // window.open(); // 새탭
        // window.open('https://www.naver.com'); // 네이버 페이지
        // window.open('https://www.naver.com', 'naver'); // 네이버 페이지
        window.open('https://www.naver.com', 'naver', 'width=500, height=600'); // 네이버 페이지
    });

    // 2) 타이머(Timer)
    // window.setTimeout()
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let timerId = 0;
        let newWindow = window.open();

        newWindow.alert('3초 후에 이 페이지는 종료됩니다.');

        // 일정 시간 후에 콜백 함수를 한 번 실행
        timerId = window.setTimeout(() => newWindow.close(), 3000);

        // timerId를 clearTimeout() 함수에 전달하면 해당 id의 타이머를 취소할 수 있다.
        // window.clearTimeout(timerId);

        console.log(newWindow);
        console.log(timerId);
    });

    // window.setInterval()
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', function() {
        let div1 = document.getElementById('div1');

        window.setInterval(() => {
            let date = new Date();

            div1.innerHTML = `${date.getHours()} : ${date.getMinutes()} : <span id='second'>${date.getSeconds()}</span>`;
        }, 1000);
        ;
    });





}