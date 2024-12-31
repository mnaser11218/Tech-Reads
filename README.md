## Tech Reads 
Technical Bookshop Clone
Welcome to the Technical Bookshop Clone! This is a web application designed to replicate an online bookshop with a focus on technical books. The app is built using React for the frontend, styled with Tailwind CSS, and hosted on AWS Amplify.

## Hosted on AWS Amplify, [URL Link]

(main.d3t1bpwt79txk6.amplifyapp.com)

## Features

Browse a variety of technical books.

View book details with information such as author, price, and description.
Responsive design optimized for both desktop and mobile users.

## Tech Stack

Frontend: React, Vite

Styling: Tailwind CSS

Hosting: AWS Amplify


## Installation
Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14.x or above)
npm or yarn
Steps to Run Locally
Clone the repository:

bash
Copy code
git clone https://github.com/mnaser11218/Tech-Reads.git
cd Tech-Reads
Install dependencies:

Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Start the development server:

bash
Copy code
npm start
Or with yarn:

bash
Copy code
yarn start
Open your browser and go to http://localhost:3000.

## Deployment
This app is hosted on AWS Amplify for continuous deployment. Any changes pushed to the main branch will trigger an automatic deployment to the cloud.

For detailed information on how the deployment is set up, refer to the AWS Amplify documentation.

Build and deploy manually
To build and deploy the app manually:

Run the build command to create a production-ready build:

bash
Copy code
npm run build
Push the build to your Amplify app (if not using auto-deployment):

Follow AWS Amplify documentation to link your repository to Amplify.
Upload the build folder to the Amplify console or use Amplify CLI to deploy.


## Project Structure
bash
Copy code
/public               # Public static files like index.html
/src                  # React source code
  /components         # Reusable React components
  /sections           # Pages for different sections
  /assets             # Static assets like icons and images 
  /constants          # Contains static data such as book lists, product arrays, etc.
App.js                # Main React component
index.js            # Entry point for React app
tailwind.config.js  # Tailwind CSS configuration
Tailwind CSS Setup
Tailwind CSS is configured using the default setup. All styles can be customized in the tailwind.config.js file.

## Contributing
We welcome contributions to this project! If you'd like to help out:

Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes and commit them.
Push your branch and create a pull request.
Please ensure that your code follows the style guidelines and passes any existing tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
React - JavaScript library for building user interfaces.
Tailwind CSS - Utility-first CSS framework.
AWS Amplify - Full-stack app hosting and backend as a service.
