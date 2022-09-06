var row = null

function validetion(){
        name1()
        Email()
        password()
        let DataEnterd = ritrieveData()
        let readData = raedingDataFormLocalStorage(DataEnterd)
        if(DataEnterd == false){
            msg.innerHTML ="please enter valid data"
        }else{
            if(row==null){
                insert(readData);
                msg.innerHTML="data inserted"
            }
        else{
            update();
            msg.innerHTML ="Data updated"
        }
        
    
        document.getElementById("form").reset()}}
function name1(){
    let a1 = document.getElementById("a5").value
    let a2 = document.getElementById("a2")
    if(a1==""){
        a2.innerHTML="Please Enter Your Name"
        a2.style.color="red"
     }else if(a1.length<3){
        a2.innerHTML="Name should Be More than 3 Characters"
        a2.style.color="red"
     }else if(!isNaN(a1)){
        a2.innerHTML="Name should Be Alphabet"
        a2.style.color= "red"
     }else {
        a2.innerHTML=""
    }
}
function Email(){
    let h = document.getElementById("a7").value
    let p = document.getElementById("a3")
    if(h==""){
        p.innerHTML="Please Enter Your Name"
        p.style.color="red"
    }else if(h.search(/[/@/./]/)==-1){
        p.innerHTML="please enter atleast one symbol"
        p.style.color="red"
    }else{
        p.innerHTML = ""
    }
}
function password(){
    let nae=document.getElementById("a9").value
    let klp = document.getElementById("a4")
    if(nae==""){
        klp.innerHTML="Please Enter Your Name"
        klp.style.color="red"
    }else if(nae.length<8){
        klp.innerHTML="Name should Be More than 8 Characters"
        klp.style.color="red"}
        else if(nae.lengt>15){
            klp.innerHTML="password not excwed 15 character"
            klp.style.color="red"}
    else if(nae.length<3){
            klp.innerHTML="Name should Be More than 3 Characters"
            klp.style.color="red"
    }else if(nae.search(/[0-9]/)==-1){
        klp.innerHTML="please enter atleast one digit"
        klp.style.color="red"
    }else if(nae.search(/[a-z]/)==-1){
        klp.innerHTML="please enter atleast one lowercase"
        klp.style.col,or="red"
    }else if(nae.search(/[A-Z]/)==-1){
        klp.innerHTML="please enter atleast one upper"
        klp.style.color="red"
    }else if(nae.search(/[/@/#/^/&/!/*/]/)==-1){
        klp.innerHTML="Please enter symbol"
        klp.style.color="red"
    }
    else{
        klp.innerHTML=""
    }
}
function ritrieveData(){
    let name = document.getElementById("a5").value;
    let job = document.getElementById("a7").value;
    let exp = document.getElementById("a9").value;

        var arr = [name,job,exp];
        if(arr.includes("")){
            return false;
        }else{
        return arr}
}
function raedingDataFormLocalStorage(DataEnterd) {
    let n = localStorage.setItem("Username", DataEnterd[0]);
    let j = localStorage.setItem("Email", DataEnterd[1]);
    let e = localStorage.setItem("password", DataEnterd[2]);

    //local to table
    let n1 = localStorage.getItem("Username", n);
    let j1 = localStorage.getItem("Email", j);
    let e1 = localStorage.getItem("password", e);

    var arr = [n1, j1, e1];
    return arr;
}
function insert(readData){
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];
    cell4.innerHTML = "<button onclick = edit(this)>Edit</button><button onclick=remove(this)>Delete</button>"
}
function edit(th){
    row = th.parentElement.parentElement;
    document.getElementById("a5").value = row.cells[0].innerHTML;
    document.getElementById("a7").value = row.cells[1].innerHTML;
    document.getElementById("a9").value = row.cells[2].innerHTML;

}
function update(){
    row.cells[0].innerHTML = document.getElementById("a5").value
    row.cells[1].innerHTML = document.getElementById("a7").value
    row.cells[2].innerHTML = document.getElementById("a9").value
row = null
}
function remove(th){
    row = th.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
}