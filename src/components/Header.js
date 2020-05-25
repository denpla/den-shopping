import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
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
              <Button color="white" size="massive" circular icon="cart" />
              <span>{props.basketProps.basketNumbers}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default connect(mapStateToProps, { getNumbers })(Header);
