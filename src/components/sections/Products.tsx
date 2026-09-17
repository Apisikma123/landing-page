import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import type { Product } from "@/config/types";

export function Products() {
  const config = siteConfig.products;
  if (!config?.items?.length) return null;

  const variant = config.variant ?? "grid";

  return (
    <SectionWrapper id="products" background="secondary">
      <SectionHeader
        title={config.title ?? "Produk Kami"}
        subtitle={config.subtitle}
      />
      {variant === "featured" ? (
        <FeaturedLayout items={config.items} />
      ) : (
        <GridLayout items={config.items} />
      )}
    </SectionWrapper>
  );
}

function GridLayout({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <ProductCard key={p.name} product={p} />
      ))}
    </div>
  );
}

function FeaturedLayout({ items }: { items: Product[] }) {
  const [featured, ...rest] = items;
  return (
    <div className="space-y-6">
      {/* Featured large card */}
      {featured && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-xl border border-border bg-card">
          {featured.image && (
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
          <div className="flex flex-col justify-center">
            {featured.badge && (
              <span className="inline-block self-start mb-3 px-2.5 py-0.5 bg-accent text-white text-xs font-semibold rounded">
                {featured.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground">
              {featured.name}
            </h3>
            {featured.description && (
              <p className="mt-2 text-muted text-sm">{featured.description}</p>
            )}
            {featured.price && (
              <p className="mt-3 text-lg font-bold text-primary">
                {featured.price}
              </p>
            )}
          </div>
        </div>
      )}
      {/* Remaining as grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow">
      {product.image && (
        <div className="relative aspect-[4/3]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-accent text-white text-xs font-semibold rounded">
              {product.badge}
            </span>
          )}
        </div>
      )}
      <div className="p-4">
        <h3 className="text-base font-semibold text-foreground">
          {product.name}
        </h3>
        {product.description && (
          <p className="mt-1 text-sm text-muted line-clamp-2">
            {product.description}
          </p>
        )}
        {product.price && (
          <p className="mt-2 text-sm font-bold text-primary">{product.price}</p>
        )}
      </div>
    </div>
  );
}
