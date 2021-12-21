import invoices from "../data/data";
import {Link, Outlet} from 'react-router-dom'

function About() {
  return (
    <div>
      <h4>about</h4>
      <ul>
        {
          invoices.map(
            item => (
              <li key={item.name}>
                <Link to={`${item.number}`}>
                  {item.name}
                </Link>
              </li>
            )
          )
        }
      </ul>
      <Outlet/>
    </div>
  )
}

export default About