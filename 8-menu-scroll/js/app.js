document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector(".nav");
    const li = nav.querySelectorAll('li');
    const links = nav.querySelectorAll("a");

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Delete class active or add active
            for (const el of li) {
                el.classList.remove("nav-el-active");
            }
            this.parentElement.classList.add("nav-el-active");

            // Get element shown by a 
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            // Scroll to element 
            target.scrollIntoView({
                behavior : 'smooth',
                block : 'start'
            });
        })
    }
});