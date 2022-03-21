
import { useSelector } from "react-redux"
import { JournalEntry } from "./JournalEntry"

export const JournalEntries = () => {

    
    const {notes} = useSelector(state => state.notes)
    


    return (
        <div className = 'w-full h-[82%] flex flex-col mt-4 overflow-y-scroll'>
        
         {
                notes.map(note => (<JournalEntry
                 key={note.id} 
                 {...note}
                 />))
         } 


        </div>
    )
}
