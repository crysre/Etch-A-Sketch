const containers = document.querySelectorAll(".container");

containers.forEach(container => {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        
        for (let j = 0; j < 16; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
});
