import React from 'react'
import useFetchData from '../../Hooks/useFetchData'

const Home = () => {
  const {data} = useFetchData();
  console.log(data)
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Home
