import { ServiceGrid } from "./ServiceGrid";


interface ServiceSectionProps {
label: string;
items: { title: string; image: string }[];
}


// Section wrapper with pill-style heading (Domestic / International / Group)
export const ServiceSection = ({ label, items }: ServiceSectionProps) => {
return (
<section className="mt-14">
{/* Pill heading */}
<div className="flex justify-center mb-10">
<span className="px-8 py-2 rounded-full bg-black text-[#F5C04E] font-semibold text-sm tracking-wide">
{label}
</span>
</div>


<ServiceGrid items={items} />
</section>
);
};