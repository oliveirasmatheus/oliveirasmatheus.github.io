(()=>{
    document.addEventListener("DOMContentLoaded", function () {
        var toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
        var navbar = document.getElementById('navbar-sticky');
    
        toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('hidden'); // Toggle the 'hidden' class
        });
    
        document.addEventListener('click', function(event) {
            var isClickInsideNavbar = navbar.contains(event.target);
            var isToggleButton = toggleButton.contains(event.target);
    
            if (!isClickInsideNavbar && !isToggleButton) {
                navbar.classList.add('hidden');
            }
        });
    
    });
    
    
    
    document.addEventListener('DOMContentLoaded', function() {
        const accordionButtons = document.querySelectorAll('.accordion-button');
    
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
    
                if (targetContent.classList.contains('hidden')) {
                    targetContent.classList.remove('hidden');
                    this.setAttribute('aria-expanded', 'true');
                } else {
                    targetContent.classList.add('hidden');
                    this.setAttribute('aria-expanded', 'false');
                }
            });
        });
    });
})()
