function Ticket ({ clientNumber = "100", windowNumber = "5" }) {
    return (
        <div className="ticket">
            <div className="bg-green-400 text-black rounded-2xl px-8 py-5 shadow-lg border-2 border-green-500 w-fit flex items-center space-x-8">
      
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
    )
}

export default Ticket