
import CarouselSection from "../Components/CarouselSection/CarouselSection";
import MarathonSection from "../Page/MarathonsSection/MarathonSection";
import TicketList from "../Components/TicketList/TicketList";
// import CustomerBenefits from "../Components/TrainerSection/TrainerSection";
import TrainerSection from "../Components/TrainerSection/TrainerSection";
import UpcomingEvents from "../Components/UpcomingEvents /UpcomingEvents ";
// import AnimatedContent from "../Animated/AnimatedContent ";
import LatestBlog from "../Components/LatestBlog/LatestBlog";
import HeroSection from "../Components/HeroSection/HeroSection";
import PromoBanner from "../Components/PromoBanner/PromoBanner";


const Home = () => {




  return (
<div className="overflow-y-hidden">
  <CarouselSection  />

  {/* <AnimatedContent initialOpacity={0} distance={100} duration={1.5} ease="easeOut"> */}
    <MarathonSection />

    <PromoBanner/>
  {/* </AnimatedContent> */}

  {/* <AnimatedContent distance={100} direction="horizontal" initialOpacity={0} duration={1.8}> */}
    <UpcomingEvents />
  {/* </AnimatedContent> */}

  {/* <AnimatedContent distance={100} direction="horizontal" initialOpacity={0} duration={2}> */}
    <TrainerSection />

    <HeroSection/>
  {/* </AnimatedContent> */}
<LatestBlog/>
  {/* <AnimatedContent distance={100} direction="horizontal" initialOpacity={0} duration={2.2}> */}
    <TicketList />
  {/* </AnimatedContent> */}
</div>
  );
};

export default Home;
  {/* <AnimatedContent distance={100} direction="horizontal" initialOpacity={0} duration={2.2}> */}

  {/* </AnimatedContent> */}