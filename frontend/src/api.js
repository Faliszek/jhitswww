//@flow
// $FlowFixMe
export const API_URL: string = "http://ux.up.krakow.pl/~pfalisz/backend/api";
// export const API_URL: string = "http://localhost:8080/jhitswww/backend/api";

export function fetch(path: string, args: Object) {
  let params = { ...args };
  return window.fetch(`${API_URL}${path}.php`, params).then(res => {
    console.log(res);
    if ([200, 201].includes(res.status)) {
      return res
        .json()
        .then(data => Promise.resolve({ status: res.status, data }));
    } else {
      return res
        .text()
        .then(message => Promise.reject({ status: res.status, message }));
    }
  });
}
export function post(path: string, data: Object) {
  return fetch(path, {
    method: "POST",
    body: JSON.stringify(data)
  });
}

export function logIn(email, password) {
  return post(`/auth`, { email, password });
}
