import React, { useEffect } from 'react';
import { initSecurity } from '../utils/security';

interface SecurityWrapperProps {
    children: React.ReactNode;
}

const SecurityWrapper: React.FC<SecurityWrapperProps> = ({ children }) => {
    useEffect(() => {
        // Initialize all security measures
        initSecurity();

        // Additional protection: detect if running in iframe
        if (window.self !== window.top) {
            window.top!.location.href = window.self.location.href;
        }

        // Prevent console manipulation
        Object.freeze(console);

        // Monitor for suspicious activity
        let clickCount = 0;
        const resetClickCount = () => { clickCount = 0; };

        document.addEventListener('click', () => {
            clickCount++;
            if (clickCount > 100) {
                console.clear();
                clickCount = 0;
            }
        });

        setInterval(resetClickCount, 5000);

        // Cleanup
        return () => {
            document.removeEventListener('click', resetClickCount);
        };
    }, []);

    return <>{children}</>;
};

export default SecurityWrapper;
