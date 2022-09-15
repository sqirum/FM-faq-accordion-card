let buttons = document.getElementsByClassName('accordion-btn');
console.log(buttons);
[...buttons].forEach(function(e) {
    e.addEventListener('click', function() {
        e.nextElementSibling.classList.toggle('collapse');
    });
} );

