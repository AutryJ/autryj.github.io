const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cardContainer = document.querySelector("div.cards");
fetch(requestURL)
    .then(response=>{return response.json()})
    .then(json=>{
        const prophets = json["prophets"];
        prophets.forEach(prophet=>{

            let card = document.createElement("section");
            
            
            let h2 = document.createElement("h2");
            h2.textContent = `${prophet.name}  ${prophet.lastname}`;
           
            
            let p = document.createElement("p");
            p.innerHTML = `Date of Birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}`;
           
            

            let image = document.createElement("img");
            image.setAttribute("src", prophet.imageurl);
            image.setAttribute("alt", `Picture of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
           
           
            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(image);
            
            
            cardContainer.appendChild(card);
        });
    });

  
