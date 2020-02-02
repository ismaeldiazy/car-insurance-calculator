// Insurance constructor
function Insurance() {

}

// Print select options
const max = new Date().getFullYear(),
    min = max - 20;

const selectYears = document.getElementById('anio');
for(let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectYears.appendChild(option)
}


