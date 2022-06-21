window.onload = function() {
    // 1. 객체 생성
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        let product = {
            0: '배열 흉내',
            name: '아이폰 12 미니',
            price: 1000000,
            brand: '삼성',
            brand: '애플', // 중복 선언하게 되면 마지막에 선언된 프로퍼티가 덮어쓴다.
            spec: ['OLED', 'IOS15', '8Inch', '화이트']
        };

        console.log(product);

        // 속성명을 제시할 때 공백이나 특수문자가 들어가야 하는 경우 '', ""로 묶어줘야 한다.
        let user = {
            'user name': '문인수',
            'user-age': 24,
            'job!!': '훈련 강사'
        }

        div1.innerHTML = 'product["속성명"]으로 접근하는 방법<br>';
        div1.innerHTML += `product[0]: ${product[0]}<br>`;
        div1.innerHTML += `product['name']: ${product['name']}<br>`;
        div1.innerHTML += `product['price']: ${product['price']}<br>`;
        div1.innerHTML += `product['brand']: ${product['brand']}<br>`;
        div1.innerHTML += `product['spec'][2]: ${product['spec'][2]}<br>`;
        div1.innerHTML += `product['spec'][0]: ${product['spec'][0]}<br><br>`;
        div1.innerHTML += 'product.속성명으로 접근하는 방법<br>';
        // div1.innerHTML += `product.0: ${product.0}<br>`;
        div1.innerHTML += `product.name: ${product.name}<br>`;
        div1.innerHTML += `product.price: ${product.price}<br>`;
        div1.innerHTML += `product.brand: ${product.brand}<br>`;
        div1.innerHTML += `product.spec: ${product.spec}<br>`;
        div1.innerHTML += `product.spec[3]: ${product.spec[3]}<br><br>`;

        div1.innerHTML += `공백이나 특수문자가 속성명에 있는 경우 대괄호를 이용해서 값을 가져와야 한다.<br>`;
        div1.innerHTML += `user['user name']: ${user['user name']}<br>`;
        div1.innerHTML += `user['user-age']: ${user['user-age']}<br>`;
        div1.innerHTML += `user['job!!']: ${user['job!!']}<br>`;
    });

    // 2. 메소드
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', function() {
        let name = '문인수';

        let dog = {
            name: '백구',
            kind: '진돗개',
            eat: function(food) {
                // 객체 내부의 속성에 접근하기 위해서는 "this.속성명"으로 작성해야 한다.
                console.log(`${this.kind} 종류인 ${this.name}가 ${food}를 먹고 있네요~!`);
                // console.log(this.name);
                // console.log(this.kind);
                // console.log(food);
            }
        }

        dog.eat('고구마');
    });

    // 3. 객체의 속성 추가 및 삭제
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        // 빈 객체 생성
        let student = {};

        // 객체에 속성 추가
        student.name = '홍길동';
        student['age'] = 24;

        // 객체에 메소드 추가
        // student.whoAreYou = () => {
        student.whoAreYou = function() {
            let str = '';

            console.log(this);

            for (const key in this) {
                console.log(key);
                
                if(typeof(this[key]) !== 'function') {
                    str += `${key}: ${this[key]} `;
                }
            }

            return str;
        }

        console.log(student);
        console.log(student.whoAreYou());
        
        delete student.age;
        delete student['name'];

        console.log(student);
    });

    // 4. 객체 배열
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let div4 = document.getElementById('div4');

        // 배열을 사용하지 않았을 경우
        let student1 = {name: '문인수', java: 100, oracle: 80};
        let student2 = {name: '홍길동', java: 70, oracle: 60};
        let student3 = {name: '이몽룡', java: 10, oracle: 20};
        let student4 = {name: '백구', java: 80, oracle: 80};
        let student5 = {name: '누렁이', java: 20, oracle: 20};

        // console.log(student1);
        // console.log(student2);
        // console.log(student3);
        // console.log(student4);
        // console.log(student5);

        // 배열 선언 및 초기화
        let students = [
            {name: '문인수', java: 100, oracle: 80},
            {name: '홍길동', java: 70, oracle: 60}
        ];

        students.push(student3);
        students.push({name: '백구', java: 80, oracle: 80});

        // 배열에 담겨있는 모든 객체에 메소드 추가
        for (let i = 0; i < students.length; i++) {
            students[i].getSum = function() {
                return this.java + this.oracle;
            };

            students[i].getAvg = function() {
                return this.getSum() / 2;
            }
        }

        console.log(students);

        // 모든 학생의 정보를 출력(이름, 총점, 평균)
        for (const element of students) {
            div4.innerHTML += `이름: ${element.name}, 총점: ${element.getSum()}, 평균: ${element.getAvg()}<br>`;
        }
    });

    // 5. 생성자 함수
    function Student(name, java, oracle) {
        // 속성 정의
        this.name = name;
        this.java = java;
        this.oracle = oracle;

        // 메소드 정의
        this.getSum = function() {
            return this.java + this.oracle;
        };

        this.getAvg = function() {
            return this.getSum() / 2;
        }
    }

    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', function() {
        let div5 = document.getElementById('div5');
        let student = new Student('문인수', 80, 80);
        let students = [];

        students.push(student);
        students.push(new Student('홍길동', 60, 60));
        students.push(new Student('이몽룡', 50, 50));
        students.push(new Student('백구', 90, 90));

        console.log(student);
        console.log(student instanceof Student);
        console.log(students);

        // 모든 학생의 정보를 출력(이름, 총점, 평균)
        for (const element of students) {
            div5.innerHTML += `이름: ${element.name}, 총점: ${element.getSum()}, 평균: ${element.getAvg()}<br>`;
        }
    })


}