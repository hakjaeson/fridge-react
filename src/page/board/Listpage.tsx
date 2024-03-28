import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, useMemo, useState } from "react";
import { getBoard } from "../../api/boardApi";
import { boardDataInfo } from "../../interface/boardInterface";
import { c } from "vite/dist/node/types.d-FdqQ54oU";
import useCustomHook from "../../hook/useCustomHook";
import {
  InputWrap,
  ListTable,
  MoveButton,
  TitleWrap,
} from "../../style/board/ListStyle";
import TableComponent from "../../components/common/TableComponent";

const Listpage = () => {
  const { MoveBoardCreate } = useCustomHook();

  // boardData initState
  const initState: boardDataInfo[] = [
    {
      no: 0,
      title: "",
      content: "",
      writer: "",
      createDate: "",
    },
  ];
  // @FN Get list-data
  const { data } = useQuery({
    queryKey: [],
    queryFn: () => getBoard(),
  });
  const boardData = useMemo(() => data || initState, [data]);
  // console.log("gete board data", boardData);
  const tableColunm = ["순 번", "글제목", "글내용", "작성자명", "작성일자"];

  // @FN Search (post search-data)
  const [searchData, setSearchData] = useState<string>();
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // setSearchData(searchData=>{...searchData, [e.target.name] : e.target.value})
  };
  const handleClickSearch = () => {};

  return (
    <div style={{}}>
      <TitleWrap>
        <span>레서피 메모장</span>
      </TitleWrap>
      <InputWrap>
        <form>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            onChange={e => handleChangeSearch(e)}
          />
          <button type="submit">검색</button>
        </form>
      </InputWrap>
      <div style={{ padding: "30px 0px" }}>
        <TableComponent tableColunm={tableColunm} boardData={boardData} />
      </div>

      <div style={{ width: "100%" }}>
        <MoveButton style={{ float: "right" }} onClick={MoveBoardCreate}>
          글쓰기
        </MoveButton>
      </div>
    </div>
  );
};

export default Listpage;
