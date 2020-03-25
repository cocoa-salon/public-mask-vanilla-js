# 바닐라 자바스크립트 기반의 공적 마스크 판매처 검색 애플리케이션(front-end)

### 설명

- 현재 사용자의 위치를 기준으로 검색한 주변 마스크 판매처를 지도에 표시하는 기능

### 개발환경

- 공적 마스크 판매 현황 조회 API
  https://app.swaggerhub.com/apis-docs/Promptech/public-mask-info/20200307-oas3#/
- Kakao 지도 API
  http://apis.map.kakao.com/web/guide/
- vanilla.js
- Express.js(npm)
- fetch API
- HTML5, CSS3

### 주요 기능

- 사용자의 현재 위치를 기준으로 주변 공적 마스크 판매처를 지도에 마커로 표시(최초 지도 로드 시)
- 마스크 재고 상태 마커에 반영
- 지도 이동 시 '이 지역 재검색' 버튼 노출, 클릭 시 변경된 위치에 해당하는 판매처 표시
- 지도 확대, 축소 후 검색 버튼 클릭 시 지도 레벨 자동 조정 후 판매처 표시(레벨3)
- 지도 관련 UI(마커 등)는 Kakao 지도 UI 적용
