# Steps to recreate the app
This is a basic react app that creates a launchdarkly client and passes it into scope for the child components. You can query flags using the getFlags() hook. You can see it's usage in Greeting.tsx & Time.tsx.
For this example we will only focus on the isTime feature flag which will display the time for users.

You will need to create a launchdarkly account, create a project and note the Client Side ID key. Then you need to create a Feature Flag called isTime and then add the Client Side ID key into the index.tsx of the react app, in the LDProvider object.

Included is a user object, in order to access the application you will need to include the userid in the URL.
For example http://localhost:3000/?userId=1

Within the launchdarkly console you will need to inclued targeting for the isTime feature flag as follows:
Name: isTime
Key: isTime
Flag Variation: Boolean
SDK uses Client-side ID
Default rule serve true
If targeting is off, server false. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
