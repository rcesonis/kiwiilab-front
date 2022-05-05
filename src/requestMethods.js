import axios from "axios";
import { apiUrl } from "./config/constants";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjg1NGNjYjNmOGI3NDdjM2U2OWRhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTc1NTYyOCwiZXhwIjoxNjUxNzYyODI4fQ.G08u2--fEw98r3gScJW0pKnrT-ouuAh4lpCpAPBiBns";

export const publicRequest = axios.create({
  baseURL: apiUrl,
});
export const userRequest = axios.create({
  baseURL: apiUrl,
  header: { token: `Bearer ${TOKEN}` },
});
