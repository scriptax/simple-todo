import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

type todoType = {
  task: string,
  deleteTodo: MouseEventHandler,
}

function Todo({task, deleteTodo}: todoType): JSX.Element {
  return (
      <motion.div 
        className="todo"
        initial={{x: '-20vW', opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: '20vw', opacity: 0}}
        whileHover={{scale: 1.05}}
        transition={{ duration: 0.3}}
      >
        {task}
        <motion.button 
          className="done" 
          onClick={deleteTodo}
          whileHover={{scale: 1.05}}
        >
          Done!
        </motion.button>
      </motion.div>
  );
}

export default Todo;