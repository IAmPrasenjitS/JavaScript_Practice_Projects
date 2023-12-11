
// Important Regular Expressions
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var regEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
var regPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
var regSPChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var regNum = /\d/;
var regCap = /[A-Z]/;
var regsmall = /[a-z]/;

// Importtant Variables to stire values
let name = "";
let email = "";
let pass = "";
let conPass = false;
let qualification = "";
let gender;
let knownTech = "";
let comm = "";
// function
function validate(value, id) {
    // Checking Name / Email / Passwords
    if (id == "name") {
        if (regName.test(value)) {
            document.getElementById("errors").innerHTML = '<p><i class="fa fa-check" aria-hidden="true"></i> Name Validation Successfull</p>';
            this.name = value;
        } else {
            document.getElementById("errors").innerHTML = '<p><i class="fa fa-times" aria-hidden="true"></i> Please Enter Your Name and Surname</p>';
        }
    }
    if (id == "email") {
        if (regEmail.test(value)) {
            document.getElementById("errors").innerHTML = '<p><i class="fa fa-check" aria-hidden="true"></i> Email Validation Successfull</p>';
            this.email = value;
        } else {
            document.getElementById("errors").innerHTML = '<p><i class="fa fa-times" aria-hidden="true"></i> Please Enter a Valid Email</p>';
        }
    }
    if (id == "password") {
        if (regPass.test(value)) {
            pass = value;
            document.getElementById("errors").innerHTML = `
            <p><i class="fa fa-check" aria-hidden="true"></i> 1 Uppercase Character</p>
            <p><i class="fa fa-check" aria-hidden="true"></i> 1 Lowercase Character</p>
            <p><i class="fa fa-check" aria-hidden="true"></i> 1 Special Character</p>
            <p><i class="fa fa-check" aria-hidden="true"></i> 1 Number</p>
            <p><i class="fa fa-check" aria-hidden="true"></i> Minimum 8 Character</p>
            `;
        } else {
            document.getElementById("errors").innerHTML = `
                    <p id="cap"><i class="fa fa-times" aria-hidden="true"></i> 1 Uppercase Character</p>
                    <p id="small"><i class="fa fa-times" aria-hidden="true"></i> 1 Lowercase Character</p>
                    <p id="spl"><i class="fa fa-times" aria-hidden="true"></i> 1 Special Character</p>
                    <p id="num"><i class="fa fa-times" aria-hidden="true"></i> 1 Number</p>
                    <p id="min"><i class="fa fa-times" aria-hidden="true"></i> Minimum 8 Character</p>
            `;
            if (regSPChar.test(value))
                document.getElementById("spl").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> 1 Special Character';
            if (regNum.test(value))
                document.getElementById("num").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> 1 Number';
            if (regCap.test(value))
                document.getElementById("cap").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> 1 Uppercase Character';
            if (regsmall.test(value))
                document.getElementById("small").innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> 1 Lowercase Character';
        }
    }
    if (id == "confPassword") {
        if (document.getElementById("password").value == value){
            document.getElementById("errors").innerHTML = '<p><i class="fa fa-check" aria-hidden="true"></i> Password Matched</p>';
            conPass = true;
        }else{
            document.getElementById("errors").innerHTML = '<p><i class="fa fa-check" aria-hidden="true"></i> Password Not Matched</p>';
        }
    }

}

// Submit Function
function submitFunction() {
    // Retriving value for Qualification
    let qual = document.getElementById("quali").options;
    for (let i = 0; i < qual.length; i++) {
        if (qual[i].selected == true) {
            qualification += qual[i].value + " ";
        }
    }
    // Retriving value for Gender
    gender = document.formValidation.gen.value;
    // alert(gender)

    // Retriving value for Known Technologies
    let tech = document.getElementsByName("tech");
    for (let i = 0; i < tech.length; i++) {
        if (tech[i].checked == true)
            knownTech += tech[i].value + " ";
    }

    // Retriving value for textArea
    comm = document.getElementById("textArea").value;

    // Showing data to new document
    if(this.name.length > 0 && this.email.length > 0 && pass.length > 0 && conPass == true && qualification.length > 0 && gender.length > 0 && knownTech.length > 0 && comm.length > 0){
        document.write(`
            <table class="table">
                <thead>
                    <tr>
                        <th>Particulars</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>${this.name}</td>
                    </tr>
                    <tr>
                        <td>Email Address:</td>
                        <td>${this.email}</td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>This is Hidden</td>
                    </tr>
                    <tr>
                        <td>Qualification:</td>
                        <td>${qualification}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>${gender}</td>
                    </tr>
                    <tr>
                        <td>Known Technologies:</td>
                        <td>${knownTech}</td>
                    </tr>
                    <tr>
                        <td>Comments:</td>
                        <td>${comm}</td>
                    </tr>
                </tbody>
            </table>
            
        `);
    } else{
        return false;
    }

}