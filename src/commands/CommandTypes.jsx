import React, { useState } from 'react'
import { ReactSortable } from "react-sortablejs";

import { defaultCommands, cloneCommand } from './commandStore';
import Command from './Command';
import styles from './CommandTypes.module.css';

const CommandTypes = ({ running }) => {
    const initialCommands = defaultCommands();
    const [types, setTypes] = useState(initialCommands)

    const setTypesGuard = types => {
        if (types.length === initialCommands.length) {
            return setTypes(types);
        }
    };

    return (
        <ReactSortable className={`${styles.types} ${running && styles.running}`}
                list={types} setList={setTypesGuard}
                group={{ name: 'shared', pull: 'clone', put: true }}
                animation={200} sort={false} forceFallback={true}
                clone={cloneCommand}
        >
            {types.map(item => (
                <Command key={item.id} item={item}></Command>
            ))}
        </ReactSortable>
    );
}
export default CommandTypes;
