//@flow
import decodeJwt from "jwt-decode";
import { store } from "./store";
import axios from "axios";
// $FlowFixMe
//LOCAL

// export const API_URL: string = "http://localhost:8080/jhitswww/backend/api";
export const ROOT_URL = "http://ux.up.krakow.pl/~pfalisz";
export const MEDIA_URL: string = `${ROOT_URL}`;
export const API_URL: string = `${ROOT_URL}/backend/api`;

// export function fetch(path: string, args: Object) {
//   let params = {
//     ...args
//   };

//   return window.fetch(`${API_URL}${path}.php`, params).then(res => {
//     if ([200, 201].includes(res.status)) {
//       return res
//         .json()
//         .then(data => Promise.resolve({ status: res.status, data }));
//     } else {
//       return res
//         .text()
//         .then(message => Promise.reject({ status: res.status, message }));
//     }
//   });
// }

export function get(path: string) {
  const { auth } = store.getState();
  if (auth.accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      auth.accessToken
    }`;
  }
  return axios.get(`${API_URL}${path}.php`);
}

export function post(path: string, data: Object) {
  return axios.post(`${API_URL}${path}.php`, JSON.stringify(data), {
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    }
  });
}

export function logIn(email, password) {
  return post(`/auth`, { email, password }).then(res => {
    const { accessToken } = res.data;
    return {
      ...decodeJwt(accessToken),
      accessToken
    };
  });
}

export function getImages() {
  return get("/image").then(res =>
    res.data.images.map(i => ({ ...i, url: `${MEDIA_URL}${i.url}` }))
  );
}
