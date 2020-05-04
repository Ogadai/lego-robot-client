import React, { useState } from 'react';

import styles from './FullScreen.module.css';

function FullScreen() {
    const [isFullScreen, setFullScreen] = useState(document.fullscreenElement);

    const fullScreen = () => {
        setFullScreen(true);
        document.querySelector('#root').requestFullscreen();
    };
    const restore = () => {
        setFullScreen(false);
        document.exitFullscreen();
    };

    return (
        <button
            className={isFullScreen ? styles.restore : styles.fullScreen}
            onClick={isFullScreen ? restore : fullScreen}
        >
            &nbsp;
        </button>
    );
}

export default FullScreen;
