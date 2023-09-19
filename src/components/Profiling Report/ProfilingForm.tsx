import { Box, Grid, TextField, Typography } from '@mui/material'
import Images from '../../assets/images';
import { useState, useEffect } from 'react';

const userReportData = {
  student_name: "",
  phone: "",
  email: "",
  bbId: "",
}


function ProfilingForm({ singleUserReportData }: any) {
  const [userData, setSingleUserReportData] = useState(userReportData)
  useEffect(() => {
    if (singleUserReportData) {
      const formattedData = {
        student_name: singleUserReportData.first_name + " " + singleUserReportData.last_name,
        phone: singleUserReportData.phone,
        email: singleUserReportData.email,
        bbId: singleUserReportData.id,
      }
      setSingleUserReportData(formattedData);
    }
  }, [singleUserReportData])

  return (
    <Grid container sx={{ p: 1 }} spacing={2}>
      <Grid item xs={12} display='flex' justifyContent='space-between' sx={{ ml: 2, mr: 2 }}>
        <Typography variant='h4' sx={{ color: '#0A065C', fontWeight: 'bold', mt: 4, fontFamily: 'Maven Pro' }}>
          Blackbucks Profiling Report
        </Typography>
        <img src={Images.taptapLogo} width='86px' height='86px' />
      </Grid>

      <Box sx={{ flexGrow: 1, width: '100%', ml: 2 }}>
        <Grid container sx={{ padding: '15px' }} spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: '#045139', fontFamily: 'Maven Pro' }}>
              Student Name
            </Typography>
            <TextField fullWidth value={userData?.student_name === "" ? "NA" : userData?.student_name} type='text' name='College Code' variant='outlined' size='small' sx={{ background: '#f9f9f9', mt: 1 }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: '#045139', fontFamily: 'Maven Pro' }}>
              Email
            </Typography>
            <TextField fullWidth value={userData?.email === "" ? "NA" : userData?.email} type='text' name='College Code' variant='outlined' size='small' sx={{ background: '#f9f9f9', mt: 1 }} />
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography sx={{ color: '#045139', fontFamily: 'Maven Pro' }}>
              Blackbucks ID
            </Typography>
            <TextField fullWidth value={userData?.bbId === "" ? "NA" : userData?.bbId} type='text' name='College Code' variant='outlined' size='small' sx={{ background: '#f9f9f9', mt: 1 }} />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

export default ProfilingForm;