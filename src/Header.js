import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <p>Supreme foods Products</p>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/login">Login/Signup</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
