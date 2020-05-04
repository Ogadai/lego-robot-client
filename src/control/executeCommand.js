const waitFn = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 1000);
    });
}

export const executeCommand = async ({type, value}) => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`${type} (${value})`);
        await waitFn();
    } else {
        await fetch(`/${type}/${value}`);
    }
};
