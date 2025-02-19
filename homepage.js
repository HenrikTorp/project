document.addEventListener('DOMContentLoaded', () => {
    const displayArea = document.getElementById('display-area');
    const listItems = document.querySelectorAll('nav ul li');

    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const text = item.getAttribute('data-text');
            const imgSrc = item.getAttribute('data-img');
            displayArea.innerHTML = text;
            if (imgSrc) {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = text;
                img.style.maxWidth = '200px';
                img.style.display = 'block';
                img.style.marginTop = '10px';
                displayArea.appendChild(img);
            }
        });

        item.addEventListener('mouseout', () => {
            displayArea.innerHTML = 'Hover over links to see a short description of them';
        });
    });
});