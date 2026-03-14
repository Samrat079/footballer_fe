import {Link} from 'react-router-dom'
import Feature_cards_01 from './Feature_cards_01'
import tech_stack from './tech_stack.json'

const Home_page_01 = () => {

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="flex flex-col gap-8">

                    <div>
                        <p className="text-5xl font-bold tracking-tight">
                            Footballer DB
                        </p>
                        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                            A full-stack football statistics database built with
                            <span className="font-semibold"> React</span>,
                            <span className="font-semibold"> Spring Boot</span>, and
                            <span className="font-semibold"> MongoDB</span>.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            to="/list"
                            className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                        >
                            Launch App
                        </Link>

                        <button
                            onClick={() => document.getElementById("features")?.scrollIntoView()}
                            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
                        >Learn more
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section id="features" className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-3 gap-6">
                    <Feature_cards_01 title={"⚽ Player Database"}
                                      body={"Browse, search, and manage detailed footballer statistics including goals, assists, age, position, and nationality."}/>
                    <Feature_cards_01 title={"📊 Clean Stat UI"}
                                      body={"Designed with a modern stat-card layout inspired by sports dashboards. Optimized for clarity and fast data comparison."}/>
                    <Feature_cards_01 title={"🛠 Full Stack Build"}
                                      body={"REST API built with Spring Boot connected to MongoDB. Frontend powered by React with dynamic state management."}/>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="bg-white border-y border-gray-200 py-20">
                <div className="max-w-6xl mx-auto px-6">

                    <p className="text-3xl font-bold mb-10">
                        Tech Stack
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">

                        {tech_stack.map((tech) => (
                            <div
                                key={tech}
                                className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm text-center hover:bg-gray-100 transition-colors"
                            >
                                <p className="font-semibold text-gray-800">
                                    {tech}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-10">

                    <p className="text-3xl font-bold mb-6">
                        About This Project
                    </p>

                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Footballer DB is a personal full-stack project created to explore
                        scalable backend architecture with Spring Boot and MongoDB,
                        combined with modern React UI patterns.
                        <br/><br/>
                        The goal was to build a clean, performance-focused sports
                        statistics dashboard that feels lightweight while remaining
                        extensible.
                    </p>

                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-10 bg-gray-50 text-center text-sm text-gray-500">
                Built by Samrat • thesepharim3597@gmail.com
            </footer>

        </div>
    )
}

export default Home_page_01