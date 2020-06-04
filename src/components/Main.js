import React from "react";
import ArcboundRavager from "../assets/ppro-2019-arcbound-ravager.jpg";
import HuatliWP from "../assets/xln-224-huatli-warrior-poet.jpg";
import NimbleOb from "../assets/hou-40-nimble-obstructionist.jpg";
import JadelightRanger from "../assets/rix-136-jadelight-ranger.jpg";
import ExperimentalFrenzy from "../assets/grn-99-experimental-frenzy.jpg";
import { Card, Icon, Image, Button } from "semantic-ui-react";
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
              5.62 EUR
            </Card.Description>
          </Card.Content>
          <Card.Content className="mainCart" textAlign="center" extra>
            <Button
              color="blue"
              size="big"
              onClick={() => props.addBasket("ArcboundRavager")}
            >
              <Icon name="cart" />
              Add to Cart
            </Button>
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
            <Button
              color="blue"
              size="big"
              onClick={() => props.addBasket("HuatliWP")}
            >
              <Icon name="cart" />
              Add to Cart
            </Button>
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
            <Button
              color="blue"
              size="big"
              onClick={() => props.addBasket("NimbleOb")}
            >
              <Icon name="cart" />
              Add to Cart
            </Button>
          </Card.Content>
        </Card>
        <Card centered>
          <Image src={JadelightRanger} wrapped ui={false} />
          <Card.Content>
            <Card.Header textAlign="center">Jadelight Ranger foil</Card.Header>
            <Card.Description className="mainPrice" textAlign="center">
              {" "}
              3.61 EUR
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <Button
              color="blue"
              size="big"
              onClick={() => props.addBasket("JadelightRanger")}
            >
              <Icon name="cart" />
              Add to Cart
            </Button>
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
              3.01 EUR
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <Button
              color="blue"
              size="big"
              onClick={() => props.addBasket("ExperimentalFrenzy")}
            >
              <Icon name="cart" />
              Add to Cart
            </Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};
export default connect(null, { addBasket })(Main);
