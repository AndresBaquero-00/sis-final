import { Card, CardContent, CardMedia } from "@mui/material"

type Props = {
    title: string;
    desc: string;
    image: string
}

export const MerchantCardInfo = ({ title, desc, image }: Props) => {
    return (
        <Card className="custom-card">
            <CardMedia
                component="img"
                alt=""
                height="250"
                image={image}
            ></CardMedia>
            <CardContent className="custom-card__content">
                <h1 className="custom-card__title">
                    {title}
                </h1>
                <p className="custom-card__desc">
                    {desc}
                </p>
            </CardContent>
        </Card>
    )
}
