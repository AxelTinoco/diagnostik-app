
    export const types ={

        login : '[Auth] Login',
        logout: '[Auth] Logout',

        // Types de ui del mesnaje de error

        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',

        //Types para el manejo de loading del inicio de sesion

        uiStartLoading : '[UI] Start Loading',
        uiFinishLoading : '[UI] Finish Loading',

        //  Types de las notas que usaremos para el firestore

        notesAddNew: '[Notes] New note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load Notes',
        notesUpdated: '[Notes] Updated note',
        notesFileUrl: '[Notes] Updated image url',
        notesDeleted: '[Notes] Delete note',
        notesLogoutCleaning: '[Notes] Logout Cleaning',

    }
    