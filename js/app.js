// Insurance constructor
function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}
Insurance.prototype.calculateInsurance = function() {

    let price;
    const basePrice = 2000;
    // Different prices according the selected brand
    switch(this.brand) {
        case '1':
            price = basePrice * 1.15;
            break;
        case '2':
            price = basePrice * 1.05;
            break;
        case '3':
            price = basePrice * 1.35;
            break;
    }
    
    // Current year minus selected year
    const difference = new Date().getFullYear() - this.year;
    // Every year of seniority reduce the insurance price in a 3%
    price -= ((difference * 3) * price) / 100;
    // The price changes depending on the insurance type (basic or premium)
    // Basic is 30% more, and premium is 50%
    if (this.type === 'basic') {
        price *= 1.30;
    } else {
        price *= 1.50;
    }
    return price;
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

// Print the result of calculating the insurance price
Interface.prototype.showResults = function(insurance, price) {
    // Div where the results of the calculation will be displayed
    const result = document.getElementById('resultado');
    let brand;
    switch(insurance.brand) {
        case '1':
            brand = 'American';
            break;
        case '2':
            brand = 'Asian';
            break;
        case '3':
            brand = 'European';
            break;
    }
    // Create div
    const div = document.createElement('div');
    // Insert data
    div.innerHTML = `
        <p>Your data:</p>
        <p>Brand: ${brand}</p>
        <p>Year: ${insurance.year}</p>
        <p>Type: ${insurance.type}</p>
        <p>Total price: ${price} $</p>
    `;
    result.appendChild(div);
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
        // Instantiate insurance object
        const insurance = new Insurance(selectedBrand, selectedYear, type);
        // Calculate insurance
        const price = insurance.calculateInsurance();
        // Show the results
        interface.showResults(insurance, price);
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


