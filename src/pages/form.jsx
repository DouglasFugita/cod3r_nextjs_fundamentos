import { useState } from "react";

export default function form(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [usuarios, setUsuarios] = useState([]);

    async function salvarUsuario(){
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({nome, idade})
        })

        setNome('');
        setIdade(0);

        const resp = await fetch('api/form')
        const usuarios = await resp.json()
        setUsuarios(usuarios)
    }

    return(
        <div>
            <h1>Form</h1>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
            <input type="number" value={idade} onChange={e => setIdade(parseInt(e.target.value))}/>
            <button onClick={salvarUsuario}>Enviar</button>

            <ul>
                {usuarios.map((u, index) => <li key={index}>{u.nome} - {u.idade}</li>)}
            </ul>
        </div>

    )
}