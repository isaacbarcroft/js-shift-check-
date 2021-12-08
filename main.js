const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastChecked;

function handleChecked(e) {
    // console.log(e);
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(box => {
            if (box === this || box === lastChecked) {
                inBetween = !inBetween
            }
            if (inBetween) {
                box.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(box => box.addEventListener('click', handleChecked))