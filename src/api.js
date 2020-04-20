import Axios from "axios";

export default Axios.create({
  baseURL: localStorage.getItem("baseURL") || "http://localhost:3625/",
});
