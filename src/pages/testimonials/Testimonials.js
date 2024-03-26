import React, { useEffect } from "react";
import AOS from "aos";

const Testimonials = () => {
  const testimonials = [
    {
      title:
        "If you do the job badly enough, sometimes you don't get asked to do it again.",
      t2: "Wisteria Ravenclaw",
      t3: "Google Inc.",
    },
    {
      title:
        "I'm killing time while I wait for life to shower me with meaning and happiness.",
      t2: "Wisteria Ravenclaw",
      t3: "Google Inc.",
    },
    {
      title:
        "The only skills I have the patience to learn are those that have no real application in life.",
      t2: "Wisteria Ravenclaw",
      t3: "Google Inc.",
    },
    ];
     useEffect(() => {
       AOS.init({ duration: 2000 });
     }, []);
  return (
    <div className="TContainer">
      <h2 style={{ textAlign: "center", padding: "70px 0" }}>testimonials</h2>
      <div className="testimonialsContainer">
        {testimonials.map((item, index) => (
          <figure className="snip1533" data-aos="flip-left" key={index}>
            <figcaption >
              <blockquote>
                <p>{item.title}</p>
              </blockquote>
              <h3>{item.t2}</h3>
              <h4>{item.t3}</h4>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
