const API_BASE_URL = "http://localhost:5048/api";

export interface ApiResponse {
  message: string;
  data?: any;
}

export const getData = async (): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/hello`);
  return response.json();
};

export const postData = async (data: any): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/hello`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteData = async (id: number): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/hello/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

export const putData = async (id: number, data: any): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/hello/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};