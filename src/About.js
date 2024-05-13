import "./About.css"
import logo from "./img/supreme-food-products.png"
export default function About(){
    return<section class="about-frame">
    <div class="about-container">
      <div class="about-content">
        <h2>About Supreme Food Products</h2>
        <p>Welcome to Supreme Food Products, your trusted provider of premium sago products. With a commitment to quality and customer satisfaction, we take pride in delivering the finest sago varieties to our clients in Tamil Nadu and Maharashtra.</p>
        <h3>Our Mission</h3>
        <p>At Supreme Food Products, our mission is to provide superior quality sago products that are not only delicious but also nutritious. With a focus on purity and freshness, we ensure that each product meets the highest standards of excellence.</p>
        <h3>Our Varieties</h3>
        <p>Supreme Food Products specializes in offering three distinct varieties of sago, meticulously crafted to meet the diverse needs and preferences of our customers. Whether you prefer traditional sago, flavored sago, or specialty sago blends, we have something to suit every palate.</p>
        <p>Whether you're a retailer, distributor, or consumer, we strive to exceed your expectations and deliver an unmatched sago experience.</p>
        <a href="#contact" class="btn btn-primary contact-btn">Contact Us</a>
      </div>
      <div class="about-image">
        
        <img src={logo} alt="Supreme Food Products Logo"/>
      </div>
    </div>
  </section>
  
   
}