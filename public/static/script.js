document.querySelector('#forward_button').addEventListener('click', () => {
    fetch('/forward/30');
})
document.querySelector('#backward_button').addEventListener('click', () => {
    fetch('/backward/30');
})
document.querySelector('#left_button').addEventListener('click', () => {
    fetch('/left/90');
})
document.querySelector('#right_button').addEventListener('click', () => {
    fetch('/right/90');
})
document.querySelector('#m1up_button').addEventListener('click', () => {
    fetch('/m1up/10');
})
document.querySelector('#m1down_button').addEventListener('click', () => {
    fetch('/m1down/10');
})
