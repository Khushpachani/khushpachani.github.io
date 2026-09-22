import React, { useEffect, useRef } from "react";

const GLYPHS = 'アカサタナハマヤラワ0123456789ABCDEF<>/{}[]#$%&*';

// Faint falling-glyph background drawn on a fixed canvas behind the page.
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fontSize = 16;
    let columns: number[] = [];
    let frame = 0;
    let rafId = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Array(Math.ceil(canvas.width / fontSize))
        .fill(0)
        .map(() => Math.floor(Math.random() * -60));
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const draw = () => {
      rafId = requestAnimationFrame(draw);
      // Throttle to ~20fps; the effect doesn't need more and it saves battery.
      if (frame++ % 3 !== 0) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      columns.forEach((y, i) => {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillStyle = Math.random() > 0.975 ? '#d1ffe0' : '#00ff66';
        ctx.fillText(char, i * fontSize, y * fontSize);
        columns[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };

    resize();
    window.addEventListener('resize', resize);
    if (!reduceMotion) draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}

export default MatrixRain;
