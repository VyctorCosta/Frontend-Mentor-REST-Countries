import { useRouter } from "next/router"

function NewPage() {
    const route = useRouter();

    return (
        <>
            <h1>Nova pagina</h1>
            <button onClick={event => {
                route.push("/");
            }}>Clique pra voltar</button>
        </>
    )
}

export default NewPage;