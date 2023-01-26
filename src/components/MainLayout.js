import logo from "../assets/images/logo.png";

export default function MainLayout({ children }) {
  return (
    <div className="app background">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">{children}</div>
    </div>
  );
}
