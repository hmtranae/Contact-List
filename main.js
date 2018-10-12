// Get user input element
const filterInput = document.querySelector('#filter');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value that user input
    let filterValue = filterInput.value;

    // Get all names in contact list
    var names = document.querySelectorAll('li.contact-name');

    for (var i = 0; i < names.length; i++) {
        // Get link inside names
        var anchorName = names[i].querySelector('a');
        if (anchorName.innerHTML.toUpperCase().includes(filterValue.toUpperCase())) {
            names[i].style.display = 'block';
        } else {
            names[i].style.display = 'none';
        }
    }
}