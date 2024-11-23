function board() {
    const row = [];
    const column = [];

    for (let i = 0; i < 16; i++) {
        row[i] = document.createElement('div');
        main.appendChild(row[i]);

        for (let j = 0; j < 16; j++) {
            column[j] = document.createElement('div');
            column[j].className = 'cell';
            row[i].appendChild(column[j]);
        }
    }
}

const main = document.querySelector('.container');

main.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('cell')) {
        event.target.style.backgroundColor = 'pink';
    }
});

board();
