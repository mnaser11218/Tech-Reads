import { comptAndBooks, laptopBooks, layeredBooks, shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
<section 
id="about us"
className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
>
  <div
  className="flex flex-1 flex-col"
  >

  
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you <span className="text-coral-teal">Super </span>
          <span className="text-coral-green">Quality </span>
         Tech-Reads
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Let us help you build your personalized tech library. Whether you're learning Java, React, MySQL, JavaScript, TypeScript, AWS, cloud computing, or any other tech field, we’re here to create the perfect go-to resource for you.</p>
     <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction
</p>
<div className="mt-11">
<Button label="View details"  />
</div>
  </div>
  <div className="flex-1 flex justify-center items-center">
    <img src={layeredBooks} alt="shoe 8" width={570} height={522} className="object-contain" />

  </div>
</section>  )
}

export default SuperQuality;