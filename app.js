
let buttons = document.getElementsByClassName('accordion-btn');

[...buttons].forEach(function(btn) {
    btn.addEventListener('click', function() {
        let groups = btn.parentElement.parentElement.children;
        let isOpen = btn.classList.contains('rotate');


        [...groups].forEach(function(group){
            if (group.classList.contains('accordion-group')) {
                
                [...group.children].forEach(function(el){
                    if (el.classList.contains('accordion-list')) {
                        if ( !(el.classList.contains('collapse'))) {
                            el.classList.add('collapse');
                            el.parentElement.firstElementChild.classList.remove('rotate');
                        }
                    }
                })
            }
        });
        if (isOpen) {
            btn.classList.remove('rotate');
            btn.nextElementSibling.classList.add('collapse');
        } else {
            btn.classList.add('rotate');
            btn.nextElementSibling.classList.remove('collapse');
        }
    });
});
