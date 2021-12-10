console.log('this is special events only')

const url = 'https://josefineholth.one/thesciencemuseum/wp-json/tribe/events/v1/events?_embed';
const events = document.querySelector('.events');

fetch(url)
.then(response => response.json())
.then(data => {
    let postData = data.events;
    // console.log(postData)
    postData.forEach(posts => {
        let postTitle = posts.title;
        let featuredImage = posts.image.url
        let dateDay = posts.start_date_details.day;
        let dateMonth = posts.start_date_details.month;
        let dateYear = posts.start_date_details.year

        let postId = posts.id
        
        events.innerHTML += `
        <div class="card">
        <a href="/specificEvents.html?id=${postId}">
        <img src="${featuredImage}" alt="${postTitle}">
        <h5>${dateDay}.${dateMonth}.${dateYear}</h5>
            <h4 class="event_name">${postTitle}</h4>
        </a>
    </div>
        `
    });
})