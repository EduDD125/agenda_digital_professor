import {useState} from 'react'

export default function ListaDeDisciplinas() {
    const [lista, setLista] = useState(['PW4','TC2', 'PDM']);
    const [novaDisciplina, setNovaDisciplina] = useState('');

    const handleChange = (event) => {
        setNovaDisciplina(event.target.value)
    };

    const adicionarDisciplina = () => {
        if (novaDisciplina.trim() !== '') {
        setLista([...lista, novaDisciplina]);
        setNovaDisciplina('');
        }
    }

    return (
        <div>
            <h1>Lista de Disciplinas</h1>
            <input
                type="text"
                value={novaDisciplina}
                onChange={handleChange}
                placeholder="Digite uma nova disciplina"
            />
            <button onClick={adicionarDisciplina}>Adicionar</button>
            <ul>
                {lista.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    )
}