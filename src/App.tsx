import { useState, ChangeEvent, FormEvent} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Todo from './Todo';

function App(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [todo, setTodo] = useState<string[][]>([
    ['1', 'Do the homework'],
    ['2', 'Wash the dishes'],
    ['3', 'Visit the doctor'],
    ['4', 'Pay the rent'],
    ['5', 'Buy groceries']
  ]);

  const createTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(text === '') return undefined;
    
    let uid = Date.now().toString(36);
    setTodo(todo => {
      return [...todo, [uid, text]];
    });
    setText('');
  };

  const deleteTodo = (taskUID: string): void => {
    setTodo(todo => {
      return todo.filter(([uid, todo]) => uid !== taskUID);
    });
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>GOT SOMETHING TO DO?</h1>
      <form onSubmit={createTodo}>
        <motion.input
          type='text'
          className='todoname'
          placeholder='Add a new todo'
          value={text}
          onChange={changeHandler}
          whileHover={{boxShadow: '0 0 2px 2px royalblue'}}
          whileFocus={{boxShadow: '0 0 2px 2px royalblue', scale:1.02}}
          />
        <motion.button 
          type='submit' 
          className='add'
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          >
          Add
        </motion.button>
      </form>
      <AnimatePresence>
      {
        todo.map(([uid, todo]) => {
          return <Todo key={uid} task={todo} deleteTodo={() => {deleteTodo(uid)}}/>
        })
      }
      </AnimatePresence>
    </div>
  );
}

export default App;
