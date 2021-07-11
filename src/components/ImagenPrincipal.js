import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackGround = styled(BackgroundImage)`
    height: 700px;
`
const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,49,63,.8));
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0;
        color: #FFF;
        @media(min-width: 992px){
           font-size: 5.8rem;
        }
    }
    p{
        font-size: 3rem;
        margin: 0;
        color: #FFF;
        position: relative;
        @media(min-width: 992px){
           font-size: 3rem;
        }
    }
`

const ImagenPrincipal = () => {

    const {image} = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "9.jpg"}){
                sharp:childImageSharp{
                    fluid{
                        srcSetWebp
                    }
                }
            }
        }
    `)
        console.log(image)
    return ( 
        <ImageBackGround tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextoImagen>
                <h1>Bienvenido Hotel Gatsby</h1>
                <p>Precios bajos siempre<span>&#160;</span></p>
            </TextoImagen>
        </ImageBackGround>
     );
}
 
export default ImagenPrincipal