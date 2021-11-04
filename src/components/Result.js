import React, { useState, useEffect, useRef } from 'react'
import { Title, Button } from '../styles/myComponents'
import { resultcontent } from '../utilities/resultcontents'
import Loading from './Loading'

const Result = props => {
  const p_font = {
    fontSize: '17px', textAlign: 'justify',
    lineHeight:'25px'  
  }
  const [ myCharacter, setCharacter ] =  useState({})
  const [ loading, setLoading ] =  useState(true)
  var refvar = useRef()

  useEffect(() => {
    const { e, s, t, j } = props.points
    let result = "";
    result += e > 0 ? "E":"I"
    result += s > 0 ? "S":"N"
    result += t > 0 ? "T":"F"
    result += j > 0 ? "J":"P"

    const finalResult = resultcontent.filter(content => {
      return content.type === result
    })
    setCharacter(finalResult[0])
    setTimeout(() => {
        setLoading(false)
    }, 4000)
  }, [refvar.current])


  return <div style={{ width: 600 }}>
    {loading ? <Loading /> : <div>
      <Title>
      <h2 style={{ lineHeight:'20px' }}>당신은</h2>  
      <h2 style={{ lineHeight:'20px' }}>{myCharacter.name}!</h2>
      <img style={{ width: 300, height: 200 }} src={myCharacter.image} ref={refvar}/>
      <p style={p_font}>{myCharacter.description}</p>
    </Title>
    <Button onClick={props.goToHome}>다시하기</Button>
    </div>
    }
  </div>
}

export default Result