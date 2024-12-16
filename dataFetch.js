// const url ='https://api.quotable.io/random?_limit=10';

// async function getData(){
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }
// getData();

const url='https://jsonplaceholder.typicode.com/posts?_limit=10';

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = item.title;

        const body = document.createElement('p');
        body.textContent = item.body;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();
