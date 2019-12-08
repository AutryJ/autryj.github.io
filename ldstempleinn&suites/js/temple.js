const requestURL = 'ldstempleinn&suites/lds.json';
const cardContainer = document.querySelector("div.cards");
fetch(requestURL)
    .then(response=>{return response.json()})
    .then(json=>{
        console.log
        const temples = json["temples"];
        temples.forEach(temples=>{
            
            if( temple.city == "San Diego" || temple.city == "Rome" || temple.city =="Salt Lake City" || temple.city == "Paris" ) {

            let card = document.createElement("section");
            
            
            let h2 = document.createElement("h2");
            h2.textContent = `${temple.city} + ${temple.state}`;
           
            
            let p = document.createElement("p");
            p.innerHTML = `Address: ${temple.address}<br>Dedicated: ${temple.history}<br>Services: ${temple.services}<br>Contact: ${temple.phone}`;
           



           // let image = document.createElement("img");
           // image.setAttribute("src", `/lesson11/images/${town.photo}`);
            //image.setAttribute("alt", `Picture of ${town.name}`);

           
            card.appendChild(h2);
            card.appendChild(p);
           // card.appendChild(image);
            
            
            cardContainer.appendChild(card);
            }

        });
    });

  
