import styles from "./form.module.css";

import { useState } from "react";
export default function Form({ todos, setTodos }) {
    
    //const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({ name: "" ,done: false});
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo) return;
        setTodos([...todos, todo]);
        setTodo({name: "" ,done: false});
    };
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input className={styles.modernInput} onChange={(e) => setTodo({...todo, name: e.target.value})} value={todo.name} type="text" placeholder="Add what todo"/>
            <button className={styles.modernButton} type="submit">Add</button>
            </div>
            
        </form>
    );
}