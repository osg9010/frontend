// 1. 이벤트가 발생한 요소에 접근하는 방법
// 1) 인라인 방식
function test1(event) {
    // 매개값으로 이벤트 객체를 가져올 수 없다.
    console.log(event);
    console.log(window.event.target);
    // this는 window 객체를 가리킨다.
    console.log(this.event.target);
}

// 2) 프로퍼티 방식
let btn1 = document.getElementById('btn1');

// btn1.onclick = function(event) {
//     console.log(event.target);
//     console.log(window.event.target);
//     console.log(this); // 요소 객체를 가리킨다.
// };

btn1.onclick = (event) => {
    console.log(event.target);
    console.log(window.event.target);
    console.log(this); // window 객체를 가리킨다.

    // 이벤트 헨들러 제거
    btn1.onclick = null;
};

// 3) addEventListener() 메소드 방식
let btn2 = document.getElementById('btn2');

// btn2.addEventListener('click', function(event) {
//     console.log(event.target);
//     console.log(window.event.target);
//     console.log(this);
// });

btn2.addEventListener('click', (event) => {
    console.log(event.target);
    console.log(window.event.target);
    console.log(this);
});

btn2.addEventListener('click', (event) => {
    console.log('동일한 이벤트에 여러 개의 핸들러 지정');
});

// 2. 태그(요소)별 기본 이벤트 제거
// 1) 기본 이벤트 제거
function passwordCheck() {
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;

    if(pass1 !== pass2){
        alert('비밀번호가 일치하지 않습니다.')

        return false;
    }
}

// 2) 기본 이벤트 제거 2
let submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    let userId = document.getElementById('userId').value;
    let regExp = /^[a-zA-Z0-9]{5,12}$/;
    
    console.log(userId);

    // 영문자, 숫자로만 총 5 ~ 12자 사이로 입력해 주세요.
    if(!regExp.test(userId)) {
        alert('아이디를 정상적으로 입력해주세요.');

        // 메소드 방식에서는 아래와 같이 기본 이벤트를 제거해야 한다.
        event.preventDefault();
    }
});