<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Todo App with Redux
===

Create a react todo app that uses redux for state management. 

![image](https://cloud.githubusercontent.com/assets/478864/23924199/f32ceb8c-08c6-11e7-8e82-8b56fe196254.png)

You do not need to use a server, though you are welcome to. Usually helful to keep local storage up to date so the list survives a browser refresh. 

## TODO List

A todo list is an array of items, each with the following structure:

```js
{
  id: <unique id>,
  text: <description of todo>,
  completed: <true|false>
}
```

The app should display the list of todos, and offer the following actions:

* `ADD_TODO` - solicit text for new todo and add to end of array
* `DELETE_TODO` - remove a todo
* `EDIT_TODO` - supply a new "text" for a todo
* `COMPLETE_TODO` - mark a todo as complete
* `COMPLETE_ALL` - mark all of the todos as complete
* `CLEAR_COMPLETED` - remove all completed todos from the array

## Bonus

Implement Filtering, with three options:
* `SHOW_ALL` - all todos, not filtered
* `SHOW_COMPLETED` - only show completed todos
* `SHOW_ACTIVE` - only show active, aka not completed

## Rubric *20pts*
- Redux correctly implemented (functionality correct) *7pts*
- Redux idomatic organization and use *6pts*
- React Todo App *5pts*
- Idomatic Html, CSS *2pts*
