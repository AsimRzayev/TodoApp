import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';

export default function TodoItem({todo}) {
    let dispatch = useDispatch();
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    return (
        <div className="my-5">
                <div className="row justify-content-center mx-2">
                    <div>#{todo.id.length>1?todo.id[2]:todo.id}</div>
                    <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
                </div>
               
                    <button className="btn btn-primary m-2"
                  onClick={() => {
                    dispatch(updateTodo({
                        ...todo,
                        name: name
                    }))
                    if(editable) {
                     setName(todo.name);   
                    }
                    setEditable(!editable);
                  

                }}
            >{editable?"Update":"Edit"}</button>
                    <button className="btn btn-danger m-2
                    "
                    onClick={()=>dispatch(deleteTodo(todo.id))}
                    >Delete</button>
                </div>
        </div>
    )
}
