# Welcome to My Good Doctor's Website

Live Site Link: [https://good-doctor-1080a.web.app/](https://good-doctor-1080a.web.app/)

## Description

Hello, everyone! This is a single-page website for an individual doctor. The website provides information about the types of services provided by the doctor. It also includes details on the different plans available for accessing those services, along with background information on the individual doctor.

To create this website, the following steps were taken:

1. Created a JSON file for fake service data.
2. Developed a custom hook for loading the data from the JSON file.
3. Utilized the `useEffect` hook to load the JSON data asynchronously.
4. Displayed the array of services using the `map` function after successfully loading the JSON data.
5. Implemented login authentication using Firebase, GitHub, and email/password authentication methods.

## Technology Used

The technologies used in this project include:

- React
- React Bootstrap
- React Router
- React Icon
- Bootstrap CDN
- React Authentication
- Firebase Authentication
- React Firebase Hooks


```
$ git clone [https://github.com/minionsrahat/Vintage-Wheels-Client](https://github.com/minionsrahat/Good-Doctor-Website-React-Auth)
$ cd project
$ npm install

```


## Setup 

```
 Create .env.local file that include:

  * REACT_APP_apiKey
  * REACT_APP_authDomain
  * REACT_APP_projectId
  * REACT_APP_storageBucket
  * REACT_APP_messagingSenderId
  * REACT_APP_appId  


You can obtain these values by creating a Firebase project. Follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/).

2. Click on "Add project" or select an existing project.

3. Fill in the required details and create the project.

4. Once the project is created, go to the project settings.

5. Under the "General" tab, scroll down to the "Your apps" section.

6. Click on the "</>" icon to add a new web app to your project.

7. Register the app with a nickname and click on "Register app".

8. Copy the generated values for the environment variables mentioned above and paste them into the `.env.local` file.

Make sure to replace `<your-values>` with the actual values obtained from your Firebase project.

If you have any questions or need further information, please feel free to reach out.

```

## Run Project

```
$ npm start

```
