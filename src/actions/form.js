import axios from 'axios';

export const submitForm = async formInputs => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post(
      `/.netlify/functions/formSubmit`,
      formInputs,
      config
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return `Error: ${err.response.statusText}`;
  }
};
