![alt text](https://github.com/annieclinton/met-random-art/blob/main/met.png)

# Welcome to the Met 

This interactive web application offers users a unique experience to explore random artworks from the Metropolitan Museum of Art's public database. Each time the user clicks the "Get Art" button, the application fetches a random image of an artwork.

**Link to project:** https://welcome-to-the-met.netlify.app

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Met Museum API

This web application is crafted using HTML for structure, CSS for styling, and JavaScript for API interactions and dynamic content management.

The JavaScript logic orchestrates API requests to the Met Museum's public collection API, retrieves a random object ID, and then fetches detailed data about that particular artwork, including its image. This process is handled asynchronously, ensuring a smooth user experience without page reloads.

## Optimizations

- Error Handling Enhancements: More sophisticated error handling to manage cases where artwork data might not include an image, ensuring the application always presents a valid artwork.
- User Interaction Feedback: Adding loading indicators and animations to give users feedback while data is being fetched, especially useful if network responses are delayed.


## Lessons Learned:

Developing this project provided deeper insights into working with external APIs and handling JSON data effectively. It highlighted the importance of error handling, particularly in scenarios where external data might not always meet expected criteria (e.g., missing images).

Additionally, the project underscored the need for efficient DOM manipulation in JavaScript to dynamically update content based on fetched data. 