'use client' // Error components must be Client Components
import { AiOutlineReload } from "react-icons/ai";

export default function Error({ error, reset }) {

    return (
        <div className='w-full rounded-lg min-h-[300px] border p-5 flex justify-center items-center gap-5'>
            <h2>An error occurred: {error.message}</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="flex items-center gap-1"
            >
                <AiOutlineReload /> Retry
            </button>
        </div>
    )
}