'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

export default function NexusBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Severely optimizing particle count and rendering technique for 60fps on mobile
        const numParticles = 250;

        const config = {
            baseZ: 200,
            fov: 300,
            speed: 0.003,
        };

        class Particle {
            x: number;
            y: number;
            z: number;
            initialX: number;
            initialZ: number;
            color: string;
            size: number;

            constructor() {
                this.x = (Math.random() - 0.5) * 3000;
                this.z = (Math.random() - 0.5) * 3000;
                this.y = 0;
                this.initialX = this.x;
                this.initialZ = this.z;

                // Slightly larger to compensate for lower density
                this.size = Math.random() * 2 + 1;

                const r = Math.random();
                if (r > 0.90) this.color = '#7DF0E8'; // Cyan hex
                else if (r > 0.80) this.color = '#8A2BE2'; // Violet hex
                else this.color = '#FFFFFF'; // White hex
            }

            update(time: number) {
                // Slower, smoother forward movement
                this.z -= 1.0;
                if (this.z < -1000) this.z = 2000;

                // Ultra-smooth single ambient wave logic
                const wave1 = Math.sin((this.x * 0.001) + time * 0.8) * 120;
                const wave2 = Math.cos((this.z * 0.002) + time * 0.6) * 120;

                const angle = time * 0.15;
                // Precalculate trig for speed
                const cosA = Math.cos(angle);
                const sinA = Math.sin(angle);

                this.x = this.initialX * cosA - this.initialZ * sinA;

                this.y = wave1 + wave2 + 300; // Lowered further down the viewport
            }

            draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
                const scale = config.fov / (config.fov + this.z + 1000);

                if (scale < 0) return;

                const x2d = (this.x * scale) + (width / 2);
                const y2d = (this.y * scale) + (height / 2) + 50;

                // We calculate opacity but bake it into globalAlpha once
                const depthOpacity = Math.max(0.1, 1 - ((this.z + 1000) / 3000));

                ctx.globalAlpha = depthOpacity;
                ctx.fillStyle = this.color;

                // Fast square rendering instead of slow arc drawing on mobile GPUs
                const s = this.size * scale * 2;
                ctx.fillRect(x2d, y2d, s, s);
            }
        }

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const init = () => {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = (time: number) => {
            const seconds = time * 0.001;

            // HUGE performance gain: strict clearRect instead of alpha-blending fillRect for trails
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw moving galaxy wave
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(seconds);
                particles[i].draw(ctx, canvas.width, canvas.height);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        init();
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                background: '#030303', // Extremely dark gray/black
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
            />
        </Box>
    );
}
