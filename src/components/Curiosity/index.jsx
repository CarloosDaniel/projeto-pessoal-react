import React, { useState } from 'react';
import styles from './styles.module.css'

export default function Curiosity(){
    // Estado para armazenar o nome do time e a curiosidade
  const [curiosidade, setCuriosidade] = useState("");

  // Dados sobre o time de futebol
  const time = {
    nome: "Corinthians",
    fundacao: "1910",
    estadio: "Néo Química Arena",
    mascote: "Mosqueteiro",
  };

  // Curiosidades sobre futebol
  const curiosidades = [
    "O Brasil é o país com mais títulos da Copa do Mundo (5).",
    "A primeira Copa do Mundo foi realizada em 1930 no Uruguai.",
    "O maior estádio de futebol do mundo é o Rungrado 1 de Maio, na Coreia do Norte.",
    "Cristiano Ronaldo e Lionel Messi são considerados dois dos melhores jogadores da história do futebol.",
    "O futebol foi inventado na Inglaterra, mas a versão moderna do jogo tem regras internacionais.",
    "Em 1969, a Honduras e El Salvador entraram em guerra após uma partida de futebol que gerou grandes tensões entre os dois países. Esse episódio ficou conhecido como a 'Guerra do Futebol'.",
    "O maior número de gols marcados em uma partida de futebol foi 149! Esse feito inacreditável ocorreu entre as equipes australianas de Sorrento e Melbourne, em 1981.",
    "O primeiro jogo de futebol da história foi realizado em 1863, na Inglaterra, e terminou em um empate sem gols.",
    "Em 2014, a Alemanha estabeleceu o recorde de maior vitória em uma semifinal de Copa do Mundo, derrotando o Brasil por 7 a 1, em uma partida histórica.",
    "O gol mais rápido da história do futebol foi marcado em apenas 2,8 segundos, por Tomáš Řepka, em uma partida entre o Slovan Liberec e o Sigma Olomouc, na República Tcheca, em 2009.",
    "O jogador mais caro da história do futebol (até 2024) foi Neymar Jr, quando foi transferido do Barcelona para o Paris Saint-Germain em 2017 por 222 milhões de euros.",

  ];

  // Função para exibir uma curiosidade aleatória sobre futebol
  const mostrarCuriosidade = () => {
    const aleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    setCuriosidade(aleatoria);
  };

  return (
    <div className={styles.app}>
      <header className={styles.app_header}>
        <h1>Curiosidade futebol!</h1>

        <div className={styles.time_info}>
          <p><strong>Meu time:</strong> {time.nome}</p>
          <p><strong>Fundação:</strong> {time.fundacao}</p>
          <p><strong>Estádio:</strong> {time.estadio}</p>
          <p><strong>Mascote:</strong> {time.mascote}</p>
        </div>

        <button onClick={mostrarCuriosidade}>Clique aqui para uma curiosidade sobre o futebol!</button>

        {curiosidade && <p className={styles.curiosidade}>{curiosidade}</p>}
      </header>
    </div>
  );
}
