
import React from 'react';

const stats = [
  {
    value: '+5K',
    label: 'clientes satisfaites',
  },
  {
    value: '+5',
    label: 'ans d’expertise en beauté et bien-être',
  },
  {
    value: '+15',
    label: 'Une équipe de 15 experts dédiés à votre mise en beauté',
  },
];

const StatsSection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 pt-5 rounded-xl shadow-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-semibold text-gray-800">{stat.value}</div>
            <p className="mt-2 text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
