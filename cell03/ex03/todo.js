let ftList = document.getElementById("ft_list");
let button = document.getElementById("new");


function newTodo() {
    let elementList;

    let nameTodo = prompt("Inserisci nome del to-do");
    if (nameTodo == null || nameTodo == "") {
        alert("INSERISCI UN NOME HO DETTOO");
        return;
    }


    document.cookie = nameTodo + "=" + nameTodo;

    cookieee();
}

function cookieee() {

    document.getElementById("ft_list").innerHTML = "";

    console.log(document.cookie);

    var cookieArr = document.cookie.split(';');


    for (i = cookieArr.length - 1; i >= 0; i--) {

        let nameTodo = cookieArr[i].split('=')[0];
        console.log(nameTodo);

        elementList = "Nuovo todo:" + nameTodo;
        let divList = document.createElement("div");
        divList.setAttribute("id", nameTodo);
        divList.className = "addTodoStyle";
        divList.innerHTML = elementList;
        divList.addEventListener("click", function confirmAction() {
            const response = confirm("are you sure sure sure?")
            if (response) {
                divList.remove();
                document.cookie = nameTodo + "=; expires= 1 Oct 1990 00:00:00";
            }
        });
        ftList.appendChild(divList);
    }
}