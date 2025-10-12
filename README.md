Temple website connected to MongoDB for storing and updating temple events.

Demo Video (https://youtu.be/Z4-n8ioOBgo)

## Images
### Home Page
| Home Page Img | Home Page Img |
|-----------|------------|
| ![Home](assets/homePage1.png) | ![Home](assets/homePage2.png) |
### About Us Page
| About Us Img | About Us Img |
|-----------|------------|
| ![About Us](assets/aboutUs1.png) | ![About Us](assets/aboutUs2.png) |
### Temple Services Page
| Temple Services Img | Temple Services Img |
|-----------|------------|
| ![Temple Services](assets/templeServices1.png) | ![Temple Services](assets/templeServices2.png) |
### Events / Add Events Pages
| Events Img | Add Events Img |
|-----------|------------|
| ![Events](assets/events1.png) | ![Add Events](assets/addEvents1.png) |
### Responsive Design for Phone
![Add Events](assets/phoneView1.png)

## Features 
- View temple timings, values, services, events, and stay connected to temple's socials
- Dynamic event management 
- Responsive design depending on screen size

##  API Endpoints
| Route | Method | Description |
|--------|---------|-------------|
| `/` | GET | home page |
| `/about-us` | GET | about us page |
| `/temple-services` | GET | temple services page |
| `/priests` | GET | priests page |
| `/events` | GET | Retrieve all temple events |
| `/add-events` | POST | Add a new event |
| `/add-events/:description` | DELETE | Delete an event by its description |

## Tech-stack
- Frontend: HTML, CSS, JavaScript (or React, etc.)
- Backend: Node.js, Express.js
- Database: MongoDB



