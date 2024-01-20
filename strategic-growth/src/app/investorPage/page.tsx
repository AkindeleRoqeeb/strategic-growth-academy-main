import Image from 'next/image'

// images
import Logoimage from "../image/personal developmentTalent-and-Performance-Management-Thumbnail.jpg"
import logo from "../image/logo.png"
import candlechat1 from "../image/chart1.jpg"
import candlechat2 from "../image/chat2.png"
import candlechat3 from "../image/chat3.png"
import candlechat4 from "../image/chat4.jpg"
import candlechat5 from "../image/chat2-fotor.png"
import candlechat6 from "../image/chat3-fotor.png"


function investorPage() {
    return (
        <main className='bg-gray-800 text-white'>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* <!--    
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Image className="h-8 w-auto" src={logo} alt="" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">about</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Real&nbsp;estate</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium bg-gray-600 ">investor</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>

                            {/* <!-- Profile dropdown --> */}
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>

                                {/* <!--
            Dropdown menu, show/hide based on menu state.
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                                {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"> */}
                                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</a> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">real&nbsp;estate</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>
            <div className='investorImg  grid lg:grid-cols-2 gap-10 lg:px-24 sm:p-10 p-10 md:grid-flow-col place-content-center
                capitalize
            '>
                <div className=' text-white background-custom p-6 rounded-md
                md:col-span-1 md:pt-16'>
                    <h3 className='help text-3xl text-start font-bold italic pt-4'>
                        "Secure Your Investment with
                        Confidence - Our Land Serves
                        as Collateral.
                        "
                    </h3>
                    <p className='py-3 text-xl text-start text-zinc-50 pt-5 leading-8'>
                        Imagine a path where every step is fueled by passion,
                        confidence, and purpose. <br /> That's the power of skill
                        development.
                    </p>
                    <div className='py-3 flex gap-3 flex-wrap text-center my-5 '>
                        <button className=" cursor-pointer rounded-lg bg-sky-900 text-white capitalize p-3">book now</button>
                        <a className='text-white text-center border-solid border
                            rounded-sm p-3 font-bold cursor-pointer' href="">know more</a>
                    </div>
                    <span className='text-white cursor-pointer'>you will get 30 days trial.</span>
                </div>

                {/* booking */}

                <form className='bg-transparent pt-10 rounded-md p-10 shadow-blue-200 shadow-2xl gap-2 grid
                    text-white md:col-span-2 bg-gradient-to-r from-gray-700 to-gray-400'
                    id='form'>
                    <h4 className='text-center font-bold'>book appointment</h4>
                    <label>Name</label>
                    <input placeholder='enter your full name' className='w-full rounded-sm h-10 text-black p-3 font-bold' type="name" />
                    <label>email</label>
                    <input placeholder='enter your email' type="email" className='w-full rounded-none h-10 text-black p-3 font-bold' />
                    <label>department</label>
                    <input placeholder='enter intrest' type="text" className='w-full rounded-sm h-10 text-black p-3 font-bold' />
                    <label>time</label>
                    <input type="time" className='w-full text-center text-black rounded-sm h-10' /> <br />
                    <input type="submit" className='bg-red-600 cursor-pointer p-2 w-96 w-full mt-4 rounded-lg' />
                </form>
            </div>
            <div className='text-center'>
                <h3 className='text-center pt-10 font-bold text-2xl'>DIVERSIFIED
                    INVESTMENTS</h3>
                <p className='py-5'>
                    Tired of eggs in one basket? Crack open
                    a world of possibilities with Strategic
                    Growth Academy investment packages! <br />
                    We help you diversify your portfolio
                    across high-growth markets.
                </p>
            </div>
            <div className='text-center font-bold py-8 text-2xl'>
                OUR POWER PACKAGE
            </div>
            <div className='text-start mb-11 mt-5 grid lg:grid-flow-col md:grid-flow-col md:px-10 gap-7
                place-content-center
            '>
                <div className='border border-solid border-emerald-950 rounded-lg rounded-b-lg shadow-xl'>
                    <h4 className='font-semibold bg-gray-700 text-white rounded-t-lg py-6 text-center'>
                        Monthly Momentum
                    </h4>
                    <div className='px-9 py-4 bg-slate-50 text-black leading-9 rounded-b-lg'>
                        <li>
                            Start small and scale up.
                        </li>
                        <li>
                            10% monthly return,
                        </li>
                        <li>
                            ideal for beginners.
                        </li>
                    </div>
                </div>

                <div className='border border-solid border-emerald-950 rounded-b-lg rounded-lg shadow-xl'>
                    <h4 className='font-semibold bg-gray-700 text-white rounded-t-lg py-6 text-center'>
                        Quarterly Catalyst
                    </h4>
                    <div className='px-9 py-4 bg-slate-50 text-black leading-9 rounded-b-lg'>
                        <li>
                            Build a solid base.
                        </li>
                        <li>
                            36% quarterly return,
                        </li>
                        <li>
                            perfect for consistent growth.
                        </li>
                    </div>
                </div>
                <div className='border border-solid border-emerald-950 rounded-b-lg rounded-lg shadow-xl'>
                    <h4 className='font-semibold bg-gray-700 text-white rounded-t-lg py-6 text-center'>
                        Semi-Annual Alpha
                    </h4>
                    {/* <hr className=' mb-3 bg-zinc-600  h-1' /> */}
                    <div>
                        <div className='px-9 py-4 bg-slate-50 text-black leading-9 rounded-b-lg'>
                            <li>
                                For the ambitious investor.
                            </li>
                            <li>
                                84% bi-annual return,
                            </li>
                            <li>
                                maximize your
                                long-term potential.
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center flex flex-col justify-items-center'>
                <div className='leading-9 my-5'>
                    <h4 className='font-bold text-2xl'>who are we </h4>
                    <span>
                        "Secure Your Investment with
                        Confidence - Our Land Serves
                        as Collateral.
                        "
                    </span>
                </div>
                <div className='grid md:grid-flow-col place-content-center gap-10 '>
                    <Image className="h-80 w-96 align-middle " src={Logoimage} alt="" />
                    <Image className="h-80 w-96 align-middle " src={candlechat3} alt="" />
                </div>
                {/* INVESTMENTOPPORTUNITIES */}
                <div className='my-10'>
                    <span className='mb-10 font-bold'>TYPE OF INVESTMENT OPPORTUNITIES</span>
                    <div className='grid md:grid-flow-col lg:grid-flow-col gap-4 mt-10 sm:px-10 place-content-center'>
                        <div className='p-3 cursor-pointer bg-slate-500 text-white rounded-md sm:w-auto'>
                            STOCKS&nbsp;&&nbsp;FOREX
                        </div>
                        <div className='p-3 cursor-pointer bg-slate-500 text-white rounded-md w-96 sm:w-auto'>
                            REAL&nbsp;ESTATE
                        </div>
                        <div className='p-3 cursor-pointer bg-slate-500 text-white rounded-md w-96 sm:w-auto'>
                            AI&nbsp;&&nbsp;TECH
                        </div>
                        <div className='p-3 cursor-pointer bg-slate-500 text-white rounded-md w-96 sm:w-auto'>
                            CRYPTO CURRENCIES
                        </div>
                        <div className='p-3 cursor-pointer bg-slate-500 text-white rounded-md w-96 sm:w-auto'>
                            STARTUPS
                        </div>
                        <div className='p-3 cursor-pointer bg-slate-500 text-white rounded-md w-96 sm:w-auto'>
                            ETFS
                        </div>
                    </div>
                </div>
                <div className='place-content-center flex mt-5'>
                    <Image className="h-80 w-96 md:w-8/12 lg:w-9/12 align-middle " src={candlechat6} alt="" />
                </div>
            </div>
            <div className='place-content-center'>
                <h4 className='text-center'>WHY INVEST?</h4>
                <div className='text-center my-5 md:mx-6 lg:mx-11 grid md:grid-flow-col md:grid-cols place-content-center gap-5'>
                    <div className='flex rounded-md border-solid border-2 border-white-500 p-2 gap-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-check place-self-center" viewBox="0 0 16 16">
                            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514" />
                        </svg>
                        <span>Wealth Accumulation</span>
                    </div>
                    <div className='flex rounded-md border-solid border-2 border-white-500 p-2 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle place-self-center" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg>
                        <span>
                            Financial Security
                        </span>
                    </div>
                    <div className='flex rounded-md border-solid border-2 border-white-500 p-2 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-check place-self-center" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                        </svg>
                        <span>Passive Income</span>
                    </div>
                    <div className='flex rounded-md border-solid border-2 border-white-500 p-2 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square place-self-center" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg>
                        <span>
                            Economic Growth
                        </span>
                    </div>
                    <div className='flex rounded-md border-solid border-2 border-white-500 p-2 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ui-checks-grid place-self-center" viewBox="0 0 16 16">
                            <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z" />
                        </svg>
                        <span>Tax Benefits</span>
                    </div>
                </div>
            </div>
            {/* contect */}
            <div>
                <div className='capitalize mt-10 text-center font-bold'>
                    get in touch
                </div>
            <form action="" className='grid md:grid-flow-col place-content-center gap-5 py-10 p-6 my-5'>
                <div className='flex flex-col gap-5'>
                    <input type="text" className='rounded-sm w-80 text-black p-2 bg-slate-200' placeholder='enter your name' />
                    <input type="text" className='rounded-sm w-80 text-black p-2 bg-slate-200' placeholder='enter your name' />
                    <input type="text" className='rounded-sm w-80 text-black p-2 bg-slate-200' placeholder='enter your name' />
                </div>
                <div>
                    <textarea name="" id="" placeholder='enter your information here' className='text-black h-40 bg-slate-200 p-5 w-80 md:w-72 rounded-sm'></textarea>
                </div>
            </form>
            </div>
            <footer className=' p-2 pb-6 bg-gray-600 grid md:grid-flow-col lg:grid-flow-col place-content-center gap-11'>
                <div className=''>
                    <div className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone place-self-center" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        <h5>+234 904 925 5468</h5>
                    </div>
                    <div className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope place-self-center" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                        <h4> Strategicgrowthinstitution@Gmail.Com</h4>
                    </div>

                </div>
                <div className=' grid grid-flow-col place-self-center gap-10' >

                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-5 w-6' >
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-5 w-6' >
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-5 w-6' >
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-5 w-6' >
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>
                    </a>

                </div>
            </footer>
        </main>
    )
}

export default investorPage;