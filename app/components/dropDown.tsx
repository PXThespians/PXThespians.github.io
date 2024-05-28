import * as React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import '../styles/buttons.scss'

const formTypes = [
    {name: 'points', link: './routes/forms/points', key: 'p'},
    {name: 'absence', link: './routes/forms/absence', key: 'a'}
  ]  

/*export function Chunk({link = '' as string, name = '' as string}) : JSX.Element{

    return (
        
    )        
}
/*
Dropdown menu, show/hide based on menu state.

Entering: "transition ease-out duration-100"
  From: "transform opacity-0 scale-95"
  To: "transform opacity-100 scale-100"
Leaving: "transition ease-in duration-75"
  From: "transform opacity-100 scale-100"
  To: "transform opacity-0 scale-95"
*/

function DropDown({name = '' as string, list = {} as object[]}){

    return (
        <div className = "dropdown ">
            {name}
            <div id = "content">
                {list.map(function(data){
                    return <a key = {data.key} href = {data.link}>{data.name}</a>
                })}
            </div>
        </div>
    )
}
/*{list.map(function(data){
    return <Dropdown.Item key = {data.key} href = {data.link}>
        {data.name}
    </Dropdown.Item>
})}*/


export default DropDown;