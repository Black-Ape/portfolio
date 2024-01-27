const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){

    const bodyMessage = `
    Full Name: ${fullName.value}<br>
    Email: ${email.value}<br>
    Phone Number: ${phone.value}<br>
    Subject: ${subject.value}<br>
    Message: ${mess.value}<br>`;

    Email.send({
        SecureToken : "e3eca84b-2f34-44cc-8cc3-58934d4e8794",
    
        Username : "sinothileprinceton@gmail.com",
        Password : "E283420355B5CF07D628F3C1782ECFBEA001",
        To : 'sinothileprinceton@gmail.com',
        From : "sinothileprinceton@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );

}

//check input
function checkInputs(){
    const items = document.querySelectorAll(".form-control"); 

    for (const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error"); 
        }

        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else{
            errorTxtEmail.innerText = "Email Address can't be empty";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }

}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
        console.log("OK");
        sendEmail();

        form.reset();
        return false;
    }
});