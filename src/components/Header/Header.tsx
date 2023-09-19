import { NotificationsNone, ChatBubbleOutline, LoginOutlined, Menu } from "@mui/icons-material";
import { AppBar, Toolbar, Box, Grid, Button, Badge, FormControl, Select, MenuItem, IconButton, useMediaQuery, useTheme, InputBase, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/images";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#dbdbdb",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "dark",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

interface Props {
    name: string;
}

const Header = (props: Props) => {

    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleLogout = () => {
        navigate("/login");
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const renderMenuIcon = () => {
        if (isMobile) {
            return (
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        mr: 2,
                        ...(isDrawerOpen && { display: "none" }),
                        color: "black", // Set the color to black
                    }}
                >
                    <Menu />
                </IconButton>
            );
        }

        return null;
    };

    return (
        <AppBar position="fixed" sx={{ background: "#f9f9f9" }}>
            <Toolbar>
                {renderMenuIcon()}
                <img
                    src={Images.taptapLogo}
                    width="50px"
                    height="50px"
                    alt="Taptap Logo"
                />
                <Search sx={{ ml: 2 }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Here"
                        inputProps={{ "aria-label": "search" }}
                        sx={{ width: "500px" }}
                    />
                </Search>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Grid sx={{ m: 1 }}>
                        <Button
                            sx={{
                                background: "#dbdbdb",
                                color: "black",
                                borderRadius: "10px",
                            }}
                            onClick={() => {
                                navigate("/studentranking");
                            }}
                        >
                            Student Ranking
                        </Button>
                    </Grid>

                    <Button
                        size="large"
                        aria-label="show 4 new mails"
                        sx={{ color: "black" }}
                    >
                        <Badge
                            sx={{
                                background: "#dbdbdb",
                                color: "black",
                                padding: "5px",
                                borderRadius: "10px",
                            }}
                        >
                            {/* <MailIcon /> */}
                            <NotificationsNone
                                onClick={() => alert("Balckbucks Notifactions here...")}
                            />
                        </Badge>
                    </Button>

                    <Button aria-label="notifications" sx={{ color: "black" }}>
                        <Badge
                            sx={{
                                background: "#dbdbdb",
                                color: "black",
                                padding: "5px",
                                borderRadius: "10px",
                            }}
                        >
                            <ChatBubbleOutline
                                onClick={() => alert("Balckbuscks Messages here...")}
                            />
                        </Badge>
                    </Button>

                    <FormControl sx={{ mr: 3, ml: 3 }}>
                        <Select
                            defaultValue="Adarsh"
                            sx={{
                                width: "200px",
                                background: "white",
                                borderRadius: "20px",
                                border: "none",
                            }}
                        >
                            <MenuItem value="Adarsh">
                                <img
                                    src={Images.taptapLogo}
                                    alt="#Error"
                                    width="15px"
                                    height="15px"
                                />{" "}
                                {props.name || "Adarsh Tomar"}
                            </MenuItem>
                            <MenuItem>
                                <Button
                                    onClick={handleLogout}
                                    variant="contained"
                                    sx={{
                                        color: "white",
                                        background: "red",
                                        ml: 2,
                                        borderRadius: "15px",
                                        fontWeight: "bold",
                                        "&:hover": { background: "red" },
                                    }}
                                >
                                    <LoginOutlined sx={{ mr: "10px" }}></LoginOutlined>Sign Out
                                </Button>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

export default Header;