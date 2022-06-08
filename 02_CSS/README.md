## CSS3 개요
### 1. CSS3(Cascading Style Sheets 3)
* HTML5와 함께 웹 표준의 하나로 미리 약속된 스타일 속성을 통해 레이아웃과 스타일을 정의한다.
* 문서 내용과 스타일을 분리하여 내용을 수정해도 디자인을 바꿀 필요가 없고 디자인을 수정해도 글 내용을 바꿀 필요가 없다.
  ```css
  선택자 {
    스타일 속성: 속성 값;
    스타일 속성: 속성 값;
    ...
  }
  ```
### 2. 스타일 시트
* 웹 문서에서 안에서 사용되는 스타일들을 모아 놓은 것을 스타일 시트라고 한다.
#### 2.1. 내부 스타일 시트
* 웹 문서 안에서 사용할 스타일을 `<style>` 태그 내부에 작성하는 방법이다.
* 이때 `<style>` 태그는 `<head>` 태그 안에서 작성해야 한다.
  ```html
  <head>
      <style>
          /* p 태그를 선택하여 텍스트를 중앙에 정렬하는 스타일 */
          p {
            text-align: center;
          }
      </style>
  </head>
  ```
#### 2.2. 외부 스타일 시트
* 스타일을 별도의 파일에 작성해 놓는 방법이다. (파일 확장자는 css이다.)
* 웹 문서에서 필요할 때마다 `<link>` 태그를 이용하여 외부 스타일 시트를 가져와서 사용할 수 있다.
* 이때 `<link>` 태그는 `<head>` 태그 안에서 작성해야 한다.
  ```html
  <head>
    <link href="css 파일 경로" rel="stylesheet" type="text/css">
  </head>
  ```
#### 2.3. 인라인 스타일
* 간단한 스타일의 경우 스타일 시트를 사용하지 않고 태그 내부에 직접 스타일을 지정하는 방법이다.
  ```html
  <p style="text-align: center;">
  ```
## 선택자(Selector)
### 1. 선택자
* 선택자는 스타일을 어느 요소에 적용할 것 인지를 나타낸다.
* 선택자는 요소 하나가 될 수도 있지만 여러 개의 요소를 묶어서 선택자로 지정할 수 있다.
#### 1.1 전체 선택자
* HTML 문서 안의 모든 요소를 선택할 때 전체 선택자를 사용한다.
  ```css
  * {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.2 태그 선택자
* HTML 문서 내에 같은 태그의 요소를 선택할 때 사용한다.
  ```css
  태그명 {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.3 아이디 선택자
* HTML 문서 내에 해당하는 아이디의 속성값을 가진 요소만 선택할 때 사용한다.
  ```css
  #아이디 {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.4 클래스 선택자
* HTML 문서 내에 해당하는 클래스의 속성값을 가진 요소만 선택할 때 사용한다.  
  ```css
  .클래스 {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.5 속성 선택자
* 선택자 뒤에 []를 사용하여 속성을 적고 해당 속성을 가진 요소만 선택할 때 사용한다.
  ```css
  선택자[속성] {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 등호(=)를 사용하여 속성과 속성값이 일치하는 요소를 찾아 선택할 수 있다.
  ```css
  선택자[속성=값] {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 틸트(~)와 등호(=)를 함께 사용하여 여러 속성값 중에 지정한 값이 포함되어 있는 요소를 선택할 수 있다. (띄어쓰기로 구분)
  ```css
  선택자[속성~=값] {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 버티컬 바(|)와 등호(=)를 함께 사용하여 여러 속성값 중에 지정한 값이 포함되어 있는 요소를 선택할 수 있다.
* 이때 속성값으로 지정한 값이거나 "속성값-"으로 시작하는 요소에 스타일이 적용된다.
  ```css
  선택자[속성|=값] {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 캐럿(^)과 등호(=)를 함께 사용하여 속성값이 지정한 값으로 시작하는 요소를 선택할 수 있다.
  ```css
  선택자[속성^=값] {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 달러($)와 등호(=)를 함께 사용하여 속성값이 지정한 값으로 끝나는 요소를 선택할 수 있다.
  ```css
  선택자[속성$=값] {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 아스테리스크(*)와 등호(=)를 함께 사용하여 속성값에 지정한 값을 포함하는 요소를 선택할 수 있다.
  ```css
  선택자[속성*=값] {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.6 자식 선택자
* 부모 요소에 포함된 자식 요소들을 선택할 때 사용한다.
  ```css
  부모요소>자식요소 {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.7 하위 선택자
* 상위 요소에 포함된 하위 요소들 전부를 선택할 때 사용한다.
  ```css
  상위요소 하위요소 {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.8 형제(동위) 선택자
* 동일한 부모 요소를 가지는 요소들을 선택할 때 사용한다.
* 인접 형제 선택자는 같은 부모를 가진 형제 요소 중 바로 뒤에 있는 요소를 선택할 때 사용한다.
  ```css
  /* a 선택자 뒤에 있는 b 요소 한 개 선택한다. */
  a+b {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 형제 선택자는 같은 부모를 가진 형제 요소 중 뒤에 있는 모든 요소를 선택할 때 사용한다.
  ```css
  /* a 선택자 뒤에 있는 모든 b 요소 선택한다. */
  a~b {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.9 반응 선택자
* :active는 사용자가 클릭하는 요소를 선택할 때 사용한다.
  ```css
  선택자:active {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :hover는 사용자가 마우스를 올려놓는 요소를 선택할 때 사용한다.
  ```css
  선택자:hover {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :focus는 초점이 맞추어진 요소를 선택할 때 사용한다.
  ```css
  선택자:focus {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.10 상태 선택자
* :checked는 체크된 상태의 요소를 선택할 때 사용한다.
  ```css
  선택자:checked {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }  
  ```
* :enabled는 사용 가능한 요소를 선택할 때 사용한다.
  ```css
  선택자:enabled {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :disabled는 사용 불가능한 요소를 선택할 때 사용한다.
  ```css
  선택자:disabled {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.11 구조 선택자
* :first-child는 동일한 부모를 가지는 형제 관계에 있는 요소 중 첫 번째 요소를 선택한다.
  ```css
  상위요소 하위요소:first-child {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :first-of-type은 동일한 부모를 가지는 형제 관계에 있는 요소 중 첫 번째 요소를 선택한다.
  ```css
  상위요소 하위요소:first-of-type {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :last-child는 동일한 부모를 가지는 형제 관계에 있는 요소 중 마지막 요소를 선택한다.
  ```css
  상위요소 하위요소:last-child {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :last-of-type은 동일한 부모를 가지는 형제 관계에 있는 요소 중 마지막 요소를 선택한다.
  ```css
  상위요소 하위요소:last-of-type {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :nth-child(n)는 동일한 부모를 가지는 형제 관계에 있는 요소 중 앞에서부터 n 번째 요소를 선택한다.
  ```css
  상위요소 하위요소:nth-child(n) {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :nth-of-type(n)는 동일한 부모를 가지는 형제 관계에 있는 요소 중 앞에서부터 n 번째 요소를 선택한다.
  ```css
  상위요소 하위요소:nth-of-type(n) {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* :nth-last-child(n)는 동일한 부모를 가지는 형제 관계에 있는 요소 중 뒤에서부터 n 번째 요소를 선택한다.
  ```css
  상위요소 하위요소:nth-last-child(n) {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* nth-last-of-type(n)는 동일한 부모를 가지는 형제 관계에 있는 요소 중 뒤에서부터 n 번째 요소를 선택한다.
  ```css
  상위요소 하위요소:nth-last-of-type(n) {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.12 문자 선택자
* 선택된 요소 내부의 첫 번째 글자를 선택할 때 사용한다.
  ```css
  선택자::first-letter {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 선택된 요소 내부의 첫 번째 줄을 선택할 때 사용한다.
  ```css
  선택자::first-line {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 선택한 요소 내용 앞에 지정한 내용을 넣을 때 사용한다.
  ```css
  선택자::before {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 선택한 요소 내용 뒤에 지정한 내용을 넣을 때 사용한다.
  ```css
  선택자::after {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
* 선택된 요소의 내용 중 드래그 된 내용을 선택할 때 사용한다.
  ```css
  선택자::selection {
    스타일 속성: 값;
    스타일 속성: 값;
    ...
  }
  ```
#### 1.13 부정 선택자
* :not(선택자)은 괄호() 안에 있는 선택자를 제외한 요소를 선택할 때 사용한다.
### 2. CSS 선택자 우선순위
* 하나의 요소에 스타일이 충돌할 경우 CSS 우선순위에 따라 스타일이 적용된다.
* !important > 인라인 스타일 > id 스타일 > 클래스 스타일 > 태그 스타일
* 동일한 우선순위를 가지는 경우 나중에 작성된 스타일이 적용된다.
## 텍스트 스타일
### 1. 글꼴 스타일
#### 1.1 font-family
* 웹 문서에서 사용할 글꼴을 지정하는 속성이다.
  ```css
  선택자 {
    font-family: 글꼴[, 글꼴, 글꼴];
  }
  ```
#### 1.2 font-size
* 글자의 크기를 지정하는 속성이다.
  ```css
  선택자 {
    font-size: 크기;
  }
  ```
* CSS에서 크기를 지정하는 단위
  * 상대 크기
    * em은 부모 요소에서 지정한 폰트의 대문자 M의 너비를 1em으로 계산한다.
    * rem은 최상위 요소(`<html>`)에서 지정한 폰트의 대문자 M의 너비를 1em으로 계산한다.
    * %(퍼센트)는 부모 요소의 크기에 대한 상대적인 비율로 계산한다.
  * 절대 크기
    * px은 모니터의 픽셀 단위로 크기를 계산한다.
    * pt는 폰트의 크기의 단위로 많이 사용되는 단위로 1pt는 1/72 인치이다. (1pt ~ 72pt)
#### 1.3 font-weight
* 글자의 굵기를 조절하는 속성이다.
  ```css
  선택자 {
    font-size: 100 ~ 900 or nomal or lighter or bold or bolder;
  }
  ```
  |속성값|설명|
  |--|--|
  |100 ~ 900|글자의 굵기를 세밀하게 조절할 수 있다.|
  |nomal|기본값(400)|
  |lighter|기본보다 더 가늘게 표시|
  |bold|굵게(700)|
  |bolder|기본보다 더 굵게 표시|
#### 1.4 font-variant
* 영어의 작은 대문자를 지정할 수 있는 속성이다.
  * normal은 기본값으로 일반적인 형태로 표시한다.
  * small-caps는 작은 대문자로 표시하도록 지정한다.
  ```css
  선택자 {
    font-variant: normal or small-caps;
  }
  ```
#### 1.5 font-style
* 글자를 이텔릭체로 표시하도록 지정하는 속성이다.
  * italic은 글꼴에 디자인되어 있는 기울어진 글자를 사용한다.
  * oblique는 원래 글꼴을 기울어지게 표시한다.
  ```css
  선택자 {
    font-style: normal or italic or oblique;
  }
  ```
#### 1.6 font
* 글꼴 스타일 속성을 한 번에 지정할 수 있는 속성이다.
  ```css
  선택자 {
    font: font-style font-variant font-weight font-size/line-height font-family;
  }
  ```
### 2. 텍스트 스타일
#### 2.1. color
* 글자의 색을 지정하는 속성이다.
* 색을 지정하는 방법은 영문 색이름 표기법, 16진수 표기법, rgb/rgba 표기법, hsl/hsla 표기법이 있다.
  ```css
  선택자 {
    color: 색상;
  }
  ```
#### 2.2. text-decoration
* 글자에 밑줄/윗선을 긋거나 취소선을 긋는 속성이다.
  * none은 글자에 선을 긋지 않는다.
  * underline은 글자에 밑줄을 긋는다.
  * overline은 글자 위에 선을 긋는다.
  * line-through은 취소선을 긋는다.
  ```css
  선택자 {
    text-decoration: none or underline or overline or line-through;
  }
  ```
#### 2.3. text-transform
* 영문자를 표시할 때 대소문자를 원하는 대로 바꿀 수 있는 속성이다.
  * none은 변환 없이 표시한다.
  * capitalize는 시작하는 첫 번째 글자를 대문자로 변환한다.
  * uppercase는 모든 글자를 대문자로 변환한다.
  * lowercase는 모든 글자를 소문자로 변환한다.
  ```css
  선택자 {
    text-transform: none or capitalize or uppercase or lowercase;
  }
  ```
#### 2.4. text-shadow
* 글자에 그림자 효과를 주는 속성이다.
* 쉼표(,)로 구분하여 여러 개의 효과를 지정할 수 있다.
  ```css
  선택자 {
    text-shadow: none or 가로 세로 번짐 색상;
  }
  ```
#### 2.5. white-space
* 여러개의 공백을 처리하는 방법을 지정하는 속성이다.
  ```css
  선택자 {
    white-space: normal or nowrap or pre or pre-line or pre-wrap;
  }
  ```
  |속성값|설명|
  |--|--|
  |normal|여러 개의 공백을 하나로 표시 (기본값)|
  |nowrap|여러 개의 공백을 하나로 표시, 영역을 넘거가는 내용은 줄 바꾸지 않고 한 줄로 표시|
  |pre|여러 개의 공백을 그대로 표시, 영역을 넘거가는 내용은 줄 바꾸지 않고 한 줄로 표시|
  |pre-line|여러 개의 공백을 하나로 표시, 영역을 넘어가는 내용은 자동으로 줄 바꿔 표시|
  |pre-wrap|여러 개의 공백을 그대로 표시, 영역을 넘어가는 내용은 자동으로 줄 바꿔 표시|
#### 2.6. letter-spacing
* 글자와 글자 사이의 간격을 조정하는 속성이다.
  ```css
  선택자 {
    letter-spacing: normal or 크기;
  }
  ```
#### 2.7. word-spacing
* 단어와 단어 사이 간격을 조정하는 속성이다.
  ```css
  선택자 {
    word-spacing: normal or 크기;
  }
  ```
### 3. 문단 스타일
#### 3.1. direction
* 글자 쓰기 방향을 지정하는 속성이다.
  * ltr은 왼쪽에서 오른쪽으로 텍스트 표시한다.
  * rtl은 오른쪽에서 왼쪽으로 텍스트 표시한다.
  ```css
  선택자 {
    direction: ltr or rtl;
  }
  ```
#### 3.2. text-align
* 문장을 정렬하는 속성이다.
  ```css
  선택자 {
    text-align: left or right or center or justify;
  }
  ```
#### 3.3. text-indent
* 문장을 들여쓰기 하는 속성이다.
  ```css
  선택자 {
    text-indent: 숫자(단위);
  }
  ```
#### 3.4 line-height
* 문장의 줄 간격을 조정하는 속성이다.
  ```css
  선택자 {
    line-height: normal or 숫자(단위);
  }
  ```
#### 3.5. text-overflow
* 영역을 벗어나는 텍스트에 대한 상태를 지정하는 속성이다.
  * clip은 영역을 넘어가는 텍스트를 자른다.
  * ellipsis은 말 줄임으로 잘린 텍스트 표현한다.
  ```css
  선택자 {
    text-overflow: clip or ellipsis;
  }
  ```
### 4. 목록 스타일
#### 4.1. list-style-type
* 목록 기호나 숫자 타입을 지정하는 속성이다.
  ```css
  선택자 {
    list-style-type: none or disc  or ... or upper-latin;
  }
  ```
  <table>
    <tr>
      <th></th>
      <th>속성값</th>
      <th>설명</th>
    </tr>
    <tr>
      <th rowspan="4">ul</th>
      <td>disc</th>
      <td>흑색 원형</th>
    </tr>
    <tr>
      <td>circle</td>
      <td>흰색 원형</td>
    </tr>
    <tr>
      <td>square</td>
      <td>흑색 사각형</td>
    </tr>
    <tr>
      <td>none</td>
      <td>기호 표시 안 함</td>
    </tr>
    <tr>
      <th rowspan="5">ol</th>
      <td>decimal</th>
      <td>1부터 시작하는 십진수</th>
    </tr>
    <tr>
      <td>decimal-leading-zero</td>
      <td>0부터 시작하는 십진수</td>
    </tr>
    <tr>
      <td>lower-roman/upper-roman</td>
      <td>소문자/대문자 로마자</td>
    </tr>
    <tr>
      <td>lower-alpha/lower-latin</td>
      <td>알파벳 소문자</td>
    </tr>
    <tr>
      <td>upper-alpha/upper-latin</td>
      <td>알파벳 대문자</td>
    </tr>
  </table>
#### 4.2. list-style-image
* 불릿 기호 대신 이미지 삽입하는 속성이다.
  ```css
  선택자 {
    list-style-image: url(이미지 경로);
  }
  ```
#### 4.3. list-style-position
* 목록의 불릿이나 숫자의 들여쓰기 여부를 지정하는 속성이다.
  * inside는 불릿이나 숫자를 안쪽으로 들여쓴다.
  * outside는 불릿이나 숫자를 밖으로 내여쓴다. (기본값)
  ```css
  선택자 {
    list-style-position: inside or outside;
  }
  ```
#### 4.4. list-style
* 목록 스타일 속성을 한 번에 지정할 수 있는 속성이다.
  ```css
  선택자 {
    list-style: list-style-type list-style-position list-style-image;
  }
  ```
## 레이아웃 스타일
### 1. 박스 모델(Box Model)
* 모든 요소들은 사각형 박스로 표현되는데 스타일 시트에서는 박스 형태인 요소를 박스 모델(Box Model)이라고 한다. (블록/인라인 레벨 요소)
* CSS를 사용하면 박스 모델 요소의 크기, 위치, 속성을 변경할 수 있다.
* 박스 모델은 콘텐츠(Content) 영역과 테두리와 콘텐츠 영역 사이의 여백인 패딩(Padding), 박스 모델 사이의 여백인 마진(Margin)으로 구성된다.
<br><img src="https://user-images.githubusercontent.com/26870393/171997651-ad16e3e9-f88c-490b-b052-b7cb6235f8f7.png"><br>

#### 1.1. width, height 속성
* 박스 모델에서 콘텐츠 영역의 크기를 지정할 때는 너비를 지정하는 width 속성과 높이를 지정하는 height 속성을 사용한다.
  * 크기는 너비나 높이 값을 픽셀(px)이나 센티미터(cm) 같은 단위로 지정한다.
  * 백분율은 부모 요소를 기준으로 너비나 높이 값을 백분율(%)로 지정한다.
  * auto는 박스 모델의 너비와 높이 값이 콘텐츠에 따라 자동으로 결정된다. (기본값)
  ```css
  선택자 {
    width: 크기 or 백분율 or auto;
    height: 크기 or 백분율 or auto;
  }
  ```
#### 1.2. display 속성
* 블록 레벨 요소를 인라인 레벨 요소로 변경하거나 인라인 레벨 요소를 블록 레벨 요소로 변경할 수 있는 속성이다. 
  ```css
  선택자 {
    display: none or block or inline or inline-block or ... ;
  }
  ```
  |속성값|설명|
  |--|--|
  |none|요소가 화면에서 표현되지 않고 공간도 차지하지 않는다.|
  |block|요소를 블록 레벨 요소로 변경한다.|
  |inline|요소를 인라인 레벨 요소로 변경한다.|
  |inline-block|요소를 인라인 레벨로 배치하면서 내용에는 블록 레벨 속성을 지정할 수 있다.<br>(inline 요소는 margin, padding, height, width가 제대로 설정되지 않는다.)|
#### 1.3. 여백 스타일
* padding은 테두리와 콘텐츠 영역 사이의 여백이다.
* padding 속성으로 테두리와 콘테츠 영역 사이의 간격을 조절할 수 있다.
  * 위치는 top, right, left, bottom로 지정한다.
  * 크기는 너비나 높이 값을 픽셀(px)이나 센티미터(cm) 같은 단위로 지정한다.
  * 백분율은 부모 요소를 기준으로 너비나 높이 값을 백분율(%)로 지정한다.
  * auto는 박스 모델의 너비와 높이 값이 콘텐츠에 따라 자동으로 결정된다. (기본값)
  ```css
  선택자 {
    padding[-위치]: 크기 or 백분율 or auto;
  }
* margin은 요소와 요소 사이의 여백이다.
* margin 속성으로 요소와 요소 사이의 간격을 조절할 수 있다.
  * 크기는 너비나 높이 값을 픽셀(px)이나 센티미터(cm) 같은 단위로 지정한다.
  * 백분율은 부모 요소를 기준으로 너비나 높이 값을 백분율(%)로 지정한다.
  * auto는 박스 모델의 너비와 높이 값이 콘텐츠에 따라 자동으로 결정된다. (기본값)
  ```css
  선택자 {
    margin[-위치]: 크기 or 백분율 or auto;
  }
  ```
### 2. 테두리 스타일
#### 2.1. border-style
* 테두리 스타일을 지정하는 속성이다.
  ```css
  선택자 {
    border-style: none or ;
  }
  ```
  |속성값|설명|
  |--|--|
  |none|테두리가 나타나지 않는다. (기본값)|
  |hidden|테두리가 나타나지 않는다.|
  |dashed|테두리를 짧은 선으로 표시한다.|
  |dotted|테두리를 점선으로 표시한다.|
  |double|테두리를 이중선으로 표시한다.<br>(두 선 사이의 간격은 border-width 값으로 지정)|
  |groove|테두리를 창에 조각한 것처럼 표시한다.<br>(홈이 파인 듯 입체적으로 보인다.)|
  |ridge|테두리가 창에서 튀어나온 것처럼 표시한다.|
  |inset|border-collapse 설정에 따라 groove와 같거나(collapse)<br>테두리가 창에 박혀 있는 것처럼 표시한다.(separate)|
  |outset|border-collapse 설정에 따라 ridge와 같거나(collapse)<br>전체 박스 테두리가 창에서 튀어나온 것처럼 표시한다.(separate)|
  |solid|테두리를 실선으로 표시한다.|
#### 2.2. border-width
* 테두리의 두께를 지정하는 속성이다.
  ```css
  선택자 {
    border[-위치]-width: 크기 or thick or medium or thin;
  }
  ```
#### 2.3. border-color
* 테두리의 색상을 지정하는 속성이다.
  ```css
  선택자 {
    border[-위치]-color: 색상;
  }
  ```
#### 2.4. border
* 테두리의 두께, 스타일, 색상을 한 번에 지정하는 속성이다.
  ```css
  선택자 {
    border: 두께 스타일 색상;
  }
  ```
#### 2.5. border-radius
* 테두리의 모서리를 둥글게 지정하는 속성이다.
  * 테두리 모서리의 두 방향과 반지를 값을 사용해서 표기한다.
  ```css
  선택자 {
    border[-위치-위치]-radius: 크기 or 백분율;
  }
  ```
#### 2.6. box-shadow
* 테두리에 그림자 효과를 주는 속성이다.
  ```css
  선택자 {
    box-shadow: 수평거리 수직거리 흐림정도 번짐정도 [색상 inset]
  }
  ```
  |속성값|설명|
  |--|--|
  |수평거리|그림자의 수평 거리를 지정한다.<br>양수 값은 오른쪽, 음수 값은 왼쪽에 그림자를 만든다.|
  |수직거리|그림자의 수직 거리를 지정한다.<br>양수 값은 아래쪽, 음수 값은 위쪽에 그림자를 만든다.|
  |흐림정도|그림자의 흐림 정도를 나타낸다.<br>값이 커지면 부드러운 느낌을 주며 음수는 사용할 수 없다.|
  |번짐정도|그림자의 번지는 정도를 나타낸다.<br>양수로 지정하면 그림자가 모든 방향으로 번지고 음수로 지정하면 그림자가 모든 방향으로 축소된다.|
  |색상|그림자의 색상을 지정한다. 기본값은 현재 글자색이다.|
  |inset|그림자를 안쪽으로 그린다.|
### 3. 포지셔닝
* CSS를 이용해서 여러 요소를 원하는 위치에 적절하게 배치하는 것을 포지셔님이라고 한다.
#### 3.1. box-sizing
* 요소의 너비와 높이의 기준을 지정하는 속성이다.
  ```css
  선택자 {
    box-sizing: content-box or border-box;
  }
  ```
  |속성값|설명|
  |--|--|
  |content-box|요소의 너비와 높이를 콘텐츠를 기준으로 지정한다. (기본값)|
  |border-box|요소의 너비와 높이를 테두리를 기준으로 지정한다.|
#### 3.2. position
* 웹 문서 안에서 요소들을 자유롭게 배치하는 속성이다.
  ```css
  선택자 {
    position: static or relative or absolute or fixed;
  }
  ```
  |속성값|설명|
  |--|--|
  |static|문서의 흐름에 맞추어 요소를 배치한다. (기본값)|
  |relative|이전 요소에 연결해 배치하면서 위치를 지정하여 요소를 배치한다.|
  |absolute|원하는 위치를 지정하여 요소를 배치한다.|
  |fixed|지정한 위치에 고정하여 요소를 배치한다.|
* 속성값이 static을 제외한 나머지들은 좌표를 이용해서 요소의 위치를 조절할 수 있다.
* 위치는 top, bottom, left, right로 지정할 수 있다.
#### 3.3. float, clear
* float 속성은 요소의 위치를 왼쪽이나 오른쪽으로 배치하는 속성이다.
  ```css
  선택자 {
    float: left | right | none;
  }
  ```  
  |속성값|설명|
  |--|--|
  |left|요소를 왼쪽에 배치한다.|
  |right|요소를 오른쪽에 배치한다.|
  |none|요소를 어느 쪽으로도 배치하지 않는다.|
* float 속성을 사용해 요소를 배치하면 다음 요소에 영향을 미치는데 이를 초기화시키는 속성이 clear 속성이다.
  ```css
  선택자 {
    clear: left | right | none | both;
  }
  ```  
#### 3.4. visibility
* 요소를 화면에 보이거나 보이지 않게 하는 속성이다.
  ```css
  선택자 {
    visibility: visible or hidden or collapse;
  }
  ```
  |속성값|설명|
  |--|--|
  |visible|요소를 표시한다. (기본값)|
  |hidden|요소를 감춘다.<br> 단, 크기는 유지하기 때문에 공간은 차지한다.|
  |collapse|표의 행, 열, 행 그룹 등에서 지정하면 서로 겹치도록 지정한다.<br>그 외의 영역에서 사용하면 hidden처럼 처리된다.|
#### 3.5. z-index
* 요소 위에 요소를 쌓을 때 쌓는 순서를 지정하는 속성이다.
* 요소에 z-index 값이 클수록 위에 쌓인다.
* 무조건 맨 위에 표시해야 하는 경우 큰 값으로 지정하기도 한다.
  ```css
  선택자 {
    z-index: 값;
  }
  ```
### 4. 다단 스타일
#### 4.1. column-width
* 단의 너비를 고정하고 다단을 구성하는 속성이다.
* 단의 너비가 고정되었기 때문에 창의 너비가 커지면 단의 개수가 늘어난다.
  * 크기는 단의 너비를 지정한다.
  * 단의 너비를 자동으로 계산한다.
  ```css
  선택자 {
    column-width: 크기 or auto;
  }
  ```
#### 4.2. column-count
* 단의 개수를 고정하여 다단을 구성하는 속성이다.
* 단의 개수가 고정되었기 때문에 창의 너비가 커지면 단의 너비도 커진다.
  * 크기는 단의 개수를 지정한다.
  * 단의 개수를 자동으로 계산한다.
  ```css
  선택자 {
    column-count: 크기 or auto;
  }
  ```
#### 4.3. column-gap
* 단과 단 사이의 여백을 지정하는 속성이다.
  * normal은 여백을 자동으로 지정한다.
  ```css
  선택자 {
    column-gap: 크기 or normal;
  }
  ```
#### 4.4. column-rule
* 단과 단 사이의 구분선의 색상, 스타일, 너비를 지정하는 속성이다.
  ```css
  선택자 {
    column-rule-color: 색상;
    column-rule-style: 스타일;
    column-rule-width: 너비;
    column-rule: 너비 스타일 색상;
  }
  ```
#### 4.5. column-span
* 여러 단을 하나로 합치는 속성이다.
  * 1은 단을 합치지 않는다. (기본값)
  * all은 전체 단을 하나로 합친다.
  ```css
  선택자 {
    column-span: 1 or all;
  }
  ```
### 5. 표 스타일
#### 5.1. caption-side
* 표 제목의 위치를 지정하는 속성이다.
  * top은 제목을 표의 윗부분에 표시한다. (기본값)
  * bottom은 제목을 표의 아랫부분에 표시한다.
  ```css
  선택자 {
    caption-side: top or bottom;
  }
  ```
#### 5.2. width/height
* 표와 셀의 너비와 높이를 지정하는 속성이다.
  ```css
  선택자 {
    width: 크기;
    height: 크기;
  }
  ```
#### 5.3. border
* 표와 셀의 테두리의 색상이나 스타일, 너비를 지정하는 속성이다.
  ```css
  선택자 {
    border: 너비 스타일 색상;
  }
  ```
#### 5.4. border-collapse
* 표의 바깥 테두리와 셀의 각 테두리를 분리/통합을 지정하는 속성이다.
  * separate는 테두리를 분리하여 표시한다. (기본값)
  * collapse는 테두리를 통합하여 표시한다.
  ```css
  선택자 {
    border-collapse: separate or collapse;
  }
  ```
#### 5.5. border-spacing
* 테두리가 분리되었을 때 인접한 셀 테두리 사이의 거리를 지정하는 속성이다.
  ```css
  선택자 {
    border-spacing: 가로크기 세로크기;
  }
  ```
  ![image](https://user-images.githubusercontent.com/26870393/171623897-be7726db-b415-4760-ba72-6e8eebdcdba8.png)
#### 5.6. empty-cells
* 테두리가 분리되었을 때 내용이 없는 빈 셀들의 표시 여부를 지정하는 속성이다.
  * show는 빈 셀 주위에 테두리를 그려 표시한다. (기본값)
  * hide는 빈 셀에 테두리를 그리지 않는다.
  ```css
  선택자 {
    empty-cells: show or hide;
  }
  ```
#### 5.7. table-layout
* 셀 안의 내용의 양에 따라 셀의 너비를 변하게 할지, 고정시킬지 지정하는 속성이다.
  * auto는 셀의 내용의 따라 셀의 너비가 달라진다. (기본값)
  * fixed는 셀의 너비를 고정한다.
  ```css
  선택자 {
    table-layout: fixed or auto;
  }
  ```
#### 5.8. text-align
* 셀 안에서 텍스트를 수평으로 정렬하는 속성이다.  
  ```css
  선택자 {
    text-align: left or center or right;
  }
  ```
#### 5.9. vertical-align
* 셀 안에서 텍스트를 수직으로 정렬하는 속성이다.
  ```css
  선택자 {
    vertical-align: top or middle or bottom;
  }
  ```
## 색상 및 배경 스타일
### 1. 색상 표현 방법
#### 1.1. 색상 이름 표기법
* 영문으로 색상 이름을 표시하는 방법이다.
* 모든 브라우저에서 표현할 수 있는 색상을 웹 안전 색상(Web Safe Colors)이라 한다. (216가지)
#### 1.2. 16진수 표기법
* #기호 다음에 6자리 16진수로 표시하는 방법이다.
* 6자리는 앞에서부터 두 자리씩 묶어서 Red, Green, Blue로 표시한다.
  * #000000(검은색) ~ #ffffff(흰색)
#### 1.3. rgb/rgba 표기법
* rgb 표기법은 16진수 표기법과 다르게 10진수로 Red, Green, Blue를 표시한다.
  ```css
  rgb(red(0~255), green(0~255), blue(0~255));
  ```
* rgba 표기법은 rgb에 불투명도 값을 추가로 지정할 수 있다. (0은 완전 투명, 1.0 완전 불투명)
  ```css
  rgb(red(0~255), green(0~255), blue(0~255), alpha(0~1.0));
  ```
#### 1.4. hsl/hsla 표기법
* hsl 표기법은 앞에서부터 색상(Hue), 채도(Saturation), 밝기(Brightness)를 표시한다.
  * 색상(Hue)은 색상환으로 표시한다. (0, 360 빨간색, 120 초록색, 240 파란색)
  * 채도는 %로 표시한다.(0%는 회색톤, 100%는 순색이다.)
  * 밝기는 %로 표시한다.(0%는 가장 어둡고, 100%는 가장 밝다.)
  ```css
  hsl(Hue(0~360), Saturation(0~100%), Brightness(0~100%));
  ```
* hsla 표기법은 hsl에 불투명도 값을 추가로 지정할 수 있다. (0은 완전 투명, 1.0 완전 불투명)
  ```css
  hsla(Hue(0~360), Saturation(0~100%), Brightness(0~100%), alpha(0~1.0));
  ```
### 2. 색상 및 배경 스타일
#### 2.1. background-color
* 배경색을 지정하는 속성이다.
  ```css
  선택자 {
    background-color: 색상;
  }
  ```
#### 2.2. background-clip
* 배경색의 범위를 지정하는 속성이다.
  * border-box는 테두리(border)까지 적용한다. (기본값)
  * padding-box는 테두리를 뺀 패딩(padding) 범위까지 적용한다.
  * content-box는 내용(content) 부분에만 적용한다.
  ```css
  선택자 {
    background-clip: border-box or padding-box or content-box;
  }
  ```
#### 2.3. background-image
* 배경에 이미지를 설정하는 속성이다. 
* 배경 이미지는 JPG, GIF, PNG 파일을 사용해야 하며 CSS에서 파일을 지정할 때는 "url(파일 경로)" 형식으로 지정해야 한다.
  ```css
  선택자 {
    background-image: url('경로');
  }
  ```
#### 2.4. background-repeat
* 배경 이미지 반복 여부를 지정하는 속성이다.
  * repeat은 배경 이미지가 가득 창 때까지 가로와 세로로 반복한다. (기본값)
  * repeat-x는 배경 이미지를 가로로 반복한다.
  * repeat-y는 배경 이미지를 세로로 반복한다.
  * no-repeat은 배경 이미지를 한 번만 출력하고 반복하지 않는다.
  ```css
  선택자 {
    background-repeat: repeat or repeat-x or repeat-y or no-repeat;
  }
  ```
#### 2.5. background-size
* 배경 이미지 크기를 조절하는 속성이다.
  ```css
  선택자 {
    background-size: auto or contain or cover or 크기 or 백분율;
  }
  ```
  |속성값|설명|
  |--|--|
  |auto|원래 배경 이미지 크기만큼 표시한다.(기본값)|
  |contain|요소 안에 배경 이미지가 들어가도록 확대/축소한다.|
  |cover|요소를 배경 이미지가 모두 덮을 때까지 확대한다.|
  |크기|너비와 높이 값을 지정한다.|
  |백분율|요소의 크기를 기준으로 너비와 높이의 백분율 값을 지정한다.|
#### 2.6. background-position
* 배경 이미지가 표시되는 위치를 조정하는 속성이다.
  * 수평 위치는 left, center, right, 크기 값(px), 백분율로 표시할 수 있다.
  * 수직 위치는 top, center, bottom, 크기 값(px), 백분율로 표시할 수 있다.
  ```css
  선택자 {
    background-position: 수평위치 수직위치;
  }
  ```
#### 2.7. background-origin
* 배경 이미지를 배치할 때 기준을 지정하는 속성이다.
  * border-box는 테두리(border)가 기준이 된다.
  * padding-box는 테두리를 뺀 패딩(padding)이 기준이 된다. (기본값)
  * content-box는 내용(content)이 기준이 된다.
  ```css
  선택자 {
    background-origin: border-box or padding-box or content-box;
  }
  ```
#### 2.8. background-attachment
* 웹 페이지가 위아래로 움직여도 배경 이미지는 움직이지 않고 고정하는 속성이다.
  * scroll은 화면 스크롤과 함께 배경 이미지도 스크롤 된다. (기본값)
  * fixed는 화면이 스크롤 되더라도 배경 이미지는 고정된다.
  ```css
  선택자 {
    background-attachment: scroll or fixed;
  }
  ```
#### 2.9. background
* 배경 스타일 속성을 한 번에 지정할 수 있는 속성이다.
  ```css
  선택자 {
    background: image repeat attachment position clip origin size;
  }
  ```
## 변형
### 1. 변형(Transform)
* 요소가 사용자의 동작에 따라 크기나 형태가 변경되는 것을 변형(Transform)이라 한다.
* 변형을 부드럽게 연결하는 것을 애니메이션이라 한다.
#### 1.1. 2차원 변형
* 요소가 변형될 때 수직, 수평으로 이동하고 회전하는 것을 말한다.
<br><img width="600px" src="https://user-images.githubusercontent.com/26870393/171839652-4499f0de-044f-4cc9-945b-1578cfea9bba.png"><br>

#### 1.2. 3차원 변형
* 요소가 변형될 때 수직, 수평으로 이동뿐만 아니라 화면 상에서 앞으로 이동하거나 뒤로 이동하는 것을 말한다.
<br><img width="600px" src="https://user-images.githubusercontent.com/26870393/171839689-9f2f1909-bab9-45f0-9d0c-d7f68231ce6a.png"><br>

#### 1.3. transform 속성
* 요소들을 변형시키려면 transform 속성과 변형 함수 함께 사용해야 한다.
* 변형 함수는 2차원 함수와 3차원 함수 구분된다.
 ```css
 선택자 {
  transform: 변형함수;
 }
 ```
### 2. 변형 함수
#### 2.1. translate 함수
* 요소를 x축 방향이나 y축, z축 방향으로 이동시키는 함수이다.
* 3D 효과를 내기 위해서는 perspective 함수와 함께 사용해야 한다.
  |변형 함수|설명|
  |--|--|
  |translate(x, y)|지정한 크기만큼 x축, y축으로 이동|
  |translate3d(x, y, z)|지정한 크기만큼 x축, y축, z축으로 이동|
  |translateX(x)|지정한 크기만큼 x축으로 이동|
  |translateY(y)|지정한 크기만큼 y축으로 이동|
  |translateZ(z)|지정한 크기만큼 z축으로 이동|
#### 2.2. scale 함수
* 요소를 지정한 크기만큼 확대/축소하는 함수이다.
* 지정하는 값이 1보다 크면 확대, 1보다 작으면 축소된다.
  |변형 함수|설명|
  |--|--|
  |scale(x, y)|지정한 크기만큼 x, y축으로 확대/축소|
  |scale3d(x, y, z)|지정한 크기만큼 x, y, z축으로 확대/축소|
  |scaleX(x)|지정한 크기만큼 x축으로 확대/축소|
  |scaleY(y)|지정한 크기만큼 y축으로 확대/축소|
  |scaleZ(z)|지정한 크기만큼 z축으로 확대/축소|
#### 2.3. rotate 함수
* 요소를 지정한 각도만큼 회전시키는 함수이다.
* 지정하는 값이 양수이면 시계 방향으로, 음수이면 시계 반대 방향으로 회전한다.
  |변형 함수|설명|
  |--|--|
  |rotate(각도)|지정한 각도만큼 회전|
  |rotate3d(x, y, z, 각도)|지정한 각도만큼 회전|
  |rotateX(각도)|지정한 각도만큼 x축으로 회전|
  |rotateY(각도)|지정한 각도만큼 y축으로 회전|
  |rotateZ(각도)|지정한 각도만큼 z축으로 회전|
#### 2.4. skew 함수
* 요소를 지정한 각도만큼 비틀어 왜곡하는 함수이다.
  |변형 함수|설명|
  |--|--|
  |skew(x, y)|지정한 각도만큼 x축과 y축으로 왜곡|
  |skewX(x)|지정한 각도만큼 x축으로 왜곡|
  |skewY(y)|지정한 각도만큼 y축으로 왜곡|
### 3. 변형 속성
#### 3.1. transform-origin
* 변형의 기준점을 변경하는 속성이다. 
 ```css
 선택자 {
  transform-origin: x축 y축 z축;
 }
 ```
  |속성값|설명|
  |--|--|
  |x축|x 좌표 값, left, center, right|
  |y축|y 좌표 값, top, center, bottom|
  |z축|z 좌표 값|
#### 3.2. backface-visibility
* 요소가 회전하여 뒷면이 보일 경우 뒷면의 표시 여부를 지정하는 속성이다.
  * visible은 요소의 뒷면이 보이도록 표시한다. (기본값)
  * hidden은 요소의 뒷면이 보이지 않도록 한다.
 ```css
 선택자 {
  backface-visibility: visible or hidden;
 }
 ```