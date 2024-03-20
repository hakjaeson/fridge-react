import axios from "axios";

// @AREA 게시판 게시글 호출
export const getBoard = async () => {
  try {
    const response = await axios.get("url");
    const result = response.data;
    if (result === 200) {
      return result;
    } else {
      console.log("something problem");
    }
  } catch (error) {
    console.log(error);
  }
};
