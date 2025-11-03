import ProductCard from "@/components/ProductCard";

export default async function SSGPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">SSG Rendering</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
