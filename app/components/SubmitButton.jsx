'use client'

import {useFormStatus} from 'react-dom'

export default function SubmitButton(){
    const {pending} = useFormStatus();
    return (
        <button 
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" 
        type="submit"
        aria-disabled={pending}
        >
          {pending ? 'Adding Grudge' : 'Add Grudge'}
        </button>
    )
}