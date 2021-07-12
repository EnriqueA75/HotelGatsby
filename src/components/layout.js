import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';
import Footer from './Footer';
import useSeo from '../hooks/useSEO';

const Layout = (props) => {

        const seo = useSeo()
        const {fallbackSeo: {description, title}} = seo

    return (
        <>
        <Global
            styles={css`
            html {
                font-size: 62.5%;
                box-sizing: border-box;
            }
            *, *:before, *:after {
                box-sizing: inherit;
            }
            body {
                font-size: 18px;
                font-size: 1.8rem;
                line-height: 1.5;
                font-family: 'Open Sans', sans-serif;
            }
            h1, h2, h3 {
                margin: 0;
                line-height: 1.5;
            }
            h1, h2 {
                font-family: 'Roboto', serif;
            }
            h3 {
                font-family: 'Open Sans', sans-serif;
            }
            ul {
                list-style: none;
                margin: 0;
                padding:0;
            }
        `}
        />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"  rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
            </Helmet>
                <Header/>
                {props.children}
            <Footer title={title}/>
        </> 
     );
}
 
export default Layout;