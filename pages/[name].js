import Countries from "../src/components/Countries";
import Header from "../src/components/Header";
import { AuthProvider } from "../src/providers/auth";

function NewPage() {

    return (
        <AuthProvider>
            <Header />
            <Countries />
        </AuthProvider>
    )
}

export default NewPage;