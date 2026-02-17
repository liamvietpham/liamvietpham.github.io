type ContactInfoCardProps = {
    icon: React.ReactNode;
    text: string;
    href?: string;
};

function ContactInfoCard({ icon, text, href }: ContactInfoCardProps) {
    return (
        <div className="flex items-center gap-5 bg-orange-50 rounded border border-orange-100 px-4 py-3 mb-5">
            <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-full">
                {icon}
            </div>

            {href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B3526] text-xs md:text-sm"
                >
                    {text}
                </a>
            ) : (
                <p className="text-[#6B3526] text-xs md:text-sm">{text}</p>
            )}
        </div>
    );
}

export default ContactInfoCard;
