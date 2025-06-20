'use client';
import React, { useEffect, useState } from 'react';
import { Plant } from '@/generated/prisma';

const MyPlants = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('/api/plants', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data: Plant[] = await response.json();
        setPlants(data);
      } catch (err) {
        console.error('Error fetching plants:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">My Garden</h1>
        {plants.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            No plants in your garden yet. Start adding plants now!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{plant.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{plant.description}</p>
                <p className="text-sm text-gray-700 mb-1">Age: {plant.age}</p>
                <p className="text-sm text-gray-700">Price: {plant.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlants;
