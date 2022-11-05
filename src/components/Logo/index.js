import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImgContainer = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer className='logo'>
            <LogoImgContainer
                src={logo}
                alt='logo' 
                className='logo-img'
            ></LogoImgContainer>
            <p><strong>Alura</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo