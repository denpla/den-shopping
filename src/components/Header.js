import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

function Header(props) {
  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <header>
      <nav>
        <h2>Magic: The Gathering card shop</h2>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li className="mainCart">
            <Link to="/cart">
              <button className="ui white circular massive labeled icon button">
                <i className="cart icon"></i> {props.basketProps.basketNumbers}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default connect(mapStateToProps, { getNumbers })(Header);
