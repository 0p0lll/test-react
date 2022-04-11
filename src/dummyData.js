// 랜덤한 숫자 생성
function generateRandomId(n) { // 랜덤 숫자 n개를 생성
    const nums = new Array(n).fill(0) //n개 배열이 0으로 채워짐. 초기화
    return nums.map(n => Math.floor(Math.random()*10)).join("")
    // Math.random : 0 ~ 0.999999
    // Math.floor(버림) : 0 ~ 9
}

//랜덤한 문자열 생성
function generateRandomString(n) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const str = new Array(n).fill('a') //n개의 배열을 생성후 a로 채움
    return str.map(n => alphabet[Math.floor(Math.random()*alphabet.length)]).join("")
    // 알파벳개수 26개, alphabet.length = 26, index 번호는 0 ~ 25
    // Math.floor(Math.random()*alphabet.length) : 0 ~ 25
}

const dummyData = [
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), // 보통 킬로바이트가 여섯자리
        videoDescription: generateRandomString(100)
    },
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    },
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    },
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    },
    {
        videoId: generateRandomId(16), 
        videoName: generateRandomString(10), 
        videoLength: generateRandomId(6), 
        videoDescription: generateRandomString(100)
    }
]

export default dummyData