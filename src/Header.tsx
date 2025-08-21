import logo from "./assets/logo.png";

export default function Header() {
  return (
    <header className="header flex flex-col items-center">
      <img src={logo} alt="" className="header__logo" />
      <p className="header__logo-text">Link Shorter</p>
    </header>
  );
}
