import { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    const particlesArray = [];
    const numberOfParticles = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 1 - 0.5) * 0.8;
        this.speedY = (Math.random() * 1 - 0.5) * 0.8;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Ekrandan çıkınca diğer taraftan girmesi (Sonsuzluk hissi)
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = "rgba(0, 240, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);
              
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(112, 0, 255, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    let draggedParticle = null;

    const handleMouseDown = (e) => {
      const mouseX = e.clientX || e.touches?.[0].clientX;
      const mouseY = e.clientY || e.touches?.[0].clientY;
      
      if (mouseX === undefined || mouseY === undefined) return;

      let minDistance = 40 * 40; // 40px radius to grab a node
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distSq = dx * dx + dy * dy;
        if (distSq < minDistance) {
          minDistance = distSq;
          draggedParticle = p;
        }
      }

      if (draggedParticle) {
        document.body.style.cursor = 'grabbing';
        // Stop its original momentum to make dragging smoother
        draggedParticle.speedX = 0;
        draggedParticle.speedY = 0;
      }
    };

    const handleMouseUp = () => {
      if (draggedParticle) {
        // Give it a new random speed when released
        draggedParticle.speedX = (Math.random() * 1 - 0.5) * 0.8;
        draggedParticle.speedY = (Math.random() * 1 - 0.5) * 0.8;
        draggedParticle = null;
        document.body.style.cursor = 'default';
      }
    };

    const handleMouseMove = (e) => {
      const currentX = e.clientX || e.touches?.[0].clientX;
      const currentY = e.clientY || e.touches?.[0].clientY;
      
      if (currentX === undefined || currentY === undefined) return;

      if (draggedParticle) {
        draggedParticle.x = currentX;
        draggedParticle.y = currentY;
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleMouseDown, { passive: true });
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleMouseMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        // Only update position if it's not being dragged
        if (particlesArray[i] !== draggedParticle) {
          particlesArray[i].update();
        }
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0.8
      }}
    />
  );
};

export default Background;
