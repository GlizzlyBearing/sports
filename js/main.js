const selectEl = document.querySelectorAll('#body_layout .section1 .form1 .select');
selectEl.forEach(box => {
    // box는 NodeList의 각 요소를 나타냅니다.
    box.addEventListener('click', function() {
        // 모든 요소에서 on 클래스를 제거합니다.
        selectEl.forEach(b => b.classList.remove('on'));

        // 클릭된 요소에 on 클래스를 추가합니다.
        box.classList.add('on');
    });
});
