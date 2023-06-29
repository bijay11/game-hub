import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstace = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "063562168262423a9b9807eba5109649",
  },
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstace
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
