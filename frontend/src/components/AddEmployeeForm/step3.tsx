import React from 'react';

const Step3 = ({ prevStep, values }) => {
  return (
    <div>
      <h2>Step 3: Address Details</h2>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={values.address}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={values.city}
        />
      </label>
      <br />
      <button onClick={prevStep}>Back</button>
    </div>
  );
};

export default Step3;