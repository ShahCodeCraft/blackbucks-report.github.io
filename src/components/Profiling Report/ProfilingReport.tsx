
import ProfilingForm from './ProfilingForm'
import { Grid } from '@mui/material'
import ProfilingHeading from './ProfilingHeading'
import ProfilingSection from './ProfilingSection'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks/hooks'

function ProfilingReport({ selectedUserId }: { selectedUserId: Number }) {
  const [singleUserReportData, setSingleUserReportData] = useState()
  const reportsData = useAppSelector(
    (state) => state.reportsReducer.reportsData
  );
  useEffect(() => {
    if (reportsData && selectedUserId) {
      const result = reportsData.find((item: any) => item.id === selectedUserId.toString());
      setSingleUserReportData(result);
    }
  }, [selectedUserId])

  return (
    <Grid>
      <Grid>
        <ProfilingForm  singleUserReportData={singleUserReportData}/>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ProfilingHeading />
        </Grid>

        <Grid item xs={9}>
          <ProfilingSection />
        </Grid>
      </Grid>

    </Grid>
  )
}

export default ProfilingReport