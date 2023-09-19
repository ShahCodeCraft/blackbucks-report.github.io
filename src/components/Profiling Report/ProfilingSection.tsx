// import { Grid,Typography } from '@mui/material'
// import React from 'react'
// import style from '../Report.module.scss';

// function ProfilingSection() {
//   return (
//    <Grid  container  xs={12} sx={{ width: '100%',flexDirection:{xs:'column',sm:'row'},display:'flex',justifyContent:'center',m:1}}>
//       <Grid container width='400px' sx={{display:'flex',justifyContent:'center'}}>
//         <Typography sx={{background:'#88E53E',width:'200px',p:1,textAlign:"center",borderTopRightRadius:'10px',borderTopLeftRadius:'10px'}}>Aptitute</Typography>
//         <Grid item xs={12} className={style.sublist} sx={{background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>10</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:3,background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>7.1</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>Number</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>No Weak Area</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}></Typography>
//         </Grid>
//     </Grid>

//     <Grid container width='400px' sx={{ml:2,display:'flex',justifyContent:'center'}} >
//     <Typography  sx={{background:'#A7C2FF',width:'200px',p:1,textAlign:"center",borderTopRightRadius:'10px',borderTopLeftRadius:'10px'}}>Coding</Typography>
//         <Grid item xs={12} className={style.sublist} sx={{background:'#E1E7FF',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>10</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:3,background:'#E1E7FF',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>7.1</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#E1E7FF',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>Number</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#E1E7FF',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>No Weak Area</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#E1E7FF',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}></Typography>
//         </Grid>
//     </Grid>

//     <Grid container width='400px' sx={{ml:2,display:'flex',justifyContent:'center'}}>
//     <Typography  sx={{background:'#88E53E',width:'200px',p:1,textAlign:"center",borderTopRightRadius:'10px',borderTopLeftRadius:'10px'}}>Coding</Typography>
//         <Grid item xs={12} className={style.sublist} sx={{background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>10</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:3,background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>7.1</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>Number</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}>No Weak Area</Typography>
//         </Grid>

//         <Grid item xs={12} className={style.sublist} sx={{mt:2,background:'#C0E8C0',display:'flex',justifyContent:'center'}}>
//             <Typography className={style.subcontent}></Typography>
//         </Grid>
//     </Grid>
//    </Grid>
//   )
// }

// export default ProfilingSection

import { Grid, Typography } from '@mui/material';
import style from '../Report.module.scss';

const sections = [
  {
    title: 'Aptitute',
    background: '#88E53E',
    sublist: [
      { content: '10', background: '#C0E8C0', mt: 0 },
      { content: '7.1', background: '#C0E8C0', mt: 2 },
      { content: 'Number,Numerical Ability Ages', background: '#C0E8C0', mt: 2 },
      { content: 'No Weak Area', background: '#C0E8C0', mt: 2 },
      { content: '', background: '#C0E8C0', mt: 2 },
    ],
  },
  {
    title: 'Coding',
    background: '#A7C2FF',
    sublist: [
      { content: '10', background: '#E1E7FF', mt: 0 },
      { content: '4.32', background: '#E1E7FF', mt: 2 },
      { content: 'Not Attempted', background: '#E1E7FF', mt: 2 },
      { content: 'Not Attempted', background: '#E1E7FF', mt: 2 },
      { content: 'Parent /TPO Signature', background: '#E1E7FF', mt: 2 },
    ],
  },
  {
    title: 'English',
    background: '#88E53E',
    sublist: [
      { content: '10', background: '#C0E8C0', mt: 0 },
      { content: '3.62', background: '#C0E8C0', mt: 2 },
      { content: 'No Strong Area', background: '#C0E8C0', mt: 2 },
      { content: 'Percentage Radius of cylinder, Data handling Compound intrest Distance Time Ratio and proportion, Ratio and proportion Profit percentage', background: '#C0E8C0', mt: 2 },
      { content: '', background: '#C0E8C0', mt: 2 },
    ],
  },
];

function ProfilingSection() {
  return (


    <Grid container mt={2} spacing={2}>
      {
        sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Typography component="div" sx={{ display: "flex", justifyContent: "center"}}>
              <Typography sx={{ background: section.background, width: '50%', p: 1, textAlign: 'center', borderTopRightRadius: '10px', borderTopLeftRadius: '10px', alignSelf: "center" }}>
                {section.title}
              </Typography>
            </Typography>
            {
              section.sublist.map((subitem, subIndex) => (
                <Grid key={subIndex} item padding={2} className={style.sublist} sx={{ mt: subitem.mt, background: subitem.background, display: 'flex', justifyContent: 'center' }}>
                  <Typography className={style.subcontent}>{subitem.content}</Typography>
                </Grid>
              ))
            }
          </Grid>
        ))
      }
    </Grid>


  );
}

export default ProfilingSection;