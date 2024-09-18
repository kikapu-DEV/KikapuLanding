import { images } from "../../constants";
import { gallery } from "../../constants";
import { useEffect } from "react";
import AOS from "aos";

export const CheckApp = () => {
  useEffect(() => {
		AOS.init();
	}, []);

  return (
    <div className="checkAppContainer">
      <div className="everyoneBox">
        <div className="everyoneTitle secTitle">
          <span>Kikapu</span> for Everyone
        </div>

        <div className="imageGallery">
          {gallery.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image} alt={`type-${index + 1}`}/>
            </div>          
          ))}
        </div>
      </div>

      <div className="checkHead" id="checkApp">
        <div className="checkAppTitle secTitle">
          <span>Seamless</span> User Interaction
        </div>
        <p className="UI-desc">
          From smooth navigation to responsive design, we've crafted an experience where users can easily interact with the app without any friction.
        </p>
      </div>

      <section className="appFeature" data-aos='fade-up' data-aos-duration='1200'>
        <div className="featureShot">
          <img src={images.dashboard} alt="dashboard" />
        </div>

        <div className="f_description">
          <div className="f_desc_title">
            <span>
              <img src={images.dashSVG} alt="dashSVG" />
            </span>
            <span>Welcome !</span>
          </div>
          <div className="f_desc_par">
            Dive into a world of culinary delights by exploring an extensive selection of restaurants, cuisines, and menu items.
          </div>
        </div>
      </section>

      <section className="appFeature" data-aos='fade-up' data-aos-duration='1200'>
        <div className="featureShot">
          <img src={images.cart} alt="dashboard" />
        </div>
        <div className="f_description">
          <div className="f_desc_title">
            <span>
              <img src={images.cartSVG} alt="cartSVG" />
            </span>
            <span>Add to Kikapu</span>
          </div>
          <div className="f_desc_par">
            Easily add dishes to your cart with a simple click. This feature lets you build your meal selection and review it before ordering, ensuring you get everything you want.
          </div>
        </div>
      </section>

      <section className="appFeature" data-aos='fade-up' data-aos-duration='1200'>
        <div className="featureShot">
          <img src={images.orderDraft} alt="dashboard" />
        </div>

        <div className="f_description">
          <div className="f_desc_title">
            <span>
              <img src={images.draftSVG} alt="draftSVG" />
            </span>
            <span>Confirm your order</span>
          </div>
          <div className="f_desc_par">
            Finalize your meal with just a few taps. Review your selections, choose your payment method, and place your order quickly and securely.
          </div>
        </div>
      </section>

      <section className="appFeature" data-aos='fade-up' data-aos-duration='1200'>
        <div className="featureShot">
          <img src={images.history} alt="history" />
        </div>
        <div className="f_description">
          <div className="f_desc_title">
            <span>
              <img src={images.historySVG} alt="cartSVG" />
            </span>
            <span>View order history</span>
          </div>
          <div className="f_desc_par">
            Access a summary of all your past orders and payments. This feature helps you keep track of your dining history and manage any adjustments or reorders.
          </div>
        </div>
      </section>
    </div>
  );
};
