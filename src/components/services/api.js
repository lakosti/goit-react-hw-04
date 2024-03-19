import axios from "axios";

export const requestProduct = async (query) => {
  const { data } = await axios.get(`
https://api.unsplash.com/search/photos/?client_id=Wp5F2-SCVpASwBAQgCUQrPKHfiOtxOwBkKABJIwXos4&query=${query}`);
  return data;
};
