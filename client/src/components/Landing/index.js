import { Link } from 'react-router-dom';
import './style.css';

function Landing() {
  return (
    <section id="landing">
      <div id="background"></div>
      <div class="title">
        <h1>Music & More</h1>
        <h2>a music store</h2>
      </div>
      <div class="link-flex">
        <div class="shop-link">
          <p>Enter our store</p>
          <Link to="/shop">
            <i class="far fa-arrow-alt-circle-down fa-3x"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Landing;