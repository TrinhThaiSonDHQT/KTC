import MultiAccordtions from "./MultiAccordtions/MultiAccordtions";
import SingleAccordtions from "./SingleAccordtions/SingleAccordtions";

const ButtonAccordtions = () => {
  return (
    <div className="button-accordtions">
      <h1 className="text-3xl font-bold">Button Accordtions</h1>
      <div className="flex justify-between items-start gap-4">
      {/* Single Accordtions */}
      <SingleAccordtions/>

      {/* Multi Accordtions */}
      <MultiAccordtions/>
      </div>
    </div>
  )
}

export default ButtonAccordtions;