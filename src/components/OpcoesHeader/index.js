import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const OpcoesContainer = styled.ul`
    display: flex;
`

const OpcaoContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesHeader() {
    return (
        <OpcoesContainer className='opcoes'>
            { textoOpcoes.map( (texto) => (
                <OpcaoContainer className='opcao'><p>{texto}</p></OpcaoContainer>
            ) ) }
      </OpcoesContainer>
    )
}

export default OpcoesHeader