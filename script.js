function InsertValue(value){
    document.getElementById("calculator").value+=value

}

function submitHandler(event){
    event.preventDefault();
    const inputData=document.getElementById("calculator").value;
    try{
        document.getElementById("calculator").value=eval(inputData);
    }
    catch(e){
        document.getElementById("calculator").value="Error"
    }
}

function Clear(){
    const inputData=document.getElementById("calculator").value=("")
}
function Eraser(){
    const inputData=document.getElementById("calculator").value;
    document.getElementById("calculator").value=inputData.slice(0,-1)
}


