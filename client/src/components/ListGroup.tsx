import { Fragment } from 'react'

function ListGroup() {
  // ***
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  items = []

  // ***
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No Item Found</p>
      </>
    )

  // *** we can't use if/else statement down here >> if we want, we need to use ternary operator
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
