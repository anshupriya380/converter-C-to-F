const numone=document.getElementById("numone");
const output=document.getElementById("numtwo");

numone.addEventListener("change",(e)=>{
    value1=e.target.value;
    output.innerText=((9/5)*Number(value1))+32;
})

