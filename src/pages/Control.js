import { React, useState } from "react"

const Control = () => {
    const [matrix, setMatrix] = useState([])

    const handleLoad = async () => {
        const request = await axios.get("/api/getUsersTable")

        const table = request.data.res
        console.log(table)

        setMatrix(table)
    }

    return (
        <>
            <div className = "table">
                {matrix.map((row) => {
                    // need to figure out which rows are which in the database
                    row.map()
                })}
            </div>
            <div onLoad={handleLoad}></div>
        </>
    )
}

export default Control