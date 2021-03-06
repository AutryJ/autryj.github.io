
const requestURL = 'https://autryj.github.io/ldstempleinnsuites/lds.json';
const cardContainer = document.querySelector("div.cards");
fetch(requestURL)
    .then(response=>{return response.json()})
    .then(json=>{
        
        const temples = json["temples"];
        console.log(temples);
        temples.forEach(temple=>{
            
            if( temple.city == "San Diego" || temple.city == "Rome" || temple.city =="Salt Lake City" || temple.city == "Paris" ) {

            let card = document.createElement("section");
            
            
            let h2 = document.createElement("h2");
            h2.textContent = `${temple.city}, ${temple.state}`;
           
            
            let p = document.createElement("p");
            p.innerHTML = `Address: ${temple.address}<br>Dedicated: ${temple.history}<br>Services: ${temple.services}<br>Contact: ${temple.telephone}<br>Email: ${temple.email}<br>Upcoming Closures:<br> ${temple.closure[0]}<br>${temple.closure[1]}<br><br>Schedule: <br><input type="date"><br><br>`;
            
           



            let image = document.createElement("img");
            image.setAttribute("src", `/ldstempleinnsuites/images/${temple.photo}`);
            image.setAttribute("alt", `Picture of ${temple.city}`);

          

           
            card.appendChild(h2);
            card.appendChild(p);
           card.appendChild(image);
           
            
            
            cardContainer.appendChild(card);
            }

        });
    });

  
