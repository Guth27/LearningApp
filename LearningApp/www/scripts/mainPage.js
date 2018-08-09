(function () {
    loadUp();
    appendList();


    function appendList() {
        var list = document.getElementById('mainSubjectList');
        var entry = document.createElement('li');
        var listItemBody = document.createElement('div');
        listItemBody.setAttribute('class', 'mainSubjectElement');
        listItemBody.setAttribute('id', 'test1');

        entry.appendChild(listItemBody);
        listItemBody.appendChild(document.createTextNode("JsPlumbtest Connection"));

        var entry2 = document.createElement('li');
        var listItemBody2 = document.createElement('div');
        listItemBody2.setAttribute('class', 'mainSubjectElement');
        listItemBody2.setAttribute('id', 'test2');

        entry2.appendChild(listItemBody2);
        listItemBody2.appendChild(document.createTextNode("JsPlumbtest Drag"));

        var entry3 = document.createElement('li');
        var listItemBody3 = document.createElement('div');
        listItemBody3.setAttribute('class', 'mainSubjectElement');
        listItemBody3.setAttribute('id', 'test3');

        entry3.appendChild(listItemBody3);
        listItemBody3.appendChild(document.createTextNode("JsPlumbtest CreatingConnection"));



        list.appendChild(entry);
        list.appendChild(entry2);
        list.appendChild(entry3);


        document.getElementById("test1").addEventListener("click", jsPlumbTest1);
        document.getElementById("test2").addEventListener("click", jsPlumbTest2);
        document.getElementById("test3").addEventListener("click", jsPlumbTest3);
    }
    function jsPlumbTest1() { window.location.href = "jsPlumbTest1.html"; }
    function jsPlumbTest2() { window.location.href = "jsPlumbTest2.html"; }
    function jsPlumbTest3() { window.location.href = "jsPlumbTest3.html"; }


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