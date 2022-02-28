import React from "react";
import "./Home.css";
import hero from "../../bakeryhero.svg";
import bakery from "../../bakery2.jpg";
import library from "../../bookstore.jpg";
import order from "../../order.svg";
import { Link } from "react-router-dom";

const Home = (props) => {
  const isDesktop = props.isDesktop;

  return (
    <div>
      <div style={{ padding: "25px", textAlign: "center" }}>
        <h2 className={isDesktop ? "heroText" : "heroTextMobile"}>
          Where books and bakery meet
        </h2>

        <p>
          Sweet Reads is a haven of warm, fresh-baked goods and used books
          curated by our team for your enjoyment. Our full service bakery and
          bookstore offers a place to relax, study, socialize, and create in a
          warm and inviting environment. Come on down and choose your favorite
          sweet treat, grab a good read and get comfortable in our home away
          from home!
        </p>
      </div>

      <div
        className={isDesktop ? "summaryContainer" : "summaryContainerMobile"}
      >
        <div className={isDesktop ? "summaryChild" : "summaryChildMobile"}>
          <div>
            <img
              className="homePhotos"
              src={library}
              alt="A library filled with books"
            />
          </div>
          <div>
            <p>
              We believe the hunt is the most fun aspect of finding a new book
              to read! As a result, we do not offer our books inventory online.
              Our extensive collection of used books is only available on
              location. You never know what you may find!{" "}
            </p>
          </div>
        </div>

        <div className={isDesktop ? "summaryChild" : "summaryChildMobile"}>
          <div>
            <img
              className="homePhotos"
              src={bakery}
              alt="A bakery display filled with sweets"
            />
          </div>
          <div>
            <p>
              Our full-service bakery is the host of fresh pasteries, cakes, and
              donuts daily made in-house by our amazing team! We offer online
              and in-person orders for convenience!
            </p>
          </div>
        </div>
      </div>

      <div className={isDesktop ? "summaryChild" : "summaryChildMobile"}>
        <div>
          <img
            className="homePhotos"
            src={order}
            alt="A phone with a mobile ordering app"
          />
        </div>

        <div>
          <p>Place your order online and pick it up in person! </p>
        </div>

        <div>
          <Link to="/order">
            <button id="orderBtn" alt="Order now">
              Order now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Home };
