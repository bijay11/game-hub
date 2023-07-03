import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
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

  get = (id: number | string) => {
    return axiosInstace
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}
