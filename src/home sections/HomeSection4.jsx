const HomeSection4 = () => {
  return (
    <div className="home-section-4">
      <Section4
        heading="Food"
        description="Our curries are made out of fresh
vegetables to give you food as fresh 
as you get at home."
      />
      <Section4
        heading="Flavours"
        description="Relish the flavors of the tender delicacies
with the aromatic servings."
      />
      <Section4
        heading="Diet"
        description="Our curries are made out of fresh
vegetables to give you food as fresh 
as you get at home."
      />
    </div>
  );
};
const Section4 = (props) => {
  return (
    <div className="section-4-container">
      <div className="section-4-subcontainer">
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default HomeSection4;
