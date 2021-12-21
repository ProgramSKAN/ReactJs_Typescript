"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
    var todo = response.data;
    var Id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n    todo Id : ".concat(Id, ",\n    todo Title : ").concat(title, "\n    todo Finished : ").concat(completed, "\n  "));
});
