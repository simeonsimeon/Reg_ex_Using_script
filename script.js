let input=document.getElementById("input");

function reg(){
    if(input.value!==""){
    let table=document.getElementById("table");
    let row=table.insertRow(table.length);
    let c1=row.insertCell(0);
    let c2=row.insertCell(1);
    let c3=row.insertCell(2);
     
    if(input.value){
        let value=input.value;
        let name=value.replace(/[^A-Za-z]/g,"");
        let number=value.replace(/[^0-9]/g,"");
        let symbol=value.replace(/[A-Za-z0-9]/g,"");
        c1.innerText=name;
        c2.innerText=symbol;
        c3.innerText=number;
    }
    }
    input.value="";
}
let btn=document.getElementById("btn");
btn.addEventListener("click",reg)