# Advanced React Native Workshop - Ipsum Diary


## Problem Statement

To create a React Native Notes App with all CRUD operations, and to discuss some more advanced concepts.

<img src="./docs/assets/Homepage.png" alt="drawing" width="200"/>

## Workshop Agenda

1. Recap to the previous workshop - [React Native Workshop Repo](https://github.com/ReactBangalore/react-native-workshop)
2. Use [JSON Server](https://github.com/typicode/json-server]) to setup a basic server, test all basic end points
3. Setup the React Native project using `react-native init`.
4. Add ListingScreen and a NewPostScreen
    - Use NewPostScreen to make a new post
    - List all the posts on the ListingScreen
5. Add Edit Post and Delete Post options
6. Debugging like a pro
    - Demo React Native Debugger
    - Demo Reactotron
7. Adding Deep Linking to your app
8. UI Automation Testing on Device Farm

9. Discussing FlatLists
10. Discussing Geolocation

11. Stroybook
12. Testing with Jest
13. Error tracking with Sentry

14. Codepush in action
15. Using App center for CI/CD of React Native apps
16. How to publish the app to testflight/beta store


## Getting started

You can verify your dependencies in the **Build Projects with Native Code** section of https://facebook.github.io/react-native/docs/getting-started.html 

#### First Terminal Window
1. Clone this repo and run `yarn` or `npm install`
2. `npm start`

#### Second Terminal Window
1. `npm install -g react-native-cli`
2. `react-native run-ios` or `react-native run-android`


## Setting up the Server

1. `npm install -g json-server`
2. In the root of this repo is a folder called jsonServer - `cd` to that
3. `json-server --watch db.json`
