import React, { useRef, useEffect } from 'react'
import styles from './Control.module.css';
import setupClient from './lego-client';

const Control = ({ running, onStart, onStop }) => {
    const videoCanvas = useRef();
    useEffect(() => {
        setupClient(videoCanvas.current);
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
