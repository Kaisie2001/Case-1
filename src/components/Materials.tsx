import React from 'react';
import { 
  Filter, 
  Download, 
  Info, 
  Plus,
  ArrowDownRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const materials = [
  {
    name: "Gyproc FireLine 12.5mm",
    manufacturer: "Saint-Gobain",
    classification: "Mineral board",
    gwp: "1.56",
    role: "PRIMARY BOARD",
    quality: "EPD VERIFIED",
    qualityColor: "bg-green-100 text-green-700"
  },
  {
    name: "Speedline steel framing",
    specification: "C-Stud 70mm",
    classification: "Metal framing",
    gwp: "2.78",
    role: "PRIMARY FRAMING",
    quality: "ASSUMED",
    qualityColor: "bg-orange-100 text-orange-700"
  }
];

export const Materials = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Total Materials</p>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-bold">14</h3>
            <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-[10px] font-bold uppercase">Active</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border-l-4 border-blue-400 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Mean GWP (kg CO2e/m2)</p>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-bold">2.17</h3>
            <ArrowDownRight size={20} className="text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border-l-4 border-orange-400 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Verified Passports</p>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-bold">92%</h3>
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">HK-STC</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold">Material Master Ledger</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                  <Filter size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                  <Download size={18} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-6 py-4">Material Name</th>
                    <th className="px-6 py-4">Classification</th>
                    <th className="px-6 py-4">GWP Index</th>
                    <th className="px-6 py-4">Operational Role</th>
                    <th className="px-6 py-4">Data Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {materials.map((m, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="font-bold text-blue-900">{m.name}</div>
                        <div className="text-xs text-slate-500">
                          {m.manufacturer ? `Manufacturer: ${m.manufacturer}` : `Specification: ${m.specification}`}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-700">{m.classification}</td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">{m.gwp}</div>
                        <div className="text-[10px] text-slate-400 font-bold">kg CO2e/m2</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-[10px] font-bold uppercase">
                          {m.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn("px-2 py-1 rounded text-[10px] font-bold uppercase", m.qualityColor)}>
                          {m.quality}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Board Density</p>
              <h4 className="text-2xl font-bold">840 kg/m³</h4>
            </div>
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Steel Grade</p>
              <h4 className="text-2xl font-bold">DX51D +Z</h4>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* System Composition */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 text-slate-100">
              <ShieldCheck size={64} strokeWidth={1} />
            </div>
            <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-6">System Composition</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                <div>
                  <h5 className="text-sm font-bold">Composite Performance</h5>
                  <p className="text-xs text-slate-500">Fire Resistance: 60 mins</p>
                  <p className="text-xs text-slate-500">Acoustic: 42dB Rw</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>Material Ratio</span>
                  <span className="text-blue-600">82% Board : 18% Steel</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-blue-600" style={{ width: '82%' }}></div>
                  <div className="h-full bg-blue-400" style={{ width: '18%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* HK Use Notes */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-900">
                <Info size={14} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider">Hong Kong Use Notes</h4>
            </div>
            <div className="space-y-6 text-xs leading-relaxed">
              <div>
                <p className="font-bold text-amber-400 mb-1">EPD Alignment:</p>
                <p className="text-slate-300">UK/EU EPDs are utilized as proxies for Saint-Gobain products. Transport logistics to Hong Kong port have been factored using a 12,000km maritime freight multiplier.</p>
              </div>
              <div>
                <p className="font-bold text-amber-400 mb-1">Project Assumptions:</p>
                <p className="text-slate-300">Calculations assume HK standard waste rates (5%) for mineral board and specialized recycling stream availability for steel framing in the New Territories.</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
              <span className="text-slate-400">Locality: Central Tower</span>
              <span className="px-2 py-0.5 bg-slate-700 rounded">L18-SPEC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
        <Plus size={24} />
      </button>
    </div>
  );
};
