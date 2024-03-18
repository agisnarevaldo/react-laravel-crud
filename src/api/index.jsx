// import axios
import axios from "axios";

const Api = axios.create({
  // set default endpoint import axios from 'axios';
  baseURL: 'http://localhost:8000'
})

export default Api
