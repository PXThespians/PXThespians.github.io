import DropDown from "./dropDown"
import { Link } from "@remix-run/react"

const formTypes = [
  {name: 'Points', link: './routes/forms/points', key: 'p'},
  {name: 'Absence', link: './routes/forms/absence', key: 'a'}
]  

const thing = [
  {aaaaa : true}
]

export default function Navbar(hasPermissions : boolean){
  console.log(hasPermissions)
  return (
    <nav>
      <ul className = "navigation">
        <li>
          <DropDown name = 'Forms' list = {formTypes}/>
        </li>
        {hasPermissions ? (
          <li>
            <Link to= {"/secret.tsx"} >
              Officer Space 
            </Link>
          </li>
        ) : (<></>)}
        <li>
          <DropDown name = 'AAAA' list = {thing}/>
        </li>
      </ul>
    </nav>
  )
}