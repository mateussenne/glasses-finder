# README
** **WIP** ** This project is still under development.
## Take or upload your photo, receive the results!
The goal is to create an application to help people that can't decide which glasses to buy. The app scans the face and gives a few options of glasses stored on our database that might look good on the detected face shape. 

The application will process your photo by converting the image to a base64 string before connecting to the [Faceshape API](https://github.com/Dudu197/faceshape-api). After analyzing the results of the API, we will display glasses that matches the face format with purchase links.

At the moment, all glasses content are mocked, so recomendations are not as relevant as might be in the future.

There will be a roadmap with more features and bug corrections soon.

## Simple as two clicks

<p>Select a photo from your files or take it right away:</p>
<img width="600" alt="image" src="https://github.com/mateussenne/glasses-finder/assets/13854939/5481784d-50e8-49ee-a3fb-747b17e434c1">
<br/><br/>
<p> We will analyze the format of your face and retrieve cool and modern glasses that might look good on you:</p>
<img width="600" alt="image" src="https://github.com/mateussenne/glasses-finder/assets/13854939/dcbcd401-db52-4c1e-b014-6b7c59a77b25">

# Stack
The project was built using the [T3](https://create.t3.gg/), which consists of:
- Next.JS
- React
- tRPC
- Prisma
- Tailwind CSS
- MySQL
