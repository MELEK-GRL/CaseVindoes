import Header from "../Header"
import Footer from "../Footer"
import Routers from "../../routes/Routers"
import Menu from '../Menu'

export default function index() {
    return (
        <div className="flex w-full max-h-full fixed justify-between min-h-screen items-center  gap-2   flex-col">
            <Header />
            <div className="flex h-[580px] overflow-y-auto md:gap-3 gap-0 w-full containerBox   mt-20 ">
                <div className="w-0 md:w-[35%] lg:w-[20%] invisible md:visible   h-full   flex">
                    <Menu />
                </div>
                <div className="flex w-full h-full overflow-y-auto  md:w-[65%] lg:w-[80%]   scrollBar  ">
                    <Routers />
                </div>
              
            </div>
            <Footer/>
        </div>
    )
}
