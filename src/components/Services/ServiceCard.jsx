import Image from 'next/image'

const ServiceCard = ({ title, shortDescription, icon: Icon }) => {
    return (
        <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5 transition-all duration-300 hover:shadow-xl">
            <div className="my-1 size-14 relative flex items-center justify-center">
                {typeof Icon === 'function' ? (
                    <Icon className="size-full text-accent" />
                ) : (
                    <Image src={Icon} alt={title} fill className="object-contain" />
                )}
            </div>
            <h5 className="text-accent mt-2 mb-5 text-center text-base font-semibold">{title}</h5>
            <div className="bg-primary rounded-2xl p-4">
                <p className="text-primary-content text-center text-sm font-normal leading-relaxed">{shortDescription}</p>
            </div>
        </div>
    )
}

export default ServiceCard
