import React, { useEffect, useState } from "react";
import { getData, postData, deleteData, putData, ApiResponse } from "./ApiService";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    getData().then((data: ApiResponse) => setMessage(data.message));
  }, []);

  const handlePost = async () => {
    const response = await postData({ message: "Hello from POST" });
    setMessage(response.message);
  };

  const handleDelete = async () => {
    const response = await deleteData(1);
    setMessage(response.message);
  };

  const handlePut = async () => {
    const response = await putData(1, { message: "Hello from PUT" });
    setMessage(response.message);
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handlePost}>Send POST</button>
      <button onClick={handleDelete}>Send DELETE</button>
      <button onClick={handlePut}>Send PUT</button>
    </div>
  );
};

export default App;