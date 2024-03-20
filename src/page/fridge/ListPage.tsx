const ListPage = () => {
  const myList = ["어묵", "새우", "신라면", "당근", "양파"];
  return (
    <div>
      <div>
        <div>
          {/* 집에있는 재료들 */}
          <div>
            <span>냉장고 재료들 :</span>
            {myList.map((item, index) => (
              <div key={index}>
                <span> {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
