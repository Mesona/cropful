import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.fancifyNavBar = this.fancifyNavBar.bind(this);
  }

  fancifyNavBar() {
    let docEl = document.documentElement;
    let logo = document.getElementById('nav-bar');

    var sTop = window.pageYOffset  - (docEl.clientTop || 0);
    logo.style.background =  sTop > 100 ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)" ;
    logo.style.background =  sTop < 100 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)" ;
  }

  render () {

    // This calls fancifyNavBar to give the nav bar the darker
    // background after some navigation
    const win = window;
    win.onscroll = () => {
      this.fancifyNavBar();
    };

    const { currentUser, logout, openModal } = this.props;
    const display = currentUser ? (

      <div className="login-logout-options">
        <span>Hello, { currentUser.username }</span>
        &nbsp;&nbsp;
        <button onClick={ logout }>Sign Out</button>
      </div>

    ) : (

      <div className="login-logout-options">
        <button onClick={() => openModal('login')}>Login</button>
        &nbsp;&nbsp;
        <button onClick={() => openModal('signup')}>Sign Up</button>
        &nbsp;&nbsp;
      </div>

    );

    return (
      <section className="nav-sticky">
        <section id="nav-bar">

          <div className="logo">
            <p>Cropful</p>
          </div>

          <div className="nav-display">
            { display }
          </div>

        </section>
      </section>
    );

  }
};

export default NavBar;