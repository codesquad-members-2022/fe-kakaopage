
#### 웹애니메이션 슬라이딩

#### 구현 check list

- [x] 무한 슬라이딩 (Carousel)

- [x] 자동 슬라이딩 기능

- [x] 일정한 시간 간격으로 이동

- [x] 수동 슬라이딩 기능

- [x] 좌/우 버튼을 눌렀을때 슬라이딩 기능

- [ ] 자동 또는 수동 슬라이딩시 우측하단에 페이지 번호 표시

#### 구현 과정

- 슬라이더를 위한 배너 영역은 contents 라는 div 로 구현하였다. (naming 을 변경하라는 comment 는 아직 반영을 못함...)

- 대략적인 구조는 아래와 같이 변경하였다. 슬라이딩 시마다 버튼이 같이 생성되거나 같이 움직이는 것을 방지하기 위해 별도로 분리하고, 움직이는 부분을 content__viewer 로 구현.

```
<div contents>
    <div content__viewer>
        <div contents__wrap> 이미지, 텍스트 등 포함 </div>
        <div contents__wrap> 이미지, 텍스트 등 포함 </div> * contentsData 개수 만큼 생성.
    </div>
    <button prev></button>
    <button next></button>
</div>
```

- 무한 슬라이딩 구현 방법이 떠오르지 않아 힘들었다.

- 여러 contents_wrap을 inline 으로 배열하는 것도 안됐는데, img 부분의 css 가 고정 픽셀이 아닌 100% 로 되어 있어서 생긴 문제였다. 정확한 이유는 모르겠다. 여튼 고정픽셀로 변경하여 해결.

- 검색을 통해 overflow:hidden 으로 특정 부분만 보여주고 transform : translateX 로 전체 이미지를 움직이는 방식임을 알게 되었다. + transition 을 주어 슬라이딩.

- 마지막 요소와 첫번째 요소까지 이동했을 때가 이해하기 힘들었는데, 마지막과 첫번째 요소를 복사하여 3 1 2 3 1 형태로 배치하는 부분이 특히 그랬다.

- 첫번째 클론 요소 3 와 마지막 클론 요소 1 에서는 transition 없이 원래 3과 1 위치로 이동하여 마치 무한 슬라이딩처럼 보이게 구현하였다.

- 다만 빠르게 클릭하는 경우 transition 없이 이동하는 부분에서 약간 티가 나는 문제가 있다.

- autoSlide 함수는 setInterval 로 구현하였다. 

- 움직인 부분을 나타내기 위해 index 를 전역변수로 사용하였는데, 이 부분이 좀 걸린다. 
    - autoSlide 에도 index 가 필요하고, preButton click, nextButton click 시에도 계속 사용되는데...

    ```javascript
    function handleClick(target, $viewer) {
        const $$contentsWrap = [...$viewer.children];
        const maxIndex = $$contentsWrap.length - 1 // first clone node index
        const minIndex = 0 // last clone node index
        const realLastIndex = $$contentsWrap.length -2;
        const realFirstIndex = 1;
    
        if(target.className === 'contents__prevButton') {
            if(index <= minIndex) {
                index = realLastIndex
                animateReset($viewer, index) // transition 없이 이동 
            }
            index --
            animateTranslateX($viewer);
            controlAuto();
        }
        else if(target.className === 'contents__nextButton') {
            if(index >= maxIndex) {
                index = realFirstIndex
                animateReset($viewer, index)
            }
            index ++
            animateTranslateX($viewer)
            controlAuto();
        }
    }
    ```
- click 이벤트와 setInterval 이 겹칠 때가 있어 이 부분을 해결해야 했다.
    - clickCheck = false 로 두고 click 시에는 true 로 바꾼 뒤 setTimeout 으로 몇 초 후 다시 true 로 바꿔주는 방법을 사용해봤다.
        - 여러번 클릭을 하면 setInterval 이 밀리고, 몇 초 후 true 로 바뀌는 타이밍에 슬라이딩이 한번에 일어나는 현상 발생.
    - click 시 clearInterval 을 해주고 다시 autoSlide 를 실행하는 걸로 일단 구현.
    
    
#### 어려웠던 점.

1. 무한 슬라이딩 구현 방법에 대한 이해
    - 노드를 앞 뒤로 복사하고 transition 을 줬다 안줬다 하는 방법 자체가 신기했습니다.
    
2. 변수 사용...
    - 요소가 슬라이딩을 할 때 이동한 부분을 알기 위해서 어떤 index 가 필요할텐데 여러 함수에서 index 를 통해 작업을 수행하다보니 전역함수를 사용할 수 밖에 없었습니다.
    
3. 클릭과 자동 슬라이딩이 겹치는 부분
    - 클릭 시마다 clearInterval 후 자동 슬라이딩 함수 재실행으로 해결하였지만 좋은 방법은 아닌 것 같습니다. 