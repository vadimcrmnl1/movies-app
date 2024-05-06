import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import {MoviesContainer} from "../features/movies/Movies/MoviesContainer";
import {useSelector} from "react-redux";
import {selectIsLoading} from "./selectors";
import {LoaderComponent} from "../common/components/Loader/Loader";
import React from "react";

export const App = () => {

    const isLoading = useSelector(selectIsLoading)

    return <MantineProvider theme={theme}>
        {isLoading && <LoaderComponent/>}
        <MoviesContainer/>
    </MantineProvider>;
}
