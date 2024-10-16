document.addEventListener("DOMContentLoaded", function() {
    const tableContainer = document.getElementById('periodic-table');

    // Načtení dat z JSON souboru
    fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
        .then(response => response.json())
        .then(data => {
            const elements = data.elements;
            
            // Iterace přes prvky a jejich vložení do gridu
            elements.forEach(element => {
                const elementDiv = document.createElement('div');
                elementDiv.classList.add('element');
                
                // Přidání třídy podle kategorie prvku
                if (element.category.includes("solid")) {
                    elementDiv.classList.add('solid');
                } else if (element.category.includes("liquid")) {
                    elementDiv.classList.add('liquid');
                } else if (element.category.includes("gas")) {
                    elementDiv.classList.add('gas');
                } else {
                    elementDiv.classList.add('unknown');
                }

                // Další kategorie podle rodiny prvků
                if (element.category.includes("alkali metal")) {
                    elementDiv.classList.add('alkali');
                } else if (element.category.includes("alkaline earth metal")) {
                    elementDiv.classList.add('alkaline');
                } else if (element.category.includes("transition metal")) {
                    elementDiv.classList.add('transition');
                } else if (element.category.includes("lanthanoid")) {
                    elementDiv.classList.add('lanthanoid');
                } else if (element.category.includes("actinoid")) {
                    elementDiv.classList.add('actinoid');
                } else if (element.category.includes("metalloid")) {
                    elementDiv.classList.add('metalloid');
                } else if (element.category.includes("nonmetal")) {
                    elementDiv.classList.add('nonmetal');
                } else if (element.category.includes("halogen")) {
                    elementDiv.classList.add('halogen');
                } else if (element.category.includes("noble gas")) {
                    elementDiv.classList.add('noble');
                }

                elementDiv.innerHTML = `
                    <div class="number">${element.number}</div>
                    <div class="symbol">${element.symbol}</div>
                    <div class="name">${element.name}</div>
                `;

                // Nastavení stylů pozice na základě periodické tabulky
                elementDiv.style.gridColumnStart = element.xpos;
                elementDiv.style.gridRowStart = element.ypos;

                tableContainer.appendChild(elementDiv);
            });
        })
        .catch(error => console.error('Chyba při načítání dat:', error));
});
