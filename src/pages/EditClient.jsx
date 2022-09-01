import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

const EditClient = () => {
  //client state
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  // id from react-router
  const { id } = useParams();

  useEffect(() => {
    const getClientAPI = async () => {
      try {
        setLoading(true);
        const url = `http://localhost:4000/clients/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);

        // forced loading
        setTimeout(() => {
          setLoading(false);
        }, 600);
      } catch (error) {
        console.log(error);
      }
    };

    getClientAPI();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3 text-2xl">Use this form to edit client</p>

      {client?.name ? (
        <Form client={client} loading={loading} />
      ) : (
        <p>Invalid Client ID</p>
      )}
    </>
  );
};

export default EditClient;
