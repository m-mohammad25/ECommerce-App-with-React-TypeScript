import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

type TFormDAta = {
  email: string;
  password: string;
};

type TResponse = {
  accessToken: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
};
const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: TFormDAta, thunk) => {
    const FAKE_ACCESS_TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImgucG90dGVyQGhvZ3dhcnRzLmVkdSIsImlhdCI6MTczNTgyNjQzMCwiZXhwIjoxNzM1ODMwMDMwLCJzdWIiOiIyIn0.QbxEtEteL2cbXna-ykNCvzanu15ZfLu3cLSSwyoQm2A";
    const { rejectWithValue } = thunk;

    try {
      const response = await axios.get(
        `/users?email=${formData.email}&password=${formData.password}`
      );
      console.log(response.data);
      if (response.data.length == 0) return rejectWithValue("Can't find user");
      return {
        accessToken: FAKE_ACCESS_TOKEN,
        user: {
          id: response.data[0].id,
          firstName: response.data[0].firstName,
          lastName: response.data[0].lastName,
          email: response.data[0].email,
        },
      };
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export { actAuthLogin };
