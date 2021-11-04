import React from 'react'
import { Title, Button } from '../styles/myComponents'

const Home = (props) => {
    return <div style={{textAlign: 'center'}}>
        <Title>
            <h1 style={{ lineHeight: '50px' }}>내가 <br /> <span style={{ color: "#6D6CFF" }}>동물</span>로 태어난다면?</h1>
        </Title>
        <Button onClick={props.goToGame}>
            시작하기
        </Button>
        <p>MADE BY KJH</p>
    </div>
}
export default Home