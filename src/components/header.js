import React from 'react';
import { css } from '@emotion/react';

const Header = () => {
    return ( 
        <header css={css`
            background-color: #333;
            padding: 1rem;
        `}>            
            <div css={css`
                max-width: 1200px;
                margin: 0 auto;
            `}>
                <h2>Desde Header</h2>
            </div>
        </header>
     );
}
 
export default Header;