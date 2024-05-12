import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {RouterProvider} from "react-router-dom";
import router from "./common/routes/Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
