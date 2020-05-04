import React, { useState } from 'react'
import { ReactSortable } from "react-sortablejs";

import { executeCommand } from '../control/executeCommand';
import { saveCommands, restoreCommands } from './commandStore';
import Command from './Command';
import styles from './Commands.module.css';

const Commands = ({running, onFinished}) => {
    const [cards, setCardsState] = useState(restoreCommands());
    const [current, setCurrent] = useState(-1);

    React.useEffect(() => {
        if (running) {
            if (current >= cards.length) {
                setCurrent(-1);
                if (onFinished) onFinished();
            } else if (current >= 0) {
                executeCommand(cards[current]).then(() => {
                    setCurrent(current + 1);
                });
            } else {
                setCurrent(0);
            }
         }
    }, [running, current, cards, setCurrent, onFinished]);

    const setCards = newCards => {
        setCurrent(-1);
        saveCommands(newCards);
        return setCardsState(newCards);
    };

    const commandValueChanged = (id, value) => {
        setCards(cards.map(c => (c.id === id) ? {...c, value} : c));
    }

    const clearCommands = () => {
        setCards([]);
    };

    return (
        <div className={`${styles.commands} ${running && styles.running}`}>
            <ReactSortable className={styles.sortable}
                    list={cards} setList={setCards}
                    group={'shared'} animation={200}
                    forceFallback={true}
            >
                {cards.map((item, i) => (
                    <Command key={item.id} item={item}
                        selected={current === i}
                        valueChanged={value => commandValueChanged(item.id, value)}
                        onClick={() => setCurrent(i)}
                    ></Command>
                ))}
            </ReactSortable>
            {cards.length > 0 && <button className={styles.clearBtn} onClick={clearCommands}>X</button>}
        </div>
    )
}
export default Commands
