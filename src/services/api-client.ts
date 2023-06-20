import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "063562168262423a9b9807eba5109649",
  },
});
