// TODO: add code here
window.addEventListener("load", ()=>{
//     Make a GET request using fetch to the astronauts API https://handlers.education.launchcode.org/static/astronauts.json
// Do this part inside the load event handler.
// Add each astronaut returned to the web page.
// Use the HTML template shown below.
// Be sure to use the exact HTML including the CSS classes. (starter code contains CSS definitions)


    const astronautFetch = fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    astronautFetch.then((response)=>{
        const jsonAstronautFetch = response.json();
        jsonAstronautFetch.then((json)=>{
            //container.innerHTML 
            //console.log(json)
            json.forEach((key)=>{
                //console.log(key["firstName"])
                let astroTemplate = `
                <div class="astronaut">
                <div class="bio">
                    <h3>${key["firstName"]} ${key["lastName"]}</h3>
                        <ul>
                            <li>Hours in space: ${key["hoursInSpace"]}</li>
                            <li>Active: ${key["active"]}</li>
                            <li>Skills: ${key["skills"]}</li>
                        </ul>
                </div>
                <img class="avatar" src="${key["picture"]}">
                </div>
                `
                // appending inner html is just concat - https://www.geeksforgeeks.org/how-to-append-html-code-to-a-div-using-javascript/
                container.innerHTML += astroTemplate
            })
        
        })

    })


})