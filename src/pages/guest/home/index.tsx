import { useEffect, useState } from "react";
import { Section } from "../../../components/common/section";

export default function Home() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className={show ? "fade show" : "fade"}>
            <section className="hero">
                <p>PHILIPPINE NEWS</p>
                <h1>News that matters to Filipinos.</h1>
                <p>
                    Joel News.PH brings simple and meaningful stories
                    about the Philippines.
                </p>
            </section>

            <Section title="Latest News">
                <article className="news-card">
                    <p className="category">NATION</p>

                    <h2>
                        40 indigenous languages in PH are endangered.
                        What could be lost?
                    </h2>

                    <p>
                        Indigenous languages carry history, culture,
                        traditions, and knowledge.
                    </p>

                    <span>August 21, 2026</span>
                </article>
            </Section>
        </div>
    );
}