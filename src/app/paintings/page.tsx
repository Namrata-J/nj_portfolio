'use client';
import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    Grid,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import BrushIcon from '@mui/icons-material/Brush';
import PageTransition from '@/components/PageTransition';
import { paintings, personalInfo } from '@/data/content';

export default function PaintingsPage() {
    const [selectedPainting, setSelectedPainting] = useState<number | null>(null);

    return (
        <PageTransition>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography variant="h2" sx={{ mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                        <BrushIcon sx={{ mr: 2, verticalAlign: 'middle', color: '#FF6B6B' }} />
                        My{' '}
                        <Box
                            component="span"
                            sx={{ color: '#FF6B6B' }}
                        >
                            Paintings
                        </Box>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 600 }}>
                        Beyond code, I express myself through art. Here&apos;s a collection of my paintings under the brand &quot;artwithease&quot;.
                    </Typography>
                    <Button
                        variant="outlined"
                        startIcon={<InstagramIcon />}
                        component="a"
                        href={personalInfo.social.instagram}
                        target="_blank"
                        sx={{
                            mb: 5,
                            borderColor: 'rgba(255,107,107,0.4)',
                            color: '#FF6B6B',
                            '&:hover': { borderColor: '#FF6B6B', background: 'rgba(255,107,107,0.1)' },
                        }}
                    >
                        @artwithease on Instagram
                    </Button>
                </motion.div>

                {/* Masonry-like gallery */}
                <Grid container spacing={3}>
                    {paintings.map((painting, index) => {
                        const heights = [320, 420, 360, 380, 440, 310];
                        const h = heights[index % heights.length];
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setSelectedPainting(index)}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            height: h,
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            border: '2px solid rgba(255,255,255,0.05)',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                border: '2px solid rgba(255,107,107,0.5)',
                                                boxShadow: '0 12px 40px rgba(255,107,107,0.15)',
                                            },
                                            '&:hover .painting-overlay': {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={painting.image}
                                            alt={painting.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        {/* overlay */}
                                        <Box
                                            className="painting-overlay"
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to top, rgba(18,15,31,0.95) 0%, transparent 70%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                p: 3,
                                            }}
                                        >
                                            <Typography variant="h5" sx={{ mb: 0.5, fontWeight: 700, color: '#F8F9FA' }}>
                                                {painting.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#4ECDC4' }}>
                                                {painting.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>

                {/* Lightbox Dialog */}
                <AnimatePresence>
                    {selectedPainting !== null && (
                        <Dialog
                            open
                            onClose={() => setSelectedPainting(null)}
                            maxWidth="lg"
                            fullWidth
                            PaperProps={{
                                sx: {
                                    background: 'rgba(18,15,31,0.95)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '20px',
                                },
                            }}
                        >
                            <IconButton
                                onClick={() => setSelectedPainting(null)}
                                sx={{ position: 'absolute', top: 12, right: 12, color: 'text.primary', zIndex: 1, background: 'rgba(0,0,0,0.5)' }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent sx={{ p: 0 }}>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
                                >
                                    <Box sx={{ flex: 1, background: '#0a0812', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={paintings[selectedPainting].image}
                                            alt={paintings[selectedPainting].title}
                                            style={{
                                                width: '100%',
                                                maxHeight: '80vh',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ width: { xs: '100%', md: 350 }, p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <Typography variant="h4" sx={{ mb: 2, color: '#FF6B6B' }}>{paintings[selectedPainting].title}</Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                            {paintings[selectedPainting].description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </DialogContent>
                        </Dialog>
                    )}
                </AnimatePresence>
            </Container>
        </PageTransition>
    );
}
