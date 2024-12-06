import { offer } from "../assets/images";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
      <img src={offer} alt="" width={773} />
      </div>

    </section>
  )
}

export default SpecialOffer;