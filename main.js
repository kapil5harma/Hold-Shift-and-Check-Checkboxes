const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

function handleClick(e) {
    console.log('e: ', e);

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));