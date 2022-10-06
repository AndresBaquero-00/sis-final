import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Footer } from "../../../components";
import { MerchantCardInfo, MerchantHeader, MerchantSwiperContent } from "../components";
import { merchantBanner } from "../../../assets/images";

export const MerchantHome = () => {
    const [optionsModal, setOptionsModal] = useState({
        open: false,
        element: {} as JSX.Element
    });

    return (
        <main className="merchant-home">
            <MerchantHeader action={console.log}></MerchantHeader>

            <section className="merchant-home__content">
                <div className="content__topSection">
                    <div
                        className="topSection__bg-image"
                        style={{
                            backgroundImage: `url(${merchantBanner})`
                        }}
                    ></div>
                    <div className="topSection__info">
                        <div className="topSection__info-content">
                            <h1
                                className="topSection__info-title"
                            >
                                More ways to grow your business
                            </h1>
                            <p className="topSection__info-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam animi illo unde deleniti magni, explicabo vel quas corrupti vitae, sunt eos obcaecati cupiditate.
                            </p>
                            <div className="topSection__info-action">
                                <Button
                                    className="button--round button--begin"
                                    onClick={console.log}
                                >
                                    Comenzar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content__infoSection" id="beneficios">
                    <h1 className="infoSection__title">Beneficios de nuestros aliados</h1>
                    <Swiper navigation={true} modules={[Navigation]} className="infoSection__swiper">
                        <SwiperSlide>
                            <MerchantSwiperContent
                                title="Grow online with CCD"
                                desc="On Marketplace, use Delivery, Pickup, and DashPass to unlock the active DoorDash customer base. With Storefront, get direct, commission-free orders though your site, social media, and Google Search & Maps."
                                image="https://images.ctfassets.net/trvmqu12jq2l/5oHBo9eYKzoiNevYVXshZD/7b5774e666c20b74c323a04953befef9/Grow_Online_3x.png?q=70&w=1366&fm=webp"
                            ></MerchantSwiperContent>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MerchantSwiperContent
                                title="Attract new customers"
                                desc="Sponsored Listings give you prime real estate in the DoorDash app so you get noticed by new customers. Promotions let you offer discounts or free items to encourage customers to place orders, and Storefront promotions use similar incentives to get customers to place commission-free orders directly on your website. Brand Licensing lets you add a revenue stream by selling an established, well-known brand out of your restaurant’s kitchen."
                                image="https://images.ctfassets.net/trvmqu12jq2l/5gENaTFU5OuYdkLn5WiTMR/b83fda428e9504b5bd038aeb712b05eb/AttractNewCustomers-ForUS_3x.png?q=70&w=1366&fm=webp"
                            ></MerchantSwiperContent>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MerchantSwiperContent
                                title="Increase order volume & size"
                                desc="Increase order volume and size (and, as a result, profits) with Promotions that provide customers with discounts or free items only when they reach a specific minimum order size. If you already offer beer, wine, liquor, or cocktails in-store, add alcohol to your DoorDash menu to help increase ticket sizes and reach customers looking to order both food and alcohol."
                                image="https://images.ctfassets.net/trvmqu12jq2l/4wusFn6U1CNBxXumWIVuSk/2161b5c4b6ca65adfb10c281cce84f82/Increase_order_volume___size_3x.png?q=70&w=1366&fm=webp"
                            ></MerchantSwiperContent>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="content__funcionamosSection" id="funcionamos">
                    <h1 className="funcionamosSection__title">¿Cómo funcionamos?</h1>
                    <div className="funcionamosSection__cards">
                        <MerchantCardInfo
                            title="Customers order"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum rerum, odit aspernatur tempore cupiditate tempora dignissimos labore debitis."
                            image="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_360,h_240/v1622579235/assets/3c/3f70e6-bd04-495f-84d8-f7288ad01cb7/original/CustomersOrder.svg"
                        ></MerchantCardInfo>

                        <MerchantCardInfo
                            title="You prepare"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum rerum, odit aspernatur tempore cupiditate tempora dignissimos labore debitis."
                            image="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_360,h_240/v1622579254/assets/f8/3a023b-d455-4aab-97a0-12bc3026cebf/original/YouPrepare.svg"
                        ></MerchantCardInfo>

                        <MerchantCardInfo
                            title="Delivery partners arrive"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum rerum, odit aspernatur tempore cupiditate tempora dignissimos labore debitis."
                            image="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_360,h_240/v1622579274/assets/61/94ae40-5638-4fb7-88d2-94178d4d3eba/original/DeliveryPeopleArrive.svg"
                        ></MerchantCardInfo>
                    </div>
                </div>

                <div className="content__contactoSection" id="contacto">
                    <div
                        className="contactoSection__image"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)'
                        }}
                    ></div>
                    <div className="contactoSection__info">
                        <div className="info__merchant-sales">
                            <h1 className="info__title">Merchant Sales</h1>
                            <p className="info__text">
                                If you'd like to speak to a merchant sales representative,
                                you can contact us online or call us Monday-Friday:
                            </p>
                            <ul className="info__numbers">
                                <li>
                                    <strong>Linea Nacional:</strong> 855-554-5779
                                </li>
                                <li>
                                    <strong>Bogotá:</strong> 321-123-4567
                                </li>
                            </ul>
                        </div>

                        <div className="info__contact-sales">
                            <h1 className="info__title">Contact Sales</h1>
                            <p className="info__text">
                                Deja aquí los datos de tu compañía y te llamaremos en los próximos minutos.
                            </p>
                            <div className="info__form">
                                <TextField fullWidth label="Nombre del Restaurante" variant="outlined" />
                                <TextField fullWidth label="Dirección del Restaurante" variant="outlined" />
                                <div className="form__paralelo">
                                    <TextField fullWidth label="Correo" variant="outlined" />
                                    <TextField fullWidth label="Número de Teléfono" variant="outlined" />
                                </div>
                                <Button size="large" variant="contained" className="button--global button--contact">
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>

            {/* <Modal
                open={optionsModal.open}
                onClose={() => setOptionsModal({ ...optionsModal, open: false })}
                classes={{
                    root: 'merchant-home__modal'
                }}
            >
                <div
                    style={{
                        width: '90%',
                        height: '90%',
                        maxHeight: 800
                    }}
                >
                    <Fade in={optionsModal.open}>
                        <div
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            {optionsModal.element}
                        </div>
                    </Fade>
                </div>
            </Modal> */}
        </main>
    )
}
