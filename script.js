
console.log("hello");

// windows location object  in js 

//http--port--domain--extension --//--route--:--parems--?--queries

//commands in commands prompt --
//1.windows ip configure
//2.ping www.google.com
//3.tracert  route to www.google.com

console.log(window)
console.log(window.location)
console.log(location.href)

function onHit(){
    location.reload();

}

function ChangeUrl(){
    location.replace("https://www.google.com");
    
}

function ChangeUrlWithHistory(){
    location.assign("https://www.google.com");
    
}

