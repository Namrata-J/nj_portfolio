'use client';
import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { personalInfo } from '@/data/content';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 10,
                pt: 4,
                pb: 3,
                background: 'rgba(18, 15, 31, 0.6)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}
        >
            <Container maxWidth="lg">
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)', mb: 3 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Namrata Jain. Crafted with ❤️
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {[
                            { icon: <GitHubIcon fontSize="small" />, href: personalInfo.social.github, color: '#F8F9FA' },
                            { icon: <LinkedInIcon fontSize="small" />, href: personalInfo.social.linkedin, color: '#45B7D1' },
                            { icon: <TwitterIcon fontSize="small" />, href: personalInfo.social.twitter, color: '#4ECDC4' },
                            { icon: <InstagramIcon fontSize="small" />, href: personalInfo.social.instagram, color: '#FF6B6B' },
                            { icon: <EmailIcon fontSize="small" />, href: `mailto:${personalInfo.email}`, color: '#FFE66D' },
                        ].map((social, i) => (
                            <IconButton
                                key={i}
                                component="a"
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{
                                    color: 'text.secondary',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        color: social.color,
                                        transform: 'translateY(-3px) scale(1.1)',
                                    },
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
