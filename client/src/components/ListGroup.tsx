import { Fragment } from 'react'

function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className='list-group-item'
            key={item}
            onClick={(e) => console.log({ e })} // *** event object
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default ListGroup
