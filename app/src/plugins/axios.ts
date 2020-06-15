import axios from 'axios'

const { VUE_APP_API_HOST, VUE_APP_API_PORT } = process.env

export default axios.create({
  baseURL: `http://${VUE_APP_API_HOST}:${VUE_APP_API_PORT}`,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
})
