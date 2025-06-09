import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import SingleMarathonDetails from './SingleMarathonDetails';

const MarathonDetails = () => {
    const {id} = useParams();
    const [marathon , setMarathon] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(!id) return;
        
        const fetchMarathon = async () => {
        try{
            const res = await fetch(`http://localhost:5000/marathon/${id}`);
            
            if(!res.ok){
             navigate("/not-found");
          return;
            }
            const data = await res.json();
            setMarathon(data)
                document.title = "MarathonDetails Details";
        }
        catch(error){
            console.error("Error fetching marathon:", error);
           navigate("/not-found");
            
        }finally{
            setLoading(false)
        }

        };
        
        fetchMarathon();
    }, [id,navigate])

    console.log(marathon);

      if (loading)
    return <span className="loading ml-100 loading-ring loading-xl"></span>;

    return (
        <div>
            {
                marathon && <SingleMarathonDetails marathon={marathon} />
            }
        </div>
    );
};

export default MarathonDetails;