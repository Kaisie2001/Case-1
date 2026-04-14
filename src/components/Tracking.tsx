import React from 'react';
import { 
  QrCode, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Filter, 
  Download,
  Camera,
  Paperclip,
  Cloud,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const logbook = [
  { id: "W18-A104", status: "installed", condition: "As New", verified: "Oct 24, 2023", evidence: "check" },
  { id: "W18-A105", status: "in use", condition: "Active", verified: "Nov 12, 2023", evidence: "cloud" },
  { id: "W18-C201", status: "disposal unknown", condition: "Missing Link", verified: "N/A", evidence: "alert" },
  { id: "W18-B303", status: "in use", condition: "Active", verified: "Dec 01, 2023", evidence: "more" },
];

const evidenceFeed = [
  "https://picsum.photos/seed/construction1/400/400",
  "https://picsum.photos/seed/construction2/400/400",
  "https://picsum.photos/seed/truck/400/400",
  "https://picsum.photos/seed/warehouse/400/400",
];

export const Tracking = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-2">Tracking & Logistics</h2>
        <p className="text-slate-500">Monitor real-time material flows, verify chain of custody, and resolve operational gaps in the project lifecycle.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Top Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tracking Level</p>
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-bold uppercase">Critical</span>
                </div>
                <h3 className="text-4xl font-bold mb-2">L0</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Baseline documentation exists but lacks dynamic operational data for Level 18 partitioning walls.
                </p>
              </div>
              <button className="mt-4 text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                Upgrade to L1 <ExternalLink size={12} />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 text-slate-100">
                <ShieldAlert size={40} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Chain of Custody</p>
              <h3 className="text-3xl font-bold mb-2">Unverified</h3>
              <p className="text-xs text-slate-500 mb-6">Gaps detected between manufacturer dispatch and on-site receipt logs. 14 items in transit status.</p>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400">
                  <span>Integrity Score</span>
                  <span>45%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Logbook */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold">Operational Logbook</h3>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  <Filter size={14} /> Filter
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
                  <Download size={14} /> Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="px-6 py-4">Asset ID</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Condition</th>
                    <th className="px-6 py-4">Last Verified</th>
                    <th className="px-6 py-4">Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {logbook.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-slate-900">{item.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            item.status === 'installed' ? "bg-green-500" : 
                            item.status === 'in use' ? "bg-blue-500" : "bg-red-500"
                          )}></div>
                          <span className="text-sm font-medium text-slate-700 capitalize">{item.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{item.condition}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{item.verified}</td>
                      <td className="px-6 py-4">
                        {item.evidence === 'check' && <CheckCircle2 size={18} className="text-green-500" />}
                        {item.evidence === 'cloud' && <Cloud size={18} className="text-blue-500" />}
                        {item.evidence === 'alert' && <AlertCircle size={18} className="text-red-500" />}
                        {item.evidence === 'more' && <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400">...</div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Field Verification */}
          <div className="bg-blue-900 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-6">
              <QrCode size={24} className="text-blue-300" />
              <h4 className="text-lg font-bold">Field Verification</h4>
            </div>
            <p className="text-xs text-blue-200 mb-8 leading-relaxed">
              Instantly register material movement or update lifecycle status by scanning the asset QR code.
            </p>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center mb-8">
              <div className="w-32 h-32 bg-white rounded-lg p-2 mb-4">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TraceWall-L18-A104" alt="QR Code" className="w-full h-full" />
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 animate-pulse" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-colors">LOG DISPOSAL</button>
              <button className="py-2.5 bg-white text-blue-900 rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors">UPDATE STATUS</button>
            </div>
          </div>

          {/* Compliance Checklist */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider">Compliance Checklist</h4>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900">60%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Done</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h5 className="text-sm font-bold">Dispatch Authorization</h5>
                  <p className="text-xs text-slate-500">Confirmed by Warehouse Manager</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h5 className="text-sm font-bold">Installation Geo-tag</h5>
                  <p className="text-xs text-slate-500">Auto-verified via Site App</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-5 h-5 rounded border-2 border-slate-200 shrink-0 mt-0.5"></div>
                <div>
                  <h5 className="text-sm font-bold text-slate-400">Trip Tickets Missing</h5>
                  <p className="text-xs text-slate-400">Logistics provider evidence required</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-5 h-5 rounded border-2 border-slate-200 shrink-0 mt-0.5"></div>
                <div>
                  <h5 className="text-sm font-bold text-slate-400">Weighbridge Data</h5>
                  <p className="text-xs text-slate-400">End-of-life mass balance missing</p>
                </div>
              </div>
              <button className="w-full py-3 border-2 border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
                REQUEST MISSING EVIDENCE
              </button>
            </div>
          </div>

          {/* Alert Widget */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg text-white">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-6">Alert: Operational Gaps</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-400 mb-1">18.4% Variance in structural wall panels.</p>
                <p className="text-xs text-slate-400 leading-relaxed">Potential data leakage during transport to Level 18 staging.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Evidence Feed */}
      <section>
        <h3 className="text-lg font-bold mb-6">Real-Time Evidence Feed</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {evidenceFeed.map((src, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-sm group cursor-pointer relative">
              <img src={src} alt={`Evidence ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ExternalLink size={20} className="text-white" />
              </div>
            </div>
          ))}
          <button className="aspect-square rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-blue-400 hover:text-blue-500 transition-all">
            <Camera size={24} />
            <span className="text-[10px] font-bold uppercase">Upload Photo</span>
          </button>
          <button className="aspect-square rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-blue-400 hover:text-blue-500 transition-all">
            <Paperclip size={24} />
            <span className="text-[10px] font-bold uppercase">Attach Ticket</span>
          </button>
        </div>
      </section>
    </div>
  );
};
