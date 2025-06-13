import React from 'react';
import CarouselSection from '../Components/CarouselSection/CarouselSection';
import MarathonSection from '../Page/MarathonsSection/MarathonSection';
import TicketList from '../Components/TicketList/TicketList';


const Home = () => {
    return (
        <div>
            <CarouselSection/>
            <MarathonSection/>
            <TicketList/>
        </div>
    );
};

export default Home;