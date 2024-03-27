import { ThemeProvider } from "styled-components";
import { IconContext } from "react-icons";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import Header from "../components/Header";

export default function Root() {
    return(
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <Header />
                </IconContext.Provider>
            </ThemeProvider>
        </>
    )
};