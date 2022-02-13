import Countries from "../src/components/Countries";
import Header from "../src/components/Header";
import { ThemeProvider } from "styled-components";
import { useAuth } from "../src/providers/auth";

function NewPage() {
    const { theme } = useAuth();

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Countries />
        </ThemeProvider>
    )
}

export default NewPage;