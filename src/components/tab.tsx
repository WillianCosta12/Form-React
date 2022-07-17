import React, {useState} from "react";


export interface TabProps {
    ids: string[]
    contents: string[]
}


export function Tab(props: TabProps){
    const [activeContentTab, setActiveContentTab] = useState("Sem Conteúdo");

    const handleTab = (id: string, index:number) => {
      setActiveContentTab(props.contents[index]);
    };


  return (

    <div className="main">
      {/* Tab nav */}
      <p>Conteúdo</p>
      <div className="nav">
      {props.ids.map((id, index) => <button onClick={() => handleTab(id, index)}>{id}</button>)}
      </div>
      <div className="outlet">
       <p>{activeContentTab}</p>
      </div>
    </div>
  );
};
export default Tab;