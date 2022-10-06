
type Props = {
    title: string;
    desc: string;
    image: string;
}

export const MerchantSwiperContent = ({ title, desc, image }: Props) => {
    return (
        <div className="infoSection__slideContent">
            <div className="slideContent__info">
                <h1 className="slideContent__info-title">
                    {title}
                </h1>
                <p className="slideContent__info-desc">
                    {desc}
                </p>
            </div>
            <div className="slideContent__image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
