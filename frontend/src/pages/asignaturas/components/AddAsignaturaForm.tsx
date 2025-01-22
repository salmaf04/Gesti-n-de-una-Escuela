import { useForm, SubmitHandler } from "react-hook-form";
import { AsignaturaCreateAdapter } from "../adapters/AsignaturaCreateAdapter.ts";
import { useContext, useEffect, useState } from "react";
import { AsignaturaContext } from "../AsignaturasScreen.tsx";
import MySpinner from "../../../components/MySpinner.tsx";

export default function AddAsignaturaForm() {
    const { register, handleSubmit } = useForm<AsignaturaCreateAdapter>();
    const { editting, isEditting, isCreatting, onEditTableItem, onAddTableItem, setEditting, setShowModal } = useContext(AsignaturaContext);

    const [isLoading, setIsLoading] = useState<boolean>(isEditting! || isCreatting!);

    useEffect(() => {
        setIsLoading(isEditting! || isCreatting!);
    }, [isEditting, isCreatting]);

    const onSubmit: SubmitHandler<AsignaturaCreateAdapter> = (data) => {
        if (editting)
            onEditTableItem!(data);
        else
            onAddTableItem!(data);
    };

    return (
        <div className={`fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center`}>
            <div className="min-h-[30%] bg-white w-1/2 py-6 px-8 rounded-lg">
                <h2 className="text-2xl text-indigo-600 text-center font-bold group mb-4">{`${editting ? 'Editar Registro' : 'Añadir Registro'}`}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'grid grid-cols-2 gap-y-1 gap-x-10'}>
                        <div className="group mb-4">
                            <label className="text-indigo-950 text-xs group-focus-within:text-indigo-500 font-semibold">Nombre</label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                className={"rounded-lg h-10 w-full p-3 text-indigo-950 focus:outline-indigo-600 bg-indigo-50 text-sm"}
                                defaultValue={editting?.name}
                            />
                        </div>
                        <div className="group mb-4">
                            <label className="text-indigo-950 text-xs group-focus-within:text-indigo-500 font-semibold">Carga Horaria</label>
                            <input
                                type="number"
                                {...register("hourly_load", { required: true })}
                                className={"rounded-lg h-10 w-full p-3 text-indigo-950 focus:outline-indigo-600 bg-indigo-50 text-sm"}
                                defaultValue={editting?.hourly_load}
                            />
                        </div>
                        <div className="group mb-4">
                            <label className="text-indigo-950 text-xs group-focus-within:text-indigo-500 font-semibold">Programa de Estudio</label>
                            <input
                                type="number"
                                {...register("study_program", { required: true })}
                                className={"rounded-lg h-10 w-full p-3 text-indigo-950 focus:outline-indigo-600 bg-indigo-50 text-sm"}
                                defaultValue={editting?.study_program}
                            />
                        </div>
                        <div className="group mb-4">
                            <label className="text-indigo-950 text-xs group-focus-within:text-indigo-500 font-semibold">ID del Aula</label>
                            <input
                                type="text"
                                {...register("classroom_id", { required: true })}
                                className={"rounded-lg h-10 w-full p-3 text-indigo-950 focus:outline-indigo-600 bg-indigo-50 text-sm"}
                                defaultValue={editting?.classroom_id}
                            />
                        </div>
                    </div>

                    <div className="flex space-x-3 justify-center">
                        <button type="button" onClick={() => {
                            setShowModal!(false);
                            setEditting!(undefined);
                        }}
                            hidden={isLoading}
                            className="hover:bg-gray-400 transition-colors w-full py-2 bg-gray-300 rounded-lg text-gray-900">Cancelar
                        </button>
                        <button type="submit"
                            className={`${isLoading ? 'hover:bg-indigo-300 bg-indigo-300 cursor-default' : 'bg-indigo-500 hover:bg-indigo-600'} transition-colors w-full flex justify-center py-2 text-indigo-50 rounded-lg`}>
                            {isLoading ? <MySpinner className={'h-6 w-6'} /> : null}
                            <p className={`${isLoading ? 'invisible' : 'visible'}`}>
                                {editting ? 'Editar' : 'Guardar'}
                            </p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}