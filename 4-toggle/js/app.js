document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.car-toggle-detail');

    for ( const btn of btns ) {
        btn.addEventListener(`click`, function() {
            const car = this.closest(`.car`);
            const carDetail = car.querySelector('.car-detail');

            // Check class and change if needed
            car.classList.toggle('car-show-detail');
            if (car.classList.contains('car-show-detail')) {
                carDetail.style.display = "flex";
                this.innerText = "Schowaj detale";
            } else {
                carDetail.style.display = "none";
                this.innerText = "Pokaż detale";
            }
        })
    }

});