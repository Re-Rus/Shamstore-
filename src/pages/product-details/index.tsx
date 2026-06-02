import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  // 1. التقاط الـ ID من الرابط وأدوات التنقل
  const { id } = useParams();
  const navigate = useNavigate();

  // 2. البحث عن المنتج بناءً على الـ ID
  const product = useMemo(
    () => products.find((item) => item.id === Number(id)),
    [id]
  );

  // 3. إدارة الحالة الأساسية
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(product?.image || "");

  // 4. إدارة تحديث الحالة عند تغير المنتج (البديل النظيف لـ useEffect)
  const [prevId, setPrevId] = useState(id);

  if (id !== prevId) {
    setPrevId(id);
    setSelectedImage(product?.image || "");
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // بيانات المراجعات 
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

  // 5. حالة الخطأ: إذا لم يتم العثور على المنتج
  if (!product) {
    return (
      <Container>
        <div className="py-20 text-center text-3xl font-bold text-gray-500">
          {t("details.productNotFound")}
        </div>
      </Container>
    );
  }

  // 6. استخراج المنتجات ذات الصلة
  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="bg-background min-h-screen py-10">
      <Container>
        {/* BREADCRUMB */}
        <p className="text-secondary text-sm mb-8">
          {t("breadcrumb.home")} / {t("breadcrumb.product")} / {product.title}
        </p>

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* LEFT: IMAGES */}
          <div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-md">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-[450px] object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="flex gap-4 mt-5">
              {product.images?.map((image) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === image
                      ? "border-accent scale-105"
                      : "border-transparent hover:border-accent"
                  }`}
                >
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div>
            <div className="flex gap-3 mb-5">
              <Badge labelKey="badges.instock" variant="inStock" />
              <Badge labelKey="badges.new" variant="new" />
            </div>

            <h1 className="text-4xl font-bold text-primary mb-4">
              {product.title}
            </h1>

            <Rating rating={product.rating} />

            <p className="text-4xl text-accent font-bold mt-6">
              ${product.price}
            </p>

            <div className="h-px bg-secondary/20 my-6" />

            <p className="text-secondary text-lg leading-9">
              {t(product.description)}
            </p>

            {/* QUANTITY */}
            <div className="flex items-center gap-5 mt-8">
              <span>{t("details.quantity")}</span>
              <div className="border rounded-2xl overflow-hidden flex">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-12 h-12 hover:bg-accent hover:text-white transition-all"
                >
                  -
                </button>
                <div className="w-12 flex items-center justify-center font-medium">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 hover:bg-accent hover:text-white transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => navigate("/cart")}
                className="flex-1 h-14 bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid rounded-2xl text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-xl transition-all"
              >
                <ShoppingCart />
                {t("details.addToCart")}
              </button>

              <button className="w-14 border rounded-2xl flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <Heart />
              </button>

              <button className="w-14 border rounded-2xl flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <Share2 />
              </button>
            </div>

            {/* FEATURES */}
            <div className="bg-white rounded-3xl p-6 mt-8 shadow-sm space-y-5 text-primary font-medium">
              <div className="flex gap-3">
                <Truck className="text-accent" />
                {t("details.freeShipping")}
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="text-accent" />
                {t("details.warranty")}
              </div>
              <div className="flex gap-3">
                <RotateCcw className="text-accent" />
                {t("details.returns")}
              </div>
            </div>
          </div>
        </div>

        {/* TABS SECTION */}
        <div className="mt-20">
          <div className="flex gap-10 border-b">
            {["description", "specs", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium transition-colors ${
                  activeTab === tab
                    ? "border-b-2 border-accent text-accent"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {t(`details.${tab}`)}
              </button>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl mt-6 shadow-sm min-h-[200px]">
            {activeTab === "description" && (
              <p className="text-secondary leading-8 text-lg">
                {t(product.description)}
              </p>
            )}

            {activeTab === "specs" && (
              <div className="space-y-4">
                {product.specs?.map((spec) => (
                  <div key={spec} className="flex gap-3 text-secondary text-lg">
                    <CircleCheckBig size={22} className="text-accent" />
                    {spec}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.name} className="border-b border-gray-100 last:border-0 pb-4">
                    <div className="flex gap-2 font-semibold mb-2 text-primary">
                      <MessageSquareMore size={20} className="text-accent" />
                      {review.name}
                    </div>
                    <p className="text-secondary">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              {t("details.relatedProducts")}
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}

      </Container>
    </div>
  );
}

export default ProductDetails;