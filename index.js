const container = document.querySelectorAll(".container")

for(let i = 0; i<=16; i++){
    container.innerHTML += '<div class="row" ></div>'
}

const row = document.querySelectorAll(".row")

for(let i = 0; i<=16; i++){
    row.innerHTML += '<div class = "column" ></div'>
};