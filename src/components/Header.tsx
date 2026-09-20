import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Dev Insights</div>
      <nav className="header__nav">
        <a href="#new-post" className="header__link">
          New Post
        </a>
      </nav>
    </header>
  )
}

export default Header
