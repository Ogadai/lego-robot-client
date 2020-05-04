
const STORAGE_KEY = 'cards-list';

let lastId = 0;
const createId = () => {
    lastId++;
    return lastId;
}

export const defaultCommands = () => ([
    { id: createId(), text: 'Forwards', type: 'forward', value: 30 },
    { id: createId(), text: 'Backwards', type: 'backward', value: 30 },
    { id: createId(), text: 'Anticlockwise', type: 'left', value: 90 },
    { id: createId(), text: 'Clockwise', type: 'right', value: 90 },
    { id: createId(), text: 'M1 Up', type: 'm1up', value: 10 },
    { id: createId(), text: 'M1 Down', type: 'm1down', value: 10 }
]);

export const cloneCommand = command => ({ ...command, id: createId(), value: command.value || 0 });

export const saveCommands = cards => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};

export const restoreCommands = () => {
    const storageValue = localStorage.getItem(STORAGE_KEY);
    if (storageValue) {
        const restoredCommands = JSON.parse(storageValue);
        return restoredCommands.map(cloneCommand);
    }
    return [];
};
