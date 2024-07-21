import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="bg-ticket-charcoal w-full h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-white font-bold text-4xl">Precisando de ajuda?</h1>
                <Link to="/ticket">
                    <button className="bg-ticket-amber text-white text-1xl font-semibold px-6 py-4 rounded mt-4 shadow-sm">Abrir Ticket</button>
                </Link>
            </div>
        </div>
    )
}