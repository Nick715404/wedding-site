'use client';
import React from 'react';
import { useCountdown } from './useCounter';

interface CountdownProps { targetDate: string, };

export const Countdown = ({ targetDate }: CountdownProps) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className='flex items-center gap-[10px] md:gap-[6px]'>

      <div className="counter-item">
        <div className="counter-number">{days}</div>
        <span className='counter-text'>Дней</span>
      </div>

      <span className='quote'>;</span>

      <div className="counter-item">
        <div className="counter-number">{hours}</div>
        <span className='counter-text'>часов</span>
      </div>

      <span className='quote'>;</span>

      <div className="counter-item">
        <div className="counter-number">{minutes}</div>
        <span className='counter-text'>минут</span>
      </div>

      <span className='quote'>;</span>

      <div className="counter-item">
        <div className="counter-number">{seconds}</div>
        <span className='counter-text'>секунд</span>
      </div>

    </div>
  );
};

