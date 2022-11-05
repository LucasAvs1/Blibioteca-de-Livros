import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    margin-top: 5rem;
    border-radius: 25px;

    p {
        font-size: 24px;
        border-bottom: 2px solid #fff;
    }

    img {
        margin-bottom: 30px;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={ evento => {
                    const TextoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(TextoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa