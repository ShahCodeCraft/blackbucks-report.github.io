import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';


interface MonthlyReportProps {
    item: {
        id: number;
        month: string;
        backgroundColor: string;
        monthColor: string;
    };
    reports: any;
}

const ReportTotalCard: React.FC<MonthlyReportProps> = ({ item, reports }) => {
    const [arr, setArr] = useState([
        { row: ["", "", "", "", "X", "", "", ""], type: "number" },
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
                        borderRadius: `${[1, 4, 9, 12].includes(rowIndex + 1) ? "20px" : "5px"
                            }`,
                    }}
                >
                    {row.row.map((value, columnIndex) => (
                        <Grid
                            item
                            xs={3}
                            sx={{
                                padding: "10px",
                                border: {
                                    borderRight: `${[4, 8, 12].includes(columnIndex + 1)
                                        ? "none"
                                        : "1px solid #045139"
                                        }`,
                                    borderLeft: `${[1, 5, 9].includes(columnIndex + 1)
                                        ? "none"
                                        : "1px solid #045139"
                                        }`,
                                    borderTop: `${[1, 2, 3, 4].includes(columnIndex + 1)
                                        ? "none"
                                        : "1px solid #045139"
                                        }`,
                                    borderBottom: `${[9, 10, 11, 12, 5, 6, 7, 8].includes(columnIndex + 1)
                                        ? "none"
                                        : "1px solid #045139"
                                        }`,
                                },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height:"50px"
                            }}
                        >
                            <Typography variant="subtitle2" sx={{ fontFamily: "Maven Pro", fontWeight: 100 }}>
                                {!value ? "NA" : value}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    );
}
export default ReportTotalCard;