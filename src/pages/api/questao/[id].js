export default function questao(req, res){
    if (req.method === 'GET') {
        get(req, res)
    } else {
        res.status(405).json({
            message: 'Method not allowed'
        })
    }
}

function get(req, res){
    const id = req.query.id
    res.status(200).json({
        id: id,
        enunciado: 'Qual eh a sua cor preferida?',
        respostas: [
            'Branca', 'Preta', 'Amarela', 'Azul'
        ]
    })
}