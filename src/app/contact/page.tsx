'use client';
import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Grid,
    IconButton,
    Snackbar,
    Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import dynamic from 'next/dynamic';
import emailjs from '@emailjs/browser';
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

const inputSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: 3,
        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
        '&.Mui-focused fieldset': { borderColor: '#45B7D1' },
        background: 'rgba(18,15,31,0.5)',
    },
    '& .MuiInputLabel-root': { color: 'text.secondary' },
};

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Note: These are placeholder IDs. 
            // The user will need to replace them or I will provide instructions.
            await emailjs.send(
                'service_portfolio',
                'template_contact',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'namratajain29001@gmail.com',
                },
                'YOUR_PUBLIC_KEY'
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <PageTransition>
            <Container maxWidth="lg" sx={{ py: 6 }}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography variant="h2" sx={{ mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
                        Get in{' '}
                        <Box component="span" sx={{ color: '#45B7D1' }}>
                            Touch
                        </Box>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 600 }}>
                        Have a question, project idea, or just want to say hello? I&apos;d love to hear from you.
                    </Typography>
                </motion.div>

                <Grid container spacing={5}>
                    {/* Contact Form */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card>
                                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                                        Send a Message
                                    </Typography>
                                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                                        <TextField
                                            label="Your Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            sx={inputSx}
                                        />
                                        <TextField
                                            label="Your Email"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            sx={inputSx}
                                        />
                                        <TextField
                                            label="Your Message"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            multiline
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            sx={inputSx}
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            disabled={status === 'loading'}
                                            endIcon={<SendIcon />}
                                            sx={{
                                                alignSelf: 'flex-start',
                                                background: 'linear-gradient(45deg, #45B7D1 30%, #4ECDC4 90%)',
                                                '&:hover': {
                                                    background: 'linear-gradient(45deg, #4ECDC4 30%, #45B7D1 90%)',
                                                    boxShadow: '0 3px 15px rgba(69,183,209,0.4)',
                                                }
                                            }}
                                        >
                                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    {/* Social Links & Info */}
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card sx={{ mb: 4 }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                                        Let&apos;s Connect
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                                        Find me across the internet
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        {socialLinks.map((link, index) => (
                                            <motion.div
                                                key={link.label}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + index * 0.08 }}
                                            >
                                                <Box
                                                    component="a"
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2.5,
                                                        p: 2,
                                                        borderRadius: 3,
                                                        textDecoration: 'none',
                                                        color: 'text.secondary',
                                                        border: '1px solid rgba(255,255,255,0.05)',
                                                        transition: 'all 0.3s',
                                                        '&:hover': {
                                                            background: 'rgba(255,255,255,0.03)',
                                                            borderColor: `${link.color}55`,
                                                            color: link.color,
                                                            transform: 'translateX(8px)',
                                                            boxShadow: `0 4px 20px ${link.color}22`,
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
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Direct Email Card */}
                            <Card
                                sx={{
                                    background: 'linear-gradient(135deg, rgba(255,230,109,0.1) 0%, rgba(255,107,107,0.05) 100%)',
                                    border: '1px solid rgba(255,230,109,0.2)',
                                }}
                            >
                                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                                        Prefer email?
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#FFE66D',
                                                fontWeight: 600,
                                                fontSize: '1.1rem',
                                            }}
                                        >
                                            {personalInfo.email}
                                        </Typography>
                                        <IconButton
                                            size="small"
                                            onClick={copyToClipboard}
                                            sx={{ color: '#FFE66D' }}
                                            title="Copy to clipboard"
                                        >
                                            {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                                        </IconButton>
                                    </Box>
                                    {copied && (
                                        <Typography variant="caption" sx={{ color: '#4ECDC4', mt: 1, display: 'block' }}>
                                            Copied to clipboard!
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Feedback Notifications */}
                <Snackbar
                    open={status === 'success'}
                    autoHideDuration={6000}
                    onClose={() => setStatus('idle')}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => setStatus('idle')}
                        severity="success"
                        variant="filled"
                        sx={{
                            width: '100%',
                            background: 'linear-gradient(45deg, #4ECDC4 30%, #45B7D1 90%)',
                            color: 'white',
                            '& .MuiAlert-icon': { color: 'white' }
                        }}
                    >
                        Message sent successfully! I&apos;ll get back to you soon.
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={status === 'error'}
                    autoHideDuration={6000}
                    onClose={() => setStatus('idle')}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => setStatus('idle')}
                        severity="error"
                        variant="filled"
                        sx={{ background: '#FF6B6B', color: 'white', '& .MuiAlert-icon': { color: 'white' } }}
                    >
                        Oops! Something went wrong. Please try again or email me directly.
                    </Alert>
                </Snackbar>
            </Container>
        </PageTransition>
    );
}