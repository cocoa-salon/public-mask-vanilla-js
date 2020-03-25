// 마커 생성
const createMarkers = (storesForMarker) => {

  const setMarkers = map => {
    markers.forEach(marker => {
      marker.setMap(map);
    });
  }

  setMarkers(null)

  markers = [];

  const callHandleClick = info => {
    // 클로저 생성하여 모든 마커에 이벤트 핸들러 등록

    const stat = {
      plenty: "충분",
      some: "보통",
      few: "부족",
      empty: "없음",
      break: "판매중지",
      null: "미확인",
    }

    return () => {
      const storeInfoEle = document.getElementById('store-info');
      storeInfoEle.innerHTML = `<div>
       <div>판매처: ${info.title}</div>
       <div>주소: ${info.addr}</div>
       <div>입고 시간: ${info.stock_at}</div>
       <div>재고 현황: ${stat[info.remain_stat]}</div>
      </div>`
    }
  }

  const callHandleMouseOver = (map, marker, infowindow) => {
    return () => infowindow.open(map, marker);
  }

  const callHandleMouseOut = (infowindow) => {
    return () => infowindow.close();
  }

  const markerImgSrc = {
    // 마스크 수량에 따른 이미지 경로
    plenty: "images/markers/marker_enough.png",
    some: "images/markers/marker_normal.png",
    few: "images/markers/marker_lack.png",
    empty: "images/markers/marker_none.png",
    break: "images/markers/marker_none.png",
    null: "images/markers/marker_none.png",
  }

  storesForMarker.forEach(info => {
    const imageSrc = markerImgSrc[info['remain_stat']];
    const imageSize = new kakao.maps.Size(24, 35);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    // 마커 생성
    marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: info.latlng, // 마커를 표시할 위치
      image: markerImage, // 마스크 수량에 따른 마커 이미지
      title: info.title, // 마커 타이틀
      clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
    });

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    const iwContent = `<div style="padding:5px;">${info.title}</div>`, // 인포윈도우에 표출될 내용
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable
    });

    // 마커에 마우스 이벤트 등록
    kakao.maps.event.addListener(marker, 'click', callHandleClick(info));
    kakao.maps.event.addListener(marker, 'mouseover', callHandleMouseOver(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', callHandleMouseOut(infowindow));

    markers.push(marker);
  });

  console.log(markers);
}

