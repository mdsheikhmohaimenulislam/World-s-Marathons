import React from 'react';
import CarouselSection from '../Components/CarouselSection/CarouselSection';
import MarathonSection from '../Page/MarathonsSection/MarathonSection';
import TicketList from '../Components/TicketList/TicketList';
import CustomerBenefits from '../Components/TrainerSection/TrainerSection';
import TrainerSection from '../Components/TrainerSection/TrainerSection';
import UpcomingEvents from '../Components/UpcomingEvents /UpcomingEvents ';


const Home = () => {
    return (
        <div>
            <CarouselSection/>
            <MarathonSection/>
            <UpcomingEvents/>
            <TrainerSection/>
            <TicketList/>
        </div>
    );
};

export default Home;