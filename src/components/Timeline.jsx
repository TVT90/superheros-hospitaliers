import React, { useState } from 'react';

const Timeline = () => {
  const [activeTime, setActiveTime] = useState(null);

  const timelineEvents = [
    {
      time: '6h00',
      title: 'Super Pouvoir de Transmission',
      description: 'Passage des informations cruciales entre équipes, comme un flambeau de responsabilité',
      imageSrc: '../assets/images/timeline-6h.png',
      color: 'bg-orange-50'
    },
    {
      time: '8h00',
      title: 'Super Pouvoir de Diagnostic',
      description: 'Écoute attentive et soins bienveillants aux plus jeunes patients',
      imageSrc: '../assets/images/timeline-8h.png',
      color: 'bg-blue-50'
    },
    {
      time: '12h00',
      title: 'Super Pouvoir de Coordination',
      description: 'Synergie des forces de l\'équipe soignante pour des soins optimaux',
      imageSrc: '../assets/images/timeline-12h.png',
      color: 'bg-yellow-50'
    },
    {
      time: '15h00',
      title: 'Super Pouvoir d\'Intervention',
      description: 'Expertise et précision au service des patients',
      imageSrc: '../assets/images/timeline-15h.png',
      color: 'bg-green-50'
    },
    {
      time: '18h00',
      title: 'Super Pouvoir de Réflexion',
      description: 'Moment de pause et de contemplation pour recharger ses super-pouvoirs',
      imageSrc: '../assets/images/timeline-18h.png',
      color: 'bg-purple-50'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-900">
        24h dans la vie d'un Super-héros hospitalier
      </h1>

      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div
            key={event.time}
            className={`transform transition-all duration-500 ${
              activeTime === event.time ? 'scale-102' : ''
            }`}
            onMouseEnter={() => setActiveTime(event.time)}
            onMouseLeave={() => setActiveTime(null)}
          >
            <div className={`rounded-xl overflow-hidden ${event.color} p-6 shadow-lg hover:shadow-xl transition-shadow`}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={event.imageSrc}
                      alt={`${event.title} - ${event.time}`}
                      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                  <div className="text-3xl font-bold text-blue-900">
                    {event.time}
                  </div>
                  <h2 className="text-2xl font-semibold text-blue-800">
                    {event.title}
                  </h2>
                  <p className="text-gray-700 text-lg">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>

            {index < timelineEvents.length - 1 && (
              <div className="h-12 w-1 bg-blue-200 mx-auto my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
