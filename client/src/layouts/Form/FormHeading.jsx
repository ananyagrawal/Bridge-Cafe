import styled from "styled-components";
const FormHeading = (props) => {
  return (
    <Text>
      <Heading>{props.heading}</Heading>
      <Para>{props.paragraph}</Para>
    </Text>
  );
};
const Text = styled.div`
  height: 160px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  color: #153a35;
`;
const Heading = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
`;
const Para = styled.p`
  text-align: center;
`;
export default FormHeading;
