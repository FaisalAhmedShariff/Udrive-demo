// src/app/fleet/[id]/page.js
import { mockVehicles } from "@/data/mockVehicles";
import VehicleDetailClient from "./VehicleDetailClient";

// Required for static HTML export (output: 'export')
export async function generateStaticParams() {
  return mockVehicles.map((vehicle) => ({
    id: vehicle.id,
  }));
}

export default async function VehicleDetail({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  const vehicle = mockVehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="pt-32 text-center text-white min-h-screen bg-luxury-black">
        <h1 className="text-2xl font-bold font-serif uppercase tracking-wider">Vehicle Not Found</h1>
        <p className="mt-4 text-gray-400 text-sm">The requested exotic car could not be located in our showroom.</p>
        <a
          href="/fleet"
          className="mt-8 inline-block px-6 py-2.5 bg-gradient-to-r from-gold-600 to-gold-700 text-black text-xs uppercase tracking-widest font-bold rounded-sm"
        >
          Back to Fleet Catalog
        </a>
      </div>
    );
  }

  return <VehicleDetailClient vehicle={vehicle} />;
}
