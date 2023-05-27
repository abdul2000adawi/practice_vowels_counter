const input=document.getElementById('input')
const button=document.getElementById('button')
let count=0;
button.addEventListener('click',(e)=>{
    e.preventDefault();
    if(input.value){
    const string=input.value
    for(let i=0; i<string.length;i++){
        if(string.charAt(i).toLowerCase()==='a' || string.charAt(i).toLowerCase()==='o' || string.charAt(i).toLowerCase()==='e' || string.charAt(i).toLowerCase()==='i' || string.charAt(i).toLowerCase()==='u'){
            count=count+1
        }
    }
    alert(`The number of vowles is ${count}`);
    input.value=''
    count=0;
    }else{
        alert('Please enter a string')
    }
})

