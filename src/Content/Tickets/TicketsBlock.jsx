import { useEffect, useState, useRef } from "react";
import Ticket from "./Ticket.jsx";
import { playAudioSequence, sequenceByLocalization } from "../../utils/voice-bot.js";

function TicketsBlock({ branchId }) {
    const [tickets, setTickets] = useState([]);
    const [highlightedIds, setHighlightedIds] = useState([]);
    const prevTicketsRef = useRef([]);
    const apiURL = import.meta.env.VITE_API_URL;
    const port = import.meta.env.VITE_API_PORT;
    const endpoint = import.meta.env.VITE_API_ENDPOINT;
    const param = import.meta.env.VITE_API_PARAM;
    
    useEffect(() => {
        const eventSource = new EventSource(`${apiURL}:${port}${endpoint}?${param}=${branchId}`);

        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                // Найдём новые тикеты (по ticketNum)
                const prevTicketNums = prevTicketsRef.current.map(t => t.ticketNum);
                const newTickets = data
                  .filter(t => !prevTicketNums.includes(t.ticketNum));
                
                const newTicketNums = newTickets
                  .map(t => t.ticketNum);
                if (newTicketNums.length > 0) {
                    (async () => {
                        for (const ticket of newTickets.slice(0, 6)) {
                            const sequence = sequenceByLocalization(ticket.local, ticket.ticketNum, ticket.window);
                            console.log(sequence);
                            await playAudioSequence(sequence);
                        }
                    })();
                }

  

                setTickets(data);
                setHighlightedIds(newTicketNums);
                prevTicketsRef.current = data;

                // Убираем подсветку через 2 секунды
                setTimeout(() => {
                    setHighlightedIds([]);
                }, 2000);
            } catch (err) {
                console.error("Ошибка при парсинге SSE-сообщения:", err);
            }
        };

        eventSource.onerror = (err) => {
            console.error("Ошибка SSE:", err);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, [branchId]);

    return (
        <div className="tickets-block bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto">
            <div className="head text-gray-800 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-6 justify-items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-20 gap-y-6 justify-items-center pl-10">
                    <span className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-tight">Клиент</span>
                    <span className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-tight">Окно</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-20 gap-y-6 justify-items-center pl-10">
                    <span className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-tight">Клиент</span>
                    <span className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-tight">Окно</span>
                </div>
            </div>
            <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-6 justify-items-center">
                {tickets.slice(0, 6).map((ticket) => (
                    <Ticket
                        key={ticket.ticketNum + ticket.window}
                        clientNumber={ticket.ticketNum}
                        windowNumber={ticket.window}
                        highlight={highlightedIds.includes(ticket.ticketNum)}
                    />
                ))}
            </div>
        </div>
    );
    
    
}

export default TicketsBlock;
