
import React from 'react';
import { Hash, Circle, RotateCw, Triangle } from 'lucide-react';

type MetricCardProps = {
  title: string;
  value: string;
  iconType: 'chassis' | 'palette' | 'torque' | 'angle';
  unit?: string;
  className?: string;
};

const MetricCard: React.FC<MetricCardProps> = ({ title, value, iconType, unit, className }) => {
  const getIcon = () => {
    switch (iconType) {
      case 'chassis':
        return <Hash className="h-5 w-5" />;
      case 'palette':
        return <Circle className="h-5 w-5" />;
      case 'torque':
        return <RotateCw className="h-5 w-5" />;
      case 'angle':
        return <Triangle className="h-5 w-5" />;
      default:
        return <Hash className="h-5 w-5" />;
    }
  };

  return (
    <div className={`nokia-card ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="nokia-icon">
          {getIcon()}
        </div>
        <div className="nokia-metric-label">{title}</div>
      </div>
      <div className="nokia-metric-value">{value}</div>
      {unit && <div className="nokia-metric-unit">{unit}</div>}
    </div>
  );
};

export default MetricCard;
