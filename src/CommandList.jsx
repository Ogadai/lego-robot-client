import React, {useState} from 'react';

import CommandTypes from './commands/CommandTypes';
import Commands from './commands/Commands';
import Control from './control/Control';
import styles from './CommandList.module.css';

function CommandList() {
  const [running, setRunning] = useState(false);

  const startRunning = () => {
    setRunning(true);
  };
  const stopRunning = () => {
    setRunning(false);
  };

  return (
    <div className={styles.commandList}>
      <CommandTypes running={running} />
      <div className={styles.main}>
        <Commands running={running} onFinished={stopRunning} />
        <Control running={running} onStart={startRunning} onStop={stopRunning} />
      </div>
    </div>
  );
}

export default CommandList;
