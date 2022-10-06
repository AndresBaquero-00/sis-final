import { Apple, Google } from "@mui/icons-material";
import { Button } from "@mui/material";

import { Separator } from "../../../components";

type Props = {
    title: string;
    bannerImage: string;
    children: JSX.Element | JSX.Element[];
    bannerInfo: JSX.Element | JSX.Element[];
}

export const MerchantAuth = ({ title, bannerImage, bannerInfo, children }: Props) => {
    return (
        <div className="merchant-auth">
            <section className="merchant-auth__content">
                <div className="content__banner">
                    <div
                        className="content__banner-image"
                        style={{
                            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.65), rgba(10, 10, 10, 0.65)), url('${bannerImage}')`
                        }}
                    ></div>
                    <div className="content__banner-info">
                        {bannerInfo}
                    </div>
                </div>
                <div className="content__body">
                    <div className="content__body-form">
                        <h2 className="form__title">
                            {title}
                        </h2>
                        <div className="form__auth-with">
                            <Button className="button--google" startIcon={<Google />}>
                                Continuar con Google
                            </Button>
                            <Button className="button--apple" startIcon={<Apple />}>
                                Continuar con Apple
                            </Button>
                        </div>
                        <Separator />
                        <div className="form__content">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
