import React from "react";
import ReactDOM from "react-dom";
import SwitchMan from "./app/switchman";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import "./index.css";
import "./app/components/components.css";
import "./app/pages/auth/auth.css";

const ROOT = document.getElementById("root");
const renderIsReady = () => console.log("[RENDER] --> ready");


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <SwitchMan />
        </React.StrictMode>
    </Provider>,
    ROOT,
    renderIsReady
);

reportWebVitals();
