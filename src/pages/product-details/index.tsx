import { useMemo, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container } from "../../components/common/Container";
import products from "../../components/common/data";
import ProductGrid from "../../components/common/ProductGrid/ProductGrid";
import Rating from "../../components/common/Rating/Rating";
import Badge from "../../components/ui/Badge/Badge";

import {
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  ShieldCheck,
  RotateCcw,
  MessageSquareMore,
  CircleCheckBig,
} from "lucide-react";

function ProductDetails() {
  const { t } = useTranslation();

  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo(
    () =>
      products.find(
        (item) => item.id === Number(id)
      ),
    [id]
  );

  const [quantity, setQuantity] =
    useState(1);

  const [activeTab, setActiveTab] =
    useState("description");

  const [selectedImage, setSelectedImage] =
    useState(
      product?.image || ""
    );

  const reviews = [
    {
      name: "Sarah",
      comment: t("details.review1"),
    },

    {
      name: "John",
      comment: t("details.review2"),
    },
  ];

  if (!product) {
    return (
      <Container>

        <div
          className="
          py-20
          text-center
          text-3xl
          font-bold
          "
        >
          {t("details.productNotFound")}
        </div>

      </Container>
    );
  }

  const relatedProducts =
    products
      .filter(
        (item) =>
          item.category ===
            product.category &&
          item.id !== product.id
      )
      .slice(0, 4);

  return (

    <div
      className="
      bg-background
      min-h-screen
      py-10
      "
    >

      <Container>

        {/* BREADCRUMB */}

        <p
          className="
          text-secondary
          text-sm
          mb-8
          "
        >

          {t("breadcrumb.home")} /
          {t("breadcrumb.product")} /
          {product.title}

        </p>

        {/* TOP */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-12
          "
        >

          {/* LEFT */}

          <div>

            <div
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-md
              "
            >

              <img
                src={selectedImage}
                alt={product.title}
                className="
                w-full
                h-[450px]
                object-cover
                hover:scale-105
                transition-all
                duration-500
                "
              />

            </div>

            <div
              className="
              flex
              gap-4
              mt-5
              "
            >

              {product.images.map(
                (image) => (

                  <button
                    key={image}
                    onClick={() =>
                      setSelectedImage(
                        image
                      )
                    }
                    className={`
                    w-24
                    h-24
                    rounded-2xl
                    overflow-hidden
                    border-2
                    transition-all

                    ${
                      selectedImage ===
                      image
                        ? "border-accent scale-105"
                        : "border-transparent hover:border-accent"
                    }
                    `}
                  >

                    <img
                      src={image}
                      className="
                      w-full
                      h-full
                      object-cover
                      "
                    />

                  </button>

                )
              )}

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
              flex
              gap-3
              mb-5
              "
            >

              <Badge
                labelKey="badges.instock"
                variant="inStock"
              />

              <Badge
                labelKey="badges.new"
                variant="new"
              />

            </div>

            <h1
              className="
              text-4xl
              font-bold
              text-primary
              mb-4
              "
            >

              {product.title}

            </h1>

            <Rating
              rating={
                product.rating
              }
            />

            <p
              className="
              text-4xl
              text-accent
              font-bold
              mt-6
              "
            >

              ${product.price}

            </p>

            <div
              className="
              h-px
              bg-secondary/20
              my-6
              "
            />

            <p
              className="
              text-secondary
              text-lg
              leading-9
              "
            >

              {t(product.description)}

            </p>

            {/* QUANTITY */}

            <div
              className="
              flex
              items-center
              gap-5
              mt-8
              "
            >

              <span>

                {t("details.quantity")}

              </span>

              <div
                className="
                border
                rounded-2xl
                overflow-hidden
                flex
                "
              >

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(
                      quantity - 1
                    )
                  }
                  className="
                  w-12
                  h-12
                  hover:bg-accent
                  hover:text-white
                  transition-all
                  "
                >
                  -
                </button>

                <div
                  className="
                  w-12
                  flex
                  items-center
                  justify-center
                  "
                >

                  {quantity}

                </div>

                <button
                  onClick={() =>
                    setQuantity(
                      quantity + 1
                    )
                  }
                  className="
                  w-12
                  h-12
                  hover:bg-accent
                  hover:text-white
                  transition-all
                  "
                >
                  +
                </button>

              </div>

            </div>

            {/* BUTTONS */}

            <div
              className="
              flex
              gap-3
              mt-8
              "
            >

              <button
              onClick={() =>
    navigate("/cart")
  }
                className="
                flex-1
                h-14
                bg-accent
                rounded-2xl
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                hover:scale-[1.02]
                hover:shadow-xl
                transition-all
                "
              >

                <ShoppingCart />

                {t("details.addToCart")}

              </button>

              <button
                className="
                w-14
                border
                rounded-2xl
                flex
                items-center
                justify-center
                hover:border-accent
                hover:text-accent
                transition-all
                "
              >
                <Heart />
              </button>

              <button
                className="
                w-14
                border
                rounded-2xl
                flex
                items-center
                justify-center
                hover:border-accent
                hover:text-accent
                transition-all
                "
              >
                <Share2 />
              </button>

            </div>

            {/* FEATURES */}

            <div
              className="
              bg-white
              rounded-3xl
              p-6
              mt-8
              shadow-sm
              space-y-5
              "
            >

              <div className="flex gap-3">
                <Truck />
                {t("details.freeShipping")}
              </div>

              <div className="flex gap-3">
                <ShieldCheck />
                {t("details.warranty")}
              </div>

              <div className="flex gap-3">
                <RotateCcw />
                {t("details.returns")}
              </div>

            </div>

          </div>

        </div>

        {/* TABS */}

        <div className="mt-20">

          <div
            className="
            flex
            gap-10
            border-b
            "
          >

            {[
              "description",
              "specs",
              "reviews",
            ].map((tab) => (

              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab)
                }
                className={`
                pb-4

                ${
                  activeTab === tab
                    ? "border-b-2 border-accent text-accent"
                    : "text-secondary"
                }
                `}
              >

                {t(`details.${tab}`)}

              </button>

            ))}

          </div>

          <div
            className="
            bg-white
            p-8
            rounded-3xl
            mt-6
            "
          >

            {activeTab ===
              "description" && (
              <p>
                {t(product.description)}
              </p>
            )}

            {activeTab ===
              "specs" && (

              <div
                className="
                space-y-4
                "
              >

                {product.specs.map(
                  (spec) => (

                    <div
                      key={spec}
                      className="
                      flex
                      gap-3
                      "
                    >

                      <CircleCheckBig
                        size={18}
                      />

                      {spec}

                    </div>

                  )
                )}

              </div>

            )}

            {activeTab ===
              "reviews" && (

              <div
                className="
                space-y-6
                "
              >

                {reviews.map(
                  (review) => (

                    <div
                      key={
                        review.name
                      }
                    >

                      <div
                        className="
                        flex
                        gap-2
                        font-semibold
                        mb-2
                        "
                      >

                        <MessageSquareMore
                          size={18}
                        />

                        {review.name}

                      </div>

                      <p>

                        {
                          review.comment
                        }

                      </p>

                    </div>

                  )
                )}

              </div>

            )}

          </div>

        </div>

        {/* RELATED */}

        <div
          className="
          mt-20
          "
        >

          <h2
            className="
            text-3xl
            font-bold
            mb-8
            "
          >

            {t(
              "details.relatedProducts"
            )}

          </h2>

          <ProductGrid
            products={
              relatedProducts
            }
          />

        </div>

      </Container>

    </div>

  );

}

export default ProductDetails;