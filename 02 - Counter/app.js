// Valor inicial 
let count = 0;
// selecionando valor e botões
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (click) {
        const styles = click.currentTarget.classList;

        // Condicionais para incrementação (+1) e decrementação (-1)    
        if (styles.contains("decrease")) {
            count--; // (-1)
        } else if (styles.contains("increase")) {
            count++; // (+1)
        } else {
            count = 0; // Reset
        }
        // Condicionais para alterar a cor do contador
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});