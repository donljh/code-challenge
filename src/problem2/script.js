const cells = document.querySelectorAll('.otp-cell');
console.log(cells.length);

cells.forEach((cell, idx) => {
    cell.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            cells[idx].value = ''
            setTimeout(() => cells[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => cells[idx - 1].focus(), 10)
        }
    })
})

const toasts = document.querySelector('#toasts');
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const amountInput = document.querySelector('#input-amount');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createToastNotification(amountInput.value);
    inputs.forEach((input) => input.value = '');
})

function createToastNotification(amount) {
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerText = `${amount} ETH successfully sent!`

    toasts.appendChild(toast)

    setTimeout(() => {
        toast.remove();
    }, 3000)
}