# TravelSpotter
 **A web application designed to help travelers discover exciting destinations around the world.**
 
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
Frontend: HTML, CSS, Javascript, Bootstrap
## Implementation of the APP
### Error handlers: Async errors and express built-in errors
### CRUD travel spots and reviews
### Authentication & Authorization
- Joi： authenticate vacation destinations, reviews;
- connect-mongo: middleware that stores Express sessions in a MongoDB database, with "touchAfter" indicating that session data should only be updated after this time, helping to reduce database load;
- Passport: Node.js middleware for authentication and authorization. LocalStrategy strategy: local authentication based on a username and password; req.isAuthenticated() verify if the provided username and password match. If the match is successful, Passport stores user information in the session for identifying the user in future requests; User serialization and deserialization, where serialization converts the user object into a storable identifier, typically a unique identifier like an ID, and deserialization retrieves the user object from the session identifier, typically an ID, and adds it to the req.user property. The "author" field is added to ensure that only the author can delete or update a post and review.
### Image upload and storage
- Multer is a Node.js middleware for handling file uploads. Multer can: Receive file upload requests from clients, Save uploaded files to a specified directory or cloud storage service (such as Amazon S3 or Cloudinary), Provide information about uploaded files, such as file names, sizes, and types, Validate the type and size of uploaded files to ensure they meet the application's requirements, Provide a straightforward way to handle multiple file upload requests.
- Cloudinary： Configure Cloudinary, including CLOUDINARY_CLOUD_NAME, CLOUDINARY_KEY, and CLOUDINARY_SECRET(.env); Set up the Multer middleware to define the upload location and accepted formats (jpeg, png, jpg), which will upload images to Cloudinary
### Add Maps
- MapBox
### Security Issues
- Use Mongo-sanitize middleware to prevent MongoDB injection attacks. This middleware detects potentially harmful MongoDB operators (e.g., $, .) in incoming request data and replaces or removes them to prevent security vulnerabilities. sanitize-html is employed to sanitize HTML input, specifically ignoring HTML scripts.
- The Helmet middleware enhances security by setting HTTP headers to mitigate common web security vulnerabilities, such as Content Security Policy (CSP) headers that allow defining which content can be loaded into web pages to reduce the risk of cross-site scripting (XSS) attacks. Joi is used to trigger errors if the sanitized value differs from the original value.
### Deploy
- For development environments, use an .env file.
- For production environments, either manually set environment variables in the Heroku app or configure them using the terminal.
### MONGO
- In the Development and testing phase, I use a local database. Use Mongoose to connect MongoDB with Node.js, using a connection string like 'mongodb://127.0.0.1:27017/db-name'. Event listeners are set up to handle errors and log database connection status as 'Database Connected' for feedback on the connection state.
- In the production stage (deployment), I switch to using a remote MongoDB server, MongoDB Atlas, which can be found at https://www.mongodb.com/products/platform/cloud.
### Front-end
- ejs；JavaScript files are inserted into HTML
- EJSMate: work with layouts and partials, making it easier to organize and reuse template code.
### Flash
- Display notifications to users, such as success messages or error messages.
### RESTful
- express.urlencoded({ extended: true }) is an Express.js built-in middleware for handling form data in HTTP POST requests. It parses incoming requests from the client, extracts form data, and places it in the req.body object. Setting extended: true allows parsing of complex form data, including nested objects.
- override method: Express.js middleware. Used to support HTTP request method overriding. Since HTTP has only GET and POST methods, we can override requests with _method=PUT/DELETE.

