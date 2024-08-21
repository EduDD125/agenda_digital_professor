import React from  'react'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ListaDeDisciplinas from './components/listaDeDisciplinas/listaDeDisciplinas';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
      <p>Conteúdo principal aqui</p>
      {ListaDeDisciplinas()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
