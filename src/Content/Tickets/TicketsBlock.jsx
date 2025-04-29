import Ticket from "./Ticket"

function TicketsBlock () {
    const tickets = Array.from({ length: 10 });

    return (
        <div className="tickets-block bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="head text-gray-800 mb-6">
                <h1 className="text-base font-semibold text-center">Обслуживаются</h1>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-fit mx-auto">
                {tickets.map((_, index) => (
                    <Ticket key={index} />
                ))}
            </div>
        </div>
    )
}

export default TicketsBlock