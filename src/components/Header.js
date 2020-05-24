import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";

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
        <h2>Welcome to My Magic:The Gathering Shop</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <Button color="white" size="massive" circular icon="cart" />
            <a href="#">{props.basketProps.basketNumbers}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default connect(mapStateToProps, { getNumbers })(Header);
