import React, { useEffect, useState } from 'react'
import List from '../component/List';



function Todo() {
  const [titleValue, setTitle] = useState('');
  const [descValue, setDecs] = useState('');
  const [todos, setTodo] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [viewTodo, setViewTodo] = useState(null);

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
      description: descValue,
      selected: false
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
  

  const handleRadioChange = async (id) => {
    setSelectedTodoId(id);
  
    const selectedTodo = todos.find(todo => todo.id === id); // find todo by id
  
    if (!selectedTodo) {
      console.error("Todo not found");
      return;
    }
  
    const updatedTodo = {
      ...selectedTodo,
      selected: true   
    };
  
    try {
      const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTodo) // send full updated todo
      });
  
      if (response.ok) {
        console.log("Updated selected status!");
        // you can refresh if you want, or not
        fetchAllTodo();
      } else {
        console.error("Failed to update selected status");
      }
    } catch (err) {
      console.error("Error updating selected:", err);
    }
  };
  

  const deleteById = async (id)=>{

    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
        const response = await fetch(`http://localhost:8080/api/todos/${id}`,{
          method:`DELETE`
        });
        if (response.ok) {
          console.log(`Delete Successfully`);
          fetchAllTodo();
        }
        else{
          console.log(`Unable To Delete Todo`);
        }

    } catch (error) {
      console.error(error);
    }

  }
  
  const handleView = (todo) => {
    setViewTodo(todo);
  };
  

  return (
    <>
    <div className='flex flex-col  items-center justify-center gap-[40px]'>
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
        <List 
          todos={todos} 
          onRadioChange={handleRadioChange} 
          deleteById={deleteById} 
          handleView={handleView} 
          selectedTodoId={selectedTodoId}
        />
      </div>
    </div>
          {/* ✅ Popup inside same div */}
          {viewTodo && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">{viewTodo.title}</h2>
            <p className="text-gray-600">{viewTodo.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setViewTodo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Todo;
