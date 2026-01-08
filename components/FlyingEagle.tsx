import React, { useEffect, useState } from 'react';

const FlyingEagle: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: 20 });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const animateEagle = () => {
            const duration = 15000; // 15 seconds to fly across
            const startTime = Date.now();
            const startX = -100;
            const endX = window.innerWidth + 100;
            const amplitude = 50; // How much the eagle moves up and down

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / duration;

                if (progress < 1) {
                    const x = startX + (endX - startX) * progress;
                    const y = 20 + Math.sin(progress * Math.PI * 3) * amplitude; // Sine wave for up/down motion

                    setPosition({ x, y });
                    requestAnimationFrame(animate);
                } else {
                    // Reset after flying across
                    setTimeout(() => {
                        setPosition({ x: -100, y: 20 });
                        animateEagle();
                    }, 5000); // Wait 5 seconds before next flight
                }
            };

            animate();
        };

        animateEagle();
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-50 transition-opacity duration-1000"
            style={{
                left: `${position.x}px`,
                top: `${position.y}%`,
                opacity: isVisible ? 0.6 : 0,
            }}
        >
            <div className="relative animate-pulse">
                {/* Eagle emoji with shadow effect */}
                <div className="text-6xl md:text-8xl filter drop-shadow-[0_0_20px_rgba(191,149,63,0.5)]">
                    🦅
                </div>
            </div>
        </div>
    );
};

export default FlyingEagle;
