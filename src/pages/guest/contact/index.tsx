import { Section } from "../../../components/common/section";
import "../../../styles/style.css";

export default function Contact() {
    return (
        <Section title="Contact">
            <p>
                Have a story, suggestion, or feedback?
            </p>

            <div className="contact-card">
                <h3>Joel News.PH</h3>
                <p>Email: joelnewsph@example.com</p>
                <p>Philippines</p>
            </div>
        </Section>
    );
}