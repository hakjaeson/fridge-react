import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getBoard } from "../../api/boardApi";
import { boardDataInfo } from "../../interface/boardInterface";
import { c } from "vite/dist/node/types.d-FdqQ54oU";
import useCustomHook from "../../hook/useCustomHook";

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

  const { data } = useQuery({
    queryKey: [],
    queryFn: () => getBoard(),
  });
  const boardData = useMemo(() => data || initState, [data]);
  console.log("gete board data", boardData);

  const tableColunm = ["순번", "글제목", "글내용", "작성자명", "작성일자"];

  return (
    <div>
      <span>게시판 입니다.</span>
      <div>
        <form>
          <input type="text" />
          <button type="submit">검색</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            {tableColunm.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {boardData?.map((item: boardDataInfo) => (
            <tr key={item?.no}>
              <td>{item?.no}</td>
              <td>{item?.title}</td>
              <td>{item?.content}</td>
              <td>{item?.writer}</td>
              <td>{item?.createDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={MoveBoardCreate}>글쓰기</button>
      </div>
    </div>
  );
};

export default Listpage;
