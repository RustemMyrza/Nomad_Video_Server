import { useEffect, useState, useRef } from "react";
import Ticket from "./Ticket.jsx";

function TicketsBlock({ branchId }) {
    // const [tickets, setTickets] = useState([]);
    const [highlightedIds, setHighlightedIds] = useState([]);
    const prevTicketsRef = useRef([]);
    const tickets = [
        {
          branchId: "3",
          ticketNum: "37",
          eventId: "ae62ffe5-a887-424f-a3d1-84dcf580a108",
          window: "1",
          operatorId: "3243"
        },
        {
          branchId: "3",
          ticketNum: "501",
          eventId: "e8466699-9108-420a-9111-ec3c04728065",
          window: "1",
          operatorId: "3243"
        },
        {
            branchId: "3",
            ticketNum: "503",
            eventId: "e8466699-9108-420a-9111-ec3c04728066",
            window: "4",
            operatorId: "3243"
          },
          {
            branchId: "3",
            ticketNum: "502",
            eventId: "e8466699-9108-420a-9111-ec3c04728067",
            window: "4",
            operatorId: "3243"
          },
          {
            branchId: "3",
            ticketNum: "504",
            eventId: "e8466699-9108-420a-9111-ec3c04728068",
            window: "4",
            operatorId: "3243"
          },
          {
            branchId: "3",
            ticketNum: "504",
            eventId: "e8466699-9108-420a-9111-ec3c04728069",
            window: "10",
            operatorId: "3243"
          },
          {
            branchId: "3",
            ticketNum: "505",
            eventId: "e8466699-9108-420a-9111-ec3c04728070",
            window: "4",
            operatorId: "3243"
          },
          {
            branchId: "3",
            ticketNum: "506",
            eventId: "e8466699-9108-420a-9111-ec3c04728071",
            window: "10",
            operatorId: "3243"
          },
      ];
      

    // useEffect(() => {
    //     const eventSource = new EventSource(`http://localhost:3001/api/get-video-server-data?branchId=${branchId}`);

    //     eventSource.onmessage = (event) => {
    //         try {
    //             const data = JSON.parse(event.data);
    //             console.log('data:', data);
    //             // Найдём новые тикеты (по ticketNum)
    //             const prevTicketNums = prevTicketsRef.current.map(t => t.ticketNum);
    //             const newTicketNums = data
    //                 .filter(t => !prevTicketNums.includes(t.ticketNum))
    //                 .map(t => t.ticketNum);

    //             setTickets(data);
    //             setHighlightedIds(newTicketNums);
    //             prevTicketsRef.current = data;

    //             // Убираем подсветку через 2 секунды
    //             setTimeout(() => {
    //                 setHighlightedIds([]);
    //             }, 2000);
    //         } catch (err) {
    //             console.error("Ошибка при парсинге SSE-сообщения:", err);
    //         }
    //     };

    //     eventSource.onerror = (err) => {
    //         console.error("Ошибка SSE:", err);
    //         eventSource.close();
    //     };

    //     return () => {
    //         eventSource.close();
    //     };
    // }, [branchId]);

    return (
        <div className="tickets-block bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto">
            <div className="head text-gray-800 mb-6">
                <h1 className="text-base sm:text-lg md:text-xl font-semibold text-center">Обслуживаются</h1>
            </div>
            <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-6 justify-items-center">
                {tickets.slice(-6).map((ticket) => (
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
