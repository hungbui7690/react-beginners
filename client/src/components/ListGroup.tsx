import { Fragment } from 'react'

function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  items = []

  return (
    <Fragment>
      <h1>List</h1>

      {/* use && >> we don't need to use null  */}
      {items.length === 0 && <p>No Item Found</p>}

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
