(function () {

    document.getElementById("BackButton").addEventListener("click", BackToLoginScreen);
    document.getElementById("RegisterButton").addEventListener("click", RegisterClicked);

    var username;
    var email;
    var passwd;
    var passwdC;
    var alreadyInUse;

    function BackToLoginScreen() {
        window.location.href = "index.html";
    }
    function RegisterClicked() {
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;
        passwd = document.getElementById("password").value;
        passwdC = document.getElementById("passwordC").value;

        var db = window.openDatabase("Database", "1.0", "Users", 200000);

        db.transaction(contains, errorCB, successCB);

       
    }
    function registerCheck() {
        console.log(alreadyInUse);
        if (alreadyInUse == 1) {
            alert("Username or email is already registered!");
        }
        else {
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
                db.transaction(registerNewUser, errorCB, successCB);
                window.location.href = "index.html";
            }
        }
    }

    function contains(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS registeredusers (id integer unique, username, email unique, passwd)');
        tx.executeSql("SELECT * FROM registeredusers  WHERE username=\"" + username + "\" OR email=\"" + email + "\"", [], function (tx, value) {
            if (value.rows.length == 1) {
                alreadyInUse = 1;
            }
            registerCheck();
        });
        
    }

    function registerNewUser(tx) {
       // var id;
       // tx.executeSql("SELECT * FROM registeredusers", [], function (tx, value) {
       //     id = value.rows.lenght;
       // })
        tx.executeSql("INSERT INTO registeredusers (username, email, passwd) VALUES(\'" + username + "\', + \'" + email + "\', \'" + passwd + "\')");
        console.log("registered");
    }

    function errorCB(tx, err) {
        console.log("Error processing SQL: " + err);
    }

    function successCB() {
        console.log("success!");
    }
})();