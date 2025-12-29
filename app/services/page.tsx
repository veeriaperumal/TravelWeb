import { ServiceSection } from "../../components/ServiceSection";
import { domestic, international, groupTravel } from "../../public/data";


// Services page – spacing and typography match Figma
export default function ServicesPage() {
return (
<main className="bg-[#FFFDF8] py-20 px-6">
{/* Header */}
<div className="max-w-6xl mx-auto text-center">
<h1 className="text-4xl font-bold text-black">Services</h1>
<p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm">
Explore our domestic, international, and group travel services
designed to make every trip smooth and memorable
</p>
</div>


{/* Content */}
<div className="max-w-6xl mx-auto">
<ServiceSection label="Domestic" items={domestic} />
<ServiceSection label="International" items={international} />
<ServiceSection label="Group Travel" items={groupTravel} />
</div>
</main>
);
}