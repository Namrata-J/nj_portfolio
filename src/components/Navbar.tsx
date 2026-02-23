'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Paintings', href: '/paintings' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <AppBar position="fixed" elevation={0} sx={{ background: 'rgba(18, 15, 31, 0.8)', backdropFilter: 'blur(10px)' }}>
                <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: '"Outfit", sans-serif',
                                fontWeight: 700,
                                color: '#FF6B6B', // Pink logo
                                fontSize: '1.5rem',
                                letterSpacing: 1,
                            }}
                        >
                            NJ.
                        </Typography>
                    </Link>

                    {isMobile ? (
                        <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                                        <Box
                                            component={motion.div}
                                            whileHover={{ y: -2 }}
                                            sx={{
                                                position: 'relative',
                                                px: 2,
                                                py: 1,
                                                borderRadius: 2,
                                                color: isActive ? '#4ECDC4' : 'text.secondary', // Mint green active
                                                fontWeight: isActive ? 600 : 500,
                                                fontSize: '0.95rem',
                                                transition: 'color 0.2s',
                                                '&:hover': { color: '#FF6B6B' }, // Pink hover
                                            }}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-underline"
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: '20%',
                                                        right: '20%',
                                                        height: 3,
                                                        background: '#4ECDC4',
                                                        borderRadius: 2,
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Link>
                                );
                            })}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: '70vw',
                        maxWidth: 300,
                        background: 'rgba(18, 15, 31, 0.95)',
                        backdropFilter: 'blur(20px)',
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.primary' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                            <ListItem key={link.href} disablePadding>
                                <Link href={link.href} style={{ textDecoration: 'none', width: '100%' }} onClick={() => setDrawerOpen(false)}>
                                    <ListItemButton
                                        component={motion.div}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.08 }}
                                        sx={{
                                            py: 2,
                                            px: 4,
                                            color: isActive ? '#4ECDC4' : 'text.secondary',
                                            borderLeft: isActive ? '4px solid' : '4px solid transparent',
                                            borderColor: isActive ? '#4ECDC4' : 'transparent',
                                            '&:hover': {
                                                background: 'rgba(255, 107, 107, 0.08)',
                                                color: '#FF6B6B',
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={link.label}
                                            primaryTypographyProps={{
                                                fontWeight: isActive ? 600 : 500,
                                                fontSize: '1.1rem',
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>

            {/* Spacer for fixed AppBar */}
            <Toolbar />
        </>
    );
}
