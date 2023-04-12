import axios from "axios";
import { Transaction } from "./types";

type data = {
  data: Transaction[];
};

const API_URL = `http://localhost:3000/data`;

export const getTransactions = async (
  page: number,
  status?: string
  // originAmount?: string
): Promise<Transaction[]> => {
  try {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    // if (originAmount) params.append("originAmount", originAmount);
    const response = await axios.get<data>(
      `${API_URL}?page=${page}&${params.toString()}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
