'use client';
import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PageTransition from '../../components/PageTransition';
import { personalInfo } from '../../data/content';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

const socialLinks = [
    { icon: <GitHubIcon />, label: 'GitHub', href: personalInfo.social.github, color: '#F8F9FA' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: personalInfo.social.linkedin, color: '#45B7D1' },
    { icon: <TwitterIcon />, label: 'Twitter', href: personalInfo.social.twitter, color: '#4ECDC4' },
    { icon: <InstagramIcon />, label: 'Instagram', href: personalInfo.social.instagram, color: '#FF6B6B' },
    { icon: <EmailIcon />, label: 'Email', href: `mailto:${personalInfo.email}`, color: '#FFE66D' },
];

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <PageTransition>
            <Container maxWidth="md" sx={{ py: 8 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                        Get in{' '}
                        <Box component="span" sx={{ color: '#45B7D1' }}>
                            Touch
                        </Box>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}>
                        I&apos;m always open to new opportunities, collaborations, or just a friendly chat.
                        Reach out through any of the platforms below!
                    </Typography>
                </motion.div>

                <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card sx={{ mb: 4, background: 'rgba(18,15,31,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, textAlign: 'center' }}>
                                    Let&apos;s Connect
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                                    Find me across the internet
                                </Typography>

                                <Grid container spacing={2}>
                                    {socialLinks.map((link, index) => (
                                        <Grid item xs={12} sm={6} key={link.label}>
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + index * 0.05 }}
                                            >
                                                <Box
                                                    component="a"
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                        p: 2,
                                                        borderRadius: 3,
                                                        textDecoration: 'none',
                                                        color: 'text.secondary',
                                                        border: '1px solid rgba(255,255,255,0.05)',
                                                        background: 'rgba(255,255,255,0.02)',
                                                        transition: 'all 0.3s',
                                                        '&:hover': {
                                                            background: 'rgba(255,255,255,0.05)',
                                                            borderColor: `${link.color}55`,
                                                            color: link.color,
                                                            transform: 'translateY(-3px)',
                                                            boxShadow: `0 4px 20px ${link.color}11`,
                                                        },
                                                    }}
                                                >
                                                    <IconButton
                                                        sx={{
                                                            background: `${link.color}15`,
                                                            color: link.color,
                                                            transition: 'all 0.3s',
                                                        }}
                                                        size="small"
                                                    >
                                                        {link.icon}
                                                    </IconButton>
                                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{link.label}</Typography>
                                                </Box>
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>

                        {/* Direct Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Card
                                sx={{
                                    background: 'linear-gradient(135deg, rgba(255,230,109,0.1) 0%, rgba(255,107,107,0.05) 100%)',
                                    border: '1px solid rgba(255,230,109,0.2)',
                                    borderRadius: 4
                                }}
                            >
                                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
                                        Prefer direct email?
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#FFE66D',
                                                fontWeight: 600,
                                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                                letterSpacing: 0.5
                                            }}
                                        >
                                            {personalInfo.email}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={copyToClipboard}
                                            startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
                                            sx={{
                                                color: '#FFE66D',
                                                borderColor: 'rgba(255,230,109,0.4)',
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                '&:hover': {
                                                    borderColor: '#FFE66D',
                                                    background: 'rgba(255,230,109,0.1)'
                                                }
                                            }}
                                        >
                                            {copied ? 'Copied!' : 'Copy'}
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </Box>
            </Container>
        </PageTransition>
    );
}