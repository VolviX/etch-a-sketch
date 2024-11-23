function board() {
    let main = document.querySelector('.container');
    let row = [];
    let column = [];

    for (let i = 1; i < 17; i++) {
        row[i] = document.createElement('div');
        main.appendChild(row[i]);

        for (let j = 1; j < 17; j++) {
            column[j] = document.createElement('div');
            column[j].className = `cell${i}-${j}`;
            row[i].appendChild(column[j]);
        }
    }
}

board();