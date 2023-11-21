import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h2>Front-end Jamstack com Gatsby [23E4_2]</h2>
      <div>
          <p>No menu 'Formulário', consta um formuário utilizando o 'react-hook-form'.</p>
          <p>No menu 'Blog', foi utilizado os recursos de arquivos MDX, link dinâmicos e rotas, imagens consumidas pelos recursos do Gatsby.</p>
          <p>No menu 'Paginação', foi utilizado um JSON externo para ser consumido pelo react-paginate.</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
