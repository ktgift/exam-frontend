import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MainLayout from "../components/MainLayout";

export default function Confrim() {
  const [roomname, setRoomname] = useState("");
  const [joinRoomname, setJoinRoomname] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const setroom = (e) => {
    localStorage.setItem("room", e);
    navigate("/chat");
  };

  const checkRoom = () => {
    const room = localStorage.getItem("room");
    if (joinRoomname === room) {
      navigate("/chat");
      setRoomname(room);
    } else {
      Swal.fire({
        text: `ไม่พบห้องแชทนี้ ขณะนี้มีห้อง ${room} กรุณาพิมพ์ชื่อห้องที่มี หรือสร้างห้องใหม่ก่อนเข้าสู่ห้องแชทค่ะ`,
        icon: "error",
      });
    }
  };

  return (
    <MainLayout>
      <div className="flex-align-center">
        {state.value === "createRoom" && (
          <div className="flex-center w-90">
            <p className="title mt-60 moveup-animation2">สร้างห้องใหม่</p>
            <input
              className="w-calc moveup-animation2"
              value={roomname}
              onChange={(e) => {
                setRoomname(e.target.value);
              }}
            />
            <div className="flex-row mb-53">
              <div
                className="textButton moveup-animation2"
                onClick={() => navigate(-1)}
              >
                กลับ
              </div>
              <button
                className="button moveup-animation2"
                onClick={() => setroom(roomname)}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        )}

        {state.value === "joinroom" && (
          <div className="flex-center w-90">
            <p className="title mt-60 moveup-animation2">เข้าร่วมแชท</p>
            <input
              className="w-calc moveup-animation2"
              placeholder="ชื่อห้อง"
              value={joinRoomname}
              onChange={(e) => {
                setJoinRoomname(e.target.value);
              }}
            />
            <div className="flex-row mb-53">
              <div
                className="textButton moveup-animation2"
                onClick={() => navigate(-1)}
              >
                กลับ
              </div>
              <button
                className="button moveup-animation2"
                onClick={() => checkRoom()}
              >
                เข้าร่วม
              </button>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
