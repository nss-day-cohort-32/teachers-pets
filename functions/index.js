const firebase = require("firebase");

const config = {
  apiKey: "AIzaSyD3NWBrL-NQ9KUjvww8CxMXgIV_swSNKNg",
  authDomain: "nutshell-2-84140.firebaseapp.com",
  databaseURL: "https://nutshell-2-84140.firebaseio.com",
  projectId: "nutshell-2-84140",
  storageBucket: "nutshell-2-84140.appspot.com",
  messagingSenderId: "981881048797",
  appId: "1:981881048797:web:27c7260343a2b3ab"
};

firebase.initializeApp(config);

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");
const app = express();

app.post("/signup", (request, response) => {
  const newUser = {
    email: request.body.email,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
    userName: request.body.userName
  };
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(data => {
      return response
        .status(201)
        .json({ message: `user ${data.user.uid} signed up successfully!` });
    })
    .catch(err => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
});

app.get("/users", (request, response) => {
  admin
    .firestore()
    .collection("users")
    .get()
    .then(data => {
      let users = [];
      data.forEach(doc => {
        users.push({
          userId: doc.id,
          userName: doc.data().userName,
          email: doc.data().email,
          password: doc.data().password
        });
      });
      return response.json(users);
    })
    .catch(error => console.error(error));
});

app.post("/user", (request, response) => {
  const newUser = {
    userName: request.body.userName,
    email: request.body.email,
    password: request.body.password
  };
  admin
    .firestore()
    .collection("users")
    .add(newUser)
    .then(doc => {
      response.json({ message: `user ${doc.id} created succesfully` });
    })
    .catch(error => console.error(error));
});

app.get("/tasks", (request, response) => {
  admin
    .firestore()
    .collection("tasks")
    .get()
    .then(data => {
      let tasks = [];
      data.forEach(doc => {
        tasks.push(doc.data());
      });
      return response.json(tasks);
    })
    .catch(error => console.error(error));
});

app.post("/task", (request, response) => {
  const newTask = {
    body: request.body.body,
    complete: request.body.complete,
    userId: request.body.userId
  };
  admin
    .firestore()
    .collection("tasks")
    .add(newTask)
    .then(doc => {
      return response.json({
        message: `document ${doc.id} created successfully`
      });
    })
    .catch(error => {
      response.status(500).json({ error: `something went wrong` });
      console.error(error);
    });
});

exports.api = functions.https.onRequest(app);
