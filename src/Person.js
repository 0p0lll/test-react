import React from "react" //라이브러리 호출

// 비구조화 할당 => 객체의 프로퍼티 값들을 변수에 풀어서 복사해준다
const Person = ({ name, age }) => {
  return(
    <>
      <h1>{name}</h1>
      <h4>{age}</h4>
    </>
  )
}

export default Person