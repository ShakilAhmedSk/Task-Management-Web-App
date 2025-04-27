import DeleteIcon from '../assets/Icons/delete1.svg?react';
import View from '../assets/Icons/view-svgrepo-com.svg?react'

const List = ({todos,onRadioChange,selectedTodoId }) => {

  

  if(todos.length===0){
    return <p>No Todo Found!</p>
  }
  return (
    <div className='flex flex-col gap-4'>
      {todos.map((Todo)=>(
      
    <div key={Todo.id} className="flex flex-wrap items-center justify-between gap-4 border-2 border-blue-800 rounded-2xl px-4 py-3 m-4 shadow-sm bg-white">
    <div className="flex items-center gap-3 flex-1">
      <input  type="radio" value={Todo.id} onChange={()=> {onRadioChange(Todo.id)}} className={`flex flex-wrap items-center justify-between gap-4 border-2 ${selectedTodoId === Todo.id ? 'border-green-500' : 'border-blue-800'} rounded-2xl px-4 py-3 m-4 shadow-sm bg-white`} />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{Todo.title}</h4>
        <h5 className="text-sm text-gray-600">{Todo.description}</h5>
      </div>
    </div>

    <div className="flex items-center gap-2">
      <View className="w-8 h-8 p-1 rounded-md text-white bg-gray-500 hover:bg-blue-600 cursor-pointer transition-colors" />
      <DeleteIcon className="w-8 h-8 p-1 rounded-md text-white bg-gray-500 hover:bg-red-600 cursor-pointer transition-colors" />
    </div>
    </div>

      ))}
    </div>
      );
    };

export default List
