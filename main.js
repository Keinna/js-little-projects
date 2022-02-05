// url to fake data https://jsonplaceholder.typicode.com/users

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardsContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

// runs every time input is changed
// e -> want to get the value of the input
searchInput.addEventListener('input', (e) =>{
 const value = e.target.value
 console.log(value)
})


// fetch data and turn response into json and get data
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data=> {
    data.forEach(user => {
    // get the content inside our template and clone the content. Returns a document fragment. Tu use the content in the
    // fragement you need to get the first child. -> .children [0]
    const card = userCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector('[data-header]')
    const body = card.querySelector('[data-body]')
    header.textContent = user.name
    body.textContent = user.email
    userCardsContainer.append(card) 
    });

})