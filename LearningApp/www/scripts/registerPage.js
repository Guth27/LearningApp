(function () {

    document.getElementById("BackButton").addEventListener("click", BackToLoginScreen);
    document.getElementById("RegisterButton").addEventListener("click", RegisterClicked);

    var username;
    var email;
    var passwd;
    var passwdC;

    function BackToLoginScreen() {
        window.location.href = "index.html";
    }
    function RegisterClicked() {
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;
        passwd = document.getElementById("password").value;
        passwdC = document.getElementById("passwordC").value;

        if (username == "") {
            alert("Username can't be empty!");
        }
        else if (email == "") {
            alert("Email can't be empty!")
        }
        else if (passwd == "" || passwd != passwdC) {
            alert("Invalid password or doesn't match!");
        }
        else {
            var db = window.openDatabase("Database", "1.0", "Users", 200000);
            db.transaction(registerNewUser, errorCB, successCB);
            window.location.href = "index.html";
        }
    }

    function registerNewUser(tx) {
        var id;
        tx.executeSql("SELECT * FROM registeredusers", [], function (tx, value) {
            id = value.rows.lenght;
        })
        tx.executeSql("INSERT INTO registeredusers VALUES(\'" + id + "\', \'" + username + "\', + \'" + email + "\', \'" + passwd + "\')");
        console.log("registered");
    }

    function errorCB(tx, err) {
        console.log("Error processing SQL: " + err);
    }

    function successCB() {
        console.log("success!");
    }
})();