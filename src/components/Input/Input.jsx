
import { forwardRef } from "react";

//component used to accept input values

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    const inputClass = "bg-tan-100/40 px-4 py-2 rounded-md focus:outline-none focus:border-brown-700 focus:border-b-4 w-3/4 min-h-4/5";

    const labelClass = 'uppercase text-brown-600 font-bold';


    return(
         <>
        <label className={labelClass}>{label}</label>
            
            {/* Checks if prop value is textarea if not then input area is shown */}
            
            {textarea ? (

                <textarea ref={ref} className="bg-tan-100/40 px-4 py-2 rounded-md w-3/4" {...props}></textarea>

                ) : (
            
            <input ref={ref} className={inputClass} {...props}></input>

        )}
            
            </>   
            
           

    )
});

export default Input;