let i=1;
function deleteItem(index){
    i--;
    const element=document.querySelector("#item"+index);
    element.parentNode.removeChild(element);
}
function editItem(index){
    const element=document.querySelector("#todo"+index);
    const edited=document.querySelector("#input"+index).value;
    element.innerHTML=edited;
}
function addItem(){
    i++;
    let ind=i;
    const inputel=document.querySelector("#addb").value;
    //creating new listitem
    const newli=document.createElement("li");
    newli.setAttribute("id",'item'+ind);
    //creting new div
    const div1=document.createElement("div");
    div1.setAttribute("class","listitem");
    
    const div1a=document.createElement("div");
    div1a.setAttribute("id","todo"+ind);
    div1a.innerHTML=inputel;

    const div1b=document.createElement("div");

    const inputbox=document.createElement("input");
    inputbox.setAttribute("id","input"+ind);
    inputbox.setAttribute("lang","txt");
    
    const editbutton=document.createElement("button");
    editbutton.setAttribute("onclick","editItem(ind)");
    editbutton.innerHTML="Edit";

    const deletebutton=document.createElement("button");
    deletebutton.setAttribute("onclick","deleteItem(ind)");
    deletebutton.innerHTML="Delete";

    const parentel=document.querySelector("ol");

    parentel.appendChild(newli);
    newli.appendChild(div1);
    div1.appendChild(div1a);
    div1.appendChild(div1b);
    div1b.appendChild(inputbox);
    div1b.appendChild(editbutton);
    div1b.appendChild(deletebutton);
}