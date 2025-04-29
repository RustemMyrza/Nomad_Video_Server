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
                if (flashCount >= 6) { // 3 секунды (6 x 500ms)
                    clearInterval(interval);
                    setActive(false);
                }
            }, 500);
        }

        return () => clearInterval(interval);
    }, [highlight]);

    return (
        <div className="ticket">
            <div className={`text-black rounded-2xl px-8 py-5 shadow-lg w-fit flex items-center space-x-8 border-2 transition-all duration-300
                ${active ? "bg-green-400 border-green-500" : "bg-red-400 border-red-500"}`}>

                {/* Левая часть: Клиент */}
                <div className="text-center">
                    <div className="text-3xl font-extrabold leading-tight">{clientNumber}</div>
                    <div className="text-sm tracking-wide uppercase">Клиент</div>
                </div>

                {/* Стрелка */}
                <div className="text-4xl font-extrabold text-black">→</div>

                {/* Правая часть: Окно */}
                <div className="text-center">
                    <div className="text-3xl font-extrabold leading-tight">{windowNumber}</div>
                    <div className="text-sm tracking-wide uppercase">Окно</div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;
