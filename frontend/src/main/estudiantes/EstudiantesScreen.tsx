import ToggleButton from "../components/ToggleButton.tsx";
import Table from "../components/Table.tsx";
import {header, rows} from "./data/Example_data.tsx";

export default function EstudiantesScreen() {
    return (
        <div id={'estudiantes'} className={"mx-4 w-5/6 flex flex-col"}>
            <div className={'flex-wrap flex items-center justify-around w-full h-28'}>
                <ToggleButton/>
                <div className={'relative'}>
                    <input type="search" className={'rounded-md px-2 py-1  bg-no-repeat bg-left bg-contain'}
                           placeholder="Search"/>

                    <svg className={'absolute right-2 top-1/2 -translate-y-1/2'} xmlns="http://www.w3.org/2000/svg"
                         height="20px" viewBox="0 -960 960 960" width="20px"
                         fill="#a6a6a6">
                        <path
                            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                    </svg>
                </div>
                <div>
                    <button
                        className={'text-white font-medium py-2 px-5 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-xl'}>Añadir
                        +
                    </button>
                </div>
            </div>
            <Table rows={rows} header={header}></Table>
        </div>
    )
}