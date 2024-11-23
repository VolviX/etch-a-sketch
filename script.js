function board(max) {
    main.replaceChildren(); // Clear previous rows and cells
    for (let i = 0; i < max; i++) {
        const row = document.createElement('div');
        main.appendChild(row);

        for (let j = 0; j < max; j++) {
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
resize.addEventListener('click', () => {

    while (true) {
        const userInput = prompt('Enter the desired canvas size between 1 and 100: ');

        if (userInput >= 1 && userInput <= 100) {
            board(userInput);
            break;
        } else {
            alert('The input must be between 1 and 100');
        }
    }
});

board();
