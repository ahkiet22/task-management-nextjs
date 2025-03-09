import axios from "axios";
import { CONFIG_API } from "@/configs/api";

axios.defaults.baseURL = CONFIG_API.AUTH.INDEX;
axios.defaults.headers.common["Content-Type"] = "application/json";

const useFetch = async (
  url: string,
  method: string = "GET",
  data = null,
  headers = {}
) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Data failed:", error.message);
      throw error;
    } else {
      console.error("unknown error");
    }
  }
};

export default useFetch;
