import React, { Component } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numeros: []
    };
  }

  gerarJogo = () => {
    const numerosSorteados = new Set();

    // Sorteia 6 números diferentes, de 1 a 60.
    while (numerosSorteados.size < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      numerosSorteados.add(numero);
    }

    // Transforma o Set em lista e coloca em ordem crescente.
    const numeros = [...numerosSorteados].sort((a, b) => a - b);

    this.setState({ numeros });
  };

  render() {
    const { numeros } = this.state;
    const jaSorteou = numeros.length > 0;

    return (
      <main className="tela">
        <Container className="conteudo">
          <div className="cabecalho">
            <span className="etiqueta">SORTEADOR DE NÚMEROS</span>
            <h1>Mega<span>Sena</span></h1>
            <p>Seu próximo jogo começa com um clique.</p>
          </div>

          <Card className="cartao">
            <Card.Body className="cartao-corpo">
              <div className="cartao-topo">
                <div>
                  <span className="subtitulo">JOGO SIMPLES</span>
                  <h2>Suas 6 dezenas</h2>
                </div>
                <span className="selo">6 números</span>
              </div>

              <div className="lista-numeros" aria-live="polite" aria-label="Dezenas do jogo">
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    className={`bola ${jaSorteou ? 'bola-sorteada' : 'bola-vazia'}`}
                    key={i}
                  >
                    {jaSorteou ? String(numeros[i]).padStart(2, '0') : '--'}
                  </div>
                ))}
              </div>

              <p className="mensagem">
                {jaSorteou
                  ? 'Jogo gerado! Boa sorte com essas dezenas 🍀'
                  : 'Clique no botão abaixo para gerar seus números.'}
              </p>

              <Button className="botao-gerar" variant="success" onClick={this.gerarJogo}>
                {jaSorteou ? 'Gerar outro jogo' : 'Gerar meu jogo'}
                <span aria-hidden="true">→</span>
              </Button>
            </Card.Body>
          </Card>

          <p className="rodape">Números aleatórios de 01 a 60, sem repetição.</p>
        </Container>
      </main>
    );
  }
}

export default App;
