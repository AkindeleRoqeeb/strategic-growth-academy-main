
import Image from "next/image";

import Logoimage from "../image/IMG-20240113-WA0016.jpg"
import logo from "../image/logo.png"


export default function SigninPage() {
    return (
        <main className="place-content-center flex h-dvh justify-center
        bg-gradient-to-r from-purple-500 to-gray-500 content-center
        ">
            <div>
            <Image className="" src={Logoimage} alt="" style={{height: "100%"}} />
            </div>
            <div className=" mx-10  place-content-center text-center pt-60">
                <div className="p-3" >
                <h2 className="text-2xl font-bold">welcome to strategic growth</h2>
                <span className="text-xl font-normal gap-7 ">login into your account</span>
                    <div className="flex">
                    <button className="flex">
                        <svg className="h-5 w-8 text-green-750" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                        google
                    </button>

                    <button className="flex">
                        <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        facebook
                    </button>
                    </div>
                    <div className="">
                        <h3>or continue with</h3>
                    </div>
                    <div className="grid gap-4 m-5">
                        <input type="email" placeholder="full name" className="border-solid border-2 border-sky-500 hover:border-dotted" />
                        <input type="password" placeholder="password" />
                        <input type="password" placeholder="cofirm password" />
                        <input type="submit" className="p-4 bg-blue-950 w-96 rounded-md text-white" />
                    </div>
                </div>
            </div>
        </main>
    )
}