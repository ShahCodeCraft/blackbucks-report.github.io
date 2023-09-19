import axios from "../../apis/Interceptor";
import { getCollege, getSixMonthReport, getStat, getSixMonthReportCsv } from "../../apis/api";
import {
  setCollegeData,
  setCollegeLoading,
  setReportsData,
  setReportsLoading,
  setReportError,
  setStatDataLoading,
  setStatData,
  clearReportsData,
  setSixMonthReportData,
  // setSixMonthReportCsvData,
  // setSixMonthReportCsvLoading
} from "../reducers/reportsReducer";
import { AppThunk } from "../store/store";

export const fetchReports =
  (
    college_id: number,
    end_date: number,
    skip: number,
    take: number
  ): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setReportsLoading(true));
      if (skip === 0) {
        dispatch(clearReportsData());
        dispatch(setReportError(""));
      }
      const res = await axios.get(
        `/users?end_date=${end_date}&college_id=${college_id}&skip=${skip}&take=${take}`
      );
      dispatch(setReportsData(res?.data));
      dispatch(setReportsLoading(false));
    } catch (error: any) {
      if (error?.response?.data?.statusCode === 404) {
        dispatch(setReportError(error?.response?.data?.message));
      }

      // console.log("Reports Fetch Error: ", error?.response?.data?.message);

      dispatch(setReportsLoading(false));
    }
  };
export const fetchcolleges = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setCollegeLoading(true));
    const res = await getCollege();
    dispatch(setCollegeData(res?.data));
    dispatch(setCollegeLoading(false));
  } catch (error) {
    dispatch(setCollegeLoading(false));
  }
};
export const fetchStat = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setStatDataLoading(true));
    const res = await getStat();
    dispatch(setStatData(res?.data));
    dispatch(setStatDataLoading(false));
  } catch (error) {
    dispatch(setStatDataLoading(false));
  }
};

export const fetchSixMonthReport =
  (end_date: number, user_id: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setSixMonthReportData(null));
      const res = await getSixMonthReport(end_date, user_id);
      dispatch(setSixMonthReportData(res?.data));
    } catch (error) {
      console.log(error);
      dispatch(setSixMonthReportData("Error in fetching report data"));
    }
  };

// export const fetchSixMonthReportCsv=():AppThunk=>async (dispatch)=>{
//   try{
//     dispatch(setSixMonthReportCsvLoading(true));
//     const res=await getSixMonthReportCsv();
//     dispatch(setSixMonthReportCsvData(res?.data))
//   }catch(error){
//     dispatch(setSixMonthReportCsvLoading(false));
//   }
// }