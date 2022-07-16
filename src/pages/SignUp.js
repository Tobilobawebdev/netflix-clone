import React from 'react';

function SignUp() {
  return (
    <div className="w-full h-screen">
      <img
        className="w-full absolute h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/5edf9ecd-fc54-4876-b492-a8f970fc792d/NG-en-20220711-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="lgo"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">SignUp</h1>
              <form className="w-full flex flex-col py-4">
                <input className="p-3 my-2 bg-gray-700 rounded" type="Email" />
                <input className="p-3 my-2 bg-gray-700 rounded" type="password" />
                <input className="p-3 my-2 bg-gray-700 rounded" type="confirm password" />
                <button type="submit" className="bg-red-600 px-8 font-bld w-full py-3">Sign In</button>
                <div className="flex mx-auto">
                  <div className="flex">
                    <input type="checkbox" className="bg-gray-700 text-black my-2" />
                    <p className="text-gray-700">Remember me</p>
                  </div>
                  <p className="text-gray-700 ml-12">Need help?</p>
                </div>
              </form>
              <p className="mt-8 text-gray-700">Got an account
                <p className="text-white">Sign in now</p>
              </p>
              <p className="mt-2 text-gray-700">This page is protected by GOOGLE reCAPTCHA to ensure youre not a bot.<p className="text-blue-600">Learn More</p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
