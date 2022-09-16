let buttons = document.getElementsByClassName('accordion-btn');

[...buttons].forEach(function(btn) {
    btn.addEventListener('click', function() {
        
        let groups = btn.parentElement.parentElement.children;

        [...groups].forEach(function(group){
            if (group.classList == 'accordion-group') {
                
                [...group.children].forEach(function(ul){
                    if (ul.classList.contains('accordion-list')) {
                        if( !(ul.classList.contains('collapse'))) {
                            ul.classList.add('collapse');
                            ul.classList.add('d-none');
                        } else {
                            
                        }
                    }
                })
            }
        });
        btn.classList.add('rotate');
        btn.nextElementSibling.classList.toggle('d-none');
        btn.nextElementSibling.classList.toggle('collapse');
    });
} );

