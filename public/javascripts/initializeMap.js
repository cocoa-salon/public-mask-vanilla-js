const initializeMap = async (latitude, longitude) => {
  const m = 500; // 검색 반경 설정
  drawNewMap(latitude, longitude, m); // 새로운 지도 그리기
  mappingMarker(latitude, longitude, m) // 약국 정보 요청 및 마커 생성
  const btnResearchControl = document.getElementById('btnResearch');
  showResearchBtn(btnResearchControl); // 재검색 버튼 노출
  btnResearchControl.addEventListener('click', handleClick.bind(null, btnResearchControl, m)); // 재검색 버튼 클릭 시 약국 정보 요청 및 마커 생성
};

// 새로운 지도 그리기
const drawNewMap = (latitude, longitude, m) => {
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
  };
  map = new kakao.maps.Map(container, options);
}

// 마우스 드래그 시 지역 재검색 버튼 노출
const showResearchBtn = (btnResearchControl) => {
  kakao.maps.event.addListener(map, "dragend", function () {
    btnResearchControl.classList.remove('btn_hidden');
  });
}

// 약국 정보 요청 및 마커 생성
const mappingMarker = async (latitude, longitude, m) => {
  const storesByGeo = await getStoresByGeo(latitude, longitude, m); // 현재 위치에 해당하는 약국 정보 요청
  const storesForMarker = createStoreListForMarker(storesByGeo.stores); // 마커 생성에 필요한 데이터로 변환
  createMarkers(storesForMarker); // 마커를 생성하여 지도에 표시
}

// 지역 재검색 버튼 클릭 시 약국 정보 요청 및 마커 생성(1번만 등록)
const handleClick = async (btnResearchControl, m) => {
  btnResearchControl.classList.add('btn_hidden');
  const latlng = map.getCenter();
  const latitude = latlng.getLat()
  const longitude = latlng.getLng()
  const level = map.getLevel();
  if (level !== 3) {
    // 지도 레벨이 3이 아닌 경우 새로운 지도 그리고 재검색 버튼 노출 이벤트 리스너 등록
    drawNewMap(latitude, longitude, m);
    mappingMarker(latitude, longitude, m) // 약국 정보 요청 및 마커 생성
    showResearchBtn(btnResearchControl);
  } else {
    mappingMarker(latitude, longitude, m) // 약국 정보 요청 및 마커 생성
  }
};