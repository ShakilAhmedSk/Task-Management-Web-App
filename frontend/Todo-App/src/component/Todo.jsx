import React, { useEffect, useState } from 'react'
import List from '../component/List';

function Todo() {
  const [titleValue, setTitle] = useState('');
  const [descValue, setDecs] = useState('');
  const [todos, setTodo] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const fetchAllTodo = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/todos');
      if (response.ok) {
        const data = await response.json();
        setTodo(data);
      } else {
        console.log("Unable to get data");
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  useEffect(() => {
    fetchAllTodo();
  }, []);

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const DescHandler = (e) => {
    setDecs(e.target.value);
  };

  const Save = async (e) => {
    e.preventDefault();

    const todo = {
      title: titleValue,
      description: descValue
    };

    try {
      const response = await fetch('http://localhost:8080/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      });

      if (response.ok) {
        console.log("Todo saved successfully!");
        setTitle('');    // reset input
        setDecs('');     // reset input
        fetchAllTodo();  // refresh list
      } else {
        console.error("Failed to save todo");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleRadioChange = (id) => {
    setSelectedTodoId(id);
    console.log(`Selected ID: ${id}`);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-[40px]'>
      {/* Main Div */}
      <div className='flex flex-col gap-10 border-2 border-emerald-800 p-7 m-4 rounded-[15px] w-4/5'>
        {/* Header H1 text */}
        <h1 className='text-center font-bold p-4 m-1 text-4xl text-blue-700'>My To-Do List</h1>

        {/* Input Section */}
        <div className='flex-col items-center'>
          <form className='' action="">
            <div className="max-w-screen-md mx-auto p-6 bg-white shadow-md rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Title */}
                <input
                  className="flex-1 min-w-[180px] border border-gray-300 rounded-lg px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  type="text"
                  placeholder="Enter Task Name"
                  value={titleValue}               // <-- binding
                  onChange={TitleHandler}
                />
                {/* Description */}
                <input
                  className="flex-[2] min-w-[250px] border border-gray-300 rounded-lg px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  type="text"
                  placeholder="Enter Task Description"
                  value={descValue}               // <-- binding
                  onChange={DescHandler}
                />
                {/* Save Button */}
                <button
                  className="h-[42px] px-5 bg-blue-700 text-white rounded-lg border border-blue-800 shadow-sm hover:bg-emerald-600 hover:border-emerald-700 hover:shadow-md transition-all cursor-pointer"
                  onClick={Save}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Task List */}
        <List todos={todos} onRadioChange={handleRadioChange} selectedTodoId={selectedTodoId} />
      </div>
    </div>
  );
}

export default Todo;
