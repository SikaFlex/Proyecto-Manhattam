import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../componente/Navbar'
import { HomeScreen } from './HomeScreen'
import { Contact } from '../routes/Contact'
import { About } from '../routes/About'
import { UsuarioProvider } from './UsuarioProvider'
import { LoginScreen } from './LoginScreen'

export const App = () => {
    //aqui le pasamos todo los demas componentes como childrens
    //y declaramos a que componente va cada ruta
    return (
        <UsuarioProvider>
            <h1>Enrutamiento</h1>
            <hr />
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
                <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
            </Routes>
        </UsuarioProvider>
    )
}
