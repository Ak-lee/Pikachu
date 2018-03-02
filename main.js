!function(){
    function writeCode(prefix,code,fn){
        var container = document.getElementById('code');
        var styleTag = document.getElementById('styleTag')
        var n=0
        var id = setInterval(
            function(){
                n+=1;
                container.innerHTML=code.substring(0,n);
                container.parentElement.scrollTop=container.scrollHeight;
                styleTag.innerHTML=code.substring(0,n);
                if(n>=code.length){
                    window.clearInterval(id)
                    fn && fn.call()
                }
            },1)
    }
    let code=`
    #pikachu {
        position: relative;
        width: 420px;
        height: 235px;
    }
    .eye{
        width:57px;
        height: 57px;
        border-radius: 50%;
        border:3px solid black;
        background: #2e2e2e;
        position:absolute;
    }
    .eye::after{
        content:'';
        position:absolute;
        width:25px;
        height:25px;
        background:white;
        border: 3px solid black;
        display:block;
        border-radius: 50%;
        margin-left: 7px;
        margin-top: -2px;
        
    }
    .eye.left{
        right:50%;
        margin-right:92px;
    }
    .eye.right{
        left:50%;
        margin-left:92px;
    }
    .nose{
        position: absolute;
        width: 0;
        height: 0;
        border-top: 9px solid black;
        border-left:11px solid transparent;
        border-right: 11px solid transparent;
        left:calc(50% - 11px);
        top:38px;
        z-index: 1;
    }
    .nose::before{
        content:'';
        display: block;
        position:absolute;
        width:22px;
        height:5px;
        background:black;
        bottom:9px;
        left:-11px;
        border-top-left-radius: 11px 5px;
        border-top-right-radius:11px 5px;
    }
    
    @keyframes nose {
        0% { transform:rotate(0deg); }
        33% { transform:rotate(-5deg); }
        67% { transform:rotate(5deg); }
        100% { transform:rotate(0deg); }
    }

    .nose:hover {
    animation:nose .23s infinite linear;
    }
    
    .mouth{
        position:absolute;
        width: 228px;
        height:180px;
        top:65px;
        left:calc(50% - 114px);
        overflow: hidden;
    }
    .mouth::after{
        content:'';
        display:block;
        position:absolute;
        width:80px;
        height:25px;
        background:#FFE600;
        border: 3px solid black;
        border-top:none;
        border-left: none;
        border-bottom-right-radius: 60px 30px;
        right:30px;
        top:-5px;
        transform:rotate(27deg);
        box-shadow: 0 -10px 0 #FFE600, 5px -3px 0 #FFE600;
    
    }
    .mouth::before{
        content:'';
        display:block;
        position:absolute;
        width:80px;
        height:25px;
        background:#FFE600;
        border: 3px solid black;
        border-top:none;
        border-right: none;
        border-bottom-left-radius: 60px 30px;
        left:30px;
        top:-5px;
        transform:rotate(-27deg);
        z-index: 1;
        box-shadow: 0 -10px 0 #FFE600, 5px -3px 0 #FFE600;
    }
    
    .mouth>div{
        position: absolute;
        background: #9B000A;
        width:228px;
        height:800px;
        border: 4px solid black;
        border-bottom-left-radius: 118px 800px;
        border-bottom-right-radius: 118px 800px;
        bottom:11px;
        overflow:hidden;
    }
    
    .mouth>div::after{
        content:'';
        display: block;
        position: absolute;
        background: #FF485F;
        width:130px;
        height:150px;
        bottom:-15px;
        border-top-left-radius: 65px;
        border-top-right-radius: 65px;
        left:48px;
    }
    
    .yellow{
        width:228px;
        height:4px ;
        background:#FFE600;
        position:absolute;
        top:62px;
        z-index:2;
        left:calc(50% - 114px);
    }
    .cheek {
        width: 82px;
        height: 82px;
        border: 3px solid black;
        border-radius: 100%;
        position: absolute;
        margin-top: 110px;
        background: #F00;
    }
    .cheek.right {
        right: 0;
    }
    
    `
    writeCode('',code);

}.call()