import Link from 'next/link';
import { useRouter } from 'next/router';

export default function rotas(){
    const router = useRouter();

    function navegacaoSimples(url){
        router.push(url);
    }

    function navegacaoComParametro(url, parametro){
        //router.push(url, parametro);
        router.push({
            pathname: url,
            query: {
                ...parametro
            }
        })
    }

    return(
        <div>
            <h1>Rotas</h1>
            <ul>
                <li><Link href="/rotas/params?id=12&nome=Joao">Params</Link></li>
                <li><Link href="/rotas/11123/buscar">Buscar</Link></li>
                <li><Link href="/rotas/123456/dinamico">Rota Dinamica</Link></li>
            </ul>
            <div style={{display: 'flex', flexDirection: 'column', alignItems:'flex-start'}}>
                <button onClick={() => router.push("/rotas/11123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/123456/dinamico")}>Rota Dinamica</button>
                <button onClick={() => navegacaoComParametro("/rotas/params", {id: 12, nome: "Joao"})}>Params</button>
            </div>
        </div>
    )
}