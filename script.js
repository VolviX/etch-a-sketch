function board() {
    let main = document.querySelector('.main');
    let row = [];
    let column = [];

    for (let i = 0; i < 16; i++) {
        row[i] = document.createElement('div');
        main.appendChild(row[i]);
        console.log(`Row created: ${i}`);

        for (let j = 0; j < 16; j++) {
            column[j] = document.createElement('div');
            row[i].appendChild(column[j]);
            console.log(`Column created: ${j}`);
        }
    }
}

board();