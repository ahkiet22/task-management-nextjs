import axios, { AxiosResponse, Method, AxiosRequestConfig } from "axios";
import { CONFIG_API } from "@/configs/api";

axios.defaults.baseURL = CONFIG_API.AUTH.INDEX;
axios.defaults.headers.common["Content-Type"] = "application/json";

interface TFetchProps {
  url: string;
  method?: Method;
  data?: object | null;
  headers?: AxiosRequestConfig["headers"];
}

export const fetchData = async <T = unknown>({
  url,
  method = "GET",
  data = null,
  headers = {},
}: TFetchProps): Promise<AxiosResponse<T>> => {
  const token = localStorage.getItem("token");

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response as AxiosResponse<T>;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Data failed:", error.message);
      throw error;
    } else {
      console.error("Unknown error occurred");
      throw new Error("Unknown error occurred");
    }
  }
};
