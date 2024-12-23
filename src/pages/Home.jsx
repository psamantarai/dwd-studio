import HighlightText from "../components/HighlightText";
import CTAButton from "../components/CTAButton";
import HeroImage from "../assets/hero-1.jpg";


const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Heading */}
        <div className="mt-16 text-center text-4xl font-semibold">
          <HighlightText text={"Discover the Rhythm: "} />
          Join our Vibrant Dance Community Today
        </div>

        {/* Sub heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          At our Dance studio, we celebrate movement and creativity, offering a
          diverse range of classes for all ages and skill levels. Join us to
          unleash your passion for dance and connect with a community that
          inspires.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Hero Image*/}
        
        <div className="mx-3 my-7">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
