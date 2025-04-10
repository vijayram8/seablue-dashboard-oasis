
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const AngleChart = () => {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  
  useEffect(() => {
    // Generate some random data that resembles the angle chart in the image
    const generateAngleData = () => {
      const points = 12;
      const newData = [];
      
      for (let i = 0; i < points; i++) {
        let value;
        if (i < points / 3) {
          // Starting relatively flat
          value = 30 + Math.random() * 10;
        } else if (i < (2 * points) / 3) {
          // Sharp rise
          const progress = (i - points / 3) / (points / 3);
          value = 35 + progress * 25 + Math.random() * 5;
        } else {
          // Plateau at higher level
          value = 60 + Math.random() * 5;
        }
        
        newData.push({
          name: `ID${i + 1}`,
          value: Math.round(value)
        });
      }
      
      return newData;
    };
    
    setData(generateAngleData());
  }, []);
  
  return (
    <div className="nokia-card h-64">
      <div className="flex justify-between items-start">
        <div className="nokia-metric-label mb-4">Angle</div>
        <div className="flex flex-col items-center">
          <div className="nokia-circle w-24 h-24 bg-transparent border-2 border-nokia-light-blue animate-pulse-blue flex items-center justify-center">
            <span className="text-xl">Optimal</span>
          </div>
          <p className="text-center text-sm mt-2 text-white/80 max-w-[150px]">
            Torque and angles are within designated limits
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="60%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#8884d8" 
            strokeWidth={2} 
            dot={false} 
            isAnimationActive={true}
          />
          <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.5)" tick={{ fill: "rgba(255, 255, 255, 0.7)" }} />
          <YAxis domain={[0, 70]} stroke="rgba(255, 255, 255, 0.5)" tick={{ fill: "rgba(255, 255, 255, 0.7)" }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(4, 100, 165, 0.9)', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: 'white'
            }}
            labelStyle={{ color: 'rgba(255, 255, 255, 0.7)' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-center text-white/70 text-sm">ID</div>
    </div>
  );
};

export default AngleChart;
