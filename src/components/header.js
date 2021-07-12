import React from 'react';
import { css } from '@emotion/react';
import Nav from './Nav';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    border-bottom: 2px solid #E67E22;
    text-decoration: none;
    font-size: 3.7rem;
    font-weight: bold;
    border-top: 2px solid #E67E22;
    position: relative; 
	float: left;
    span{
        position: absolute;
        right: 0;
        width: 0;
        background: #222;
        border-left: 1px solid #000;

        animation: maquina 3s infinite alternate;
    }

    @keyframes maquina {
        from {
            width: 100%;
        }
        to {
            width: 0%;
        }
    }
`

const Header = () => {
    return ( 
        <header css={css`
            background-color: #222;
            padding: 1rem;
        `}>            
            <div css={css`
                max-width: 1200px;
                margin: 0 auto;
                @media(min-width: 768px){
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            `}>
                    <EnlaceHome to={'/'}>CEAS<span>&#160;</span></EnlaceHome>
                <Nav/>
            </div>
        </header>
     );
}
  
export default Header;