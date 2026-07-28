/************ EXP 3 – CURSOR POSITION ************/
document.addEventListener("mousemove", function(e){
    let box = document.getElementById("cursorBox");
    if(box){
        box.innerHTML = "X: " + e.clientX + " , Y: " + e.clientY;
    }
});

/************ EXP 3 – DRAG LOGO ************/
let dragItem = null;

document.addEventListener("mousedown", function(e){
    if(e.target.id === "dragLogo"){
        dragItem = e.target;
    }
});

document.addEventListener("mouseup", function(){
    dragItem = null;
});

document.addEventListener("mousemove", function(e){
    if(dragItem){
        dragItem.style.position = "absolute";
        dragItem.style.left = e.pageX - 30 + "px";
        dragItem.style.top = e.pageY - 30 + "px";
    }
});

/************ EXP 4 – FORM VALIDATION ************/
function validateForm(){

    let name = document.getElementById("name").value;
    let nameRegex = /^[A-Za-z]{6,}$/;

    if(!nameRegex.test(name)){
        alert("Name must contain only alphabets and minimum 6 characters");
        return false;
    }

    let pass = document.getElementById("password").value;
    if(pass.length < 6){
        alert("Password must be at least 6 characters");
        return false;
    }

    let email = document.getElementById("email").value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if(!emailRegex.test(email)){
        alert("Invalid Email format");
        return false;
    }

    let phone = document.getElementById("phone").value;
    let phoneRegex = /^[0-9]{10}$/;

    if(!phoneRegex.test(phone)){
        alert("Phone number must be exactly 10 digits");
        return false;
    }

    alert("Registration Successful!!!");
    return true;
}
