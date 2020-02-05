import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  const URI = 'https://swapi.co/api/people/1'
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)
  const [homeworld, setHomeworld] = useState([])
  const [isLoadingWorld, setLoadingWorld] = useState(true)

  useEffect(() => {
    fetch(URI)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPeople(data)
        setLoading(true)
      })
  }, [])

  useEffect(() => {
    if (loading) {
      fetch(people.homeworld)
        .then(res => res.json())
        .then(data => {
          setHomeworld(data)
          setLoadingWorld(false)
        })
    }
  }, [loading])

  const Loading = styled.p`
    color: crimson;
    font-size: 2rem;
    text-align: center;
  `

  const People = styled.div`
    border: 1px solid gray;
    padding: 10px;
    display: block;
    margin: 0 auto;
    width: 90%;
    p {
      color: gray;
      font-size: 1.2rem;
    }
  `

  const World = styled.div`
    border: 1px solid gray;
    padding: 10px;
    display: block;
    margin: 15px auto;
    width: 90%;
    p {
      color: gray;
      font-size: 1.2rem;
    }
  `

  const Button = styled.span`
    color: white;
    display: block;
    background-color: deeppink;
    margin: 50px auto;
    padding: 20px;
    width: 300px;
    text-decoration: none;
     
  `

  return (
    <>
      {loading === false ? <Loading>Loading...</Loading> :
        <>
          <People>
            <h1>Name: {people.name}</h1>
            <p>Gender: {people.gender}</p>
            <p>Hair color: {people.hair_color}</p>
            <p>Skin color: {people.skin_color}</p>
          </People>
          {isLoadingWorld === true ?  <Loading>Loading world...</Loading> :
            <World>
              <h1>{homeworld.name}</h1>
              <p>{homeworld.climate}</p>
              <p>{homeworld.gravity}</p>
            </World>
          }
        </>
      }
      <Link to='/'>
        <Button>
          Cerrar sesion
        </Button>
      </Link>
    </>
  )
}

export default Home
