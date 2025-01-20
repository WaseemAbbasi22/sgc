import React, { useRef,useState } from 'react';

import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('sgc')
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    // const clearInput = () => {
    //     setFirstName('')
    //     setLastName('')
    //     setEmail('')
    //     setPhone('')
    //     setMessage('')
    // }


    const formRef = useRef();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('data i got is ' + form.firstName +form.lastName +form.email + form.phone + form.message);

    emailjs
      .send(
        "service_rwsyw6p",
        "template_cclr0lb",
        {
            first_name: form.firstName,
            last_name: form.lastName,
            phone: form.phone,
           email: form.email,
          message: form.message,
        },
        "hC3Z6Y1QQf9yHErxM"
      )
      .then(
        () => {
          setLoading(false);
        //   alert("Thank you. I will get back to you as soon as possible.");
        Notiflix.Report.success(
            'Success',
            'Thank you. I will get back to you as soon as possible.',
            'Okay',
        );

          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          Notiflix.Report.failure(
            'An error occurred',
            "Ahh, something went wrong. Please try again.",
            'Okay',
        );
        //   alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

    return (
        <>
            <div id="contact" className="flex  mt-8 w-full  lg:py-24">
                <div
                    className="container mx-auto my-8 px-4 py-5 lg:px-20  bg-navBg"
                    data-aos="zoom-in"
                >
                    {/* Use grid to arrange form and contact details side by side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Form Section */}
                        <form
                        ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white p-8 rounded-2xl shadow-2xl"
                        >
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl mb-6">
                                Send us a message
                            </h1>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div>
                                    <input
                                        name="firstName"
                                        className="w-full bg-gray-100 text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors?.firstName && (
                                        <p className="text-red-500 text-sm">{errors.firstName}</p>
                                    )}
                                </div>
    
                                <div>
                                    <input
                                        name="lastName"
                                        className="w-full bg-gray-100 text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors?.lastName && (
                                        <p className="text-red-500 text-sm">{errors.lastName}</p>
                                    )}
                                </div>
    
                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={form.email}
                                        onChange={handleChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors?.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name="phone"
                                        className="w-full bg-gray-100 text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={form.phone}
                                        onChange={handleChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors?.phone && (
                                        <p className="text-red-500 text-sm">{errors.phone}</p>
                                    )}
                                </div>
    
    
                            </div>
    
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-textColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={form.message}
                                    onChange={handleChange}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors?.message && (
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                )}
                            </div>
    
                            <div className="my-2">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="uppercase text-sm font-bold tracking-wide bg-secondary hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

    
                        {/* Contact Details Section */}
                        <div className="text-white rounded-2xl p-8 shadow-2xl">
                            <div className="flex flex-col">
                                <div className="flex my-4">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                    <div>
                                        <h2 className="text-2xl">Office Address</h2>
                                        <p className="text-gray-400">Building 44 Office-1 Jabel Ali Parco Dubai</p>
                                    </div>
                                </div>
    
                                <div className="flex my-4">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                    <div>
                                        <h2 className="text-2xl">Call Us</h2>
                                        <p className="text-gray-400">Mob: +971503003142</p>
                                    </div>
                                </div>
    
                                <div className="mt-5">
                                    <h2 className="text-2xl">Send an E-mail</h2>
                                    <p className="text-gray-400">info@sgcmanagements.com</p>
                                </div>
    
                                <div className="flex mt-8 space-x-2">
                                    <a
                                        href="https://www.facebook.com/ENLIGHTENEERING/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 text-center pt-1"
                                    >
                                        {/* Facebook SVG */}
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/enlighteneering-inc-"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 text-center pt-1"
                                    >
                                        {/* LinkedIn SVG */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Contact;





