//@flow
import decodeJwt from "jwt-decode";
import qs from "query-string";
import { store } from "./store";
import axios from "axios";
import numeral from "numeral";
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

export function get(path: string, params: Object = undefined) {
  const { auth } = store.getState();
  // axios.defaults.headers.common["Content-Type"] = "text/plain;charset=UTF-8";
  if (auth.accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      auth.accessToken
    }`;
  }
  const query = params ? `?${qs.stringify(params)}` : "";

  return axios.get(`${API_URL}${path}.php${query}`);
}

export function post(path: string, data: Object, params: Object = undefined) {
  const query = params ? `?${qs.stringify(params)}` : "";

  return axios.post(`${API_URL}${path}.php${query}`, JSON.stringify(data), {
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

export function getImage(id) {
  return get(`/image`, { id }).then(img => ({
    ...img.data,
    url: `${MEDIA_URL}${img.data.url}`
  }));
}

export function getComments(id) {
  return get(`/comment`, { id }).then(res => [
    ...res.data.comments.map(c => ({
      ...c,
      created: numeral(c.created).value()
    }))
  ]);
}

export function addComment(id, author, text) {
  return post(`/comment`, { author, text }, { id }).then(res =>
    console.log(res)
  );
}
