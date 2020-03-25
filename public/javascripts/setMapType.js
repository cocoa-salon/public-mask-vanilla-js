// Kakao 지도 API 적용
// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입 변경
function setMapType(maptype) {
  const roadmapControl = document.getElementById('btnRoadmap');
  const skyviewControl = document.getElementById('btnSkyview');
  if (maptype === 'roadmap') {
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
    roadmapControl.className = 'selected_btn';
    skyviewControl.className = 'btn';
  } else {
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
    skyviewControl.className = 'selected_btn';
    roadmapControl.className = 'btn';
  }
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대
function zoomIn() {
  map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대
function zoomOut() {
  map.setLevel(map.getLevel() + 1);
}

