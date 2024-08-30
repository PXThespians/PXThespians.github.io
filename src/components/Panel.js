import React from "react"



const Panel = (props) => {
    let type = false // single, 0 is matrix

    const matrixInsert = [
        
    ]

    const singleInsert = (
        <>
            <input type = "text" />
            <select name = "member type" id = "membertype">
                <option value = "0">Apprentice</option>
                <option value = "0">Member</option>
                <option value = "1">Officer</option>
            </select>
        </>
    )

    const onChoice = () => {
        props.parentCallback()
    }

    return (
        <>
            <div className="selectionpanel">
                {type 
                    ? {singleInsert} 
                
                    : // else
            
                    <table border = "3">
                        <thead>
                            <tr>Name</tr>
                            <tr>Email</tr>
                            <tr>Member Type</tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td contentEditable='true'></td>
                            <td contentEditable='true'></td>
                        </tr>
                        <tr>
                            <td contentEditable='true'></td>
                            <td contentEditable='true'></td>
                            
                        </tr>
                        </tbody>
                    </table>}
            </div>
        </>
    )
}
/**<select name = "member type" id = "membertype">
                                <option value = "0">Apprentice</option>
                                <option value = "0">Member</option>
                                <option value = "1">Officer</option>
                            </select> */

export default Panel;