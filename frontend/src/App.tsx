import LoginScreen from "./pages/login/LoginScreen.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar.tsx";
import HomeScreen from "./pages/home/HomeScreen.tsx";
import Notification from "./components/Notification.tsx";
import {createContext, useEffect, useState} from "react";
import {ProfesorGetAdapter} from "./pages/profesores/adapters/ProfesorGetAdapter.ts";
import EstudiantesScreen from "./pages/estudiantes/EstudiantesScreen.tsx";
import ProfesoresScreen from "./pages/profesores/ProfesoresScreen.tsx";
import AulasScreen from "./pages/aulas/AulasScreen.tsx";
import AsignaturasScreen from "./pages/asignaturas/AsignaturasScreen.tsx";
import MediosScreen from "./pages/medios/MediosScreen.tsx";
import MantenimientosScreen from "./pages/mantenimientos/MantenimientosScreen.tsx";
import {AulaGetAdapter} from "./pages/aulas/adapters/AulaGetAdapter.ts";
import {MedioGetAdapter} from "./pages/medios/adapters/MedioGetAdapter.ts";
import UsuariosScreen from "./pages/usuarios/UsuariosScreen.tsx";
import {AsignaturaGetAdapter} from "./pages/asignaturas/adapters/AsignaturaGetAdapter.ts";


interface AppContextInterface {
    setError?: (error: Error) => void;
    token?: string;
    setToken?: (token: string) => void;
    profesores?: ProfesorGetAdapter[];
    setProfesores?: (profesor: ProfesorGetAdapter[]) => void;
    aulas?: AulaGetAdapter[];
    setAulas?: (aulas: AulaGetAdapter[]) => void;
    medios?: MedioGetAdapter[];
    setMedios?: (medios: MedioGetAdapter[]) => void;
    asignaturas?: AsignaturaGetAdapter[];
    setAsignaturas?: (asignaturas: AsignaturaGetAdapter[]) => void;


}

export const AppContext = createContext<AppContextInterface>({})

function App() {
    const [error, setError] = useState<Error | undefined>()
    const [token, setToken] = useState<string>()
    const [profesores, setProfesores] = useState<ProfesorGetAdapter[]>()
    const [aulas , setAulas] = useState<AulaGetAdapter[]>()
    const [medios, setMedios] = useState<MedioGetAdapter[]>()
    const [asignaturas, setAsignaturas] = useState<AsignaturaGetAdapter[]>()
    useEffect(() => {
        const t = sessionStorage.getItem('token')
        if (t)
            setToken(t)
    }, []);

    return (
        <AppContext.Provider value={{
            setError: setError,
            token: token,
            setToken: setToken,
            profesores: profesores,
            setProfesores: setProfesores,
            aulas: aulas,
            setAulas: setAulas,
            medios: medios,
            setMedios: setMedios,
            asignaturas: asignaturas,
            setAsignaturas: setAsignaturas,
        }}>
            <BrowserRouter>
                {error &&
                    <Notification title={'Error:'} message={error.message} className={'bg-red-100 text-sm rounded-md py-1'} onClick={() => {
                        setError(undefined)
                        console.log('Error dismissed')
                    }}/>
                }
                {token ?
                    (
                        <div className={'h-dvh bg-indigo-50 flex w-full'}>
                            <div className={'w-1/12'}>
                                <Sidebar/>
                            </div>
                            <div className={'w-11/12'}>
                                <Routes>
                                    <Route path={'/'} element={<Navigate to={'/inicio'}/>}/>
                                    <Route path={'/inicio'} element={<HomeScreen/>}/>
                                    <Route path={'/estudiantes'} element={<EstudiantesScreen/>}/>
                                    <Route path={'/profesores'} element={<ProfesoresScreen/>}/>
                                    <Route path={'/aulas'} element={<AulasScreen/>}/>
                                    <Route path={'/asignaturas'} element={<AsignaturasScreen/>}/>
                                    <Route path={'/medios'} element={<MediosScreen/>}/>
                                    <Route path={'/mantenimientos'} element={<MantenimientosScreen/>}/>
                                <Route path={'/usuarios'} element={<UsuariosScreen /> }/>
                            </Routes>
                            </div>
                        </div>
                    ) :
                    (
                        <Routes>
                            <Route path={'/'} element={<LoginScreen />}/>
                            <Route path={'*'} element={<Navigate to={'/'}/>}/>
                        </Routes>
                    )


                }
            </BrowserRouter>
        </AppContext.Provider>

    )
}

export default App
