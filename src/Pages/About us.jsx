import React from "react";
import Nav from "../components/nav/Nav";
import "./Aboutus.css";
import Footer from "../components/footer/Footer";

export const Aboutus = () => {
  return (
    <>
      <Nav />
      <div className="aboutf">
        <h1>Welcome to Herbalife</h1>
        <p>
          At Herbalife, we believe in a world where everyone can lead a
          healthier and happier life. Founded in 1980, our mission has always
          been to provide innovative nutritional products that help people
          achieve their health and wellness goals.
        </p>
      </div>
      <div className="aboutf">
        <h1>Our Mission</h1>
        <p>
          Our mission is to improve the nutritional habits of the world. We
          empower individuals to take control of their health through our
          scientifically formulated products and personalized support. We are
          committed to inspiring and educating our customers about the
          importance of nutrition and a balanced lifestyle.
        </p>
      </div>

      <div className="aboutf">
        <h1>What We Do</h1>
        <p>
          Herbalife offers a wide range of products designed to support a
          healthy lifestyle, including:
        </p>
      </div>
      <div className="abouts">
      <ul>
        <li>
          <h3>Nutrition:</h3>
          <p>
            From protein shakes and meal replacements to vitamins and dietary
            supplements, our products are designed to provide essential
            nutrients for optimal health.
          </p>
        </li>
        <li>
          <h3>Weight Management: </h3>
          <p>
            Our weight management solutions help individuals achieve their
            weight loss and fitness goals through balanced nutrition and
            support.
          </p>
        </li>
        <li>
          <h3>Sports Nutrition:</h3>
          <p>
            We provide specialized products for athletes and active individuals,
            ensuring they have the energy and nutrients needed to perform at
            their best.
          </p>
        </li>
        <li>
          <h3>Personal Care:</h3>
          <p>
            Our personal care line includes skincare and beauty products that
            promote healthy skin and overall well-being.
          </p>
        </li>
      </ul>
</div>
      <div className="aboutf">
        <h1>Our Community</h1>
        <p>
          At Herbalife, we believe in the power of community. We have a global
          network of independent distributors who are passionate about helping
          others achieve their health goals. Our community is built on support,
          motivation, and shared experiences, allowing individuals to connect
          and inspire one another on their wellness journeys.
        </p>
      </div>

      <div className="aboutf">
        <h1>Our Commitment to Quality</h1>
        <p>
          Quality is at the heart of everything we do. Our products are backed
          by scientific research and formulated with the highest-quality
          ingredients. We adhere to strict quality control standards to ensure
          that our customers receive safe and effective products.
        </p>
      </div>

      <div className="aboutf">
        <h1>Join Us on Our Journey</h1>
        <p>
          We invite you to join us on this journey towards a healthier
          lifestyle. Whether you are looking to improve your nutrition, lose
          weight, or simply feel better, Herbalife is here to support you every
          step of the way. Explore our range of products, connect with our
          community, and discover how we can help you achieve your health and
          wellness goals.
        </p>
      </div>

      <div className="aboutf">
        <h1>Contact Us</h1>
        <p>
          For more information about our products, business opportunities, or to
          connect with a local distributor, please visit our website or reach
          out to us directly. Together, we can create a healthier world!
        </p>
      </div>
      <hr />
      <Footer />
    </>
  );
};
