import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components.js/MainLayout";

export default function Home() {
  const [name, setName] = useState("");
  const [createRoom, setCreateRoom] = useState(false);
  const [confrim, setConfrim] = useState(false);
  const [confrimRoom, setConfrimRoom] = useState(false);
  const [joinroom, setJoinroom] = useState(false);

  const navigate = useNavigate();

  const gotoConfrim = (value) => {
    localStorage.setItem("name", name);
    navigate("/confrim", { state: { value } });
  };

  return (
    <MainLayout>
      <div className="flex-align-center">
        {!confrim ? (
          <>
            <p className="title mt-60">ชื่อของคุณ</p>
            <input
              className="w-calc"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        ) : name && !createRoom && !joinroom ? (
          <p className="title mt-60 moveup-animation">คุณ {name}</p>
        ) : createRoom && !confrimRoom ? (
          <p className="title mt-60 moveup-animation2">สร้างห้องใหม่</p>
        ) : (
          ""
        )}
        {name && !confrim && (
          <button
            className="button mt-37 moveup-animation"
            onClick={() => setConfrim(true)}
          >
            ยืนยัน
          </button>
        )}
        {confrim && !createRoom && !joinroom && (
          <div className="flex-center height-70">
            <div
              className="button moveup-animation"
              onClick={() => {
                gotoConfrim("createRoom");
              }}
            >
              สร้างห้องใหม่
            </div>
            <div
              className="textButton moveup-animation"
              onClick={() => {
                gotoConfrim("joinroom");
              }}
            >
              เข้าร่วมแชท
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
