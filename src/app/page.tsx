import { siteConfig } from "@/config/site";
import { FoodTemplate } from "@/templates/FoodTemplate";
import { ServiceTemplate } from "@/templates/ServiceTemplate";
import { StoreTemplate } from "@/templates/StoreTemplate";
import { BusinessTemplate } from "@/templates/BusinessTemplate";

const templates = {
  food: FoodTemplate,
  service: ServiceTemplate,
  store: StoreTemplate,
  business: BusinessTemplate,
} as const;

export default function Home() {
  const Template = templates[siteConfig.template] ?? BusinessTemplate;
  return <Template />;
}
