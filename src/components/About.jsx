import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const canvasRef = useRef(null);
  const aboutRef = useRef(null);
  const [slideIn, setSlideIn] = useState(false);

  // Connecting dots background (same as before)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const DOTS_COUNT = 60;
    const MAX_DISTANCE = 120;
    const dots = [];
    for (let i = 0; i < DOTS_COUNT; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / MAX_DISTANCE})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Slide-in animation on scroll
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSlideIn(true);
        else setSlideIn(false);
      },
      { threshold: 0.15 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <canvas ref={canvasRef} className="background-canvas" />
      <div
        ref={aboutRef}
        className={`about-content slideanim${slideIn ? " slide" : ""}`}
      >
        <h2 className="about-title">About Godspeed</h2>
        <p>
          At Godspeed, we empower founders to build, scale and grow their startups with cutting-edge AI-powered technology, a resourceful network, and a dedicated concierge service. Whether you are an early-stage entrepreneur or an experienced leader, we provide a 360° support system across technology, talent, and business-eliminating the chaos that often comes with startup journeys. We want the experimenter to experiment, innovate to innovate and the visionary to serve their vision, without tech, time, expertise, knowledge, high costs and lost opportunities being their hurdles anymore. Hence we are not only making next-gen engineering tools available to all, we are also working closely with select tech orgs in helping them modernize in 11x way to become effective, faster and agile.
        </p>
      </div>
    </section>
  );
};

export default About;
