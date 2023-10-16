import React, { useState } from "react";
import "./App.css";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import Test from "./App_Test";

const root = createRoot(document.getElementById('root'))

let shelves = [{name:"Currently Reading", key:"currentlyReading"} , {name: "Want to Read", key: "wantToRead"},{name: "Read", key:"read"}]
                
root.render(<App shelves={shelves}/>)