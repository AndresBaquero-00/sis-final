import { Apple, ArrowBack, Google } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

import { Separator } from "../../../components";

type Props = {
    title: string;
    bannerTitle: string;
    bannerImage: string;
    notAction: JSX.Element;
    children: JSX.Element | JSX.Element[];
}

export const CustomerAuth = ({ title, bannerTitle, bannerImage, notAction, children }: Props) => {

    return (
        <main className="customer-auth">
            <section className="customer-auth__banner">
                <IconButton
                    size="large"
                    className="button--back"
                    href="/customer"
                >
                    <ArrowBack />
                </IconButton>
                <h1 className="banner__title">
                    {bannerTitle}
                </h1>
                <img className="banner__image" src={bannerImage} alt="Banner" />
            </section>
            <section className="customer-auth__content">
                <div className="content__container">
                    <h1 className="content__title">
                        {title}
                    </h1>
                    <div className="content__form">
                        {children}
                    </div>
                    <Separator />
                    <div className="content__auth-with">
                        <Button className="button--google" startIcon={<Google />}>
                            Continuar con Google
                        </Button>
                        <Button className="button--apple" startIcon={<Apple />}>
                            Continuar con Apple
                        </Button>
                    </div>
                    <div className="content__notAction">
                        {notAction}
                    </div>
                </div>
            </section>
        </main>
    )
}
