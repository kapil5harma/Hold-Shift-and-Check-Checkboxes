const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleClick(e) {
  console.log("e: ", e);
  let inBetween = false;

  // Check if we have Shift key pressed.
  // && Check that we are checking it.
  if (e.shiftKey && this.checked) {
    // Go ahead and do what we please.
    // Loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between.");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", handleClick);
});
