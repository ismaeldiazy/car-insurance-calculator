// Insurance constructor
function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// GUI constructor
function Interface() {}

// Error message that is shown on the DOM
Interface.prototype.showError = function(message, type) {
    const div = document.createElement('div');

    if (type == 'error') {
        div.classList.add('error', 'message');
    } else {
        div.classList.add('correcto', 'message');
    }
    div.innerHTML = `${message}`
    form.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function() {
        // Remove alert after time out
        document.querySelector('.message').remove()
    }, 3000);
}

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
        interface.showError('One or more fields are empty. Please, check the form and try again.', 
        'error');
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


