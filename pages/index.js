import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-01-17T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Countdown to January 17!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center mt-5">
        <Header title="Countdown to January 17!" />

        <div className="row justify-content-center mt-4">
          <div className="col-sm-3">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{timeLeft.days}</h5>
                <p className="card-text">Days</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{timeLeft.hours}</h5>
                <p className="card-text">Hours</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{timeLeft.minutes}</h5>
                <p className="card-text">Minutes</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{timeLeft.seconds}</h5>
                <p className="card-text">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
