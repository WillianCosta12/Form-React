import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import Tab from "./tab";


type Profile = {
  titulo: string[];
  conteudo: string[];
};


export function Form(){ 

  const [num, setNum] = useState("1");

  const [conteudosF, SetConteudosF] = useState([""]);
  const [titulosF, setTitulosF] = useState([""]);

  const {register, handleSubmit, formState: { errors }} = useForm<Profile>()

  function list(loop: string) {
    let rows = [];
    let aux = parseInt(loop)
    for (let i = 0; i < aux; i++) {
      rows.push(i);
    }
    return rows;
  }

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numT = event.target.value;
    setNum(numT);
  };

  const cadastro = handleSubmit((data) => {
    
    setTitulosF(data.titulo)
    SetConteudosF(data.conteudo)
  })

  let array = list(num);


  return (


    <div className="main-index">
      <div className="form-div">
        {/* Tab nav */}
        <p>Tabs</p>
        <div className="nav">
          <nav id="tab-form">
            <div className="form-input">
              <label htmlFor="numTabs" className="numTabs">Num.Tabs</label>
              <input placeholder="1" type="text" id="numTabs" className="inputNum" onChange={inputHandler}/>
              {num == '0'? <div className="error"> Deve haver ao menos uma aba</div>: null }
              <hr />

            </div>
              <form className="data-input" onSubmit={cadastro}>
                {array.map((id, index) => 
                  <div className="form-input">
                    <div className="form-container">
                      <label className="titulo">Título</label>
                      <input {...register(`titulo.${index}`, {required: true})} type="text" id="titulo" className="inputTitulo" />
                      {
                        errors.titulo?.[index] && <div className="error"> É necessário informar o título da aba</div>
                      }
                    </div>
                    <div className="form-container">
                      <label className="label-conteudo" >Conteúdo </label>
                      <textarea {...register(`conteudo.${index}`, {required: true})}  id="conteudo" className="textAConteudo" />
                      {
                       errors.conteudo?.[index] && <div className="error"> É necessário informar o conteúdo da aba</div>
                      }
                    </div>
                  </div>)
                }
                  <div className="form-btn">
                    <input  type="submit" className="submit-btn" value="Salvar" />
                  </div>
              </form>
          </nav>
        </div>
      </div>
      <div className="conteudo">
        <Tab ids={titulosF} contents={conteudosF}/>
      </div>
    </div>
  );
};
export default Form;


