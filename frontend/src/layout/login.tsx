import welcomeImage from "../assets/welcome.png";

function Login() {
  return (
    <>
      <section className="flex h-screen">
        <div className="2xl:w-[30%] xl:w-[30%] lg:w-[40%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:p-8 xl:p-8 lg:p-6 md:p-5 sm:p-5 p-5 bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center flex-col gap-10">
          <img src={welcomeImage} alt="Welcome" />
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-white text-h4 font-bold">Welcome To HRMS</h2>
            <p className="text-white font-medium text-[18px]">"Your People, Your Power, Our Platform."</p>
          </div>
          <p className="text-white text-[16px] font-regular text-center">A powerful HRMS designed to streamline HR operations, enhance workforce productivity, and drive business success. By automating processes and providing real-time insights, we empower organizations to focus on what truly matters—their people.</p>
        </div>
        <div className='2xl:w-[70%] xl:w-[70%] lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:p-[45px] xl:p-[45px] lg:p-9 md:p-7 sm:p-6 p-5 flex items-center'>
          <form className="p-5 bg-white shadow-property w-[50%] mx-auto">
            <div className='grid grid-cols-1 gap-6'>
              <h2 className="text-heading text-h5 font-bold">Login</h2>
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Email id</label>
                <input type="email" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Email id" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Password</label>
                <input type="Password" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Password" />
              </div>
              <div className='flex justify-end items-end w-full'>
                <a href="#" className="btn-primary">
                  Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
