const axios = require('axios');


export async function requestLogin(data){
  const url = "http://localhost:4000/user/login";

  const response = await axios.post(url, data)
  return response
}

export async function requestSignUp(data){
  const url = "http://localhost:4000/user/signup";

  const response = await axios.post(url, data)
  return response
}

export async function requestPost(data){
  const url = "http://localhost:4000/post/write";

  const response = await axios.post(url, data)
  return response
}


export async function requestPosts(page) {
  const url = `http://localhost:4000/post?page=${page}`;

  const response = await axios.get(url)
  return response
}