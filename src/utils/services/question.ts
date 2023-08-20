import axios from 'axios';
import { questionObject } from '../../store/questionReducers/AllQuestions';

export const getQuestions = async (amount: string,type:string,difficulty:string): Promise<questionObject[]> => {
  try {
    const response = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${type}&type=multiple&&difficulty=${difficulty}`);
    const data: questionObject[] = response.data.results; // Extract the results array
  
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};
  