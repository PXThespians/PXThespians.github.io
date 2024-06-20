import DropDown from "./dropDown"
import stylesheet from '../tailwind.css';
import { LinksFunction } from "@remix-run/node";
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react"
import '../styles/components.scss'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const formTypes = [
  {name: 'Points', link: './routes/forms/points', key: 'p'},
  {name: 'Absence', link: './routes/forms/absence', key: 'a'}
]  

const thing = [

]

function Navbar(){
  return (
    <nav>
      <ul className = "navigation">
        <li>
          <DropDown name = 'Forms' list = {formTypes}/>
        </li>
        <li>
          <a href = {'./routes/_secret.tsx'}>
            Officer Space 
          </a>
        </li>
        <li>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;