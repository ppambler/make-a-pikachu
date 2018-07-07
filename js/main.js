!function() {
    function writeCode(prefox,code,fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(()=>{
            n += 1   
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if( n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        },10)
    }
var code = `
/* 首先，需要准备皮卡丘的皮 */
.preview {
    height: 100%;
    border: 2px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffe600;
}
.wrapper {
    width: 100%;
    height: 178px;
    position: relative;
}


/* 接下来，画皮卡丘的鼻子 */
.nose {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: relative;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}


/* 接下来，画皮卡丘的眼睛 */
.eye {
    width: 49px;
    height: 49px;
    background-color: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
}
/* 然后，画眼睛中的眼珠子 */
.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}
/* 挪一下位置，变个左眼 */
.eye.left {
    top:0;
    right: 50%;
    margin-right: 90px;
}
/* 再挪一下位置，变个右眼 */
.eye.right {
    top:0;
    left: 50%;
    margin-left: 90px;
}


/* 接下来，画个红晕小酒窝 */
.face {
    width: 68px;
    height: 68px;
    background-color: #ff0000;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px
}
/* 同理，挪个位置，变成左红晕小酒窝 */
.face.left  {
    right: 50%;
    margin-right: 116px;
}
/* 又挪个位置，变成右红晕小酒窝 */
.face.right  {
    left: 50%;
    margin-left: 116px;
}


/* 接下来，画个上嘴唇 */
.upperLip {
    height: 20px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top:52px;
    background-color: #ffe600;
}
/* 左上嘴唇 */
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg)
}
/* 右上嘴唇 */
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg)
}


/* 接下来，画个下嘴唇 */
.lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    height: 120px;
    overflow: hidden;
    width: 300px;
}
.lowerLip {
    height: 3513px;
    width: 300px;
    background-color: #9b000a;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}


/* 画个小舌头 */
.lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 120px;
    background-color: #ff485f;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}


/* 好了，这只皮卡丘送给你 */
`
writeCode('',code)
}.call()