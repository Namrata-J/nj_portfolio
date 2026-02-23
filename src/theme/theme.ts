'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF6B6B', // Soft Pink
            light: '#FF9999',
            dark: '#CC5555',
        },
        secondary: {
            main: '#4ECDC4', // Mint Green
            light: '#7DF0E8',
            dark: '#3DA19A',
        },
        info: {
            main: '#45B7D1', // Soft Blue
        },
        warning: {
            main: '#FFE66D', // Soft Yellow
        },
        background: {
            default: '#120f1f', // Dark deep purple-blue base
            paper: '#1a162b', // Slightly lighter container
        },
        text: {
            primary: '#F8F9FA',
            secondary: '#BDBDBD',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontFamily: '"Outfit", "Inter", sans-serif', fontWeight: 700 },
        h2: { fontFamily: '"Outfit", "Inter", sans-serif', fontWeight: 700 },
        h3: { fontFamily: '"Outfit", "Inter", sans-serif', fontWeight: 600 },
        h4: { fontFamily: '"Outfit", "Inter", sans-serif', fontWeight: 600 },
        h5: { fontFamily: '"Outfit", "Inter", sans-serif', fontWeight: 500 },
        h6: { fontFamily: '"Outfit", "Inter", sans-serif', fontWeight: 500 },
        button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
        borderRadius: 16, // Softer, rounder corners
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '10px 24px',
                    boxShadow: 'none',
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                    color: '#fff',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #FF8E53 30%, #FF6B6B 90%)',
                        boxShadow: '0 3px 15px rgba(255, 107, 107, 0.4)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(26, 22, 43, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: 20,
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                },
                outlined: {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'rgba(18, 15, 31, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                },
            },
        },
    },
});

export default theme;
