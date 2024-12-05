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

    <h2>
    <p className="text-xl font-montserrat text-coral-red">Our summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading- mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <Button label="View details"  />



    </h2>
  </div>
  testing
</section>  )
}

export default SuperQuality;