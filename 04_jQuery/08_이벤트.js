$(document).ready(function() {
    // 1. 이벤트 연결
    // 1) on(), off()
    // $('#div1').on('mouseenter', (event) => {
    //     $(event.target).css('background-color', 'beige').text('마우스가 올라감');
    // });

    // $('#div1').on('mouseleave', (event) => {
    //     // event.target.style.backgroundColor = 'hotpink';
    //     $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
    // });

    // $('#div1').on('mouseenter mouseleave', (event) => {
    //     console.log(event.target);

    //     if(event.type === 'mouseenter') {
    //         $(event.target).css('background-color', 'beige').text('마우스가 올라감');
    //     } else if (event.type === 'mouseleave') {
    //         $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
    //     }
    // });

    // $('#div1').on('click', (event) => {
    //     $(event.target)
    //         .css('background-color', 'white')
    //         .text('')
    //         // .off('mouseenter')
    //         .off('mouseenter mouseleave');
    // })

    $('#div1').on({
        mouseenter: (event) => {
            $(event.target).css('background-color', 'beige').text('마우스가 올라감');
        }, 
        mouseleave: (event) => {
            $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
        },
        click: (event) => {
            $(event.target)
                .css('background-color', 'white')
                .text('')
                .off('mouseenter mouseleave');
        }
    });

    // 2) 간단한 연결 이벤트
    $('#div2').mouseenter((event) => {
        $(event.target).css('background-color', 'beige').text('마우스가 올라감');
    });

    $('#div2').mouseleave(() => {
        $('#div2').css('background-color', 'hotpink').text('마우스가 내려감');
    });

    $('#div2').click((event) => {
        $(event.target)
            .css('background-color', 'white')
            .text('')
            .off('mouseenter mouseleave');
    });

    // 3) one()
    $('#div3').one('click', () => {
        alert('처음이자 마지막으로 이벤트 핸들러 실행');
    });


    // 2. 키보드 이벤트
    // 1) keydown, keypress, keyup
    // $('#textarea1').keydown((event) => {
    //     // console.log(event);
    //     console.log(`key: ${event.key}, keyCode: ${event.keyCode}`);
    // });

    // $('#textarea1').keypress((event) => {
    //     // console.log(event);
    //     console.log(`key: ${event.key}, keyCode: ${event.keyCode}`);
    // });

    // $('#textarea1').keyup((event) => {
    //     // console.log(event);
    //     console.log(`key: ${event.key}, keyCode: ${event.keyCode}`);
    // });

    $('#textarea1').on({
        keydown: (event) => {
            console.log(`keydown > key: ${event.key}, keyCode: ${event.keyCode}`);
        },
        keypress: (event) => {
            console.log(`keypress > key: ${event.key}, keyCode: ${event.keyCode}`);
        },
        keyup: (event) => {
            console.log(`keyup > key: ${event.key}, keyCode: ${event.keyCode}`);
        }
    })

    // 2) 글자 수 세기
    $('#textarea2').on('keyup', (event) => {
        let target = $(event.target);
        let counter = $('#counter');
        let currentLength = target.val().length;
        let maxLength = parseInt($('#maxLength').text());

        console.log(currentLength);
        console.log(maxLength);

        // if(currentLength > maxLength) {
        //     counter.css('color', 'red');
        // } else {
        //     counter.css('color', 'black');
        // }

        if(currentLength > maxLength) {
            target.val(target.val().substr(0, maxLength));
        }

        counter.text(currentLength);
    })

    // 3) 아이디 조건 확인
    $('#userId').keyup((event) => {
        let regExp = /^[a-z][a-z0-9]{3,11}$/;
        let id = event.target.value;
        // let id = $(event.target).val();

        if (id === null || id === '') {
            $('#idCheck')
                .text('')
                .css('color', 'white');
        } else if (regExp.test(id)) {
            $('#idCheck')
                .text('사용 가능한 아이디')
                .css({color: 'green', fontWeight: 'bold'});
        } else {
            $('#idCheck')
            .text('사용 불가능한 아이디')
            .css({color: 'red', fontWeight: 'bold'});
        }
    })

    // 3. trigger()
    $('#div4').on('click', () => {
        let counter = $('#counter2');
        let currentCount = parseInt(counter.text());

        counter.text(++currentCount);
    })

    $('#btn1').on('click', () => {
        $('#div4').trigger('click');
    });
    
});