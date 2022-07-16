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
              <form>
                <input type="Email" />
                <input type="password" />
                <input type="confirm password" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
