// 지도 api // 도메인 나와야 사용할 수 있음
// var container = document.getElementById("map");
// var options = {
//   center: new kakao.maps.LatLng(33.450701, 126.570667),
//   level: 3,
// };
// var map = new kakao.maps.Map(container, options);


//expanding-card
const photo_boxs = document.querySelectorAll('.photo_box')

photo_boxs.forEach(photo_box => {
    photo_box.addEventListener('click', () => {
        removeActiveClasses()
        photo_box.classList.add('active')
    })
})

function removeActiveClasses() {
    photo_boxs.forEach(photo_box => {
        photo_box.classList.remove('active')
    })
}

// 검색창 설정
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "지역, 식당 또는 음식");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
