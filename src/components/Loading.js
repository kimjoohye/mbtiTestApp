import React, {useState, useEffect} from 'react'
import { L_Title } from '../styles/myComponents'
import Spinner from './Spinner'

function Loading(props){
    const [title, setTitle] = useState("결과 분석중")

    useEffect(() => {
		const id = setTimeout(() => {
			setTitle((title) => title + ".");
		}, 700);
		return () => clearTimeout(id);
	}, [title]);


    return <div>
      <L_Title>{title}</L_Title>
      <Spinner></Spinner>
    </div>
}
export default Loading