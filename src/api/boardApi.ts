import axios from "axios";
import { CreateFormInfo } from "../interface/boardInterface";

// @AREA 게시판 게시글 호출
export const getBoard = async () => {
  try {
    // /json/board 더미데이터 Axios test
    const response = await axios.get("/json/board.json");
    const result = response.data;
    console.log("status", response.status);
    if (response.status === 200) {
      return result;
    } else {
      console.log("something problem");
    }
  } catch (error) {
    console.log("error msg ", error);
  }
};

// @AREA 게시판 게시글 작성

export const postBoard = async ({ postData }: { postData: CreateFormInfo }) => {
  console.log("receive data : ", postData);
  try {
    const response = await axios.post("", postData);
    const result = response.data;
    response.status === 200 ? result : console.log("something problem");
    // console.log("성공");
  } catch (error) {
    console.log(error);
  }
};
