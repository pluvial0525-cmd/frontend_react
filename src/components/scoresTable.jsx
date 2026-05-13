import React from 'react'

const scores = [
  { 이름 : "John", 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : "Peter", 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : "Susan", 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90},
  { 이름 : "Sue", 국어 : 90, 영어 : 90, 수학 : 80, 과학 : 90}
]

function scoresTable() {
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
      

     
    </table>
    
  )
}

export default scoresTable
