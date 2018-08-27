var db = require("../models");

module.exports = function (app) {

  app.get("/mentee", function (req, res) {
    res.render("menteeSurvey");
  });

  app.get("/mentor", function (req, res) {
    res.render("mentorSurvey")
  });

  app.get("/FAQroute", function (req, res) {
    res.render("FAQ")
  });


  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index");
    });
  });

  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });


  // // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });


};


  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes




  //this is an example--preston//

  $(document).ready(function() {
    // Getting a reference to the input field where user adds a new todo
    var $newItemInput = $("input.new-item");
    // Our new todos will go inside the todoContainer
    var $todoContainer = $(".todo-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteTodo);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".todo-item", editTodo);
    $(document).on("keyup", ".todo-item", finishEdit);
    $(document).on("blur", ".todo-item", cancelEdit);
    $(document).on("submit", "#todo-form", insertTodo);
    // Our initial todos array
    var todos = [];
    // Getting todos from database when page loads
    getTodos();
    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
      $todoContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < todos.length; i++) {
        rowsToAdd.push(createNewRow(todos[i]));
      }
      $todoContainer.prepend(rowsToAdd);
    }
    // This function grabs todos from the database and updates the view
    function getTodos() {
      $.get("/api/todos", function(data) {
        todos = data;
        initializeRows();
      });
    }
    // This function deletes a todo when the user clicks the delete button
    function deleteTodo(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/todos/" + id
      }).then(getTodos);
    }
    // This function handles showing the input box for a user to edit a todo
    function editTodo() {
      var currentTodo = $(this).data("todo");
      $(this).children().hide();
      $(this).children("input.edit").val(currentTodo.text);
      $(this).children("input.edit").show();
      $(this).children("input.edit").focus();
    }
    // Toggles complete status
    function toggleComplete(event) {
      event.stopPropagation();
      var todo = $(this).parent().data("todo");
      todo.complete = !todo.complete;
      updateTodo(todo);
    }
    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
      var updatedTodo = $(this).data("todo");
      if (event.which === 13) {
        updatedTodo.text = $(this).children("input").val().trim();
        $(this).blur();
        updateTodo(updatedTodo);
      }
    }
    // This function updates a todo in our database
    function updateTodo(todo) {
      $.ajax({
        method: "PUT",
        url: "/api/todos",
        data: todo
      }).then(getTodos);
    }
    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
      var currentTodo = $(this).data("todo");
      if (currentTodo) {
        $(this).children().hide();
        $(this).children("input.edit").val(currentTodo.text);
        $(this).children("span").show();
        $(this).children("button").show();
      }
    }
    // This function constructs a todo-item row
    function createNewRow(todo) {
      var $newInputRow = $(
        [
          "<li class='list-group-item todo-item'>",
          "<span>",
          todo.text,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-danger'>x</button>",
          "<button class='complete btn btn-primary'>✓</button>",
          "</li>"
        ].join("")
      );
      $newInputRow.find("button.delete").data("id", todo.id);
      $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("todo", todo);
      if (todo.complete) {
        $newInputRow.find("span").css("text-decoration", "line-through");
      }
      return $newInputRow;
    }
    // This function inserts a new todo into our database and then updates the view
    function insertTodo(event) {
      event.preventDefault();
      var todo = {
        text: $newItemInput.val().trim(),
        complete: false
      };
      $.post("/api/todos", todo, getTodos);
      $newItemInput.val("");
    }
  });

  // *********************************************************************************
  // api-routes.js - this file offers a set of routes for displaying and saving data to the db
  // *********************************************************************************
  // Dependencies
  // =============================================================
  // Requiring our Todo model
  var db = require("../models");
  // Routes
  // =============================================================
  module.exports = function(app) {
    // GET route for getting all of the todos
    app.get("/api/todos", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.Todo.findAll({}).then(function(dbTodo) {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbTodo);
      });
    });
    // POST route for saving a new todo
    app.post("/api/todos", function(req, res) {
      console.log(req.body);
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property (req.body)
      db.Todo.create({
        text: req.body.text,
        complete: req.body.complete
      }).then(function(dbTodo) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbTodo);
      });
    });
    // DELETE route for deleting todos. We can get the id of the todo we want to delete from
    // req.params.id
    app.delete("/api/todos/:id", function(req, res) {
    });
    // PUT route for updating todos. We can get the updated todo from req.body
    app.put("/api/todos", function(req, res) {
    });
  };