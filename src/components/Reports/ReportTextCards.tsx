import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


interface MonthlyReportProps {
    item: {
        id: number;
        month: string;
        backgroundColor: string;
        monthColor: string;
    };
    reports: any;
}
const ReportTextCards: React.FC<MonthlyReportProps> = ({ item }) => {
    const [arr, setArr] = useState([
        {
            row: ["Percentages Direct and Speech Antonyms, Sentence Completion"],
            type: "text",
        },
        {
            row: [
                "String Manipulation, Permutation & Combination, Arrays DataStructures",
            ],
            type: "text",
        },
        {
            row: [
                "String Manipulation, Permutation & Combination, Arrays DataStructures",
            ],
            type: "text",
        },
        { row: ["", "", "", ""], type: "text" },
    ]);
    return (
        <Grid
            container
            xs={12}
            sx={{
                width: "100%",
                flexDirection: { xs: "column", sm: "row" },
                display: "flex",
                justifyContent: "center",
                marginLeft: "1rem",
                marginTop: "1rem"
            }}
        >
            {arr.map((row, rowIndex) => (
                <Grid
                    container
                    item
                    xs={12}
                    key={rowIndex}
                    sx={{
                        background: item.backgroundColor,
                        mr: 1,
                        mb: 1,
                        borderRadius: "5px"
                    }}
                >
                    {row.row.map((value, columnIndex) => (
                        <Grid
                            item
                            xs={12}
                            sx={{
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="subtitle2" sx={{ fontFamily: "Maven Pro", fontWeight: 100 }}>
                                {rowIndex === 0 && !value ? "NA" : value}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    );
}


export default ReportTextCards