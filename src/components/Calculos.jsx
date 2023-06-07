

export const Calculos = () => {
  return (
    <div className=" bg-blue-700 p-5 rounded-lg mt-10 ">
    <h2 className="text-white uppercase text-center text-lg">Calculos</h2>
    <form className="">
        <div className="mx-auto flex justify-center mt-5 gap-2 ">
            <label className="uppercase text-white font-bold"> Coloque aqui su valor</label>
            <input
            className="rounded-lg text-center  focus:outline-none" 
            type="text"
            placeholder="Agregue su valor">
            </input>
        </div>

        <div className=" bg-red-600 w-35 mt-5 rounded-lg p-1 hover:bg-red-500 text-center  mx-auto">
            <input
            className="text-white uppercase font-bold" 
             type="submit"
             value="Enviar">

            </input>
        </div>
        
    </form>

    </div>
  )
}
