import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Reports {
  reportsData: any;
  loading: boolean;
  reportErrorMsg: string;
  colleges: {
    [x: string]: any; loading: boolean; collegedata: any[] 
};
  stat: { loading: boolean; statData: any[] };
  sixMonthReport: any;
  reportEndMonth: any[];
  // sixMonthReportCsv:{loading: boolean; statData: any}
}
const initialState: Reports = {
  reportsData: [],
  loading: false,
  reportErrorMsg: "",
  colleges: { loading: false, collegedata: [] },
  stat: { loading: false, statData: [] },
  sixMonthReport: "Please Select a user from Dashboard",
  reportEndMonth: [],
  // sixMonthReportCsv:{ loading: false, statData: ""}
};

const reportsReducer = createSlice({
  name: "reportsReducer",
  initialState,
  reducers: {
    setReportsLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setReportsData(state, { payload }) {
      state.reportsData = [...state.reportsData, ...payload] ?? [];
    },
    clearReportsData(state) {
      state.reportsData = [];
    },
    setReportError(state, { payload }) {
      state.reportErrorMsg = payload ?? "No Data Found";
    },
    setCollegeLoading(state, { payload }: PayloadAction<boolean>) {
      state.colleges.loading = payload;
    },
    setCollegeData(state, { payload }) {
      state.colleges.collegedata = payload ?? [];
    },
    setStatDataLoading(state, { payload }: PayloadAction<boolean>) {
      state.stat.loading = payload;
    },
    setStatData(state, { payload }) {
      state.stat.statData = payload ?? [];
    },
    setSixMonthReportData(state, { payload }) {
      state.sixMonthReport = payload;
    },
    setReportEndMonth(state, { payload }) {
      state.reportEndMonth = payload;
    },
    // setSixMonthReportCsvLoading(state,{payload}:PayloadAction<boolean>){
    //   state.sixMonthReportCsv.loading=payload;
    // },
    // setSixMonthReportCsvData(state,{payload}){
    //   state.sixMonthReportCsv.statData=payload;
    // }
  },
});

export const {
  setReportsLoading,
  setReportsData,
  setCollegeLoading,
  setCollegeData,
  setReportError,
  setStatDataLoading,
  setStatData,
  clearReportsData,
  setSixMonthReportData,
  setReportEndMonth,
  // setSixMonthReportCsvLoading,
  // setSixMonthReportCsvData
} = reportsReducer.actions;

export default reportsReducer.reducer;
