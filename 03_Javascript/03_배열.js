window.onload = function () {
    // 1. 배열의 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function() {
        let arr1 = []; // 리터럴
        let arr2 = new Array(); // []
        let arr3 = new Array(3); // [empty x 3]
        let arr4 = new Array('빨강', '파랑', '노랑', '초록'); // [empty*3]
        let arr5 = ['java', 'oracle', 'html5', 'css3', 'javascript'];
        let arr6 = [
            '문인수',
            20,
            true,
            [1, 2, 3, 4],
            {},
            function() {}
        ];
        let div1 = document.getElementById('div1');

        console.log(arr1, arr2, arr3, arr4, arr5, arr6);

        arr1[0] = '귤';
        arr1[1] = '사과';
        arr1[2] = '자몽';

        arr2[0] = '벤츠';
        arr2[1] = '아우디';
        arr2[2] = 'BMW';
        arr2[3] = '벤틀리';

        div1.innerHTML = 'Hello<br>';
        div1.innerHTML += `arr1 : [${arr1}], arr1.length : ${arr1.length}<br>`;
        div1.innerHTML += `arr2 : [${arr2}], arr2.length : ${arr2.length}<br>`;
        div1.innerHTML += `arr3 : [${arr3}], arr3.length : ${arr3.length}<br>`;
        div1.innerHTML += `arr4 : [${arr4}], arr4.length : ${arr4.length}<br>`;
        div1.innerHTML += `arr5 : [${arr5}], arr5.length : ${arr5.length}<br>`;
        div1.innerHTML += `arr6 : [${arr6}], arr6.length : ${arr6.length}<br>`;
    }

    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', function() {
        let div2 = document.getElementById('div2');

        // 1) indexOf()
        // let array = ['귤', '사과', '자몽', '망고', '복숭아'];
        
        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `indexOf('귤') : ${array.indexOf('귤')}<br>`;
        // div2.innerHTML += `indexOf('복숭아') : ${array.indexOf('복숭아')}<br>`;
        // div2.innerHTML += `indexOf('수박') : ${array.indexOf('수박')}<br>`;
        
        // 2) concat()
        // let array1 = ['귤', '사과', '자몽', '망고', '복숭아'];
        // let array2 = ['바나나', '수박', '오렌지', '딸기', '두리안'];
        
        // div2.innerHTML = `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br><br>`;
        // div2.innerHTML += `array1을 기준으로 배열을 결합 : [${array1.concat(array2)}]<br>`;
        // div2.innerHTML += `array1: [${array1}]<br><br>`; // 원본 배열에 영향을 미치지 않는다.
        // div2.innerHTML += `array2을 기준으로 배열을 결합 : [${array2.concat(array1)}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br><br>`; // 원본 배열에 영향을 미치지 않는다.
        
        // 3) toString() / join()
        // let array = ['귤', '사과', '자몽', '망고', '복숭아'];
        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `array.toString(): [${array.toString()}]<br>`;
        // div2.innerHTML += `array.join(): [${array.join()}]<br>`;
        // div2.innerHTML += `array.join('|'): [${array.join('|')}]<br>`;

        // 4) sort()
        // let array1 = ['Apple', 'Cherry', 'apple', 'Banana'];
        // let array2 = [10, 543, 30, 450, 123, 885];

        // div2.innerHTML = `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br>`;
        // div2.innerHTML += `array1.sort(): [${array1.sort()}]<br>`;
        // div2.innerHTML += `array2.sort(): [${array2.sort()}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br>`;
        
        // // 오름차순 정렬
        // array2.sort((left, right) => left - right);
        
        // div2.innerHTML += `array2: [${array2}]<br>`;
        
        // // 내림차순 정렬
        // array2.sort(function (left, right) {
        //     return right - left;
        // });
        
        // div2.innerHTML += `array2: [${array2}]<br>`;
        
        // 5) reverse()
        // let array = Array.of(10, 5, 3, 6, 1, 4);

        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `array.reverse(): [${array.reverse()}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br>`;

        // 6) push(), pop()
        // let array = ['벤', '박효신', '레드벨벳', '데이식스'];

        // // push()
        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `array.push(): [${array.push('멜로망스')}]<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.push(): [${array.push('비비')}]<br>`;
        // div2.innerHTML += `array: [${array}]<br><br>`;
        
        // // pop()
        // div2.innerHTML += `array.pop(): [${array.pop()}]<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.pop(): [${array.pop()}]<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;

        // 7) unshift(), shift()
        // let array = ['벤', '박효신', '레드벨벳', '데이식스'];

        // // unshift()
        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `array.unshift(): [${array.unshift('아이유')}]<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.unshift(): [${array.unshift('임영웅')}]<br>`;
        // div2.innerHTML += `array: [${array}]<br><br>`;
        
        // // shift()
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.shift(): [${array.shift()}]<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.shift(): [${array.shift()}]<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;
        
        // 8) slice(), splice()
        let array = ['벤', '박효신', '레드벨벳', '데이식스', '멜로망스', '아이유'];
        
        // slice()
        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `array.slice(2): [${array.slice(2)}]<br>`;
        div2.innerHTML += `array.slice(2, 4): [${array.slice(2, 4)}]<br>`;
        // 원본 배열에 영향을 미치지 않는 메소드이다.
        div2.innerHTML += `array: [${array}]<br><br>`;
        
        // splice()
        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `array.splice(2, 2): [${array.splice(2, 2)}]<br>`;
        // 원본 배열에 영향을 미치는 메소드이다.
        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `array.splice(2, 2, '비비'): [${array.splice(2, 2, '비비')}]<br>`;
        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `array.splice(1, 0, '임영웅', 'BTS'): [${array.splice(1, 0, '임영웅', 'BTS')}]<br>`;
        div2.innerHTML += `array: [${array}]<br>`;

    });
}