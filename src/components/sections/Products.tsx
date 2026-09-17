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
              <span className="inline-block self-start mb-3.5 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full tracking-wide shadow-sm">
                {featured.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground tracking-tight">
              {featured.name}
            </h3>
            {featured.description && (
              <p className="mt-2 text-muted text-sm leading-relaxed">{featured.description}</p>
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
    <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {product.image && (
        <div className="relative aspect-[4/3] bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-sm tracking-wide">
              {product.badge}
            </span>
          )}
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground tracking-tight">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-1.5 text-sm text-muted line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>
        {product.price && (
          <p className="mt-4 text-sm font-bold text-primary">{product.price}</p>
        )}
      </div>
    </div>
  );
}
