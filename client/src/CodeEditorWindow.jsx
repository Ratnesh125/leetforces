import React, { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, codevalue, code, theme }) => {
    const [value, setValue] = useState("");

    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);

        setValue(value);
        async function sendData(value) {
            const response =await axios.post("http://localhost:3000/addcode", {
                code: value
            })
            console.log(response)
        }
        
        sendData(value);
    }


    return (
        <div >
            {console.log(value)}
            <Editor
                height="90vh"
                width={`100%`}
                language={language || "cpp"}
                value={codevalue}
                theme="vs-dark"
                defaultValue="// write your code here"

                onChange={handleEditorChange}

            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleEditorChange}>Run</button>
                <button>Submit</button>
            </div>
        </div>
    );
};
export default CodeEditorWindow;