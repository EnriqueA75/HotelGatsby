import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';

const Layout = (props) => {
    return (
        <>
        <Global
            styles={css`
                body{
                    html{
                        font-size: 62.5%;
                    }
                    body{
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                    h3{
                        font-family: 'Open Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2{
                        font-family: 'Roboto', sans-serif;
                        font-size: 24px;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                }
            `}
        />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"  rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
            </Helmet>
                <Header/>
                {props.children}
                <footer>Hola</footer>
        </> 
     );
}
 
export default Layout;