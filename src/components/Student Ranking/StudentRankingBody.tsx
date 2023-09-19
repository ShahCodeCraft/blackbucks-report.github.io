
import { Box, Button, Checkbox, FormControlLabel, Link, Grid, TextField, Typography } from '@mui/material';
import StudentRankingTable from './StudentRankingTable';

function StudentRankingHeader() {
  return (
    <Box sx={{}}>
      <Grid container spacing={2} sx={{ p: 4 }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" fontWeight="bold">
            Student Rankings
          </Typography>
          <Button sx={{ pr: 4 }}>Export Page as Link</Button>
        </Grid>

        <Grid container item spacing={1} sx={{ width: '100%', background: '#D5E3FD', p: 2, mt: 2 }}>
          <Grid item xs={12} sm={1.5}>
            <Grid container direction="column">
              <Grid item>
                <Typography sx={{ mt: 2 }}>Filter by</Typography>
              </Grid>
              <Grid item>
                <Typography mt={1}>Enter Cut-off Mark</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Grid container direction="column">
              <Grid item>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Employability Score" />
              </Grid>
              <Grid item>
                <TextField size="small" sx={{ width: '180px', textAlign: 'center' }} />
              </Grid>
            </Grid>
          </Grid><hr />

          <Grid item xs={12} sm={2}>
            <Grid container direction="column">
              <Grid item>
                <FormControlLabel control={<Checkbox defaultChecked />} label="10th %" />
              </Grid>
              <Grid item>
                <TextField size="small" sx={{ width: '120px' }} />
              </Grid>
            </Grid>
          </Grid><hr />

          <Grid item xs={12} sm={2}>
            <Grid container direction="column">
              <Grid item>
                <FormControlLabel required control={<Checkbox />} label="12th %" />
              </Grid>
              <Grid item>
                <TextField size="small" sx={{ width: '120px' }} />
              </Grid>
            </Grid>
          </Grid><hr />

          <Grid item xs={12} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <FormControlLabel control={<Checkbox />} label="Graduation %" />
              </Grid>
              <Grid item>
                <TextField size="small" sx={{ width: '150px' }} />
                <Button>Apply</Button>
              </Grid>
              <Grid item sx={{ ml: 25 }}>
                <Link href="#" sx={{}}>Show Advanced Filter Option</Link>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ background: '#D5E3FD', width: '100%', height: '250px', mt: 3, p: 2 }}>
          <Grid>
            <StudentRankingTable />
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default StudentRankingHeader;
