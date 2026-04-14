import React from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  FileText, 
  Layers, 
  Volume2, 
  Flame, 
  ArrowUp, 
  RefreshCcw,
  Info,
  ChevronRight,
  Download,
  Filter,
  FileType
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const techSpecs = [
  { component: "Plasterboard", spec: "2× 12.5mm SoundBloc", standard: "EN 520" },
  { component: "Metal Framing", spec: "70mm C-Stud (0.6mm GA)", standard: "EN 14195" },
  { component: "Insulation", spec: "50mm Stone Wool (45kg/m³)", standard: "EN 13162" },
  { component: "Jointing", spec: "Gyproc Easi-Fill 45", standard: "EN 13963" },
];

const docHistory = [
  { doc: "Acoustic Test Report", ref: "REF: SRI-2023-HKG", status: "VERIFIED", statusColor: "bg-green-100 text-green-700", confidence: "High", confidenceColor: "bg-green-600", date: "Oct 12, 2023" },
  { doc: "Manufacturing Declaration", ref: "Batch: GYP-CN-552", status: "PARTIAL", statusColor: "bg-amber-100 text-amber-700", confidence: "Medium", confidenceColor: "bg-amber-600", date: "Nov 04, 2023" },
  { doc: "Digital Twin COBie Data", ref: "BIM Level 2 Export", status: "PENDING", statusColor: "bg-slate-100 text-slate-500", confidence: "N/A", confidenceColor: "bg-slate-200", date: "---" },
];

export const Passports = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded">SERIAL: HK-L18-PART-A</span>
            <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-widest rounded flex items-center gap-1">
              <Lock size={10} /> Module D Locked
            </span>
          </div>
          <div className="flex gap-4">
            <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100 text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Carbon</p>
              <p className="text-xl font-bold text-slate-900">4.2 <span className="text-xs font-medium text-slate-500">tCO2e</span></p>
            </div>
            <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100 text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Recycled Content</p>
              <p className="text-xl font-bold text-slate-900">32%</p>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-4">Partition System A</h2>
        <p className="text-slate-500 max-w-3xl leading-relaxed mb-6">
          System-level digital passport for central corridor partitioning. Records material provenance, acoustic performance validation, and circularity potential for Level 18 renovation.
        </p>

        <div className="flex gap-3 mb-8">
          <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full flex items-center gap-2">
            <Layers size={14} /> Level 0 Proxy
          </span>
          <span className="px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-2">
            <CheckCircle2 size={14} /> Acoustic Pass
          </span>
          <span className="px-3 py-1.5 bg-red-100 text-red-700 text-xs font-bold rounded-full flex items-center gap-2">
            <AlertTriangle size={14} /> Documentation Gap
          </span>
        </div>

        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
            <Info size={20} />
          </div>
          <div>
            <h4 className="font-bold text-amber-900">Module D Locked: Missing End-of-Life Strategy</h4>
            <p className="text-sm text-amber-700">System cannot calculate circularity credits until deconstruction manual is uploaded for GypWall components.</p>
          </div>
        </div>
      </div>

      {/* Technical Spec & Assembly Logic */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText size={20} className="text-blue-600" /> Technical Specification
              </h3>
              <span className="text-xs font-bold text-slate-400 uppercase">Model: GypWall A206A111</span>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                  <th className="pb-4">Component</th>
                  <th className="pb-4">Specification</th>
                  <th className="pb-4">Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {techSpecs.map((spec, i) => (
                  <tr key={i}>
                    <td className="py-4 font-bold text-slate-900">{spec.component}</td>
                    <td className="py-4 text-sm text-slate-600">{spec.spec}</td>
                    <td className="py-4 text-sm font-mono text-slate-400">{spec.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-slate-50 p-4 rounded-xl text-center">
                <Volume2 size={20} className="mx-auto mb-2 text-blue-400" />
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Acoustic</p>
                <p className="text-sm font-bold">54 R<sub>w</sub> dB</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center border-b-2 border-blue-600">
                <Flame size={20} className="mx-auto mb-2 text-blue-400" />
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Fire Rating</p>
                <p className="text-sm font-bold">60 Mins</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center">
                <ArrowUp size={20} className="mx-auto mb-2 text-blue-400" />
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Max Height</p>
                <p className="text-sm font-bold">4.2 Meters</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center">
                <RefreshCcw size={20} className="mx-auto mb-2 text-blue-400" />
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Replacement</p>
                <p className="text-sm font-bold">15-Yr Cycle</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Layers size={20} className="text-blue-600" /> Assembly Logic
            </h3>
            <div className="aspect-square bg-slate-900 rounded-xl mb-8 relative overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/blueprint/600/600?grayscale" 
                alt="Exploded Assembly View" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-white/20 p-4 rounded-lg backdrop-blur-sm bg-white/5">
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Current Configuration</p>
                  <p className="text-xs font-bold text-white">Exploded Assembly View (A206)</p>
                </div>
              </div>
            </div>
            <ul className="space-y-6 text-xs leading-relaxed">
              <li className="flex gap-3">
                <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 shrink-0"></div>
                <p><span className="font-bold">Board:</span> Screw-fixed to metal framing at 300mm centers with 25mm drywall screws.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 shrink-0"></div>
                <p><span className="font-bold">Framing:</span> 70mm C-stud friction fit into 72mm U-tracks at floor and soffit levels.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 shrink-0"></div>
                <p><span className="font-bold">Insulation:</span> Friction fit between studs; no mechanical fasteners required for acoustic dampening.</p>
              </li>
            </ul>
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h5 className="text-xs font-bold text-blue-900 mb-2">Circular Strategy: Disassembly</h5>
              <p className="text-[10px] text-blue-700 leading-relaxed">
                Screws must be extracted manually. Jointing compound renders boards non-recyclable as Grade A. Downcycle to gypsum filler only.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Provenance & Evidence Timeline */}
      <section>
        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
          <RefreshCcw size={20} className="text-blue-600" /> Provenance & Evidence Timeline
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-bold text-red-900">Critical Missing Data</h4>
                <AlertTriangle size={18} className="text-red-500" />
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-red-900 mb-1">Delivery Trip Tickets</p>
                  <p className="text-[10px] text-red-700">Batch ID: HK-9982-S</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-red-900 mb-1">Weighbridge Records</p>
                  <p className="text-[10px] text-red-700">Required for Waste ID</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-red-900 mb-1">EPD (Factory Specific)</p>
                  <p className="text-[10px] text-red-700">Generic Proxy used instead</p>
                </div>
                <button className="w-full py-2.5 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition-colors">
                  Request from Main Con
                </button>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Warnings</h4>
              <div className="flex gap-3">
                <ShieldAlert size={18} className="text-amber-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-1">Unknown Origin:</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Shipment 04-B manufacturing plant not disclosed. Default carbon values applied.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold">Document History</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Filter size={18} /></button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Download size={18} /></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-6 py-4">Asset/Doc</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Confidence</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {docHistory.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                            <FileType size={16} />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900">{row.doc}</div>
                            <div className="text-[10px] text-slate-400 font-bold">{row.ref}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn("px-2 py-1 rounded text-[10px] font-bold uppercase", row.statusColor)}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className={cn("h-full rounded-full", row.confidenceColor)} style={{ width: row.confidence === 'High' ? '80%' : row.confidence === 'Medium' ? '40%' : '0%' }}></div>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">{row.confidence}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="w-full py-4 text-xs font-bold text-blue-600 uppercase tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              View 14 More Documents <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
