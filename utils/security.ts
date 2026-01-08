// Security utilities for protecting the website

// Disable console in production
export const disableConsole = () => {
    if (process.env.NODE_ENV === 'production') {
        const noop = () => { };
        const methods = ['log', 'debug', 'info', 'warn', 'error', 'trace', 'dir', 'dirxml', 'group', 'groupCollapsed', 'groupEnd', 'time', 'timeEnd', 'assert', 'profile'];

        methods.forEach(method => {
            (console as any)[method] = noop;
        });
    }
};

// Clear console periodically
export const clearConsole = () => {
    setInterval(() => {
        console.clear();
    }, 1000);
};

// Detect DevTools
export const detectDevTools = (callback: () => void) => {
    const element = new Image();
    let devtoolsOpen = false;

    Object.defineProperty(element, 'id', {
        get: function () {
            devtoolsOpen = true;
            callback();
            throw new Error('DevTools detected');
        }
    });

    setInterval(() => {
        devtoolsOpen = false;
        console.log(element);
        console.clear();
    }, 1000);

    // Alternative detection method
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if (widthThreshold || heightThreshold) {
        callback();
    }

    window.addEventListener('resize', () => {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;

        if (widthThreshold || heightThreshold) {
            callback();
        }
    });
};

// Disable right-click
export const disableRightClick = () => {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
};

// Disable text selection
export const disableTextSelection = () => {
    document.addEventListener('selectstart', (e) => {
        e.preventDefault();
        return false;
    });
};

// Disable keyboard shortcuts
export const disableKeyboardShortcuts = () => {
    document.addEventListener('keydown', (e) => {
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+Shift+C
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            (e.ctrlKey && e.key === 'U') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 'S') ||
            (e.ctrlKey && e.key === 's')
        ) {
            e.preventDefault();
            return false;
        }
    });
};

// Anti-debugging
export const antiDebug = () => {
    setInterval(() => {
        const before = new Date().getTime();
        debugger;
        const after = new Date().getTime();

        if (after - before > 100) {
            // Debugger detected
            window.location.reload();
        }
    }, 1000);
};

// Disable drag and drop
export const disableDragDrop = () => {
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });

    document.addEventListener('drop', (e) => {
        e.preventDefault();
        return false;
    });
};

// Prevent image saving
export const preventImageSaving = () => {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
    }
};

// Obfuscate source code references
export const obfuscateCode = () => {
    // Remove comments and whitespace in production
    if (process.env.NODE_ENV === 'production') {
        const scripts = document.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].src) {
                scripts[i].removeAttribute('src');
            }
        }
    }
};

// Initialize all security measures
export const initSecurity = () => {
    disableConsole();
    clearConsole();
    disableRightClick();
    disableTextSelection();
    disableKeyboardShortcuts();
    disableDragDrop();
    preventImageSaving();

    // Detect DevTools and blur content
    detectDevTools(() => {
        document.body.style.filter = 'blur(10px)';
        document.body.style.pointerEvents = 'none';
    });

    // Anti-debugging (optional - can be aggressive)
    // antiDebug();
};
