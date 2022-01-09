import {useRef, useState } from "react";

export default function List2(): JSX.Element {
    const initialItems: string[] | undefined = ["1", "2"]
    const [items, setItems] = useState(initialItems)
    const textRef = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState("")

    const handleUserInput = (e: any) => {
        setInputValue(e.target.value);
    };

    function onClick() {
        console.log(textRef.current?.value)
        let newItems = items.slice()
        if (textRef.current?.value) {
            newItems.push(textRef.current?.value)
            setItems(newItems)
        }
        setInputValue("");
    }

    function deleteItem(e: any) {
        console.log(e)
        let newItems = items.slice();
        let newArr = newItems.filter(a => a !== e);
        setItems(newArr);
    }

    return (
        <>
            <div className="_listContainer" >
                <h3>ToDo List</h3>
                <input type="text" ref={textRef} value={inputValue} onChange={handleUserInput} />
                <input type="button" onClick={onClick} value="Add" />
                <div className="list">
                    {inputValue}
                    {items.map(i => <div className='listItem'  ><button > {i} </button> <button onClick={e => deleteItem(i)} className='hide'>Delete</button> </div>)}
                </div>
            </div>
        </>
    )
}

