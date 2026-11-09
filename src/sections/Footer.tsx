import { useEffect, useState } from "react";
import "../styles/Footer.css";

export default function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
        const localTime = new Intl.DateTimeFormat("en-US", {
            timeZone: "Europe/Amsterdam",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }).format(new Date());

        setTime(localTime.toLowerCase());
        };

        updateTime();

        const interval = setInterval(updateTime, 60_000);

        return () => clearInterval(interval);
    }, []);

  return (
    <footer className="footer">
      <div className="footer__availability">
        <span className="footer__status-dot" />
        <span>Open for internships</span>
      </div>

      <div className="footer__location">
        Rotterdam, Netherlands
        {time && <span> · {time}</span>}
      </div>
    </footer>
  );
}