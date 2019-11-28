const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const cardContainer = document.querySelector("div.cards");
fetch(requestURL)
    .then(response=>{return response.json()})
    .then(json=>{
        const towns = json["towns"];
        towns.forEach(town=>{
            
            if( town.name == "Fish Haven" || town.name == "Preston" || town.name =="Soda Springs" ) {

            let card = document.createElement("section");
            
            
            let h2 = document.createElement("h2");
            h2.textContent = `${town.name}`;
           
            
            let p = document.createElement("p");
            p.innerHTML = `Motto: ${town.motto}<br>Founded: ${town.yearFounded}<br>Population: ${town.currentPopulation}<br>Avg. Rainfall: ${town.averageRainfall}`;
           



            let image = document.createElement("img");
            image.setAttribute("src", `/lesson11/images/${town.photo}`);
            image.setAttribute("alt", `Picture of ${town.name}`);

           
            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(image);
            
            
            cardContainer.appendChild(card);
            }

        });
    });

  
