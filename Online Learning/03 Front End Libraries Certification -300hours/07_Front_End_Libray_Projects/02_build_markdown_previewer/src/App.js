import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [expand, setExpand] = useState(false)

  const handleExpand = () => {
   setExpand(!expand)
 }

  return (
    <main>
      <section className="editor-section">
        
        <div className="header">
          <i class="fa-brands fa-free-code-camp icon-start"></i>
          <span className="editor-name">Editor</span>
          {!expand && <i class="fa-regular fa-maximize icon-end" onClick={handleExpand}></i>}
          {expand &&  <i class="fa-solid fa-down-left-and-up-right-to-center icon-end" onClick={handleExpand}></i> }
        </div>
         
        <dir>
          <textarea className={expand ? "maximize-editor" : null}
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
          ></textarea>
        </dir>
      </section>

      <section className={expand ? "hide-previewer" :"previewer-section"}>

        <div className="header">
          <i class="fa-brands fa-free-code-camp icon-start"></i>
          <span className="editor-name">Previewer</span>
          {!expand && <i class="fa-regular fa-maximize icon-end" onClick={handleExpand}></i>}
          {expand &&  <i class="fa-solid fa-down-left-and-up-right-to-center icon-end" onClick={handleExpand}></i> }
        </div>

        <ReactMarkdown className="previewer-output">{markdown}</ReactMarkdown>
      </section>
    </main>
  );
}

export default App;
