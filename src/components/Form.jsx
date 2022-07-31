import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";

const Form = () => {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Add Client
      </h1>
      <Formik
        initialValues={{
          name: "ivan",
          company: "IB",
          email: "a@a.com",
          phone: "6222289135",
          notes: "quentin tarantino",
        }}
      >
        {() => (
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
              value="Add Client"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
            />
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;
