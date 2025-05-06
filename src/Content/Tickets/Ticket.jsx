import { useEffect, useState } from "react";

function Ticket({ clientNumber = "100", windowNumber = "5", highlight = false }) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        let interval;
        if (highlight) {
            let flashCount = 0;
            interval = setInterval(() => {
                setActive(prev => !prev);
                flashCount++;
                if (flashCount >= 6) {
                    clearInterval(interval);
                    setActive(false);
                }
            }, 500);
        }

        return () => clearInterval(interval);
    }, [highlight]);

    return (
        <div className="ticket">
            <div className={`text-black rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-lg w-full max-w-[360px] flex items-center justify-between gap-6 border-2 transition-all duration-300
                ${active ? "bg-orange-400 border-orange-500" : "bg-red-400 border-red-500"}`}>

                <div className="text-center flex-1">
                    <div className="text-6xl sm:text-6xl md:text-7xl font-extrabold leading-tight">{clientNumber}</div>
                    <div className="text-lg sm:text-base font-bold tracking-wide uppercase">Клиент</div>
                </div>

                <div className="text-6xl sm:text-6xl md:text-7xl font-extrabold text-black">→</div>

                <div className="text-center flex-1">
                    <div className="text-6xl sm:text-6xl md:text-7xl font-extrabold leading-tight">{windowNumber}</div>
                    <div className="text-lg sm:text-base font-bold tracking-wide uppercase">Окно</div>
                </div>

            </div>
        </div>
    );
}


export default Ticket;
