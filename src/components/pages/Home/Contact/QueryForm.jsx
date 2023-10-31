/* eslint-disable react/button-has-type */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable eol-last */
import React from 'react';
import { showAlert } from '../../../layouts/shared/Swal';

const QueryForm = () => {
  return (
      <div className='pt-16'>
          <h1 className="font-bold tracking-[2px] text-3xl mb-8 text-[#F6BA44]">QUERY FORM</h1>
          <section>
              <div>
                  <input
                      type="text"
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="NAME "
                  />
              </div>
              <div>
                  <input
                      type="text"
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="EMAIL"
                  />
              </div>
              <div>
                  <input
                      type="text"
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="MOBILE"
                  />
              </div>
              <div>
                  <input
                      type="text"
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="SUBJECT"
                  />
              </div>
              <div>
                  <textarea
                      type="text"
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="MESSAGE"
                  />
              </div>
              <button onClick={showAlert} className="inline-flex items-center h-12 px-6 mb-3 font-bold text-black tracking-widest  transition duration-200 rounded shadow-md  md:mb-0 bg-amber-400 hover:bg-gray-300 mt-4">
                  SEND MESSAGE
              </button>
          </section>
      </div>
  );
};

export default QueryForm;