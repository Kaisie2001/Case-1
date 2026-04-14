import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { 
  AlertCircle, 
  ArrowRight, 
  Calendar,
  CheckCircle2,
  Clock,
  History
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const chartData = [
  { year: 'YEAR 0', predicted: 25, target: 25 },
  { year: 'YEAR 10', predicted: 35, target: 30 },
  { year: 'YEAR 20', predicted: 45, target: 35 },
  { year: 'YEAR 30', predicted: 55, target: 40 },
  { year: 'YEAR 40', predicted: 65, target: 45 },
  { year: 'YEAR 50', predicted: 70, target: 50 },
];

const scenarioData = [
  { asset: "Ceiling Tiles (Acoustic)", lifespan: "15 Years", baseline: "12.4", replacement: "3 Cycles", status: "OPTIMIZED", statusColor: "bg-green-100 text-green-700" },
  { asset: "Raised Floor System", lifespan: "25 Years", baseline: "24.1", replacement: "1 Cycle", status: "PENDING", statusColor: "bg-amber-100 text-amber-700" },
  { asset: "Glazed Partitioning", lifespan: "10 Years", baseline: "8.7", replacement: "5 Cycles", status: "REVIEW", statusColor: "bg-red-100 text-red-700" },
  { asset: "Task Seating (Mesh)", lifespan: "12 Years", baseline: "14.2", replacement: "4 Cycles", status: "VERIFIED", statusColor: "bg-green-100 text-green-700" },
];

export const CarbonModel = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold mb-2">Business-as-usual Scenario</h2>
          <p className="text-slate-500">Lifecycle analysis for office fit-out assets in Central Hong Kong district.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-slate-100 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
            HK GRID FACTOR: <span className="text-slate-900 ml-1">0.7 kg/kWh</span>
          </div>
          <div className="bg-slate-100 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
            DIESEL/MGO: <span className="text-slate-900 ml-1">2.68 kg/L</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold">Cumulative Lifecycle Carbon (tCO2e)</h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                Predicted Trend
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                Target Gap
              </div>
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#2563eb" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#ef4444" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-8">
          {/* Audit Observation */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-red-600 mb-6">
              <AlertCircle size={20} />
              <h4 className="text-sm font-bold uppercase tracking-wider">Audit Observation</h4>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mb-8">
              <h5 className="text-sm font-bold mb-2">Incomplete Evidence Detected</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                The current Carbon Model lacks secondary verification for A3 (Manufacturing) phase data. Reported values are currently based on global averages rather than HK-specific EPDs.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Action Items</p>
              <div className="flex items-start gap-3">
                <Calendar size={18} className="text-red-500 shrink-0" />
                <p className="text-xs font-medium text-slate-700">Verify supply chain diesel logistics for Module A4.</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-red-500 shrink-0" />
                <p className="text-xs font-medium text-slate-700">Upload Level 3 asset inventory certificates.</p>
              </div>
              <button className="w-full mt-4 py-3 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-colors">
                Initiate Rectification
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="lg:col-span-1 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-8">Module Breakdown (A1-C)</h3>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-900">A1-A3: Product Phase</span>
                <span className="text-blue-600">42.5 tCO2e</span>
              </div>
              <div className="w-full h-8 bg-slate-100 rounded overflow-hidden">
                <div className="h-full bg-blue-900" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-900">B4: Replacement</span>
                <span className="text-slate-500">18.2 tCO2e</span>
              </div>
              <div className="w-full h-8 bg-slate-100 rounded overflow-hidden">
                <div className="h-full bg-amber-700" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-900">C: End of Life</span>
                <span className="text-slate-500">8.9 tCO2e</span>
              </div>
              <div className="w-full h-8 bg-slate-100 rounded overflow-hidden">
                <div className="h-full bg-slate-500" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-100 flex justify-around">
              <div className="text-center">
                <p className="text-3xl font-bold">69.6</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Intensity (tCO2e)</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">3.4</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Intensity / m²</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold">Scenario Ledger</h3>
            <button className="text-xs font-bold text-blue-600 flex items-center gap-1">
              <History size={14} />
              All Variations
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Asset Class</th>
                  <th className="px-6 py-4">Lifespan</th>
                  <th className="px-6 py-4">Baseline (t)</th>
                  <th className="px-6 py-4">Replacement</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scenarioData.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">{s.asset}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{s.lifespan}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">{s.baseline}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{s.replacement}</td>
                    <td className="px-6 py-4">
                      <span className={cn("px-2 py-1 rounded text-[10px] font-bold uppercase", s.statusColor)}>
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
