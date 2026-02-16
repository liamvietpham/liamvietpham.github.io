type StatInfoCardProps = {
    count: string;
    label: string;
};

function StatInfoCard({ count, label }: StatInfoCardProps) {
    return (
        <div className="flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#fcf4ec] to-[#fff] rounded-[14px] p-5">
            <p className="text-4xl md:text-5xl font-medium text-secondary">{count}</p>
            <p className="text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line">
                {label}
            </p>
        </div>
    );
}

export default StatInfoCard;
