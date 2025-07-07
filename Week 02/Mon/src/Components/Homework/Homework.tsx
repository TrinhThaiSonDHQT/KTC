import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

type CurrentWeather = {
  temperature: number;
  condition: {
    text: string;
    icon: string;
  };
  humidity: number;
  wind: number;
};

const location = 'Paris';

const Homework = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [forecastWeather, setForecastWeather] = useState<any[]>([]);

  function compareTimeStrings(timeStr1: string, timeStr2: string) {
    const parseTime = (time: string) => {
      const parts = time.split(':').map(Number);
      return parts[0] * 3600 + parts[1] * 60 + (parts[2] || 0); // Convert to seconds
    };

    const seconds1 = parseTime(timeStr1);
    const seconds2 = parseTime(timeStr2);

    if (seconds1 < seconds2) {
      // console.log(`${timeStr1} is earlier than ${timeStr2}`);
      return 1;
    } else if (seconds1 > seconds2) {
      // console.log(`${timeStr1} is later than ${timeStr2}`);
      return -1;
    } else {
      // console.log(`${timeStr1} and ${timeStr2} are the same`);
      return 0;
    }
  }

  useEffect(() => {
    const getCurrentWeather = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=c9a0ca46550648b29ce125849232709&q=${location}&aqi=no&lang=vi`
      );
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setCurrentWeather((prev) => ({
        ...prev,
        temperature: data.current.temp_c,
        condition: {
          text: data.current.condition.text,
          icon: data.current.condition.icon,
        },
        humidity: data.current.humidity,
        wind: data.current.windchill_c,
      }));
    };

    getCurrentWeather();
  }, []);

  useEffect(() => {
    const getForeCastWeather = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=${location}&days=5&aqi=no&alerts=no&lang=vi`
      );
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      const myForecastWeather: any[] = [];
      myForecastWeather.push({
        temperature: data.current.temp_c,
        time: data.current.last_updated.split(' ')[1],
        icon: data.current.condition.icon,
      });
      data.forecast.forecastday.map((day: { hour: any[] }) => {
        day.hour.map((item) => {
          const time = item.time.split(' ')[1];
          if (compareTimeStrings(myForecastWeather[0].time, time) === 1) {
            myForecastWeather.push({
              temperature: item.temp_c,
              time: time,
              icon: item.condition.icon,
            });
          }
        });
      });
      setForecastWeather(myForecastWeather.slice(0, 4));
    };

    getForeCastWeather();
  }, []);

  // console.log(forecastWeather);

  return (
    <section className="homework">
      <h1 className="text-3xl font-bold uppercase text-center mb-3">
        Home work
      </h1>

      <div className="w-[350px] h-screen mx-auto p-6 flex flex-col gap-6 bg-linear-to-b from-[#7FAED1] to-[#CCDCE7] rounded-2xl">
        {/* Search bar */}
        <div className="flex items-center gap-2 rounded-3xl p-2 bg-[#D6E4ED]">
          <CiSearch size={20} />
          <input
            type="text"
            placeholder={location}
            className="flex-1 outline-0 text-xl"
          />
        </div>

        {/* Current temperature */}
        <div className="text-white font-semibold">
          <div className="flex items-center justify-between">
            <span className="text-7xl">{currentWeather?.temperature}°</span>
            <img
              src={currentWeather?.condition.icon}
              alt="icon"
              className="w-[90px] h-[90px] mr-[10px]"
            />
          </div>
          <span className="text-lg">{currentWeather?.condition.text}</span>
        </div>

        {/* Current humidity and wind */}
        <div className="curernt-humi-wind bg-[#C5DBEA] flex items-center justify-between p-6 rounded-3xl">
          <div className="flex flex-col items-center text-xl">
            <span className="text-gray-400">Humidity</span>
            <span className="text-2xl font-semibold">
              {currentWeather?.humidity} %
            </span>
          </div>
          <div className="w-[2px] h-full bg-gray-400"></div>
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Wind</span>
            <span className="text-2xl font-semibold">
              {currentWeather?.wind} km/h
            </span>
          </div>
        </div>

        {/* Forecast weather */}
        <div className="forecast-weather p-5 rounded-3xl bg-white">
          <p className="text-xl text-gray-600 font-semibold">Now</p>

          <div className="flex items-center justify-between">
            {forecastWeather.length > 0 &&
              forecastWeather.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <img src={item.icon} />
                    <span className="text-2xl font-semibold">
                      {item.temperature}°
                    </span>
                    <span className="text-lg text-gray-500 font-medium">
                      {index !== 0 ? item.time : 'Now'}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homework;
