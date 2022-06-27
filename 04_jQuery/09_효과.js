$(document).ready(() => {
    // 효과
    // 1. show(), hide()
    $('#show').on('click', () => {
        // $('#imgCity').show(1500);
        $('#imgCity').show(5000, 'swing');
    })

    $('#hide').on('click', () => {
        // $('#imgCity').hide(1500);
        $('#imgCity').hide(5000, 'linear');
    })

    $('#toggle').on('click', () => {
        // 토글 없이 효과를 구현하는 방법
        // if($('#imgCity').css('display') === 'none') {
        //     $('#imgCity').show(5000, 'swing');
        // } else {
        //     $('#imgCity').hide(5000, 'linear');
        // }

        $('#imgCity').toggle(5000, 'linear');
    })

    // 2. slideDown(), slideUp()
    $('.menu').on('click', (event) => {
        let content = $(event.target).next();

        // 토글 없이 효과를 구현하는 방법
        // if(content.css('display') === 'none') {
        //     content.slideDown(500, 'swing');
        // } else {
        //     content.slideUp(500, 'linear');
        // }
        
        // content.slideToggle(500, 'swing');
        
        $('.contents').slideUp();
        content.slideDown(500, 'linear');
    });

    // 3. fadeIn(), fadeOut()
    $('#fadeIn').on('click', () => {
        $('#imgForest').fadeIn(1000, 'linear');
    });

    $('#fadeOut').on('click', () => {
        $('#imgForest').fadeOut(1000, 'linear');
    });

    $('#fadeToggle').on('click', () => {
        $('#imgForest').fadeToggle(1500, 'swing');
    });

    $('#imgForest').hover(
        (event) => {
            if (event.type === 'mouseenter') {
                $(event.target).fadeTo(500, .5, 'linear');
            } else if (event.type === 'mouseleave') {
                $(event.target).fadeTo(500, 1, 'swing');
            }
        }
    );
});