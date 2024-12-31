<img src="./src/assets/images/twobooks.png" alt="Logo of the project" align="right" width="75">

# Tech Reads &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Welcome to Tech Reads, a technical bookshop clone built with React, and Tailwind CSS! This web application emulates an online bookstore featuring popular technical books. It is developed using React and Vite for the frontend, styled with Tailwind CSS, and deployed on AWS Amplify.

## Hosted on AWS Amplify, 
[URL Link]( https://main.d3t1bpwt79txk6.amplifyapp.com )

![Screenshot 2024-12-10 at 7 56 03 PM](https://github.com/user-attachments/assets/0dab0752-a5f7-4853-9ed9-9c913687dd03)

<img width="1348" alt="Screenshot 2024-12-31 at 11 30 50 AM" src="https://github.com/user-attachments/assets/6157e5f2-e66f-4ead-9637-6ad885319202" />

## Features

Browse a variety of technical books.

View book details with information such as author, price, and description.
Responsive design optimized for both desktop and mobile users.

## Tech Stack

Frontend: React, Vite, Styling: Tailwind CSS, Hosting: AWS Amplify


## Installation
Prerequisites

Make sure you have the following installed on your machine:

Node.js (v14.x or above)

```shell
git clone https://github.com/mnaser11218/Tech-Reads.git
cd Tech-Reads/
npm install

If you're using yarn: yarn install
```

Start the development server:

```shell
npm start

If you're using yarn: yarn start
```

Open your browser and go to http://localhost:3000.

## Deployment

This app is hosted on AWS Amplify for continuous deployment. Any changes pushed to the main branch will trigger an automatic deployment to the cloud.

For detailed information on how the deployment is set up, refer to the AWS Amplify documentation.


## Project Structure


```shell
/public               # Public static files like index.html

/src                  # React source code

  /components         # Reusable React components
  
  /sections           # Pages for different sections
  
  /assets             # Static assets like icons and images 
  
  /constants          # Contains static data such as book lists, product arrays, etc.
  
App.js                # Main React component

index.js            # Entry point for React app

tailwind.config.js  # Tailwind CSS configuration
```

## Tailwind CSS Setup

Tailwind CSS is configured using the default setup. All styles can be customized in the tailwind.config.js file.

## Contributing

We welcome contributions to this project! If you'd like to help out:

Fork the repository.

Create a new branch for your feature or bugfix.

Make your changes and commit them.

Push your branch and create a pull request.

Please ensure that your code follows the style guidelines and passes any existing tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
