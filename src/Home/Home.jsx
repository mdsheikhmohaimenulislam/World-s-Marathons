import React from "react";
import CarouselSection from "../Components/CarouselSection/CarouselSection";
import MarathonSection from "../Page/MarathonsSection/MarathonSection";
import TicketList from "../Components/TicketList/TicketList";
import CustomerBenefits from "../Components/TrainerSection/TrainerSection";
import TrainerSection from "../Components/TrainerSection/TrainerSection";
import UpcomingEvents from "../Components/UpcomingEvents /UpcomingEvents ";
import AnimatedContent from "../Animated/AnimatedContent ";

const Home = () => {
  return (
    <div>
      <CarouselSection />

      {/* AnimatedContent  */}

      <AnimatedContent
        distance={300}
        direction="horizontal"
        initialOpacity={0}
        duration={8}
      >
        <MarathonSection />
      </AnimatedContent>
      <AnimatedContent
        distance={300}
        direction="horizontal"
        initialOpacity={0}
        duration={11}
      >
        <UpcomingEvents />
      </AnimatedContent>

      <AnimatedContent
        distance={300}
        direction="horizontal"
        initialOpacity={0}
        duration={14}
      >
        <TrainerSection />
      </AnimatedContent>

      <AnimatedContent
        distance={300}
        direction="horizontal"
        initialOpacity={0}
        duration={16}
      >
        <TicketList />
      </AnimatedContent>
    </div>
  );
};

export default Home;
