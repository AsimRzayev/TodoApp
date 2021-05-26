import React, { useState } from "react";
import { addTodo } from "../redux/action";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
export default function TodoInput() {
    const [name, setName] = useState();
    const dispatch = useDispatch()
    return (
        <div className="mt-5">
            <div className="row m-2 justify-content-center">
                <input type="text" className="col form-control" onChange={x=>setName(x.target.value)} />
                <button
                    className="mx-2  btn btn-primary"
                    onClick={() => 
                        {
                        dispatch(addTodo({
                            id:uuid(),
                            name:name
                        }))
                    
                 
                    }}


                >
                    Add
                </button>
            </div>
        </div>
    );
}
