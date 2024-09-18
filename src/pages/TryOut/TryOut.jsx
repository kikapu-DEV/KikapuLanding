import { images } from "../../constants";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

export function TryOut() {
  useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

  return (
    // <section className="tryOut">
    //   <div className="tryOut_head">
    //     Give it a <span>shot</span>
    //   </div>

    //   <div className="tryDesc">
    //     Download the KIKAPU app today and discover the future of dining. Whether you're a seasoned foodie or simply looking for a convenient way to enjoy a meal out, KIKAPU has something for everyone.
    //   </div>

    //   <div className="getIt">
    //     <div data-aos='zoom-in'>
    //       <img src={images.playStore} alt="playStore" className="playStore" />

    //       <Link href="#" className="getBtn">
    //         <span>Download</span>
    //         <span>
    //           <img src={images.download} alt="download" />
    //         </span>
    //       </Link>
    //     </div>
        
    //     <div data-aos='zoom-in'>
    //       <img src={images.appStore} alt="appStore" />

    //       <Link href="#" className="getBtn">
    //         <span>Download</span>
    //         <span>
    //           <img src={images.download} alt="download" />
    //         </span>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <section className="downloadSect">
      <div className="downSectHead">
        Get the app
      </div>

      <div>
        
      </div>
    </section>
  )
}