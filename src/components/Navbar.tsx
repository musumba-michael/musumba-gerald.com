import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavItem } from "../types";

const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                component={motion.div}
                animate={{
                    backgroundColor: isScrolled
                        ? theme.palette.background.paper
                        : "transparent",
                    boxShadow: isScrolled ? theme.shadows[4] : "none",
                }}
                sx={{ transition: "all 0.3s" }}
            >
                <Toolbar>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button
                            color="primary"
                            sx={{
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                textTransform: "none",
                            }}
                        >
                            GM
                        </Button>
                    </motion.div>

                    <Box sx={{ flexGrow: 1 }} />

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", gap: 2 }}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Button
                                        color="inherit"
                                        href={item.href}
                                        sx={{
                                            "&:hover": {
                                                color: "primary.main",
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <List>
                    {navItems.map((item) => (
                        <ListItem
                            key={item.label}
                            component="a"
                            href={item.href}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
