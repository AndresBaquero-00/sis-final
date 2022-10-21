import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";

import { useTitle } from "../../../hooks";
import { Footer } from "../../../components";
import { ciudades } from "../../../data";
import { CustomerHeader } from "../components";


const imageTopSection = 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80';

export const CustomerHome = () => {
    useTitle('Pide comida a domicilio - CCD');
    return (
        <main className="customer-home">
            <CustomerHeader></CustomerHeader>

            <section className="customer-home__content">
                <div className="content__topSection">
                    <div
                        className="topSection__bg-image"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageTopSection})`
                        }}
                    ></div>
                    <div className="topSection__info">
                        <div className="topSection__info-content">
                            <h1 className="topSection__info-title">
                                ¡30 días de entregas gratis!
                            </h1>
                            <p className="topSection__info-text">
                                Para tus primeros pedidos en restaurantes.
                            </p>
                            <div className="topSection__info-action">
                                <Button
                                    className="button--global button--order-now"
                                    size="large"
                                >
                                    ¡Pide Ahora!
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content__cardsSection">
                    <Card className="custom-card">
                        <CardMedia
                            component="img"
                            alt="food"
                            height="200"
                            image="https://images.unsplash.com/photo-1553442996-4e6c3517ada3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        ></CardMedia>
                        <CardContent className="custom-card__content">
                            <h1 className="custom-card__title">
                                Elige lo que quieres
                            </h1>
                            <p className="custom-card__desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Libero voluptatum rerum, odit aspernatur tempore cupiditate tempora dignissimos labore debitis,
                            </p>
                        </CardContent>
                        <CardActions className="custom-card__actions">
                            <Button
                                className="button--global custom-card__action"
                                size="large"
                            >
                                Realizar pedido
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className="custom-card">
                        <CardMedia
                            component="img"
                            alt="restaurant"
                            height="200"
                            image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        ></CardMedia>
                        <CardContent className="custom-card__content">
                            <h1 className="custom-card__title">
                                Registra tu restaurante
                            </h1>
                            <p className="custom-card__desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Libero voluptatum rerum, odit aspernatur tempore cupiditate tempora dignissimos labore debitis,
                            </p>
                        </CardContent>
                        <CardActions className="custom-card__actions">
                            <Button
                                className="button--global custom-card__action"
                                size="large"
                                href="/merchant"
                            >
                                Conocer más
                            </Button>
                        </CardActions>
                    </Card>

                    <Card className="custom-card">
                        <CardMedia
                            component="img"
                            alt="delivery"
                            height="200"
                            image="https://images.unsplash.com/photo-1595116971898-300194333127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        ></CardMedia>
                        <CardContent className="custom-card__content">
                            <h1 className="custom-card__title">
                                Únete como repartidor
                            </h1>
                            <p className="custom-card__desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Libero voluptatum rerum, odit aspernatur tempore cupiditate tempora dignissimos labore debitis,
                            </p>
                        </CardContent>
                        <CardActions className="custom-card__actions">
                            <Button
                                className="button--global custom-card__action"
                                size="large"
                            >
                                Regístrate ahora
                            </Button>
                        </CardActions>
                    </Card>
                </div>

                <div className="content__citiesSection">
                    <p className="citiesSection__title">Ciudades con CCD</p>
                    <div className="citiesSection__cities">
                        {
                            ciudades.map((city, index) => (
                                <p
                                    className="citiesSection__cities-name"
                                    key={index}
                                >
                                    {city}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </main>
    )
}
