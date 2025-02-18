import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { TbImageInPicture } from "react-icons/tb";

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='text-[20px] font-bold text-heading'>Step 2: Add Documents Detail</h2>
      </div>
      <div className='card-body'>
        <form className="flex gap-10">
          <div className="flex text-sm leading-6 text-gray-600 w-[20%] flex-col gap-5">
            <div className='flex flex-col gap-2'>
              <h3 className='text-heading font-bold text-[1.25rem]'>ID Proof</h3>
              <p className='text-text font-regular text-[1rem]'>Upload any one ID Proof</p>
            </div>
            <label className="relative cursor-pointer text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px] h-[300px] flex justify-center items-center">
              <span>
                <TbImageInPicture className='text-[50px] text-primary-100' />
              </span>
              <input id="file-upload" name="file-upload" type="file" hidden />
            </label>
          </div>
          <div className="flex flex-col gap-6 w-[80%]">
            <div className='flex flex-col gap-5'>
              <h3 className='text-heading font-bold text-[1.25rem]'>Documents Details</h3>
              <div className='grid grid-cols-1 gap-6'>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Adhaar Card Number</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Adhaar card number" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">PAN Card Number</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="PAN card number" />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h3 className='text-heading font-bold text-[1.25rem]'>Resume</h3>
              <div className='grid grid-cols-1 gap-6'>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max mb-2">Upload Resume</label>
                  <label className="relative cursor-pointer text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[20px] rounded-[5px] flex justify-center items-center">
                    <FaArrowUpFromBracket className='text-text text-[18px] text-primary-100' />
                    <input id="file-upload" name="file-upload" type="file" hidden />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='card-footer flex justify-end items-center gap-3'>
        <button onClick={prevStep} className='btn-primary flex items-center gap-2'><FaArrowLeftLong /> Back</button>
        <button onClick={nextStep} className='btn-primary flex items-center gap-2'>Next <FaArrowRightLong className='text-white' /></button>
      </div>
    </div>
  );
};

export default Step2;