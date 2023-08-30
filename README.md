# TravelSpotter
 **A web application designed to help travelers discover exciting destinations around the world. **
 
 The APP adopts MVC pattern which makes it more organized, maintainable and scalable.
 
 Users can create accounts, log in, and then manage sightseeing spot details, including names, descriptions, locations, images and price. Additionally, they can add, update, and delete these 
 information. Furthermore, users can also contribute, edit and delete reviews for these spots.
 
 The app also features a cluster map, enabling users to easily visualize the number of tourist attractions within a particular region. Users can zoom in or out on the map to explore the area 
 and access relevant details.
## MEN Stack
- MongoDB
- Express.js
- Node.js
  Next step, I will use React to modify the frontend.
## Frontend: HTML, CSS, Javascript, Bootstrap
## What I did for this APP?
### Error handlers: Async errors and express built-in errors
### CRUD travel spots and reviews
### Authentication & Authorization
- Joi： authenticate vacation destinations, reviews;
- connect-mongo: middleware that stores Express sessions in a MongoDB database, with "touchAfter" indicating that session data should only be updated after this time, helping to reduce database load;
- Passport: Node.js middleware for authentication and authorization. LocalStrategy strategy: local authentication based on a username and password; req.isAuthenticated() verify if the provided username and password match. If the match is successful, Passport stores user information in the session for identifying the user in future requests; User serialization and deserialization, where serialization converts the user object into a storable identifier, typically a unique identifier like an ID, and deserialization retrieves the user object from the session identifier, typically an ID, and adds it to the req.user property. The "author" field is added to ensure that only the author can delete or update a post and review.
###
