type CategoryCardProps = {
  title: string;
  image: string;
};

function CategoryCard({
  title,
  image,
}: CategoryCardProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        cursor-pointer
        group
        h-52
        border
        border-transparent
        hover:border-accent
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/40
          flex
          items-center
          justify-center
        "
      >
        <h2
          className="
            text-white
            text-2xl
            font-bold
            tracking-wide
          "
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default CategoryCard;