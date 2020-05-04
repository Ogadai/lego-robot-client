import React, { useRef, useEffect, useState } from 'react'
import styles from './Control.module.css';
import setupClient from './lego-client';

const Control = ({ running, onStart, onStop }) => {
    const [videoOn, setVideoOn] = useState(false);
    const videoCanvas = useRef();
    useEffect(() => {
        if (!videoOn) {
            setupClient(videoCanvas.current);
            setVideoOn(true);
        }
    });

    return (
        <div className={styles.control}>
            <div className={styles.buttons}>
                {!running && <button className={styles.btnStart} onClick={onStart}>Go</button>}
                {running && <button className={styles.btnStop} onClick={onStop}>Stop</button>}
            </div>
            <canvas className={styles.video} ref={videoCanvas} />
        </div>
    );
};

export default Control;
