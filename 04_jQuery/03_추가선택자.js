$(document).ready(() => {
    // 1. 자손, 후손 선택자
    $('div>h3').css('color', 'violet');
    // $('div>li').css('color', 'violet');
    // $('div>ul>li').css('color', 'violet');

    $('div h3').css('background-color', 'skyblue');
    $('div .ch').css('background-color', 'tomato');

    // 2. 속성 선택자
    // $('input[class]').css('background-color', 'tomato')
    // $('input[type=text]').val('Change Value');
    // $('input[class~=test1]').val('123456789');
    // $('input[type^=ra]').prop('checked', true);
    // $('input[type$=box]').prop('checked', true);
    // $('input[class*=st3]').css('width', '100px').css('height', '100px').val('zzz');
    
    // 3. 입력 양식 선택자
    // $(':text').css('background-color', 'pink');
    // $(':button').val('왕버튼').css({'width': '100px', 'height': '100px'});
    // $(':checkbox').prop('checked', true).css({'width': '50px', 'height': '50px'});
    // $(':file').css('background-color', 'yellow');
    // $(':image').hover(
    //     function() {
    //         // 마우스가 요소 내부로 들어왔을 때 이벤트 처리
    //         // console.log(this);
    //         // console.log($(this));
    //         // $(this).attr('src', '../resources/image/flower1.PNG');
    //         $(this).prop('src', '../resources/image/flower1.PNG');
    //     },
    //     function() {
    //         // 마우스가 요소 외부로 나갔을 때 이벤트 처리
    //         // console.log(this);
    //         // console.log($(this));
    //         // $(this).attr('src', '../resources/image/flower2.PNG');
    //         $(this).prop('src', '../resources/image/flower2.PNG');
    //     }
    // );

    // 4. 입력 양식 상태에 대한 선택자
    // 1) input 태그 중에 활성화된 객체 선택
    $('input:enabled').css('background-color', 'yellow');
    // 2) input 태그 중에 비활성화된 객체 선택
    $('input:disabled').css('background-color', 'tomato');
    // 3) input 태그 중에 체크된 객체 선택
    $('input:checked').css({'width': '20px', 'height': '20px'});

    // 4) checkbox에 change 이벤트 핸들러 등록
    $('input:checkbox').change(function() {
        // console.dir(this);
        // console.dir($(this));
        // console.dir($(this).prop('checked'));
        let checkbox = $(this);

        if(checkbox.prop('checked')) {
            checkbox.css({'width': '50px', 'height': '50px'});
        } else {
            checkbox.css({'width': '20px', 'height': '20px'});
        }
    });

    // 4) select에 change 이벤트 핸들러 등록
    $('#national').change(function() {
        // select 태그의 option 태그 중 선택된 객체를 선택
        let value = $('#national>option:selected').val();

        console.log(value);

        $('#result1').val(value);
    });

    $('#hobby').change(function() {
        let value = $('#hobby>option:selected').val();

        console.log(value);

        $('#result2').val(value);
    });
});