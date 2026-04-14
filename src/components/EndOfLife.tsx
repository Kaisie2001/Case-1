import React from 'react';
import { 
  AlertCircle, 
  Upload, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Clock,
  MapPin,
  Lock,
  BarChart3
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const disposalData = [
  { name: 'Landfill', value: 100 },
];

const COLORS = ['#ef4444'];

const logData = [
  { id: "HKG-L18-001", material: "Structural Steel", mass: "12.4", status: "PENDING", evidence: "MISSING CHIT", statusColor: "bg-amber-100 text-amber-700", evidenceColor: "text-red-500" },
  { id: "HKG-L18-002", material: "Gypsum Board", mass: "28.2", status: "VOID", evidence: "NO GATE LOG", statusColor: "bg-red-100 text-red-700", evidenceColor: "text-red-500" },
  { id: "HKG-L18-003", material: "Low-VOC Carpet", mass: "2.2", status: "PENDING", evidence: "MISSING CHIT", statusColor: "bg-amber-100 text-amber-700", evidenceColor: "text-red-500" },
];

export const EndOfLife = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Settlement Report</h2>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-bold">
          Baseline Conventional
        </button>
      </div>

      {/* Compliance Alert */}
      <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-start justify-between">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
            <AlertCircle size={24} />
          </div>
          <div>
            <h4 className="font-bold text-red-900 text-lg mb-1">Non-Compliance Detected: Missing Evidence</h4>
            <p className="text-sm text-red-700 leading-relaxed max-w-3xl">
              Chain-of-custody documentation (trip tickets or digital disposal certs) has not been uploaded for this batch. System logic has defaulted all materials to **100% Landfill**. Module D circularity credits have been voided for this reporting period.
            </p>
          </div>
        </div>
        <button className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
          RESOLVE RECORDS
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Actual Destination Chart */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Actual Destination</p>
                <h3 className="text-2xl font-bold">100% Landfill</h3>
              </div>
              <BarChart3 size={20} className="text-slate-300" />
            </div>
            
            <div className="relative h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={disposalData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#ef4444" strokeWidth={0} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-slate-900">42.8t</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Mass Wasted</span>
              </div>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">Status</span>
                <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-bold uppercase">Unverified</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-500">HK Default Applied</span>
                <span className="text-sm font-bold text-slate-900">Yes</span>
              </div>
            </div>
          </div>

          {/* HK Govt Default Pathways */}
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">HK Govt Default Pathways (E-38)</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600">PFRFS (Sorted)</span>
                  <span className="text-slate-900">22%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: '22%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600">Reuse/Recycle</span>
                  <span className="text-slate-900">3%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '3%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600">Direct Landfill</span>
                  <span className="text-slate-900">75%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-[10px] text-slate-400 italic leading-relaxed">
                *Defaults are used for carbon estimation only. They are not acceptable as evidence for GFA concessions or BEAM Plus credits.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Claim Readiness */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Claim Readiness: <span className="text-red-600">Ineligible</span></h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                  To unlock Module D (Circular Economy Credits), digital trip tickets from the Civil Engineering and Development Department (CEDD) or registered recycler weight bridge tickets must be verified.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded">Demo Only</span>
                <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold uppercase rounded flex items-center gap-1">
                  <Lock size={10} /> Module D Locked
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                  <XCircle size={24} />
                </div>
                <div>
                  <h5 className="text-sm font-bold">BEAM Plus v2.0</h5>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Unverified (0/2 Credits)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                  <div className="w-5 h-5 rounded-full border-2 border-current"></div>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-400">GFA Concession</h5>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Ineligible (Missing SMM)</p>
                </div>
              </div>
            </div>

            <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all">
              <Upload size={20} />
              Upload Batch Evidence to Unlock Credits
            </button>
          </div>

          {/* Disposal Records Log */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold">Disposal Records Log</h3>
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg">
                <Filter size={14} /> Filter
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-6 py-4">Batch ID</th>
                    <th className="px-6 py-4">Material</th>
                    <th className="px-6 py-4">Mass (T)</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {logData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">{row.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={cn("w-2 h-2 rounded-full", i === 0 ? "bg-blue-600" : i === 1 ? "bg-slate-400" : "bg-green-500")}></div>
                          <span className="text-sm font-medium text-slate-700">{row.material}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">{row.mass}</td>
                      <td className="px-6 py-4">
                        <span className={cn("px-2 py-1 rounded text-[10px] font-bold uppercase", row.statusColor)}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider">
                        <span className={row.evidenceColor}>{row.evidence}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="w-full py-4 text-xs font-bold text-blue-900 uppercase tracking-widest hover:bg-slate-50 transition-colors">
              View All 14 Batches
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Map Section */}
      <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
        <img 
          src="https://picsum.photos/seed/hk-map/1920/600?grayscale&blur=2" 
          alt="Operational Location Map" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="absolute top-8 left-8">
          <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">EOL Settlement Phase</p>
              <h5 className="text-sm font-bold">Evidence Required for Final Audit</h5>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
          <h4 className="text-2xl font-bold mb-1">Operational Location: Central Tower</h4>
          <p className="text-sm text-slate-300">Disposal proximity: NENT Landfill | Transit distance: 34.2km</p>
        </div>
      </div>
    </div>
  );
};
