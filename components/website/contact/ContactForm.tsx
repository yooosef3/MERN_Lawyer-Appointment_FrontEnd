import Form from "./Form";
import Photo from "./Photo";

const ContactForm = () => {
  return (
    <div className="grid lg:grid-cols-[1fr_1fr] h-[91vh] mt-10 shadow-md rounded-md overflow-hidden">
      <Photo />
      <Form />
    </div>
  );
};

export default ContactForm;
