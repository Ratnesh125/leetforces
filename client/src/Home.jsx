import axios from 'axios'
import React, { useEffect, useState } from "react"

export default function Home() {
    let [data, setData] = useState([])

    async function fetchData() {
        const response = await axios.get(`http://localhost:3000/get`)
        setData(response.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <center><span style={{ textAlign: "center", fontSize: 40 }}>Leetforces</span></center>
            <div>
                <table style={{ backgroundColor: "red", width: "100%" }}>
                    <tbody>
                        <tr style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <td>ID</td>
                            <td>Question</td>
                            <td>Difficulty</td>
                            <td>open it</td>
                        </tr>
                        {
                            data.map(
                                (item) => (
                                    <tr style={{ display: "flex", justifyContent: "space-evenly" }}>
                                        <td>{item.id}</td>
                                        <td>{item.question}</td>
                                        <td>{item.difficulty}</td>
                                        <td><button>open</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}