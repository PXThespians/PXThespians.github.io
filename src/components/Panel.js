import React from "react"



const Panel = (props) => {

    const matrixInsert = (
        <table border = "3">
            <thead>
                <tr>Name</tr>
                <tr>Email</tr>
                <tr>Member Type</tr>
            </thead>
            <tbody>
            <tr>
                <td contenteditable='true'></td>
                <td contenteditable='true'></td>
                <select name = "member type" id = "membertype">
                    <option value = "0">Apprentice</option>
                    <option value = "0">Member</option>
                    <option value = "1">Officer</option>
                </select>
            </tr>
            <tr>
                <td contenteditable='true'></td>
                <td contenteditable='true'></td>
                <select name = "member type" id = "membertype">
                    <option value = "0">Apprentice</option>
                    <option value = "0">Member</option>
                    <option value = "1">Officer</option>
                </select>
            </tr>
            </tbody>
        </table>
    )

    const callback = () => {
        props.parentCallback()
    }
    
    return (
        <>
            <div className="selectionpanel">
                {matrixInsert}
            </div>
        </>
    )
}