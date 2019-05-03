document.addEventListener('DOMContentLoaded', function() {
    const tab = document.querySelector('.tab');
    const tabs = tab.querySelectorAll('.tab-link');

    for (const tab of tabs) {
        tab.addEventListener('click', function(e) {
            e.preventDefault() // Prevent reload

            // Set active link
            const elements = this.parentElement.parentElement.children;

            for (const li of elements) {
                li.classList.remove('tab-el-active');
            }

            this.parentElement.classList.add('tab-el-active');

            // Set active content
            const el = document.querySelector(this.getAttribute('href'));
            const tabContens = el.parentElement.children;

            for (let content of tabContens) {
                content.classList.remove('tab-content-active');
            }

            el.classList.add('tab-content-active');
        });
    }

});