import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage, useForm } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";

// import bg from "/assets/images/bg/2.png";
// import img from "/assets/images/other/5.png";

const SignUp = (page, seo) => {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        repeat_password: '',
    })

    function submit(e) {
        e.preventDefault()
        post(route("register"))
    }

    return (
        <Layout seo={seo}>
            <div className="min-h-screen" style={{ backgroundImage: `url('/assets/images/bg/2.png')` }}>
                <div className="wrapper md:pt-40 pt-20 text-center flex items-center">
                    <form className="max-w-lg lg:border rounded-xl border-violet-700 lg:bg-white lg:p-20 m-auto"
                        onSubmit={submit}>
                        <div className="max-w-xs m-auto">
                            <div className="text-2xl mb-6 text-violet-700 font-semibold ">
                                Sign up
                            </div>
                            <input
                                value={data.first_name} onChange={e => setData('first_name', e.target.value)}
                                // value={values.first_name} onChange={handleChange}
                                // {errors.first_name && <div>{errors.first_name}</div>}
                                type="text"
                                className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                                placeholder="first_name"
                            />
                            <input
                                value={data.last_name} onChange={e => setData('last_name', e.target.value)}
                                // value={values.last_name} onChange={handleChange}
                                type="text"
                                className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                                placeholder="last name"
                            />
                            <input
                                value={data.phone} onChange={e => setData('phone', e.target.value)}
                                // value={values.phone_name} onChange={handleChange}
                                type="tel"
                                className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                                placeholder="phone"
                            />
                            <input
                                value={data.email} onChange={e => setData('email', e.target.value)}
                                // value={values.email_name} onChange={handleChange}
                                type="text"
                                className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                                placeholder="email"
                            />
                            <input
                                value={data.password} onChange={e => setData('password', e.target.value)}
                                // value={values.password} onChange={handleChange}
                                type="password"
                                className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                                placeholder="password"
                            />
                            <input
                                value={data.repeat_password} onChange={e => setData('repeat_password', e.target.value)}
                                // value={values.repeat_password} onChange={handleChange}
                                type="password"
                                className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                                placeholder="repeat_password"
                            />
                            <div className="flex mb-5">
                                <input type="checkbox" name="" id="checkbox" required />
                                <label htmlFor="checkbox" className="text-sm ml-2 font-semibold">
                                    Check to accept terms and conditions
                                </label>
                            </div>
                            <button
                                type='submit'
                                // onClick={() => { console.log(data) }}
                                className="py-2 w-full rounded-full text-center  border font-bold  mt-2 transition bg-violet-700 text-white">
                                Register
                            </button>
                            <div className="font-bold mt-5">
                                Already have an account?
                                <Link to="/login" className="underline">
                                    {" "}
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </form>
                    <img
                        src={'/assets/images/other/5.png'}
                        alt=""
                        className="mb-5 inline-block lg:inline-block hidden"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;
