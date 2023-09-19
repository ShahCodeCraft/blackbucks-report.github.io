// import { Grid,Typography } from '@mui/material'
// import style from '../Report.module.scss';
// function ProfilingHeading() {
//   return (
//    <Grid container sx={{m:1,width:'200px',mt:4}}>
//         <Grid item xs={12} className={style.sublist} sx={{mt:2}}>
//             <Typography className={style.subcontent}>Section Score</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:3}}>
//             <Typography className={style.subcontent}>Batch Avg Score</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2}}>
//             <Typography className={style.subcontent}>Strength</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2}}>
//             <Typography className={style.subcontent}>Weakness</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2}}>
//             <Typography className={style.subcontent}>Total Score</Typography>
//         </Grid>
//    </Grid>
//   )
// }

// export default ProfilingHeading;

import { Grid, Typography } from '@mui/material';
import style from '../Report.module.scss';

const headingItems = [
  'Section Score',
  'Batch Avg Score',
  'Strength',
  'Weakness',
  'Total Score',
];

function ProfilingHeading() {
  return (
    <Grid container sx={{ ml:2, mt: 7}}>
      {headingItems.map((item, index) => (
        <Grid key={index} item xs={12} className={style.sublist} sx={{ mt: 2,display:'flex',justifyContent:'center'}}>
          <Typography sx={{fontWeight:'bold'}}>{item}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProfilingHeading;
