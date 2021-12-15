console.log('events ')

const url = 'https://josefineholth.one/thesciencemuseum/wp-json/tribe/events/v1/events?_embed';
const events = document.querySelector('.event')

fetch(url)
    .then(response => response.json())
    .then(data => {
        let eventData = data.events;
        console.log(eventData)
        eventData.forEach(event => {
            let dateDay = event.start_date_details.day;
            let dateMonth = event.start_date_details.month;
            let dateYear = event.start_date_details.year;
            let eventTitle = event.title;
            let image = event.image.url;
            let eventId = event.id
            let eventDescription = event.excerpt;
            console.log(image)


            events.innerHTML += `
        <div>
            <div class="image_content">
             <img src="${image}" alt="Space X rocket">
            </div>
            <div>
                <p class="date">${dateDay}.${dateMonth}.${dateYear}</p>
                <h2>${eventTitle}</h2>
                <div class="description">${eventDescription}</div>
                <div class="book_event">
                    <p class="bold">Prize: ${event.cost}</p>
                    <a class="event_button" href="/specificEvents.html?id=${eventId}">Read More</a>
                </div>
            </div>
        </div>`
        });
    })