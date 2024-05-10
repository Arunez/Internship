const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function hideShowElement(elementId) {
    var element = document.getElementById(elementId);
    var display = 0;

    function toggleDisplay() {
        if (display === 1) {
            element.style.display = 'block';
            display = 0;
        } else {
            element.style.display = 'none';
            display = 1;
        }
    }

    toggleDisplay();

    return toggleDisplay;
}

var hideShowDiv = hideShowElement('hide');

document.getElementById('toggleButton').addEventListener('click', function() {
    hideShowDiv();
});