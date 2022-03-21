import { useEffect, useRef } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDelete } from "../../actions/notes";

export const NoteScreen = () => {

    const dispatch = useDispatch()
    const {active: note} =  useSelector( state => state.notes);
    const [formValues , handleInputChange ,reset] =  useForm(note);
    const {body , title ,id} = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note , reset]);

    useEffect(() => {
        
        dispatch(activeNote(formValues.id , {...formValues}))
        

    }, [formValues,dispatch]);

    const handleDelete = () => {

        dispatch(startDelete(id))

    }

    return (
        <div className="w-full h-screen flex flex-col">
            <NotesAppBar/>

            <div className="p-4 flex flex-col space-y-5 h-full">
                <input 
                type="text" 
                placeholder="Sintomas Generales!"
                className="text-4xl p-2"
                value={title || ''}
                name="title"
                onChange={handleInputChange}
                />

                <textarea 
                value={body}
                name="body"
                className="resize-none flex-auto p-4" 
                placeholder="Ingresa con detalle tus sintomas" 
                onChange={handleInputChange}
                ></textarea>
            </div>

        <div className="w-full flex h-auto">
        { 
           (note.url) &&

            ( <div className="flex w-[30%] p-4">
                <img src={note.url} alt="flor" className="w-full h-full shadow-2xl rounded-md" />
            </div>)
            
            }

            <button
                className="p-2 bg-red-500 rounded-2xl absolute bottom-4 right-4 text-white w-48"
                onClick={handleDelete}
                >
                Borrar nota
            </button>

        </div>
        </div>
    )
}
