import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Footer from "./footer"

export default function Layout({ children }) {


    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <main className="layout">
            <div className="header">
                <h3>{data.site.siteMetadata.title}</h3>
                <nav className="topnav">
                    <Link to="/">Início</Link>
                    <Link to="/PageForm">Formulário</Link>
                    <Link to="/blog/">Blog</Link>
                    <Link to="/Paginacao">Paginação</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <Footer coyrightYear="2023" />
        </main>
    )
}