import { ScrollArea } from '@/components/ui/scroll-area'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

const Page = () => {
  return (
    <div className="flex h-full w-full flex-col p-4">
      <div className="flex h-full w-full flex-col md:flex-row">
        <ScrollArea className="flex overscroll-auto max-md:w-[calc(9swh_-_21.5px)] md:h-[calc(90svh_-_211.5px)] md:w-[40%] md:flex-col">
          <div className="max-md:flex max-md:flex-row">
            <div className="flex h-full w-full flex-col gap-4 rounded-xl bg-white p-4 max-md:w-[300px] md:flex md:flex-col">
              <div className="relative flex max-md:w-full md:h-[200px] md:w-full">
                <img
                  className="h-full w-full rounded-xl object-cover brightness-[0.8] max-sm:rounded-lg"
                  src="/img/cartagena.jpeg"
                  alt="destino"
                />
                <div className="absolute top-9 flex flex-col gap-3 md:top-12 md:gap-5">
                  <h2 className="text-center font-bold text-white md:text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                  </h2>
                  <h2 className="text-center font-bold text-white max-md:text-xl md:text-2xl">
                    $ 1.000.000
                  </h2>
                </div>
              </div>
              <div className="flex justify-around">
                <button className="rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                  Editar
                </button>
                <AlertDialog>
                  <AlertDialogTrigger className="rounded-3xl border-2 border-brand px-4 py-1 text-center text-brand transition-all duration-300 hover:bg-brand-light md:px-7 md:py-2">
                    Eliminar
                  </AlertDialogTrigger>
                  <AlertDialogContent className="p-10">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-center text-xl font-bold md:text-2xl">
                        ¿Deseas eliminar este paquete?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <div className="flex w-full flex-row justify-around gap-3">
                        <AlertDialogCancel className="m-0 rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction className="m-0 rounded-3xl border-2 border-brand bg-white px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
                          Aceptar
                        </AlertDialogAction>
                      </div>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </ScrollArea>
        <ScrollArea className="flex md:h-[calc(90svh_-_211.5px)] md:w-[60%]">
          <form action="" className="flex w-full flex-col gap-3">
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <div className="flex w-full flex-col gap-2">
                <h2 className="text-center text-xl font-bold">Hotel</h2>
                <div>
                  <h2 className="text-lg font-bold">Titulo</h2>
                  <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Hotel..."
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Precio</h2>
                  <input
                    type="number"
                    name="precio"
                    id="precios"
                    placeholder="100.000"
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Descripción</h2>
                  <textarea
                    name="Descirpcion"
                    id="Descirpcion"
                    className="h-28 w-full rounded-lg border-2 border-slate-400"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Imagen</h2>
                  <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Hotel..."
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h2 className="text-center text-xl font-bold">Restaurante</h2>
                <div>
                  <h2 className="text-lg font-bold">Titulo</h2>
                  <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    placeholder="Hotel..."
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Precio</h2>
                  <input
                    type="number"
                    name="precio"
                    id="precios"
                    placeholder="100.000"
                    className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Descripción</h2>
                  <textarea
                    name="Descirpcion"
                    id="Descirpcion"
                    className="h-28 w-full rounded-lg border-2 border-slate-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-xl font-bold">Atracciones</h2>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <h2 className="text-lg font-bold">Titulo</h2>
                    <input
                      type="text"
                      name="titulo"
                      id="titulo"
                      placeholder="Hotel..."
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Precio</h2>
                    <input
                      type="number"
                      name="precio"
                      id="precios"
                      placeholder="100.000"
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Descripción</h2>
                    <textarea
                      name="Descirpcion"
                      id="Descirpcion"
                      className="h-28 w-full rounded-lg border-2 border-slate-400"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Imagen</h2>
                    <input
                      type="text"
                      name="titulo"
                      id="titulo"
                      placeholder="Hotel..."
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <h2 className="text-lg font-bold">Titulo</h2>
                    <input
                      type="text"
                      name="titulo"
                      id="titulo"
                      placeholder="Hotel..."
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Precio</h2>
                    <input
                      type="number"
                      name="precio"
                      id="precios"
                      placeholder="100.000"
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Descripción</h2>
                    <textarea
                      name="Descirpcion"
                      id="Descirpcion"
                      className="h-28 w-full rounded-lg border-2 border-slate-400"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Imagen</h2>
                    <input
                      type="text"
                      name="titulo"
                      id="titulo"
                      placeholder="Hotel..."
                      className="h-10 w-full border-b-2 border-[#ababab]  p-2 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <button className="rounded-3xl border-2 border-brand px-5 py-1 text-center text-brand transition-all duration-300 hover:bg-brand-light md:px-7 md:py-2 ">
                  Actualizar
                </button>
              </div>
            </div>
          </form>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Page
