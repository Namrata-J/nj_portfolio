'use client';
import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Button,
    Grid,
    Tabs,
    Tab,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import PageTransition from '@/components/PageTransition';
import { projects, Project } from '@/data/content';

const categories = [
    { label: 'All', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Libraries', value: 'library' },
    { label: 'Fun', value: 'fun' },
];

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState('all');

    const filtered: Project[] =
        activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

    return (
        <PageTransition>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography variant="h2" sx={{ mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                        My{' '}
                        <Box component="span" sx={{ color: '#4ECDC4' }}>
                            Projects ({filtered.length})
                        </Box>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
                        A collection of things I&apos;ve built — from full-stack platforms to fun CLI experiments.
                    </Typography>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={(_, v) => setActiveTab(v)}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            mb: 5,
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 500,
                                fontSize: '0.95rem',
                                color: 'text.secondary',
                                minWidth: 'auto',
                                px: 2.5,
                            },
                            '& .Mui-selected': { color: '#4ECDC4' },
                            '& .MuiTabs-indicator': {
                                background: '#4ECDC4',
                                height: 3,
                                borderRadius: 2,
                            },
                        }}
                    >
                        {categories.map((cat) => (
                            <Tab key={cat.value} label={cat.label} value={cat.value} />
                        ))}
                    </Tabs>
                </motion.div>

                {/* Project Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Grid container spacing={4}>
                            {filtered.map((project, index) => (
                                <Grid item xs={12} sm={6} md={4} key={project.title}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.06 }}
                                        style={{ height: '100%' }}
                                    >
                                        <Card
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {/* Placeholder Image with Opaque Overlay */}
                                            <Box sx={{ position: 'relative' }}>
                                                <CardMedia
                                                    component="img"
                                                    height="180"
                                                    image={project?.image}
                                                    alt={project.title}
                                                    sx={{
                                                        borderBottom: '1px solid rgba(255,255,255,0.05)'
                                                    }}
                                                />
                                                {/* Black opaque overlay default position */}
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        inset: 0,
                                                        background: 'rgba(0,0,0,0)',
                                                        transition: 'background 0.3s ease',
                                                        '&:hover': {
                                                            background: 'rgba(0,0,0,0.2)',
                                                        }
                                                    }}
                                                />
                                            </Box>

                                            {/* Gradient accent bar */}
                                            <Box
                                                sx={{
                                                    height: 4,
                                                    background: project.featured
                                                        ? 'linear-gradient(90deg, #FF6B6B, #4ECDC4)'
                                                        : 'rgba(78,205,196,0.5)',
                                                }}
                                            />
                                            <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                                                    <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
                                                        {project.title}
                                                    </Typography>
                                                    {project?.date && (
                                                        <Chip
                                                            label={project.date}
                                                            size="small"
                                                            sx={{
                                                                background: 'rgba(255,107,107,0.15)',
                                                                color: '#FF6B6B',
                                                                fontSize: '0.7rem',
                                                                height: 22,
                                                                fontWeight: 600,
                                                            }}
                                                        />
                                                    )}
                                                </Box>

                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ mb: 3, flex: 1, lineHeight: 1.6 }}
                                                >
                                                    {project.description}
                                                </Typography>

                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mb: 3 }}>
                                                    {project.tech.map((t) => (
                                                        <Chip
                                                            key={t}
                                                            label={t}
                                                            size="small"
                                                            variant="outlined"
                                                            sx={{ fontSize: '0.7rem', height: 24, borderColor: 'rgba(78,205,196,0.3)', color: '#7DF0E8' }}
                                                        />
                                                    ))}
                                                </Box>

                                                <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                                                    {project.preview && (
                                                        <Button
                                                            size="small"
                                                            variant="contained"
                                                            startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                                                            component="a"
                                                            href={project.preview}
                                                            target="_blank"
                                                            sx={{
                                                                fontSize: '0.8rem', py: 0.5, px: 2,
                                                                background: 'linear-gradient(45deg, #4ECDC4 30%, #45B7D1 90%)',
                                                                '&:hover': {
                                                                    background: 'linear-gradient(45deg, #45B7D1 30%, #4ECDC4 90%)',
                                                                }
                                                            }}
                                                        >
                                                            Preview
                                                        </Button>
                                                    )}
                                                    {project.code && project.code?.length > 0 && project.code.map((cd, _i) => (
                                                        <Button
                                                            key={_i}
                                                            size="small"
                                                            variant="outlined"
                                                            startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                                                            component="a"
                                                            href={cd.link}
                                                            target="_blank"
                                                            sx={{
                                                                fontSize: '0.8rem',
                                                                py: 0.5,
                                                                px: 2,
                                                                borderColor: 'rgba(255,255,255,0.2)',
                                                                color: 'text.secondary',
                                                                '&:hover': {
                                                                    borderColor: '#FFE66D',
                                                                    color: '#FFE66D',
                                                                    background: 'rgba(255,230,109,0.05)',
                                                                },
                                                            }}
                                                        >
                                                            {cd.btn}
                                                        </Button>
                                                    ))

                                                    }
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </PageTransition>
    );
}
