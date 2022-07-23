import React, { useEffect, useState } from 'react';
import UserRow from './UserRow/UserRow';

const Dashboard = () => {
    const [peoples, setPeoples] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/AnikKDev/evolv-fit-dashboard/main/public/peopleData.json')
            .then(res => res.json())
            .then(data => setPeoples(data))
    }, [])
    return (
        <div className="grid grid-cols-1 gap-y-8 align-center justify-items-center">


            {
                peoples.map(people => <UserRow key={people._id} people={people} />)
            }
        </div>
    );
};

export default Dashboard;