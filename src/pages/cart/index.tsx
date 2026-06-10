import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";

import CartHer from "../../components/cart/CartHero";
import CartItem from "../../components/cart/CartItem/CartItem";
import CartSummary from "../../components/cart/CartSummary/CartSummary";

import { Container } from "../../components/common/Container";
import Button from "../../components/ui/Button/Button";

import { useCart } from "../../hooks/useCart";

export default function Cart() {
  const { t } = useTranslation();

  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <>
      <CartHer />

      <Container className="py-12">
        {cart.length === 0 ? (
          <div
            className="
              bg-white
              rounded-3xl
              border
              border-secondary/10
              shadow-sm
              p-12
              text-center
              transition-all
              duration-300
              hover:border-accent
              hover:shadow-xl
            "
          >
            <div className="flex justify-center mb-6">
              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-accent/10
                  flex
                  items-center
                  justify-center
                "
              >
                <ShoppingCart
                  size={36}
                  className="text-accent"
                />
              </div>
            </div>

            <h2
              className="
                text-3xl
                font-bold
                text-primary
              "
            >
              {t("cartPage.emptyTitle")}
            </h2>

            <p
              className="
                text-secondary
                mt-4
                mb-8
              "
            >
              {t("cartPage.emptyDescription")}
            </p>

            <Link to="/Products">
              <Button>
                {t("cartPage.continueShopping")}
              </Button>
            </Link>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-8
            "
          >
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    )
                  }
                  onDecrease={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                  onRemove={() =>
                    removeFromCart(item.id)
                  }
                />
              ))}

              <Link
                to="/Products"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-accent
                  font-medium
                  transition-all
                  duration-300
                  hover:translate-x-1
                "
              >
                ← {t("cartPage.continueShopping")}
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <CartSummary
              totalItems={totalItems()}
              totalPrice={totalPrice()}
            />
          </div>
        )}
      </Container>
    </>
  );
}