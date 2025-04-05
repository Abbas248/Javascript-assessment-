var getUl = document.querySelector("#ul");
var getInp = document.querySelector("#inp");
 
 function addTodo() {
    if (getInp.value == ""){
        alert("please input same value");
    }
    else{
        getUl.innerHTML += `<li>${getInp.value}<button class="add" onclick='edit(this)'> Edit </button> <button class="del" onclick='del(this)'> Delete </button></li>`
    }
    getInp.value = "";
   }

function delall(){
    getUl.innerHTML = "";
}

function edit(e){
    var pro = prompt("Enter updated value", e.parentNode.firstChild.textContent);
    e.parentNode.firstChild.textContent = pro;
}
function del(e){
      e.parentNode.remove()
}