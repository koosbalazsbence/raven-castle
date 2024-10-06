import { ChevronsDown } from "lucide-react"

const Home = () => {
  return (
    <>
      <div className="bg-[url('../src/assets/images/raven-castle-wallpaper.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Raven Castle</h1>
          <div className="absolute bottom-5 text-white px-4 py-2 rounded-md flex flex-col items-center justify-center gap-2">
            Find out more..
            <ChevronsDown className="" />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Home</h1>
      </div>
    </>
  )
}

export default Home
