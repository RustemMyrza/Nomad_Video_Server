import { useEffect, useState, useRef } from "react";
import Ticket from "./Ticket";

function TicketsBlock({ branchId }) {
    const [tickets, setTickets] = useState([]);
    const [highlightedIds, setHighlightedIds] = useState([]);
    const prevTicketsRef = useRef([]);

    useEffect(() => {
        const eventSource = new EventSource(`http://localhost:3001/api/get-video-server-data?branchId=${branchId}`);

        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                console.log('data:', data);
                // Найдём новые тикеты (по ticketNum)
                const prevTicketNums = prevTicketsRef.current.map(t => t.ticketNum);
                const newTicketNums = data
                    .filter(t => !prevTicketNums.includes(t.ticketNum))
                    .map(t => t.ticketNum);

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
        <div className="tickets-block bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="head text-gray-800 mb-6">
                <h1 className="text-base font-semibold text-center">Обслуживаются</h1>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-fit mx-auto">
                {tickets.map((ticket) => (
                    <Ticket
                        key={ticket.ticketNum}
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
