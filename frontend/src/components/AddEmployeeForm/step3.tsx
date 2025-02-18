import { FaArrowLeftLong } from "react-icons/fa6";

const Step3 = ({ prevStep, values }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='text-[20px] font-bold text-heading'>Step 3: Bank Account Details</h2>
      </div>
      <div className='card-body'>
        <form>
          <div className="flex flex-col gap-6">
            <div className='flex flex-col gap-5'>
              <h3 className='text-heading font-bold text-[1.25rem]'>Bank Account Details</h3>
              <div className='grid grid-cols-2 gap-6'>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Bank Name</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Bank name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Branch Name</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Branch Name" />
                </div>
                <div className="flex flex-col gap-2 col-span-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Account Holder Name</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Account holder name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">Account Number</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="Account number" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-medium text-heading leading-5 relative before:absolute before:content-[&quot;*&quot;] before:text-red before:right-[-11px] before:top-0 before:bottom-0 w-max">IFSC Code</label>
                  <input type="text" className=" text-heading focus-visible:outline-0 focus-visible:border-[1px] focus-visible:border-primary-100 w-full border-[1px] border-primary-100 p-[10px] rounded-[5px]" placeholder="IFSC code" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='card-footer flex justify-end items-center gap-3'>
        <button onClick={prevStep} className='btn-primary flex items-center gap-2'><FaArrowLeftLong /> Back</button>
        <button type="submit" className='btn-primary flex items-center gap-2'>Submit</button>
      </div>
    </div>
  );
};

export default Step3;