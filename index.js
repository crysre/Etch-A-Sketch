const containers = document.querySelectorAll(".container");


let gridInput = 0

function returnText(){
    let input = document.getElementById("userInput").value;
    
    gridInput = input;

    if(gridInput > 100){
        alert("Please enter < 100")
    }else{
        containers.forEach(container => {
            for (let i = 0; i < gridInput; i++) {
                const row = document.createElement('div');
                row.classList.add('row');
                row.classList.add('div');
                container.appendChild(row);
            
                
                for (let j = 0; j < gridInput; j++) {
                    const column = document.createElement('div');
                    column.classList.add('column');
                    column.classList.add('div');
                    row.appendChild(column);
                }
            }
            const sRow = document.querySelectorAll(".row");
            sRow.forEach(row=>{
                row.style.height = `${800 / gridInput}px`;
            })
        });
        
        let currentColourIndex = 0;
        const div = document.querySelectorAll(".div")
        const colours = ["#635985", "#443C68", "#393053", "#18122B"]
        
        div.forEach(div => {
            div.addEventListener("mouseover", () => {
                const colour = colours[currentColourIndex];
                div.style.backgroundColor = colour;
                currentColourIndex = (currentColourIndex +1)% colours.length;
            })
        })
    }
    
    }
