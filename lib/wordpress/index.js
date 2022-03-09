import axios from "axios";

const url = `${process.env.WORDPRESS_URL}${process.env.WORDPRESS_API_PATH}`;

const wordpress = axios.create({
  baseURL: url,
  // auth: {
  //     username: "username",
  //     password: "password",
  // },
  withCredentials: true,
  timeout: 25000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default wordpress;
