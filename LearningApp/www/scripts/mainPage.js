(function () {
    loadUp();

    function loadUp() {
        var db = window.openDatabase("Database", "1.0", "Users", 200000);
        db.transaction(readCurrentUser, errorCB, successCB);
    }

    function readCurrentUser(tx) {
        tx.executeSql('SELECT * FROM currentuser', [], function (tx, value) {
            if (value.rows.length == 1) {
                document.getElementById('usernameHolder').innerHTML = value.rows.item(0)['username'];
                document.getElementById('emailHolder').innerHTML = value.rows.item(0)['email'];
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