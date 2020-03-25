// 사용자의 위치 정보를 가져오는 함수
const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(contiuneWithPosition, showError);
  } else {
    alert("현재 브라우저에서 위치 정보를 가져올 수 없습니다.");
  }
};

// 사용자의 위치 정보를 찾은 경우 실행하는 콜백 함수. 반한된 위치 객체를 콜백 함수의 인자로 전달한다.
const contiuneWithPosition = position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("현재 위치는 : " + latitude + ", " + longitude);
  initializeMap(latitude, longitude); // 초기 지도 생성
};

const showError = () => {
  alert('위치 정보를 가져오는 데 실패하였습니다.');
};
