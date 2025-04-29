// function App() {
//   return (
//     <div className="App">
//       <h1>Meu primeiro site em React! 🚀</h1>
//       <p>Começando com Create React App.</p>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([
    'Estudar React',
    'Fazer exercícios',
    'Ler um livro'
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Minha Lista de Tarefas</h1>
      
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}

export default App;