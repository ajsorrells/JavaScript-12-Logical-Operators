function checkUserForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name !== "" && email !== ""){
        document.getElementById("formMessage").textContent = "Form complete!";
    }else{
        document.getElementById("formMessage").textContent = "Please fill in both fields.";
    }
}

function checkDiscount(){
    const checked =
    document.getElementById("studentDiscount").checked;
    const quantity =
    document.getElementById("quantity").value;

    if (checked && quantity > 2){
        document.getElementById("discountMsg").textContent = "Discount Applied!";
    }else{
        document.getElementById("discountMsg").textContent = "No discount available.";
    }
}

function showBadge(){
    const status =
    document.getElementById("status").value;
    const points =
    document.getElementById("points").value;

    if (status === "active" && points >= 100){
        document.getElementById("badgeMsg").textContent = "You earned a badge!";
    }else{
        document.getElementById("badgeMsg").textContent = "No badge yet.";
    }
}

function toggleNotice(){
    const notify =
    document.getElementById("notifyBox").checked;

    if (!notify){
        document.getElementById("notifyMsg").textContent = "Notifications are OFF";
    }else{
        document.getElementById("notifyMsg").textContent = "Notifications are ON";
    }
}

