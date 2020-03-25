// 현재 위치에 해당하는 약국 정보를 요청하는 로직

const baseURL = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1";

const getStoresByGeo = (latitude, longitude, m) => {
  return fetch(`${baseURL}/storesByGeo/json?lat=${latitude}&lng=${longitude}&m=${m}`, { method: "GET" })
    .then(res => res.json())
    .catch(err => console.error(err))
};