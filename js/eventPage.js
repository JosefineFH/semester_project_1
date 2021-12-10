console.log('events ')

const url = 'https://josefineholth.one/thesciencemuseum/wp-json/tribe/events/v1/events?_embed';
const events = document.querySelector('.event')

fetch(url)
.then(response => response.json())
.then(data => {
    let postData = data.events;
    console.log(postData)
    postData.forEach(posts => {
        let dateDay = posts.start_date_details.day;
        let dateMonth = posts.start_date_details.month;
        let dateYear = posts.start_date_details.year;
        let postTitle = posts.title;
        let image = posts.image.url;
        let postId = posts.id
        console.log(image)

        
        events.innerHTML += `
        <div id="professor_of_aeronautics">
                    <p class="date">${dateDay}.${dateMonth}.${dateYear}</p>
                    <h2>${postTitle}</h2>
                    <div class="book_event">
                        <p class="bold">Prize: ${posts.cost}</p>
                        <a class="event_button" href="/specificEvents.html?id=${postId}">Read More</a>
                    </div>
                </div>
                <div class="image_content">
                    <img src="${image}" alt="Space X rocket">
                </div>
            </div>`
    });
})