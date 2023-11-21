import * as React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";
import  '../components/pageform.module.css';

const PageForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const encode = (data) => {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }

    const onSubmit = dados => {
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "form_hook", ...dados })
        }).then(() => {
        alert("Em breve daremos um retorno do seu contato. Obrigado! ");
        reset();
        }).catch(error => alert(error));
    };

    return (
        <Layout>
          <h2>Entre em Contato:</h2>
          <div className="container">
            <form name="form_hook" method="post" onSubmit={handleSubmit(onSubmit)}
              data-netlify="true" data-netlify-honeypot="bot-field">
  
                <input type="hidden" name="form-name" value="form_hook" />
  
                <input type="text" name="primeiroNome" placeholder="Primeiro Nome" {...register("primeiroNome", { required: true, maxLength: 20 })} /> 
                      {errors.primeiroNome && errors.primeiroNome.type === "required" && (
                        <span className="erro">&nbsp;Primeiro nome é obrigatório.</span>
                      )}
                      {errors.primeiroNome && errors.primeiroNome.type === "maxLength" && (
                        <span className="erro">&nbsp;O primeiro nome pode ter 20 caracteres no máximo.</span>
                      )}

                <input type="text" name="ultimoNome" placeholder="Ultimo Nome" {...register("ultimoNome", { required: true, maxLength: 20 })} /> 
                      {errors.ultimoNome && errors.ultimoNome.type === "required" && (
                        <span className="erro">&nbsp;Ultimo nome é obrigatório.</span>
                      )}
                      {errors.ultimoNome && errors.ultimoNome.type === "maxLength" && (
                        <span className="erro">&nbsp;Ultimo pode ter 20 caracteres no máximo.</span>
                      )}      
  
                <input type="email" name="email" placeholder="email" {...register("email", {
                      required: true,
                      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} />
                    {errors.email && errors.email.type === "required" && (
                             <span className="erro">&nbsp;Email é obrigatório.</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                            <span className="erro">&nbsp;Email inválido.</span>
                    )}

                <input type="text" name="assunto" placeholder="Assunto" {...register("assunto", { required: true, maxLength: 100 })} />
                    {errors.assunto && errors.assunto.type === "maxLength" && (
                      <span className="erro">&nbsp;Assunto pode ter 100 caracteres no máximo.</span>
                    )}

                <textarea name="mensagem" placeholder="Mensagem" rows="5" {...register("mensagem")} />

              <input type="submit" value="Enviar" />
              <input type="reset" value="Limpar" />
            </form>
          </div>
        </Layout>
      )
}

export default PageForm

export const Head = () => <title>Formulário React Form</title>