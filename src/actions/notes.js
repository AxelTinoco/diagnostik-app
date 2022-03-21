import Swal from 'sweetalert2'
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"
import { fileUpload } from '../helpers/fileUpload'

export const startNewNote = () => {
    return async (dipatch,getState) => {
        //const state = getState() toma los estados globales o states 
        const uid = getState().auth.uid
        

        const newNote = {
         titlle: "",
         body :"",
         date: new Date().getTime()
         }

        // 
        // 

        const docRef = await addDoc(collection(db,`${uid}`, "diagnostic/notes"),newNote);
        console.log(docRef)
        dipatch(activeNote(docRef.id,newNote))
        dipatch(addNewNote(docRef.id,newNote))
    }
}


export const activeNote = (id,note) => ({

    type : types.notesActive,
    payload:{
        id,
        ...note
    }

})


export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})



export const startLoadingNotes = (uid) => {
    return async (dispatch)=> {
        const notesUser = await loadNotes(uid);
        console.log(notesUser + " Aqui es el starloading notes")
        dispatch(setNotes(notesUser))
        
    }
}

export const setNotes = (notes) => ({

    type: types.notesLoad,
    payload: notes

})

export const startSaveNote = (note) => {
    return async (dispatch,getState) => {

        console.log(note + "Aquie esta la note de starsave")
        console.log(note.title + "Aquie esta la note de starsave")
        const uid = getState().auth.uid;    
        
        console.log(uid + " este es el UID de savenote")
        if(!note.url){
            delete note.url
          }
        
        const noteToFirestore = {...note}

        delete noteToFirestore.id;

        const noteRef = doc(db, `${uid}/diagnostic/notes/${note.id}`)
        await updateDoc(noteRef,noteToFirestore);

        dispatch(refreeshNote(note.id, noteToFirestore))

        Swal.fire('Saved', note.title, 'success')
    }
}


export const refreeshNote = (id, note) => ({

    type: types.notesUpdated,
    payload : {
        id, 
        note : {
            id,
            ...note
        }
    }

} );


export const startUpload = (file) => {
    return async (dispatch,getState) => {

        // const activeNote = getState().notes.active
        const {active:activeNote} = getState().notes;

        Swal.fire({
            title: 'Uploading..',
            text: 'Please Wait..',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }

        })
        
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        // console.log(fileUrl)

        dispatch(startSaveNote(activeNote))
        Swal.close();

    }
};

export const startDelete = ( id ) => {
    return async (dispatch,getState) => {

        const uid = getState().auth.uid;
        const noteRef = doc(db, `${uid}/diagnostic/notes/${id}`);
        await deleteDoc(noteRef);

        dispatch(deleteNote(id));

    }


};


export const deleteNote = (id) => ({

    type: types.notesDeleted,
    payload: id

});

export const notesLogout = () => ({

    type: types.notesLogoutCleaning,

})