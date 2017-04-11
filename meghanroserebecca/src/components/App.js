//Nothing inside of the components folder relies on Redux, and can be separated from the Redux components if this project migrates away from using Redux

import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleToDoList from '../containers/VisibleToDoList';

const App = () => (
  <div>
      <AddTodo />
      <VisibleToDoList />
      <Footer />
  </div>
)

export default App