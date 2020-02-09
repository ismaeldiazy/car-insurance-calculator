// Insurance constructor
function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// GUI constructor
function Interface() {}

// EventListeners
const form = document.getElementById('cotizar-seguro');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Read the selected brand from the selector
    const brand = document.getElementById('marca');
    const selectedBrand = brand.options[brand.selectedIndex].value

    // Read the year
    const year = document.getElementById('anio');
    const selectedYear = year.options[year.selectedIndex].value

    // Read value from radio button
    const type = document.querySelector('input[name=tipo]:checked').value;

    // Create interface instance
    const interface = new Interface()

    // Check that fields are not empty
    if (selectedBrand === '' || selectedYear === '' || type === '') {
        console.log('Faltan datos');
    }else {
        console.log('Tot be my dude');
    }
} )

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


