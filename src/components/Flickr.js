import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { fetchFlickr } from "../redux/flickrSlice";

function Flickr() {
  const flickr = useSelector((store) => store.flickr.data);
  const dispatch = useDispatch();
  const input = useRef(null);
  // 초기 Opt state 값에 type: 'interest' 객체 지정
  // 추후 해당 state를 useEffect의 의존성 배열로 등록해서, Opt 값이 변경될 때 마다 reducer 데이터 변경 요청을 보내기 위함
  const [Opt, setOpt] = useState({ type: "interest" });

  // 검색 버튼 클릭시 실행할 함수
  // 검색어를 담아서 Opt의 상태값 변경
  const showSearch = () => {
    const result = input.current.value;
    setOpt({ type: "search", tags: result });
  };

  const showMine = () => {
    setOpt({ type: "user", user: "195927877@N07" });
  };

  useEffect(() => {
    dispatch(fetchFlickr(Opt));
  }, [Opt]);

  return (
    <section>
      <h1>Flickr</h1>
      <input type="text" ref={input} />
      <button onClick={showSearch}>Search</button>
      <button onClick={showMine}>My Gallery</button>
      {flickr.map((pic) => (
        <p key={pic.id}>{pic.title}</p>
      ))}
    </section>
  );
}

export default Flickr;
