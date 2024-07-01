import { useState } from "react";
import toast from "react-hot-toast";
// import customAxios from "../../utils/axios";
import axios from "axios";
// import { useSelector } from "react-redux";
// import { IRootState } from "../../store/store";

const SubscribeToUs = () => {
  // const user = useSelector((state: IRootState) => state.auth.user);
  // const subscribeToUsHandler = async () => {
  //   try {
  //     const {data} = await customAxios.post("/subscribe", {email : user?.email})
  //     console.log(data)
  //     toast.success(data);
  //   } catch (error: any) {
  //     console.log(error);
  //     toast.error(error.response.data);
  //   }

  // };
  return (
    <>
      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 xl:p-11">
            <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">
              Subscribe to the latest offer
            </h2>
            <p className="text-indigo-200 text-center mb-11 max-lg:max-w-2xl mx-auto">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="text"
                name="email"
                // value={user?.email}
                disabled
                className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email.."
              />
              <button
                type="submit"
                // onClick={() => subscribeToUsHandler()}
                className={`disabled:opacity-50 py-2 px-5 text-sm bg-indigo-500 shadow-md rounded-full  text-white font-semibold hover:bg-indigo-700`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SubscribeToUs;
