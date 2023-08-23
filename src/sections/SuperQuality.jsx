import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col max-container gap-10 w-full">
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
       We provide you <span className="text-coral-red"> Super</span><span className="text-coral-red"> Quality</span> Shoes
      </h2>        
      <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, provide you with unmatched quality.</p>
      <p className="mt-6 lg:max-w-lg info-text"> Dedication to minimum detail</p>
      <div className="mt-11">
      <Button label="View Details" />
      </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="objcet-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality