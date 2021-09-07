import { useRouter } from "next/router";

export default function codigoENome() {
    const router = useRouter();

    return (
        <div>
            <h1>{`${router.query.id} - ${router.query.nome}`}</h1>
        </div>
    )
}