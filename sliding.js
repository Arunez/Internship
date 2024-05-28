// Used for the sliding animation present on all the current pages.

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

function toggleAnswer(element) {
    const faqItem = element.parentElement;
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');

    if (faqItem.classList.contains("active")) {
        faqItem.classList.remove("active");
        icon.classList.remove("active");
    } else {
        faqItem.classList.add("active");
        icon.classList.add("active");
    }
}