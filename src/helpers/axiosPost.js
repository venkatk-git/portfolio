import axios from "axios";

export const POST = async (ENDPOINT, DATA) => {
  return axios
    .post(ENDPOINT, JSON.stringify(DATA))
    .then(() => ({
      status: true,
      message: "Submitted",
    }))
    .catch((e) => ({
      status: false,
      message: e,
    }));
};
