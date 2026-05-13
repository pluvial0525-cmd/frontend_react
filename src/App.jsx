import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const scores = [
  { 이름 : "John", 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : "Peter", 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : "Susan", 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : "Sue", 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90}
]

// 리스트에서는 정렬숫자로 데이터를 찾기 때문에 존의 수학점수를 찾고싶으면
// scores[0].수학  하면 화면에 대답해줌
// 아래 리턴에 쓸때 {}를 안넣으면 그 자체를 문자로 해석해서 값이 아닌 그대로 출력됨
// 데이터는 {}를 써야함 데이터는 변하는 값이고 문자는 변하지 않으니까 
//                                       스코어처럼 값을 입력할수 있게 함

//매핑 예시

function App() {
  

  return (

    <table>
     
      <tr>
        {
          Object.keys(scores[0]).map(key=>(
            <th>{key}</th>
          ))
        }
        
      </tr>
       {/* tr이 가로 행을 만들고 그 행이 제목이 될거니까 나머지 애들은 th(헤더)가 됨 */}
      {scores.map(item =>(
        <tr>
          {Object.values(item).map(
            (values)=>(<td>{values}</td>) 
          )}
        </tr>
      ))}
      
        
          
        
      
    
    
      {/*  데이터는 {}를 써야함 데이터는 변하는 값이고 문자는 변하지 않으니까 스코어처럼 값을 입력할수 있게 함*/}
      {/* 같은속성이기 때문에 리스트로 해서 []로도 화면에 뿌릴수 있다 */}
     
    </table>
  )
}

export default App
