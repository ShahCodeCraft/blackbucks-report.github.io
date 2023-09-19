import { TableCell, styled, tableCellClasses } from "@mui/material";


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      position: 'sticky',
      top: 0,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      zIndex: 1,
    },
    
  }));
  
  export { tableCellClasses }; 
