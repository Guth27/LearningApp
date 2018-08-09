(function () {

    document.getElementById("LoginButton").addEventListener("click", loginClicked);
    document.getElementById("ToRegisterButton").addEventListener("click", toRegisterButtonClicked);


    var username;
    var passwd;

    function toRegisterButtonClicked() {
        window.location.href = "registerScreen.html";
    }

    function loginClicked() {
        //login();
        window.location.href = "mainScreen.html";
    }

    function login() {
        username = document.getElementById("username").value;
        passwd = document.getElementById("password").value;
        console.log(username);
        console.log(passwd);
        var db = window.openDatabase("Database", "1.0", "Users", 200000);
        db.transaction(LoginTransaction, errorCB, successCB);
    }
   
    function LoginTransaction(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS registeredusers (id integer unique, username, email unique, passwd)');
        tx.executeSql("SELECT * FROM registeredusers WHERE username=\"" + username + "\" AND passwd=\"" + passwd + "\"", [], function (tx, value) {
            if (value.rows.length == 1) {
                console.log("Lenght:" + value.rows.lenght);


                tx.executeSql('CREATE TABLE IF NOT EXISTS currentuser (username, email)');
                tx.executeSql('DELETE FROM currentuser');
                tx.executeSql("INSERT INTO currentuser VALUES(\'" + value.rows.item(0)['username'] + "\' ,\'" + value.rows.item(0)['email'] + "\')");
                window.location.href = "mainScreen.html";
            } else {
                alert("Incorret Username or Password!");
            }
        });


    }
   
    function errorCB(tx, err) {
        console.log("Error processing SQL: " + err);
    }
   
    function successCB() {
       console.log("success!");
    }
})();