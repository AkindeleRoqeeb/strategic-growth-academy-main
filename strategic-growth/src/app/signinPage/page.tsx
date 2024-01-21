
import Image from "next/image";

import Link from "next/link";

import Logoimage from "../image/IMG-20240113-WA0016.jpg"
import logo from "../image/logo.png"
import facebookicon1 from "../image/facebook3-fotor-bg-remover-20240120124157.png"
import google from "../image/googleIcon2.png"


export default function SigninPage() {
    return (
        <main className="capitalize text-center grid md:grid-flow-col lg:grid-flow-col gap-10">
            <section>
                <Image className="h-screen hidden md:block lg:block" src={Logoimage} alt=""/>
            </section>
            <section className="place-self-center mt-16 px-10 md:m-0">
                <h4 className="font-bold text-2xl py-5">
                    welcome back to strategic growth
                </h4>
                <span className="my-4 font-semibold">
                    login into your account strategic growth <br /> limited
                </span>
                <div className="flex justify-evenly my-10">
                    <button className="bg-slate-50 border-solid font-bold border-2 rounded-lg p-2 flex place-items-center">
                        <Image src={google} alt="" className="h-10 w-10" />
                        google
                    </button>
                    <button className="flex bg-slate-50 border-solid font-bold border-2 rounded-lg p-2 place-items-center">
                        <Image src={facebookicon1} alt="" className="h-11 w-12" />
                        facebook
                    </button>
                </div>
                <div className="text-center my-8 ">or continue with</div>
                <div className="flex flex-col gap-5">
                    <input type="text" placeholder="Full name" className="text-black p-2 bg-slate-50" />
                    <input type="text" placeholder="Password" className="text-black p-2 bg-slate-50" />
                    <button className="cursor-pointer border-solid border-2 border-sky-500
                    text-center rounded-lg p-3 bg-green-900 text-white">create account</button>
                </div>
                <div className="my-6">
                    just getting started? <a href="" className="text-blue-700  font-bold border-b-4">sign up</a>
                </div>
            </section>
        </main>
        )
}