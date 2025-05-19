import React from "react";
import "./Home.css";
import { Card } from "react-bootstrap";
const Home = () => {
  return (
    <div id="home">
      <h3>Dive into Delicious — Where Every Bite Fills Your Awesome Tummy!”</h3>
      <p
        className="text-center mb-5"
        style={{ maxWidth: "700px", margin: "0 auto", color: "#555" }}
      >
        Explore a wide variety of mouth-watering recipes curated to satisfy
        every craving. From hearty meals to quick snacks, there's something here
        for everyone. Add your favorites to your cart or wishlist, and start
        cooking today!
      </p>
      <div className="cards">
        <Card style={{ width: "18rem" }} className="homecard">
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/id/1137312508/photo/assortment-of-products-with-high-sugar-level.webp?a=1&b=1&s=612x612&w=0&k=20&c=XOFA1_Ffx-0xDTg35DoLPJfU49uWPZUCf8rNChdPOgs="
          />
          <Card.Body>
            <Card.Title>Candies</Card.Title>
            <Card.Text>
              Assortment of products with high sugar level like candies, gummy
              candies, soda, donuts, chocolate.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="homecard">
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Card.Body>
            <Card.Title>Non-veg Platter</Card.Title>
            <Card.Text>
              Juicy kebabs, roasted
              potatoes, mushrooms, and charred bell peppers are paired with a
              variety of rich sauces. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem"  }} className="homecard">
          <Card.Img
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anVpY2VzfGVufDB8fDB8fHww"
          />
          <Card.Body>
            <Card.Title>Juices</Card.Title>
            <Card.Text>
              Orange juice is a refreshing, vitamin C-rich beverage made by
              extracting juice from fresh oranges. 
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <p style={{textAlign:"center",backgroundColor:"bisque",fontSize:"1.5rem"}}>Developed by @Shruthi</p>
    </div>
  );
};

export default Home;
