import DeleteIcon from '../assets/Icons/delete1.svg?react';
import View from '../assets/Icons/view-svgrepo-com.svg?react'

const List = ({todos,onRadioChange,deleteById }) => {

  

  if(todos.length===0){
    return <p>No Todo Found!</p>
  }
  return (
    <div className='flex flex-col gap-4'>
      {todos.map((Todo)=>(
      
    <div key={Todo.id} className="flex flex-wrap items-center justify-between gap-4 border-2 border-blue-800 rounded-2xl px-4 py-3 m-4 shadow-sm bg-white">
    <div className="flex items-center gap-3 flex-1">
    <input
        type="radio"
        value={Todo.id}
        checked={Todo.selected}  
        onChange={() => onRadioChange(Todo.id)}
        className={`w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 `}
      />
      <div>
        <h4 className={`text-lg font-semibold text-blue-800  ${Todo.selected ? 'text-green-600 ' : 'text-blue-800'}`}>{Todo.title}</h4>
        <h5 className="text-sm text-gray-600">{Todo.description}</h5>
      </div>
    </div>

    <div className="flex items-center gap-2">
      <View className="w-8 h-8 p-1 rounded-md text-white bg-gray-500 hover:bg-blue-600 cursor-pointer transition-colors" />
      <DeleteIcon 
      value={Todo.id}
      onClick={()=>deleteById(Todo.id)}
      className="w-8 h-8 p-1 rounded-md text-white bg-gray-500 hover:bg-red-600 cursor-pointer transition-colors" />
    </div>
    </div>

      ))}
    </div>
      );
    };

export default List
