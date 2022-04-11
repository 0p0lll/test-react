import React, { Component } from "react";
import PropTypes from 'prop-types'; //유효성검증, 데이터타입을 정해준다

function YoutubeVideo( {videoId, videoName, videoLength, videoDescription, videoAuthor, children} ) {
    return(
        <div id={videoId}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <h3>작성자 - {videoAuthor}</h3>
            <p>{videoDescription}</p>
            {children}
        </div>

    )
}

export default YoutubeVideo 


// 아래에 받고싶은 값(데이터타입)을 설정해준다
// 필수는 아니지만 값을 정의해두면 다른 개발자가 해당 컴포넌트에 어떤 속성들이 들어가는지 한눈에 파악가능
// 잘못된 값이 들어오면 (에러는 뜨지않지만) 경고창을 띄어준다
YoutubeVideo.propTypes = {
    videoId: PropTypes.string,
    videoName: PropTypes.string,
    videoLength: PropTypes.number,
    videoDescription: PropTypes.string
}



// 영상 작성자 값 추가해주기
// App(외부)에서 보재는 작성자 값이 없기 때문에 빈칸이다
// 외부에서 보내는 값이 없으면 디폴트 값을 출력해준다
YoutubeVideo.defaultProps = {
    videoAuthor: "디폴트 작성자"
}