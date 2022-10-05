import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoard: async (id) => {
    try {
      const { data } = await axios.get(routes.getBoardUrl(id));
      return data;
    } catch (e) {
      logError(e);
    }
  },
  getCard: async (id) => {
    try {
      const { data } = await axios.get(routes.getCardUrl(id));
      return data.card;
    } catch (e) {
      logError(e);
    }
  },
};

export default apiClient;
