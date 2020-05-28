import React from "react";
import ArcboundRavager from "../assets/ppro-2019-arcbound-ravager.jpg";
import HuatliWP from "../assets/xln-224-huatli-warrior-poet.jpg";
import NimbleOb from "../assets/hou-40-nimble-obstructionist.jpg";
import JadelightRanger from "../assets/rix-136-jadelight-ranger.jpg";
import ExperimentalFrenzy from "../assets/grn-99-experimental-frenzy.jpg";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const Main = (props) => {
  return (
    <div className="mainCard">
      <Card.Group>
        <Card centered>
          <Image src={ArcboundRavager} wrapped ui={false} />
          <Card.Content>
            <Card.Header textAlign="center">Arcbound Ravager foil</Card.Header>
            <Card.Description className="mainPrice" textAlign="center">
              5.60 EUR
            </Card.Description>
          </Card.Content>
          <Card.Content className="mainCart" textAlign="center" extra>
            <a onClick={() => props.addBasket("ArcboundRavager")} href="#">
              <Icon name="cart" />
              Add to Cart
            </a>
          </Card.Content>
        </Card>

        <Card centered>
          <Image src={HuatliWP} wrapped ui={false} />
          <Card.Content>
            <Card.Header textAlign="center">
              Huatli, Warrior Poet foil
            </Card.Header>
            <Card.Description className="mainPrice" textAlign="center">
              {" "}
              3.95 EUR
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <a onClick={() => props.addBasket("HuatliWP")} href="#">
              <Icon name="cart" />
              Add to Cart
            </a>
          </Card.Content>
        </Card>

        <Card centered>
          <Image src={NimbleOb} wrapped ui={false} />
          <Card.Content>
            <Card.Header textAlign="center">
              Nimble Obstructionist foil
            </Card.Header>
            <Card.Description className="mainPrice" textAlign="center">
              {" "}
              4.07 EUR
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <a onClick={() => props.addBasket("NimbleOb")} href="#">
              <Icon name="cart" />
              Add to Cart
            </a>
          </Card.Content>
        </Card>
        <Card centered>
          <Image src={JadelightRanger} wrapped ui={false} />
          <Card.Content>
            <Card.Header textAlign="center">Jadelight Ranger foil</Card.Header>
            <Card.Description className="mainPrice" textAlign="center">
              {" "}
              3.60 EUR
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <a onClick={() => props.addBasket("JadelightRanger")} href="#">
              <Icon name="cart" />
              Add to Cart
            </a>
          </Card.Content>
        </Card>
        <Card centered>
          <Image src={ExperimentalFrenzy} wrapped ui={false} />
          <Card.Content>
            <Card.Header textAlign="center">
              Experimental Frenzy foil
            </Card.Header>
            <Card.Description className="mainPrice" textAlign="center">
              {" "}
              3.00 EUR
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <a onClick={() => props.addBasket("ExperimentalFrenzy")} href="#">
              <Icon name="cart" />
              Add to Cart
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};
export default connect(null, { addBasket })(Main);
