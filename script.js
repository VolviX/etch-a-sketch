function board() {
    main.replaceChildren(); // Clear previous rows and cells
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        main.appendChild(row);

        for (let j = 0; j < 16; j++) {
            const column = document.createElement('div');
            column.className = 'cell';
            row.appendChild(column);
        }
    }
}

const main = document.querySelector('.container');
main.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('cell')) {
        event.target.style.backgroundColor = 'pink';
    }
});

const resize = document.querySelector('.resize');
resize.addEventListener('click', board);

board();
