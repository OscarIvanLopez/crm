import Form from "../components/Form";

const NewClient = () => {
    return (

    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3 text-2xl">
        Fill all the required fields to register a new client
      </p>
      <Form loading={false} />
    </>
  );
};

export default NewClient;
