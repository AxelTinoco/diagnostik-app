import { NothingSelected } from "./NothingSelected"
import { useSelector } from "react-redux"
import { NoteScreen } from "../notes/NoteScreen"
import { Sidebar } from "./Sidebar"

export const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)
  
    

    return (

        <div className="flex w-screen h-screen relative">
        <Sidebar />

        <main className="flex w-full" >
            {
                (active)
                ?
                <NoteScreen/>
                :
                <NothingSelected /> 


            }
        </main>
        
        </div>

    )
}
