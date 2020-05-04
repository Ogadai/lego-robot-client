import React from 'react'
import styles from './Command.module.css';

const CommandType = ({item, valueChanged, selected, onClick}) => {
    const onValueChanged = (event) => {
        const value = parseInt(event.target.value) || '';
        valueChanged(value);
    }

    const onValueBlur = () => {
        if (item.value === '') {
            valueChanged(0);
        }
    }

    return (
        <div className={`${styles.command} ${styles[item.type]} ${selected && styles.selected}`} onClick={onClick}>
            <div className={`${styles.container}`}>
                <div className={styles.icon}>&nbsp;</div>
                <div className={styles.label}>{item.text}</div>
                <div className={styles.editor}>
                    <input alt="Action" value={item.value} onChange={onValueChanged} disabled={!valueChanged} onBlur={onValueBlur} />
                </div>
            </div>
        </div>
    );
};

export default CommandType;
