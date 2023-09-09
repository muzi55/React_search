import React, { useState } from "react";
import { Data, data } from "./Constant";

function App() {
  const [value, setValue] = useState<string>("");

  const [filterData, setFilterData] = useState<Data[]>([]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = data.filter((el: Data) => {
      return el.description.includes(value);
    });
    setFilterData(search);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>검색 기능 구현</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="descriptionSearch">설명 검색</label>
        <input type="text" onChange={onChange} value={value} id="descriptionSearch" />
        <button>검색</button>
      </form>
      <p>{value || "검색결과값 이 비어있습니다."}</p>

      {filterData.map((el: any) => {
        return (
          <div key={el.id}>
            <h3>name : {el.name}</h3>
            <p>color : {el.color}</p>
            <p>description : {el.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default App;
