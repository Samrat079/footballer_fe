import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";

const About_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className='
                    px-4
                    py-2
                    text-left
                    w-full
                    hover:bg-gray-400
                    hover:text-white
                    transition-all
                    duration-200
                '
            >
                About
            </button>
            <ReactSlidingPane
                title="About"
                width="36vw"
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                className='bg-gray-50!'

            >
                <div className="space-y-6 text-sm leading-relaxed">

                    <div>
                        <p className="text-2xl font-bold">
                            Player Database
                        </p>
                        <p className="mt-2">
                            A full-stack web application built with
                            <span className="font-medium text-black"> Spring Boot </span>
                            (backend) and
                            <span className="font-medium text-black"> React + TypeScript </span>
                            (frontend).
                            The project demonstrates RESTful API development, clean layered architecture,
                            and full CRUD functionality within a modern responsive UI.
                        </p>
                    </div>
                    <hr />

                    <div>
                        <p className="text-lg font-bold ">Backend</p>
                        <p className="mt-2">
                            Developed using Spring Boot with a structured
                            Controller → Service → Repository architecture.
                            It exposes REST APIs, handles business logic, and
                            integrates with a database using JPA/Hibernate.
                        </p>
                        <br />
                        <a
                            href="https://github.com/Samrat079/footballers_spring_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                    inline-block
                                    p-4
                                    border border-gray-200
                                    rounded-xl
                                    shadow-sm
                                    hover:bg-gray-500
                                    hover:text-white
                                    hover:shadow-lg
                                    hover:-translate-y-1
                                    transition-all
                                    duration-200
                                "
                        >
                            View Backend Repository
                        </a>

                    </div>
                    <hr />

                    <div>
                        <p className="text-lg font-bold ">Frontend</p>
                        <p className="mt-2">
                            Built with React and TypeScript using functional components
                            and hooks. The frontend consumes backend APIs to manage
                            footballer records and provides a clean, user-friendly interface.
                        </p>
                        <br />
                        <a
                            href="https://github.com/Samrat079/footballer_fe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                    inline-block
                                    p-4
                                    border border-gray-200
                                    rounded-xl
                                    shadow-sm
                                    hover:bg-gray-500
                                    hover:text-white
                                    hover:shadow-lg
                                    hover:-translate-y-1
                                    transition-all
                                    duration-200
                                "
                        >
                            View Frontend Repository
                        </a>

                    </div>
                    <hr />


                    <div>
                        <p className="text-lg font-bold ">Key Features</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Full CRUD operations</li>
                            <li>RESTful API integration</li>
                            <li>Spring Boot + JPA backend</li>
                            <li>React + TypeScript frontend</li>
                            <li>Component-based UI architecture</li>
                        </ul>
                    </div>
                    <hr />


                    <div>
                        <p className="text-lg font-bold ">Purpose</p>
                        <p className="mt-2">
                            This project showcases full-stack development skills,
                            backend API design, frontend integration, and clean architectural
                            practices using modern Java and JavaScript technologies.
                        </p>
                    </div>
                    <hr />


                </div>
            </ReactSlidingPane>
        </div>
    )
}

export default About_pane_01