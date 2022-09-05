import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alert from "./Alert";
import Spinner from "./Spinner";

const Form = ({ client, loading }) => {
  const navigate = useNavigate();
  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "The Client Name is to short")
      .max(20, "The Client Name is to long")
      .required("The Client Name is requiered"),
    company: Yup.string().required("The Client Company is requiered"),
    email: Yup.string()
      .email("Invalid Email")
      .required("The Client Email is requiered"),
    phone: Yup.number()
      .positive("Invalid Number")
      .integer("Invalid Number")
      .typeError("Invalid Number"),
  });

  // hold this please
  const getClientAPI = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      const result = await response.json();
      console.log(result);

      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };

  getClientAPI();

  const handleSubmit = async (values) => {
    try {
      let response;
      if (client.id) {
        // Edit registered user
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // New register
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      console.log(response);
      await response.json();

      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {client?.name ? "Edit Client" : "Add Client"}
      </h1>
      <Formik
        initialValues={{
          name: client?.name ?? "",
          company: client?.company ?? "",
          email: client?.email ?? "",
          phone: client?.phone ?? "",
          notes: client?.notes ?? "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);

          resetForm();
        }}
        enableReinitialize={true}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          return (
            <FormikForm className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Name:
                </label>

                <Field
                  id="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Name"
                  name="name"
                />

                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="company">
                  Company:
                </label>
                <Field
                  id="company"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Company"
                  name="company"
                />
                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Email:
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Email"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="phone">
                  Phone:
                </label>
                <Field
                  id="phone"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client Phone"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notes:
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Client Notes"
                  name="notes"
                />
              </div>

              <input
                type="submit"
                value={client?.name ? "Edit Client" : "Add Client"}
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </FormikForm>
          );
        }}
      </Formik>
    </div>
  );
};

Form.defaultProps = {
  client: {},
  loading: {},
};

export default Form;
