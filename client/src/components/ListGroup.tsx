import { Fragment } from 'react'

function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  items = []

  // *** we can also use function > benefit: we can have parameter
  const getMessage = () => {
    return items.length === 0 ? <p>No Item Found</p> : null
  }

  return (
    <Fragment>
      <h1>List</h1>

      {/* *** */}
      {getMessage()}

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
