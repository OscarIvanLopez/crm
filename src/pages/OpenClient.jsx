import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const OpenClient = () => {
  //client state
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  // id from react-router
  const { id } = useParams();

  useEffect(() => {
    const getClientAPI = async () => {
      try {
        setLoading(true);
        const url = `import.meta.env.VITE_API_URL/${id}`;
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

  return loading ? (
    <Spinner />
  ) : Object.keys(client).length === 0 ? (
    <p>There are not results</p>
  ) : (
    <div>
      <>
        <h1 className="font-black text-4xl text-blue-900">
          Open Client: {client.name}
        </h1>
        <p className="mt-3 text-2xl">Client's Information</p>

        {client.name && (
          <p className="text-2xl text-gray-700 mt-10">
            <span className="font-bold uppercase text-gray-800">Client: </span>
            {client.name}
          </p>
        )}

        {client.email && (
          <p className="text-2xl text-gray-700">
            <span className="font-bold uppercase text-gray-800">Email: </span>
            {client.email}
          </p>
        )}

        {client.phone && (
          <p className="text-2xl text-gray-700">
            <span className="font-bold uppercase text-gray-800">Phone: </span>
            {client.phone}
          </p>
        )}

        {client.company && (
          <p className="text-2xl text-gray-700">
            <span className="font-bold uppercase text-gray-800">Company: </span>
            {client.company}
          </p>
        )}

        {client.notes && (
          <p className="text-2xl text-gray-700">
            <span className="font-bold uppercase text-gray-800">Notes: </span>
            <textarea name="" id="" cols="30" rows="10">
              {client.notes}
            </textarea>
          </p>
        )}
      </>
    </div>
  );
};

export default OpenClient;
