"use client";

import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import db from "@/lib/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { TbLoader } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import dynamic from 'next/dynamic';

const PaystackButton = dynamic(() =>
  import('react-paystack').then((mod) => mod.PaystackButton),
  { ssr: false }
);

const FillFormComponent = ({ session }) => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(null);
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;

  const initialValues = {
    fullName: '',
    fitnessGoals: '',
    healthHistory: '',
    email: ''
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This is a required field"),
    fitnessGoals: Yup.string().required("This is a required field"),
    healthHistory: Yup.string().required("This is a required field"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const comdetails = {
        image: session?.user?.image,
        author: session?.user?.name,
        timestamp: new Date().toLocaleDateString(),
        ...values,
      };

      await addDoc(collection(db, "community"), comdetails);
      setFormValues(values); // Save for Paystack use
      setShowModal(true);
      resetForm();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const paystackProps = {
    email: formValues?.email || '',
    amount: 2000 * 100, // ₦2000 in kobo
    publicKey,
    text: "Proceed to Pay ₦2,000",
    onSuccess: () => {
      alert("Payment successful!");
      setShowModal(false);
    },
    onClose: () => alert("Payment closed."),
  };

  return (
    <main className='min-h-dvh bg-gray-200 relative'>

      
      <section className='min-h-[50vh] bg-[url(/picc.jpg)] bg-no-repeat bg-center bg-cover bg-fixed'>
        <div className='min-h-[50vh] bg-black/50 flex items-center justify-center p-3'>
          <div className='space-y-5'>
            <h1 className='text-white text-2xl md:text-4xl font-bold text-center'>
              Tell Us About You
            </h1>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className='bg-gray-500 w-full md:p-30 p-3'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className='space-y-4'>
            <div>
              <label className='text-xs uppercase'>Full Name</label>
              <Field name="fullName" className="w-full outline-none p-2 bg-white text-gray-500" placeholder="Enter your full name" />
              <ErrorMessage name="fullName" component="p" className='text-xs text-red-600' />
            </div>

            <div>
              <label className='text-xs uppercase'>Fitness Goals</label>
              <Field name="fitnessGoals" className="w-full outline-none p-2 bg-white text-gray-500" placeholder="What are your goals?" />
              <ErrorMessage name="fitnessGoals" component="p" className='text-xs text-red-600' />
            </div>

            <div>
              <label className='text-xs uppercase'>Health History</label>
              <Field name="healthHistory" className="w-full outline-none p-2 bg-white text-gray-500" placeholder="Any health concerns?" />
              <ErrorMessage name="healthHistory" component="p" className='text-xs text-red-600' />
            </div>

            <div>
              <label className='text-xs uppercase'>Email</label>
              <Field name="email" type="email" className="w-full outline-none p-2 bg-white text-gray-500" placeholder="Enter your email address" />
              <ErrorMessage name="email" component="p" className='text-xs text-red-600' />
            </div>

            <button
              disabled={loading}
              type='submit'
              className={`bg-green-500 text-white py-2 px-20 w-full hover:bg-green-700 transition duration-300 
                ${loading ? "bg-gray-500 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <TbLoader className='text-2xl animate-spin text-center' />
              ) : (
                <span className='flex items-center justify-center gap-2'>Submit Membership</span>
              )}
            </button>
          </Form>
        </Formik>
      </div>

      
      <div className={`h-auto w-full bg-black/80 fixed inset-0 z-50 ${showModal ? "flex" : "hidden"} items-center justify-center`}>
        <div className="w-[40rem] min-h-[20rem] bg-blue-200 relative flex items-center rounded-lg justify-center shadow-lg">
          <button onClick={() => setShowModal(false)} className="absolute right-4 top-4">
            <IoIosClose className="text-4xl text-red-600" />
          </button>
          <div className="flex flex-col gap-5 items-center justify-center px-6 py-10 text-center">
            <FaCheckCircle className="text-6xl text-green-500" />
            <p className="text-xl font-semibold text-gray-700">
              Registration Successful!
            </p>
            <p className="text-md text-gray-600">
              Would you like to proceed with your ₦2,000 payment to complete your registration?
            </p>
            {formValues && (
              <PaystackButton {...paystackProps} className="bg-green-700 hover:bg-green-800 px-5 py-2 text-white rounded-md text-sm" />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FillFormComponent;
