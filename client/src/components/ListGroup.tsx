// *** TS
import { MouseEvent } from 'react'

function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  // ***
  const handleEvent = (e: MouseEvent) => console.log(e)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className='list-group-item'
            key={item}
            onClick={handleEvent} // *** hover on event object here (from last lesson) to see the type
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
