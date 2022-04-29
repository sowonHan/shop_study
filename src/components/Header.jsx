import React from "react";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="title">Awesome Prototype in shop</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam saepe
          illum iste esse molestiae, minus veniam assumenda sapiente quos
          impedit ullam nobis distinctio explicabo labore voluptates alias
          architecto adipisci sit!
        </div>
        <div className="btn__area">
          <a href="http://www.protopie.io" target="_blank" rel="noreferrer">
            <button>Try Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
