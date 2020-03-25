// 마커 생성에 필요한 데이터로 변환하는 함수
const createStoreListForMarker = (stores) => {
  const storesForMarker = stores.reduce((acc, storeInfo) => {
    let item = {};
    item.title = storeInfo.name;
    item.latlng = new kakao.maps.LatLng(storeInfo['lat'], storeInfo['lng']);
    item.remain_stat = storeInfo.remain_stat;
    item.addr = storeInfo.addr;
    item.created_at = storeInfo.created_at;
    item.stock_at = storeInfo.stock_at;
    acc.push(item);
    return acc
  }, []);
  return storesForMarker;
}