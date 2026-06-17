import { useState } from "react";

import CheckoutHero from "../../components/Checkout/Chero";
import CustomerInfo from "../../components/Checkout/CustomerInfoForm";
import PaymentMethod from "../../components/Checkout/PaymentMethod";
import OrderSummary from "../../components/Checkout/OderSummmary/OrderSummary";

import { Container } from "../../components/common/Container";
import Input from "../../components/ui/Input/Input";
import { useTranslation } from "react-i18next";

import { useCart } from "../../hooks/useCart";

export default function Checkout() {
  const { cart, totalPrice } = useCart();
  const { t } = useTranslation();

  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "cash"
  >("cash");

  const [cardNumber, setCardNumber] =
    useState("");

  const [cardHolder, setCardHolder] =
    useState("");

  const [expiryDate, setExpiryDate] =
    useState("");

  const [cvv, setCvv] = useState("");

  return (
    <>
      <CheckoutHero />

      <Container className="py-12">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >

          {/* LEFT SIDE */}

          <div
            className="
              lg:col-span-2
              space-y-8
            "
          >

            <form
              id="checkout-form"
              className="space-y-8"
            >

              {/* CUSTOMER INFO */}

              <CustomerInfo />


              {/* SHIPPING ADDRESS */}

              <div
                className="
                  bg-white
                  rounded-3xl
                  border
                  border-secondary/10
                  shadow-sm
                  p-6
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:shadow-xl
                "
              >

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-primary
                    mb-6
                  "
                >
                  {t("checkout.shippingAddress")}
                </h2>


                <div className="space-y-4">

                  <Input
                    placeholderKey="checkout.streetAddressPlaceholder"
                  />


                  <div
                    className="
                      grid
                      grid-cols-1
                      md:grid-cols-2
                      gap-4
                    "
                  >

                    <Input
                      placeholderKey="checkout.cityPlaceholder"
                    />


                    <select
                      className="
                        w-full
                        px-4
                        py-2.5
                        bg-background
                        border
                        border-secondary/20
                        outline-none
                        transition-all
                        duration-200
                        text-primary
                        focus:border-accent
                        focus:ring-1
                        focus:ring-accent
                        rounded-md
                      "
                    >

                      <option value="">
                        {t("checkout.countryPlaceholder")}
                      </option>

                      <option>
                        United States
                      </option>

                      <option>
                        Syria
                      </option>

                      <option>
                        Turkey
                      </option>

                      <option>
                        Germany
                      </option>

                    </select>

                  </div>

                </div>

              </div>



              {/* PAYMENT */}

              <PaymentMethod
                paymentMethod={paymentMethod}
                setPaymentMethod={
                  setPaymentMethod
                }

                cardNumber={cardNumber}
                setCardNumber={
                  setCardNumber
                }

                cardHolder={cardHolder}
                setCardHolder={
                  setCardHolder
                }

                expiryDate={expiryDate}
                setExpiryDate={
                  setExpiryDate
                }

                cvv={cvv}
                setCvv={setCvv}
              />

            </form>

          </div>
          {/* RIGHT SIDE */}

          <OrderSummary
            items={cart}
            totalPrice={totalPrice()}
          />

        </div>

      </Container>

    </>
  );
}