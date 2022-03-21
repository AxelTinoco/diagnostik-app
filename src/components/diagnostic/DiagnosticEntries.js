
import { useSelector } from "react-redux"
import { DiagnosticEntry } from "./DiagnosticEntry"

export const DiagnosticEntries = () => {

    
    const {notes} = useSelector(state => state.notes)
    


    return (
        <div className = 'w-full h-[82%] flex flex-col mt-4 overflow-y-scroll'>
        
         {
                notes.map(note => (<DiagnosticEntry
                 key={note.id} 
                 {...note}
                 />))
         } 


        </div>
    )
}
