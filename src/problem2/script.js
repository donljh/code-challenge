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