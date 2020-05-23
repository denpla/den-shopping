import React from "react";
import { Button } from "semantic-ui-react";

function Header() {
  return (
    <header>
      <nav>
        <h2>Welcome to My Magic:The Gathering Shop</h2>
        <ul>
          <li>Home</li>
          <li>About{/* <a href="#">About</a> */}</li>
          <li>Help{/* <a href="#">Help</a> */}</li>
          <li>
            <Button color="white" size="massive" circular icon="cart" />
            {/* <a href="#">Cart</a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
