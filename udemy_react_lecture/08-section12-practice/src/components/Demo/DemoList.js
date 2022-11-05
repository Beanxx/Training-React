import React, { useMemo } from "react";

const DemoList = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  // useMemo를 사용함으로써 불필요한 정렬을 막을 수 있음

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);

// useMemo(): 모든 종류의 데이터를 저장할 수 있음
