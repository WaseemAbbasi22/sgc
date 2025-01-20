import React from 'react';
import KSPAN from '../images/clients/kspan.jpg';
import INFRANETS from '../images/clients/infranets.png';
import ALPHA from '../images/clients/alpha.png';
import GLOBEX from '../images/clients/globalex.jpeg';
import PETROSAFE from '../images/clients/petro.png';
import ENGINEERINGCORNER from '../images/clients/ecno.jpeg';

const clientImage = {
    height: '80px',
    width: '150px',
    mixBlendMode: 'colorBurn'
};

const Clients = () => {
    const clients = [
        { id: 1, name: "K SPAN GENRAL CONTRACTING LLC", image: KSPAN },
        { id: 2, name: "INFRANETS ROAD CONTRACTING LLC", image: INFRANETS },
        { id: 3, name: "ALPHA LEON SECURITY SERVICES LLC", image: ALPHA },
        { id: 4, name: "GLOBEX FREIGHT LLC", image: GLOBEX }, 
        { id: 5, name: "PETROSAFE SPECIALIED PIPING LLC", image: PETROSAFE }, 
        { id: 6, name: "ENGINEERING CORNOR ELECTROMECHANIC", image: ENGINEERINGCORNER }, 
    ];

    return (
        <div id = "clients" className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-secondary uppercase font-bold">Our Clients</h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-secondary"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                    Trusted by our esteemed clients.
                    </h2>
                </div>

                <div className="p-2 mt-2" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-8">
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className="flex flex-col items-center text-center transition-all ease-in-out "
                            >
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    style={clientImage}
                                    className="mb-1 mt-4 object-contain"
                                />
                                <h3 className="mt-4  text-center text-sm lg:text-xl font-semibold text-blue-900">{client.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
