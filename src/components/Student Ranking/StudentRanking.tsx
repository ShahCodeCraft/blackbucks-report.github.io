import { Grid } from '@mui/material'
import React from 'react'
import StudentRankingHeader from './StudentRankingBody'
import Header from '../Header/Header'

function StudentRanking() {
  return (
    <Grid>
      <Grid>
        <Header name="" />
      </Grid>

      <Grid paddingTop={2}>
        <StudentRankingHeader />
      </Grid>

    </Grid>
  )
}

export default StudentRanking