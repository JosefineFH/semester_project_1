const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id)

const headerText = document.querySelector('.specific_event_header_text');
const specificEventContent = document.querySelector('.specific_event_content')

const url = `https://josefineholth.one/thesciencemuseum/wp-json/tribe/events/v1/events/${id}?_embed`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let title = data.title;
        let content = data.description
        let image = data.image.url

        let dateDay = data.start_date_details.day;
        let dateMonth = data.start_date_details.month;
        let dateYear = data.start_date_details.year

        let hour = data.start_date_details.hour
        let minute = data.start_date_details.minutes


        headerText.innerHTML = `<h1>${title}</h1>`

        specificEventContent.innerHTML = `
        <div>
            <img src="${image}">
            <h3>${dateDay}.${dateMonth}.${dateYear} - ${hour}:${minute}</h3>
            ${content}
            <div class="price_book">
            <p class="bold">Prize: ${data.cost}</p>
            <a class="event_button" href="#book_event">Book Now</a>
            </div>
        </div>`
    })