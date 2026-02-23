'use client';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Avatar,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Code2, Database, Gauge, Wrench, Smartphone, Monitor } from 'lucide-react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);
import { personalInfo, experience, education, skills } from '@/data/content';
import PageTransition from '@/components/PageTransition';
import { getAssetPath } from '@/utils/paths';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const skillCategories = [
  { label: 'Frontend', skills: skills.frontend, color: '#FF6B6B' }, // Pink
  { label: 'Backend', skills: skills.backend, color: '#4ECDC4' }, // Mint
  { label: 'Performance & SEO', skills: skills.performance, color: '#45B7D1' }, // Blue
  { label: 'Tools & More', skills: skills.tools, color: '#FFE66D' }, // Yellow
];

const orbitIcons = [
  <Code2 key="code" color="#FF6B6B" size={24} />,
  <Smartphone key="phone" color="#4ECDC4" size={24} />,
  <Database key="db" color="#FFE66D" size={24} />,
  <Gauge key="perf" color="#45B7D1" size={24} />,
  <Monitor key="monitor" color="#FF8E53" size={24} />,
  <Wrench key="wrench" color="#FFFFFF" size={24} />,
];

// GitHub calendar custom theme to match our funky cute dark theme
const githubTheme = {
  dark: ['#1a162b', '#7DF0E8', '#4ECDC4', '#3DA19A', '#1C746E'],
};

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [githubYear, setGithubYear] = useState<number | 'last'>('last');

  return (
    <PageTransition>
      {/* ─── HERO ─── */}
      <Box
        sx={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          pt: { xs: 16, md: 8 },
          pb: { xs: 16, md: 8 },
        }}
      >
        {/* Overflow wrapper strictly for the background gradient orbs so they don't cause horizontal scroll */}
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          <Box
            component={motion.div}
            animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            sx={{
              position: 'absolute',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,107,107,0.15) 0%, transparent 70%)',
              top: -150,
              right: -100,
              filter: 'blur(60px)',
            }}
          />
          <Box
            component={motion.div}
            animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            sx={{
              position: 'absolute',
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(78,205,196,0.15) 0%, transparent 70%)',
              bottom: 0,
              left: -100,
              filter: 'blur(60px)',
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0}>
                <Link href={personalInfo.social.linkedin} target="_blank" style={{ textDecoration: 'none' }}>
                  <Chip
                    label="✨ Open to opportunities"
                    variant="outlined"
                    clickable
                    sx={{
                      mb: 3,
                      borderColor: 'rgba(255,230,109,0.5)',
                      color: '#FFE66D',
                      backgroundColor: 'rgba(255,230,109,0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(255,230,109,0.15)',
                        borderColor: '#FFE66D',
                      },
                    }}
                  />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.8rem' },
                    lineHeight: 1.15,
                    mb: 2,
                  }}
                >
                  Hi, I&apos;m{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Namrata Jain
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={2}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ mb: 4, fontWeight: 400, maxWidth: 540, lineHeight: 1.6 }}
                >
                  {personalInfo.tagline}
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={3}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    href="/projects"
                    sx={{
                      background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    component="a"
                    href={personalInfo.resumeLink}
                    target="_blank"
                    sx={{
                      borderColor: 'rgba(78,205,196,0.3)',
                      color: '#4ECDC4',
                      '&:hover': { borderColor: '#4ECDC4', background: 'rgba(78,205,196,0.08)' },
                    }}
                  >
                    Resume
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 8, md: 0 }, mb: { xs: 4, md: 0 } }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 150, md: 200 },
                    height: { xs: 150, md: 200 },
                    mx: 'auto',
                  }}
                >
                  {/* Orbiting Icons */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: -30,
                      animation: 'spin 20s linear infinite',
                    }}
                  >
                    {orbitIcons.map((icon, i) => {
                      const angle = (360 / orbitIcons.length) * i;
                      return (
                        <Box
                          key={i}
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: 0,
                            height: 0,
                            transform: `rotate(${angle}deg) translateY(-130px)`,
                          }}
                        >
                          <Box
                            sx={{
                              width: 44,
                              height: 44,
                              margin: '-22px 0 0 -22px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(18,15,31,0.8)',
                              borderRadius: '50%',
                              border: '1px solid rgba(255,255,255,0.1)',
                              animation: 'spin 20s linear infinite reverse',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                            }}
                          >
                            <Box sx={{ transform: `rotate(-${angle}deg)`, display: 'flex' }}>
                              {icon}
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      inset: -6,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #FFE66D, #45B7D1)',
                      animation: 'spin 8s linear infinite',
                      '@keyframes spin': {
                        from: { transform: 'rotate(0deg)' },
                        to: { transform: 'rotate(360deg)' },
                      },
                    }}
                  />
                  <Avatar
                    src={getAssetPath('/profile.jpg')}
                    alt="Namrata Jain"
                    sx={{
                      width: '100%',
                      height: '100%',
                      border: '6px solid #120f1f',
                      position: 'relative',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── ABOUT ─── */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Typography variant="h3" sx={{ mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
            About{' '}
            <Box component="span" sx={{ color: '#FF6B6B' }}>
              Me
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            {personalInfo.bio}
          </Typography>
        </motion.div>
      </Container>

      {/* ─── EXPERIENCE ─── */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
            <WorkIcon sx={{ mr: 2, verticalAlign: 'middle', color: '#45B7D1' }} />
            Experience
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative', pl: { xs: 3, md: 5 } }}>
          {/* timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 10, md: 18 },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, #45B7D1, transparent)',
            }}
          />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Box sx={{ mb: 4, position: 'relative' }}>
                {/* dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: -23, md: -37 },
                    top: 8,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: '#45B7D1',
                    boxShadow: '0 0 12px rgba(69,183,209,0.5)',
                  }}
                />
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: 1, color: '#45B7D1' }}>
                      {exp.period}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 0.5 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                      {exp.company}
                      {exp.companyNote && (
                        <Box component="span" sx={{ color: '#FF6B6B', ml: 1 }}>
                          ({exp.companyNote})
                        </Box>
                      )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                      {exp.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {exp.tech.map((t) => (
                        <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: 'rgba(69,183,209,0.2)' }} />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* ─── SKILLS ─── */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
            Skills &{' '}
            <Box component="span" sx={{ color: '#4ECDC4' }}>
              Technologies
            </Box>
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((cat, catIndex) => (
            <Grid item xs={12} sm={6} md={3} key={cat.label}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.15 }}
              >
                <Card sx={{ height: '100%', borderColor: `rgba(${cat.color === '#FF6B6B' ? '255,107,107' : cat.color === '#4ECDC4' ? '78,205,196' : '255,230,109'},0.3)` }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: cat.color,
                        fontWeight: 600,
                      }}
                    >
                      {cat.label}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {cat.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIndex * 0.1 + i * 0.03 }}
                        >
                          <Chip
                            label={skill}
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: `${cat.color}44`,
                              '&:hover': {
                                borderColor: cat.color,
                                background: `${cat.color}15`,
                              },
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ─── GITHUB CONTRIBUTIONS ─── */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
              <GitHubIcon sx={{ mr: 2, verticalAlign: 'middle', color: '#FFE66D' }} />
              GitHub <Box component="span" sx={{ color: '#FFE66D' }}>Contributions</Box>
            </Typography>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel sx={{ color: 'text.secondary' }}>Year</InputLabel>
              <Select
                value={githubYear}
                label="Year"
                onChange={(e) => setGithubYear(e.target.value as number | 'last')}
                sx={{
                  color: 'white',
                  '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.2)' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFE66D' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
                }}
              >
                <MenuItem value="last">Last Year</MenuItem>
                <MenuItem value={2026}>2026</MenuItem>
                <MenuItem value={2025}>2025</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Card>
            <CardContent sx={{ p: { xs: 2, md: 4 }, display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, pb: 1 }}>
                <GitHubCalendar
                  username="Namrata-J"
                  year={githubYear}
                  colorScheme="dark"
                  theme={githubTheme}
                  fontSize={isMobile ? 10 : 12}
                  blockSize={isMobile ? 8 : isTablet ? 10 : 12}
                  blockMargin={isMobile ? 2 : 4}
                />
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>

      {/* ─── EDUCATION ─── */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
            <SchoolIcon sx={{ mr: 2, verticalAlign: 'middle', color: '#FF6B6B' }} />
            Education
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={edu.year}
                      size="small"
                      sx={{
                        mb: 2,
                        background: 'rgba(255,107,107,0.1)',
                        color: '#FF6B6B',
                        fontWeight: 600,
                      }}
                    />
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.school}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ─── CTA ─── */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Let&apos;s work{' '}
            <Box component="span" sx={{ color: '#4ECDC4' }}>
              together
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}>
            Have an idea or project in mind? I&apos;d love to hear about it.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            component={Link}
            href="/contact"
            sx={{
              mb: 6,
              background: 'linear-gradient(45deg, #4ECDC4 30%, #45B7D1 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #45B7D1 30%, #4ECDC4 90%)',
                boxShadow: '0 3px 15px rgba(78,205,196,0.4)',
              }
            }}
          >
            Get in Touch
          </Button>
        </motion.div>
      </Box>
    </PageTransition>
  );
}
