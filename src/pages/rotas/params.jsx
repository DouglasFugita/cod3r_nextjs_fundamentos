import { useRouter } from "next/router"
import Link from 'next/link';

export default function params(){
    const router = useRouter()

    return(
        <div>
            <h1>Parâmetros - {router.query.id} e {router.query.nome}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}