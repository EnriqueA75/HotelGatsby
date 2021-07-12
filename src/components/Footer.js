import React from 'react';
import { css } from '@emotion/react';

const Footer = () => {

    const year = new Date().getFullYear()

    return ( 
        <>
            <div css={css`
                /* position: fixed; */
                bottom: 0;
                width: 100%;
            `}>
                <p css={css`
                    text-align: center;
                    color: #FFF;
                    background-color: rgb(33,44,55);
                    margin: 0;
                    position: relative;
                    padding: 1rem;
                `}>Hotel Gatsby, todos los derechos reservados {year}&copy;</p>
            </div>
        </>
     );
}
  
export default Footer;