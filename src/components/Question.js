import React, { useEffect } from 'react'
import { Title, Button, P_bar } from '../styles/myComponents'
import { questioncontent } from '../utilities/questioncontents'



const Question = (props) => {

    const Progressbar = {
        height: '7px', backgroundColor: "#6D6CFF",
        margin: "0px 0px 70px 0px", borderRadius: "20px",
        width: props.pwidth
    }

    useEffect(()=>{
        props.progress()
    },[props.count])

    return <div>
        <P_bar style={{ width: '600px', backgroundColor: "black", borderRadius: "20px" }}>
            <div style={Progressbar} />
        </P_bar>
        <Title>
            <h3>{questioncontent[props.count].number}</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '15px' }}>{questioncontent[props.count].question}</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '15px' }}>{questioncontent[props.count].question2}</p>
        </Title>
        <Button onClick={ () => props.selectAnswer(1, questioncontent[props.count].type) }>
            {questioncontent[props.count].answer1}
        </Button>
        <br />
        <Button onClick={ () => props.selectAnswer(2, questioncontent[props.count].type) }>
            {questioncontent[props.count].answer2}
        </Button>
    </div>
       
}

export default Question