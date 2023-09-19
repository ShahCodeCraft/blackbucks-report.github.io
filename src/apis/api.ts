import axios from "axios";
import axios_token from "./Interceptor";

const baseURL = process.env.REACT_APP_BASEURL;

export const login = async (params: LoginReq) => {
  try {
    return await axios.post(`${baseURL}/login`, params);
  } catch (error) {}
};

export const getCollege = async () => {
  try {
    return await axios_token.get(`${baseURL}/colleges`);
  } catch (error) {}
};

export const getStat = async () => {
  try {
    return await axios_token.get(`${baseURL}/stats`);
  } catch (error) {}
};

export const getSixMonthReport = async (end_date: number, user_id: number) => {
  const res = await axios_token.get(
    `${baseURL}/report/sixmonth?end_date=${end_date}&user_id=${user_id}`
  );
  return res;
};

export const getSixMonthReportCsv=async ()=>{
  const res =await axios_token.get(
    `${baseURL}/csv/sixmonth`
  )
  return res
}
