import  { ChangeEvent, FC } from 'react'

const Input:FC<InputProps> = ({disabled=false,label,value,placeholder,onChange,type}) => {
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(type==="number"){
            const parsed=parseFloat(e.target.value)
            if(!isNaN(parsed)){
               (onChange as (v: number) => void)(parsed);
            }else{
                (onChange as (v:number)=>void)(0)
            }
        }else{
            (onChange as (v:string)=>void)(e.target.value)
        }
    }
  return (
     <div className=" flex flex-col space-y-1 w-full   ">
     <div>
         {label && <label className="text-sm font-medium text-gray-700  ">{label}</label>}

      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        placeholder={`${placeholder}`}
        className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-500 "
      />
     </div>

    </div>
  )
}

export default Input
