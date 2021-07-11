import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const ContenidoNosotros = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media(min-width:768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p{
        line-height: 2;
        margin-top: 2rem;
    }
`

const CotenidoNosotros = () => {
 
    const informacion = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}){
                nodes{
                    titulo
                    contenido
                    imagen{
                        gatsbyImageData
                    }
                }
            }
        }
    `)
        const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0]

    return ( 
        <>
            <h2 css={css`
                margin-top: 4rem;
                text-align: center;
                font-size: 4rem;
            `}>{titulo}</h2>
            <ContenidoNosotros>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="contenido"/>
            </ContenidoNosotros>
        </>
     );
}
 
export default CotenidoNosotros;