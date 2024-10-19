import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header id="header">
      <div>
        <img src={logo} alt="Invest Today" />
        <h1>
          <h1>Investment Calculator</h1>
        </h1>
      </div>
    </header>
  );
}
