import axios from "axios";

const API_URL = "/api/holidays/";

/* create a holiday request */
const createHoliday = async (holidayForm, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, holidayForm, config);

  return response.data;
};

const getHolidays = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const holidayService = { createHoliday, getHolidays };

export default holidayService;
