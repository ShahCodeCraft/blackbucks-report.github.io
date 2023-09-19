import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

interface MonthlyCardProps {
    item: {
        id: number;
        month: string;
        backgroundColor: string;
        monthColor: string;
    };
    reports: any;
}

const ReportMonthlyCard: React.FC<MonthlyCardProps> = ({ item, reports }) => {
    const [arr, setArr] = useState([
        { row: ["", "", "", "", "", "", "", "", "", "", "", ""], type: "number" }
    ]);
    useEffect(() => {
        const data = [...arr];
        console.log(reports, "monthly card data")
        Object.entries(reports).forEach(([key, skillObj]: any) => {
            if (key === "Aptitude") {
                Object.entries(skillObj).forEach(([key, monthObj]: any) => {
                    if (
                        dayjs()
                            .month(+key - 1)
                            .format("MMMM") === item.month
                    ) {
                        Object.entries(monthObj).forEach(([key, value]: any) => {
                            data[0].row[+key - 1 >= 4 ? 3 : +key - 1] = (value * 100).toFixed(
                                1
                            );
                        });
                    }
                });
            }
            if (key === "Coding") {
                Object.entries(skillObj).forEach(([key, monthObj]: any) => {
                    if (
                        dayjs()
                            .month(+key - 1)
                            .format("MMMM") === item.month
                    ) {
                        Object.entries(monthObj).forEach(([key, value]: any) => {
                            data[0].row[(+key - 1 >= 4 ? 3 : +key - 1) + 4] = (
                                value * 100
                            ).toFixed(1);
                        });
                    }
                });
            }
            if (key === "English") {
                Object.entries(skillObj).forEach(([key, monthObj]: any) => {
                    if (
                        dayjs()
                            .month(+key - 1)
                            .format("MMMM") === item.month
                    ) {
                        Object.entries(monthObj).forEach(([key, value]: any) => {
                            data[0].row[(+key - 1 >= 4 ? 3 : +key - 1) + 8] = (
                                value * 100
                            ).toFixed(1);
                        });
                    }
                });
            }
        });
        setArr(data);
    }, []);

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
                marginTop: "2rem",
            }}

        >
            {/* First Row */}
            <Grid
                item
                xs={6}
                sx={{
                    background: item.monthColor,
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    padding: "5px",
                    mr: 1
                }}
            >
                <Typography sx={{ fontFamily: "Maven Pro" }}>{item.month}</Typography>
            </Grid>

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
                                height: "45px"
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
};

export default ReportMonthlyCard;

