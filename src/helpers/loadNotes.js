import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";

 
export const loadNotes = async (uid) => {
 
    const notesSnap = await getDocs(collection(db, `${ uid }/diagnostic/notes`));
    const notes = [];
 
    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
      });
 
    return notes;
};