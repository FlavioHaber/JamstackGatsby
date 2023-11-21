import React from "react"
import * as footerStyles from "./footer.module.css"

export default function Footer(props) {
    return (
        <p className={footerStyles.footer}>
            © {props.copyrightYear} Curso de Pós-Graduação Desenvolvedor Web Full-Stack - 11/2023 - Projeto final de disciplina - InfNet. Todos os direitos reservados.
        </p>
    )
}

