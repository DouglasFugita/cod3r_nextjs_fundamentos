import {useRouter} from 'next/router';

export default function buscar(){
    const router = useRouter();

    return(
        <div>
            <h1>Buscar - {router.query.id}</h1>
        </div>
    );
}