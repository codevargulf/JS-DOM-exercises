document.addEventListener('DOMContentLoaded', function() {
    const map = document.querySelector('.map'); // Get map

    // Add markers on map and create 
    for (c of cities) {
        const marker = document.createElement('a');

        marker.href= c.href;
        marker.classList.add('map-marker');
        marker.dataset.name = c.name;
        marker.dataset.population = c.population;
        marker.style.left = c.map_x + "px";
        marker.style.top = c.map_y + "px";
        marker.innerText = c.name;

        map.appendChild(marker);

    }

    // Add tooltip
    const tooltip = document.createElement('div');
    tooltip.classList.add('map-tooltip');
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);


    // Get markers
    const markers = map.querySelectorAll('.map-marker');

    for (const m of markers) {

        // Show tooltip when mouse over 
        m.addEventListener('mouseover', function(e) {
            tooltip.innerHTML = `
                <h2>${this.dataset.name}</h2>
                <div>Population: <strong>${this.dataset.population}</strong></div>
            `;
            tooltip.style.left = e.pageX + 30 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
            tooltip.style.display = "";
        });

        // Move tooltip when mouse moves over marker
        m.addEventListener('mousemove', function(e) {
            tooltip.style.left = e.pageX + 30 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
        })

        // Hide tooltip when mouse out 
        m.addEventListener('mouseout', function() {
            tooltip.innerHTML = '';
            tooltip.style.display = "none";
        });
        
    }

});