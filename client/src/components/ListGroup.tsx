import { Fragment } from 'react'

function ListGroup() {
  // ***
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  // ***
  return (
    <Fragment>
      <ul className='list-group'>
        {items.map((item) => (
          <li className='list-group-item' key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default ListGroup
