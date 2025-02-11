const products = [
  {
    id: 1,
    name: "Diamond Earrings",
    href: "#",
    imageSrc: "/placeholder.svg?height=400&width=400",
    price: "$2,400",
  },
  // Add more products...
];

const ProductGrid = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <img
                src={product.imageSrc || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {product.price}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
