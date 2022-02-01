import { useRouter } from "next/router"
import Countries from "../../src/Countries";

function NewPage() {
    const route = useRouter();

    return (
        <>
            <Countries />
        </>
    )
}

export default NewPage;