
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const TorqueChart = () => {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);
  
  useEffect(() => {
    // Generate some random data that resembles the wave pattern in the image
    const generateWaveData = () => {
      const points = 12;
      const newData = [];
      
      for (let i = 0; i < points; i++) {
        const baseValue = 1700 + Math.sin(i * 0.5) * 200;
        const noise = Math.random() * 50 - 25;
        
        newData.push({
          name: `ID${i + 1}`,
          value: Math.round(baseValue + noise)
        });
      }
      
      return newData;
    };
    
    setData(generateWaveData());
    
    // Update data periodically to simulate real-time data
    const interval = setInterval(() => {
      setData(currentData => {
        const newData = [...currentData];
        // Update last value and shift
        const lastValue = newData[newData.length - 1].value;
        const change = Math.random() * 100 - 50;
        const newValue = Math.max(1500, Math.min(1900, lastValue + change));
        
        newData.shift();
        newData.push({
          name: `ID${new Date().getSeconds()}`,
          value: Math.round(newValue)
        });
        
        return newData;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="nokia-card h-64">
      <div className="nokia-metric-label mb-4">Torque</div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#33C3F0" 
            strokeWidth={2} 
            dot={false} 
            isAnimationActive={true}
          />
          <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.5)" tick={{ fill: "rgba(255, 255, 255, 0.7)" }} />
          <YAxis domain={[1500, 1900]} stroke="rgba(255, 255, 255, 0.5)" tick={{ fill: "rgba(255, 255, 255, 0.7)" }} />
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

export default TorqueChart;
