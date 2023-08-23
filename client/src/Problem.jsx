import React, { useState, useEffect } from 'react'
import CodeEditorWindow from './CodeEditorWindow';
export default function Problem() {
    const [language, setLanguage] = useState("html")
    const [value, setValue] = useState("html");
    const [codeValue, setCodeValue] = useState("");
    const data = ["html", "typescript", "javascript"]

    return (
        <div>
            <center><span style={{ textAlign: "center", fontSize: 40 }}>Leetforces</span></center>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ width: "49%", height: "100vh", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                    <div style={{ backgroundColor: "cyan", height: "68%", overflow: "auto" }}>
                        <center>Problem Description</center>
                        <div>Problem Name</div>
                        <div>difficulty </div>
                        <div >Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                            It has survived not only five centuries
                        </div>
                        <div>Example-1</div>
                        <div>Input</div>
                        <div>Output</div>
                    </div>
                    <div style={{ backgroundColor: "green", height: "29%", overflow: "auto" }}>
                        <center>Test cases</center>
                    </div>
                </div>
                <div style={{ backgroundColor: "green", width: "49%", overflow: "auto" }}>
                    <div style={{ backgroundColor: "grey", height: "5%" }}>
                        <label>language</label>
                        <select onChange={(e) => { setLanguage(e.target.value) }}>
                            {
                                data.map((item) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                        <button onClick={() => { setCodeValue("//reset : write code") }}>Reset</button>
                    </div>
                    {

                        (<CodeEditorWindow language={language} codevalue={codeValue} />)
                    }
                </div>
            </div>
        </div>
    )
}