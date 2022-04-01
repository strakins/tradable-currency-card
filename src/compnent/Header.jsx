import { React, useState} from 'react'
import Button from 'react-bootstrap/Button'

const Header = () => {

  const [name, setName] = useState("John");
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    setName("Blessing")
  }

  return (
    <div>
        <h1 className='text-white pb-4'>Welcome, {name} you clicked {count} times </h1>
        {/* <h1 className='text-white pb-4'>Number of Clicks: {count} </h1> */}
        <Button variant="danger" onClick={handleClick}> Click Me </Button>
    </div>
  )
}

export default Header