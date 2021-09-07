import { useEffect, useState } from "react";

export default function questao(){
    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123')
        .then(response => response.json())
        .then(setQuestao)
    }, []);
    
    return(
        <div>
            <h1>Questão</h1>
            <div>
                <h2>{questao?.enunciado}</h2>
                <ul>
                    {questao?.respostas.map((alternativa, index) => (
                        <li key={index}>{alternativa}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}