import { useQuery } from "@tanstack/react-query";
import { getBoard } from "../../api/boardApi";
import TableComponent from "../../components/common/TableComponent";
import IngredientComponent from "../../components/fridge/IngredientComponent";
import { TitleWrap } from "../../style/board/ListStyle";
import { ListWrap } from "../../style/fridge/ListStyle";

const ListPage = () => {
  const myList = ["어묵", "새우", "신라면", "당근", "양파"];
  const tableColunm = ["순번", "메뉴명", "재료정보", "열량", "작성일자"];
  const { data } = useQuery({
    queryKey: [],
    queryFn: () => getBoard(),
  });
  const ServerData = data;
  return (
    <ListWrap>
      <div>
        <TitleWrap>
          <span>나의 냉장고 재료</span>
        </TitleWrap>
        <div>
          {/* 재료 컴포넌트 */}
          <IngredientComponent myList={myList} />

          <div className="input-ingredient">
            <form>
              <input
                type="text"
                placeholder="재료를 입력해주세요.(10자 이내)"
                maxLength={10}
              />
              <button>추가하기</button>
            </form>
          </div>
          <div style={{ fontSize: "1.5rem", fontFamily: "GmarketSansMedium" }}>
            <span>재료를 클릭하면 삭제할 수있어요!</span>
          </div>
        </div>
      </div>
      <div>
        <span style={{ fontSize: "3rem" }}>추천!!</span>
        {/* <TableComponent tableColunm={tableColunm} boardData={} /> */}
      </div>
    </ListWrap>
  );
};

export default ListPage;
