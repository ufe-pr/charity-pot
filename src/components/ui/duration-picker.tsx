import React, { useState } from "react";
// import "./DurationPicker.css";
import { cn } from "@/lib/utils";

const InputStyle = "h-full w-14 text-center block bg-transparent focus-visible:outline-none px-3 [&::-webkit-inner-spin-button]:[-webkit-appearance:none] [&::-webkit-outer-spin-button]:[-webkit-appearance:none] [-moz-appearance:textfield]";

export interface IDuration {
  hours: number;
  minutes: number;
  seconds: number;
}

export class Duration implements IDuration {
  hours: number;
  minutes: number;
  seconds: number;

  constructor({
    hours,
    minutes,
    seconds,
  }: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  }) {
    this.hours = hours || 0;
    this.minutes = minutes || 0;
    this.seconds = seconds || 0;
  }

  toSeconds(): number {
    return this.hours * 3600 + this.minutes * 60 + this.seconds;
  }
}

interface DurationPickerProps {
  onChange: (duration: Duration) => void;
}

const DurationPicker: React.FC<DurationPickerProps> = ({ onChange }) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
    setHours(value);
    onChange(new Duration({ hours: value, minutes, seconds }));
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value, 10) || 0));
    setMinutes(value);
    onChange(new Duration({ hours, minutes: value, seconds }));
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value, 10) || 0));
    setSeconds(value);
    onChange(new Duration({ hours, minutes, seconds: value }));
  };

  return (
    <div
      className={cn(
        "flex items-end w-fit",
        "flex h-9 rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors focus-within:outline-none focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      )}
    >
      <input
        type="number"
        value={hours.toString()}
        onChange={handleHoursChange}
        min="0"
        className={cn(InputStyle)}
      />
      <input
        type="number"
        value={minutes.toString()}
        onChange={handleMinutesChange}
        min="0"
        max="59"
        className={cn(InputStyle, "border-x border-input")}
      />
      <input
        type="number"
        value={seconds.toString()}
        onChange={handleSecondsChange}
        min="0"
        max="59"
        className={cn(InputStyle)}
      />
    </div>
  );
};

export default DurationPicker;
