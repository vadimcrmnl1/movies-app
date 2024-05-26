import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {RouterProvider} from "react-router-dom";
import router from "./common/routes/Routes";
import React from "react";
import {App} from "./app/App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<RouterProvider router={router}/>*/}
            <App/>
        </Provider>
    </React.StrictMode>
);
