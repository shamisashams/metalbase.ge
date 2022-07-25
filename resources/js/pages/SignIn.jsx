import React from "react";
// import { Link } from "react-router-dom";
import { Link, usePage, useForm } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";
import Swal from 'sweetalert2'
import { Route } from "react-router-dom";


// import bg from "/assets/images/bg/2.png";
// import img from "/assets/images/other/4.png";

const SignIn = ({ page, seo, success }) => {

    const { data, setData, post, processing, errors } = useForm({

        email: '',
        password: '',

    })

    function submit(e) {
        // alert('asdas')
        e.preventDefault()
        post(route("client.auth"))
    }


    // if (success) {
    //     Swal.fire({
    //         title: 'success',
    //         text: 'თქვენ წარმატებით გაიარეთ რეგისტრაცია',
    //         icon: 'success',
    //         confirmButtonText: 'Cool'
    //     })
    //     setTimeout(() => {
    //         location.reload()
    //     }, 2000);
    // }

    return (
        <Layout seo={seo}>
            <div className="min-h-screen" style={{ backgroundImage: `url('/assets/images/bg/2.png')` }}>
                <div className="wrapper md:pt-40 pt-20 text-center">
                    <img src={'/assets/images/other/4.png'} alt="" className="m-auto mb-5" />
                    <form className="max-w-xs m-auto" onSubmit={submit}>
                        <div className="text-2xl mb-6 text-violet-700 font-semibold ">
                            Sign in
                        </div>
                        <input
                            name="email"
                            value={data.email} onChange={e => setData('email', e.target.value)}
                            type="text"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Enter Email"
                        />
                        <input
                            name="password"
                            value={data.password} onChange={e => setData('password', e.target.value)}
                            type="password"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Enter Password"
                        />
                        <div className="flex mb-5">
                            <input type="checkbox" name="" id="checkbox" />
                            <label htmlFor="checkbox" className="text-sm ml-2 font-semibold">
                                Remember me
                            </label>
                        </div>

                        <button className="py-2 w-full rounded-full text-center  border font-bold  mt-2 transition bg-violet-700 text-white">
                            Log in
                        </button>
                        <div className="font-bold mt-5">
                            don't have an account yet?{" "}
                            <Link href={route("client.register")} className="underline">
                                {" "}
                                sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default SignIn;
