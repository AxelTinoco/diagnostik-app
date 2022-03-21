import { AppRouter } from "./routers/AppRouter"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { BrowserRouter } from "react-router-dom"
import { AuthRouter } from "./routers/AuthRouter"


export const DiagnosticApp = () => {
    return (

        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
                <AuthRouter/>
            </BrowserRouter>
        </Provider>

    )
}
