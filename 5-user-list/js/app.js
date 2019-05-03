document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputName = form.querySelector('input[name="name"]');
        const inputPhone = form.querySelector('input[name="phone"]');

        // Check if values aren't empty strings
        if (inputName.value !== "" && inputPhone.value !== "") {
            // Create new user
            const li = document.createElement('li');
            li.classList.add('user');
            // Set template
            let template = `
                <div class="user-data">
                    <div class="user-name">{{name}}</div>
                    <div class="user-phone">{{phone}}</div>
                </div>
                <button type="button" class="btn user-delete">
                    Usuń
                </button>
            `;
            // Asign correct variables to templates
            template = template.replace('{{name}}', inputName.value);
            template = template.replace('{{phone}}', inputPhone.value);
            // Asign template to new element 
            li.innerHTML = template;


            // Append with HTML
            document.querySelector('.user-list').appendChild(li);


            // Reset for a new User
            inputName.value = "";
            inputPhone.value = "";
            
        }
    });

    // Remove user 
    document.querySelector('.user-list').addEventListener('click', function(e) {
        if (e.target.parentElement.parentElement.classList.contains('user-list') && e.target.classList.contains('user-delete')) {
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        }
    });

});