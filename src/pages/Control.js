import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "/src/components/Loading"
import "../styles/tables.css"

const SERVER = "http://localhost:3000"
console.log("entered control")



const Control = () => {
    const [matrix, setMatrix] = useState({})

        useEffect(() => {
            const handleLoad = async () => {
                console.log("table loading...")
                const request = await axios.get(SERVER + "/api/getUsersTable")
            
                const table = request.data.res
                console.log(table)
            
                console.log("prepared")
                setMatrix({array: table, isFetching: false})
                console.log(matrix.isFetching)
            }
            
            handleLoad()
            
        }, [])

        console.log("kms", matrix)
    return (
        <>
            <table className = "table">
                <thead className = "headers">
                    <tr > 
                        <th>Name</th>
                        <th>User ID</th>
                        <th>Email</th>
                        <th>Member Type</th>
                        <th>Total Points</th>
                    </tr>
                </thead>
                <tbody>
                    {matrix.isFetching == null ? <Loading /> : matrix.array.map((object, i) => {
                        console.log("should be going?");
                        return(
                            <React.Fragment key = {i}>
                                <tr>
                                    <td>{object.name || "n/a"}</td>
                                    <td>{object.userID|| "n/a"}</td>
                                    <td>{object.email|| "n/a"}</td>
                                    <td>{object.membertype|| "n/a"}</td>
                                    <td>{object.totalpoints|| "n/a"}</td>
                                </tr>
                            </React.Fragment>
                        )
                        
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Control