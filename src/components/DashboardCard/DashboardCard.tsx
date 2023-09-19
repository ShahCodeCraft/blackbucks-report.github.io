import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material"

interface CardContentProps {
    title: string,
    value: number,
    icon: any
}

const DashboardCard = ({ cardData }: { cardData: CardContentProps }) => {
    return (
        <Card
            sx={{
                minWidth: 250,
                ml: 3,
                borderRadius: "0.4375rem",
                boxShadow: "0px 25px 0px -10px #f2f0f0, 0px 0px 2px gray inset",
                mt: 3,
            }}
        >
            <CardContent>
                <Grid container>
                    <Grid item>
                        <IconButton>
                            {cardData.icon}
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" fontWeight={700}>
                            {cardData.value}
                        </Typography>
                        <Typography variant="subtitle2">
                            {cardData.title}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default DashboardCard