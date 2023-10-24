import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../componente/Navbar'
import { HomeScreen } from '../routes/HomeScreen'
import { Contact } from '../routes/Contact'
import { UsuarioProvider } from './UsuarioProvider'
import { LoginScreen } from './LoginScreen'
import {ClimaApp} from '../routes/ClimaApp'
import { CarritoApp } from '../componente/eCommerce/CarritoApp'
import { ComprasPage } from '../componente/eCommerce/ComprasPage'

export const App = () => {
    //aqui le pasamos todo los demas componentes como childrens
    //y declaramos a que componente va cada ruta
    return (
        <UsuarioProvider>
            <h1>Entrenos con React ☢</h1>
            <hr />
            <Navbar></Navbar>
            <Routes>
                <Route path='/clima' element={<ClimaApp></ClimaApp>}></Route>
                <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
                <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
                <Route path='/carrito' element={<CarritoApp></CarritoApp>}></Route>
                <Route path='/compras' element={<ComprasPage></ComprasPage>}></Route>
                <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
               
            </Routes>
            
        </UsuarioProvider>
    )
}
