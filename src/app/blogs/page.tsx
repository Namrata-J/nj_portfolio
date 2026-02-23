'use client';
import React from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Chip,
    Button,
    Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PageTransition from '@/components/PageTransition';
import { blogs, personalInfo } from '@/data/content';

export default function BlogsPage() {
    return (
        <PageTransition>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography variant="h2" sx={{ mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                        My{' '}
                        <Box component="span" sx={{ color: '#FFE66D' }}>
                            Blog
                        </Box>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 600 }}>
                        Thoughts, tutorials, and deep-dives into web development concepts. Published on Hashnode.
                    </Typography>
                    <Button
                        variant="outlined"
                        startIcon={<RssFeedIcon />}
                        component="a"
                        href={personalInfo.social.hashnode}
                        target="_blank"
                        sx={{
                            mb: 5,
                            borderColor: 'rgba(255,230,109,0.4)',
                            color: '#FFE66D',
                            '&:hover': { borderColor: '#FFE66D', background: 'rgba(255,230,109,0.08)' },
                        }}
                    >
                        Visit Hashnode Profile
                    </Button>
                </motion.div>

                {/* Blog Cards */}
                <Grid container spacing={4}>
                    {blogs.map((blog, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{ height: '100%' }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        textDecoration: 'none',
                                        '&:hover .blog-arrow': {
                                            transform: 'translate(4px, -4px)',
                                            color: '#FFE66D',
                                        },
                                    }}
                                    component="a"
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* accent bar */}
                                    <Box
                                        sx={{
                                            height: 4,
                                            background: `linear-gradient(90deg, #FFE66D, #FF6B6B)`,
                                        }}
                                    />
                                    <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                                                <CalendarTodayIcon sx={{ fontSize: 14 }} />
                                                <Typography variant="caption">{blog.date}</Typography>
                                            </Box>
                                            <OpenInNewIcon
                                                className="blog-arrow"
                                                sx={{ fontSize: 18, color: 'text.secondary', transition: 'all 0.3s' }}
                                            />
                                        </Box>

                                        <Typography variant="h5" sx={{ mb: 1.5, lineHeight: 1.4, fontWeight: 700 }}>
                                            {blog.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flex: 1, lineHeight: 1.7 }}>
                                            {blog.description}
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {blog.tags.map((tag) => (
                                                <Chip
                                                    key={tag}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        fontSize: '0.75rem',
                                                        height: 24,
                                                        background: 'rgba(255,230,109,0.1)',
                                                        color: '#FFE66D',
                                                        border: '1px solid rgba(255,230,109,0.2)',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA */}
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            More articles coming soon ✍️
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 400, mx: 'auto' }}>
                            I write about web development, programming concepts, and software engineering in general.
                        </Typography>
                    </motion.div>
                </Box>
            </Container>
        </PageTransition>
    );
}
