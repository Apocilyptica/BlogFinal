import React from "react";
import "./App.css";
import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import "@aws-amplify/ui/dist/style.css";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <CreatePost />
      <DisplayPosts />
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
