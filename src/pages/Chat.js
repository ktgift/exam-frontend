import MainLayout from "../components/MainLayout";

export default function Chat() {
  const roomname = localStorage.getItem("room");
  const name = localStorage.getItem("name");
  return (
    <MainLayout>
      <div className="p-12px-22px">
        <div className="title moveUpfadeChat-animation">ห้อง {roomname}</div>
        <div className="channelChat slidefade-animation">
          <small style={{ color: "#797979" }}>คุณ eiei</small>
          <div className="boxMessage">สวัสดี</div>
          <input className="inputButtom" />
          <div className="textInput">Enter เพื่อส่ง</div>
        </div>
      </div>
    </MainLayout>
  );
}
