import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Countdown Timer</title>
      </Head>

      <main>
        <h1 className="text-center">Countdown Timer</h1>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Days</h5>
                <p className="display-4" id="days"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hours</h5>
                <p className="display-4" id="hours"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Minutes</h5>
                <p className="display-4" id="minutes"></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Seconds</h5>
                <p className="display-4" id="seconds"></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <script>
        const targetDate = new Date("January 17, 2025 00:00:00").getTime();
        const countdownFunction = setInterval(function() {
          const now = new Date().getTime();
          const distance = targetDate - now;

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          document.getElementById("days").innerText = days;
          document.getElementById("hours").innerText = hours;
          document.getElementById("minutes").innerText = minutes;
          document.getElementById("seconds").innerText = seconds;

          if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("days").innerText = "0";
            document.getElementById("hours").innerText = "0";
            document.getElementById("minutes").innerText = "0";
            document.getElementById("seconds").innerText = "0";
          }
        }, 1000);
      </script>
    </div>
  );
}
