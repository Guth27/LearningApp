(function () {
    loadUp();
    appendList();


    function appendList() {

        //tests
        var list = document.getElementById('mainSubjectList');
        var entry = document.createElement('li');
        var listItemBody = document.createElement('div');
        listItemBody.setAttribute('class', 'mainSubjectElement');
        var wrapperBody = document.createElement('div');
        wrapperBody.setAttribute('id', 'test1');
        wrapperBody.setAttribute('class', 'mainSubjectElementWrapper');

        entry.appendChild(wrapperBody);
        wrapperBody.appendChild(listItemBody);
        listItemBody.appendChild(document.createTextNode("JsPlumbtest Connection"));

        var entry2 = document.createElement('li');
        var listItemBody2 = document.createElement('div');
        listItemBody2.setAttribute('class', 'mainSubjectElement');
        var wrapperBody2 = document.createElement('div');
        wrapperBody2.setAttribute('id', 'test2');
        wrapperBody2.setAttribute('class', 'mainSubjectElementWrapper');
       
        entry2.appendChild(wrapperBody2);
        wrapperBody2.appendChild(listItemBody2);
        listItemBody2.appendChild(document.createTextNode("JsPlumbtest Drag and Grid"));
       
       var entry3 = document.createElement('li');
       var listItemBody3 = document.createElement('div');
       listItemBody3.setAttribute('class', 'mainSubjectElement');
       var wrapperBody3 = document.createElement('div');
       wrapperBody3.setAttribute('id', 'test3');
       wrapperBody3.setAttribute('class', 'mainSubjectElementWrapper');
       
       entry3.appendChild(wrapperBody3);
       wrapperBody3.appendChild(listItemBody3);
       listItemBody3.appendChild(document.createTextNode("JsPlumbtest CreatingConnection"));



        list.appendChild(entry);
        list.appendChild(entry2);
        list.appendChild(entry3);


        document.getElementById("test1").addEventListener("click", jsPlumbTest1);
        document.getElementById("test2").addEventListener("click", jsPlumbTest2);
        document.getElementById("test3").addEventListener("click", jsPlumbTest3);

        //get the base topics from the database
        var db = window.openDatabase("Database", "1.0", "Topics", 200000);
        db.transaction(readTopics, errorCB, successCB);
        
    }
    function jsPlumbTest1() { window.location.href = "jsPlumbTest1.html"; }
    function jsPlumbTest2() { window.location.href = "jsPlumbTest2.html"; }
    function jsPlumbTest3() { window.location.href = "jsPlumbTest3.html"; }

    function readTopics(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS maintopics (id integer unique, topicname)');
        console.log("1");
        //tx.executeSql("INSERT INTO maintopics VALUES(0,\'Mathematics\')");
        tx.executeSql('SELECT * FROM maintopics', [], function (tx, value) {
            for (i = 0; i < value.rows.length; i++){
            console.log(value.rows.length);
                var list = document.getElementById('mainSubjectList');
                var entry = document.createElement('li');
                var listItemBody = document.createElement('div');
                listItemBody.setAttribute('class', 'mainSubjectElement');
                var wrapperBody = document.createElement('div');
                wrapperBody.setAttribute('id', value.rows.item(i)["topicname"]);
                wrapperBody.setAttribute('class', 'mainSubjectElementWrapper');
   
                entry.appendChild(wrapperBody);
                wrapperBody.appendChild(listItemBody);
                listItemBody.appendChild(document.createTextNode(value.rows.item(i)["topicname"]));
                //listItemBody.appendChild(document.createTextNode(i));
   
                list.appendChild(entry);
            }
        });
    }

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