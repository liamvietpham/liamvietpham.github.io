import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";
import ContactForm from "../components/ContactForm";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

function ContactMe() {
    return (
        <section id="contact">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title">{ABOUT_ME.contactTitle}</h4>

                    <p className="text-sm text-center mt-4 leading-6">
                        {ABOUT_ME.contactIntro}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
                    <div>
                        <ContactInfoCard
                            icon={<IoMdMail />}
                            text={ABOUT_ME.email}
                        />
                        <ContactInfoCard
                            icon={<IoPhonePortraitOutline />}
                            text={ABOUT_ME.phone}
                        />
                        <ContactInfoCard
                            icon={<MdOutlineWeb />}
                            text={ABOUT_ME.website}
                            href={ABOUT_ME.website}
                        />
                    </div>

                    <div className="">
                        <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
                            Contact Form
                        </h5>
                        <ContactForm recipientEmail={ABOUT_ME.email} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
