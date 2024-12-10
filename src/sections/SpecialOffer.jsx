import { arrowRight } from "../assets/icons";
import { offer, openBook, computerBooks, introToSql } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
      <img src={computerBooks} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
    <div
  className="flex flex-1 flex-col"
  >

  
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
       <span className="text-coral-green">Special </span>
         Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Discover a tech book shopping experience like no other, where unbeatable deals await. From top-tier selections to amazing savings, we deliver unmatched value that makes us your go-to destination for all things tech.</p>
     {/* <p className="mt-6 lg:max-w-lg info-text">Let us help you build your personalized tech library. Whether you're learning Java, React, MySQL, JavaScript, TypeScript, AWS, cloud computing, or any other tech field, we’re here to create the perfect go-to resource for you. */}
{/* </p> */}
<div className="mt-11 flex flex-wrap gap-4" >
<Button label="Shop now" iconURL={arrowRight} />
<Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
</div>
    </div>
    </section>
  )
}

export default SpecialOffer;