import { boardDataInfo } from "../../interface/boardInterface";
import { ListTable } from "../../style/board/ListStyle";

type TableProps = {
  tableColunm: string[];
  boardData: boardDataInfo[];
};
const TableComponent: React.FC<TableProps> = ({ tableColunm, boardData }) => {
  return (
    <ListTable>
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
    </ListTable>
  );
};

export default TableComponent;
