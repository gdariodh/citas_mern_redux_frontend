import Aside from './Layout/Aside'
import Header from './Layout/Header'

const CreateDate = () => {
    return ( 
        <div className="flex md:flex-row flex-col ">
        {/** Barra lateral de usuario*/}
        <Aside/>
        <div className="w-full bg-gradient-to-r md:from-purple-400 from-purple-300  to-blue-300">
          {/** Header */}
          <Header />
          {/** Citas */}
          <div className='flex flex-wrap md:justify-evenly md:px-6'>
          {/** Cita a crear */}

         Crear cita bb
          </div>
         
        </div>
      </div>
     );
}
 
export default CreateDate;