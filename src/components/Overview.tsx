import React from 'react';
import { 
  History, 
  Layers, 
  Lock, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  AlertTriangle, 
  ArrowRight,
  Info,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const MetricCard = ({ label, value, subValue, icon: Icon, color = "blue" }: any) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
      {Icon && <Icon size={20} className="text-slate-300" />}
    </div>
    <div className="flex items-baseline gap-2">
      <h3 className="text-2xl font-bold">{value}</h3>
      {subValue && <span className="text-sm font-medium text-slate-500">{subValue}</span>}
    </div>
  </div>
);

const SnapshotCard = ({ status, label, description, color }: any) => {
  const statusColors: any = {
    passed: "border-green-500 bg-green-50 text-green-700",
    pending: "border-amber-500 bg-amber-50 text-amber-700",
    void: "border-red-500 bg-red-50 text-red-700"
  };

  const Icon: any = {
    passed: CheckCircle2,
    pending: Clock,
    void: XCircle
  }[status];

  return (
    <div className={cn("p-6 rounded-xl border-l-4 shadow-sm bg-white", statusColors[status])}>
      <div className="flex justify-between items-center mb-4">
        <Icon size={24} />
        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/50 border border-current/20">
          {status}
        </span>
      </div>
      <h4 className="text-lg font-bold mb-1 text-slate-900">{label}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export const Overview = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Asset Class</p>
          <h3 className="text-2xl font-bold">Grade A Office</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Location</p>
          <h3 className="text-2xl font-bold">Central HK</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Gross Area</p>
          <h3 className="text-2xl font-bold">800m2</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm flex flex-col justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Status</p>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-bold text-green-700">In-Use Phase</h3>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Secondary Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Study Period</p>
                <h3 className="text-3xl font-bold">100 yrs</h3>
              </div>
              <History size={40} className="text-slate-200" />
            </div>
            
            <div className="bg-blue-900 p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-2">Embodied Carbon</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-bold">12.4</h3>
                  <span className="text-sm font-medium text-blue-300">tCO2e</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-200">
                  <ArrowRight size={16} className="rotate-45" />
                  <span>14% below baseline</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 text-8xl font-black text-white/5 select-none">CO2</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tracking Depth</p>
                <h3 className="text-3xl font-bold">L0</h3>
              </div>
              <Layers size={40} className="text-slate-200" />
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tracked Components</p>
                  <h3 className="text-3xl font-bold">182</h3>
                </div>
                <span className="text-sm font-bold text-slate-400">75%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Maturity Snapshot */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Maturity Snapshot</h3>
              <div className="text-sm font-semibold text-slate-500">
                CONFIDENCE SCORE: <span className="text-slate-900">68/100</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SnapshotCard 
                status="passed"
                label="Spec"
                description="Complete structural & material documentation received."
              />
              <SnapshotCard 
                status="pending"
                label="Origin"
                description="Incomplete supply chain routing for partition glass."
              />
              <SnapshotCard 
                status="void"
                label="Evidence"
                description="Incomplete logistical verification for recycling phase."
              />
            </div>
          </section>

          {/* Alerts */}
          <div className="space-y-4">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-center justify-between group cursor-pointer hover:bg-red-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-red-900">Missing Trip Tickets</h4>
                  <p className="text-sm text-red-700">12 logistics events between Site and Sortation Center are missing mandatory digital signatures.</p>
                </div>
              </div>
              <button className="text-sm font-bold text-red-600 uppercase tracking-wider group-hover:underline">Resolve Now</button>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 flex items-center justify-between group cursor-pointer hover:bg-orange-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900">Unverified Destination</h4>
                  <p className="text-sm text-orange-700">Material batch #402-B (Aluminum Frames) flagged: final recycling facility not on approved vendor list.</p>
                </div>
              </div>
              <button className="text-sm font-bold text-orange-600 uppercase tracking-wider group-hover:underline">Review Audit</button>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          {/* Verified Data Rate */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Verified Data Rate</p>
            <div className="flex items-baseline gap-2 mb-4">
              <h3 className="text-5xl font-bold text-green-600">92%</h3>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-green-600 mb-6">
              <CheckCircle2 size={16} />
              <span>Audit Ready</span>
            </div>
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold mb-1">Baseline Insights</h5>
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    "The baseline case assumes standard HK tenement disposal patterns. By implementing the current TraceWall protocol, we project a 22% reduction in end-of-life leakage if recycling paths are verified."
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Key Action</p>
                <p className="text-xs font-medium text-slate-700">Link digital passports to facility manifest to unlock final credits.</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <section>
            <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
            <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
                <p className="text-xs font-medium text-slate-400 mb-1">2 hours ago</p>
                <h5 className="text-sm font-bold">Installation Completed</h5>
                <p className="text-xs text-slate-500">L18 North Wing - Glazing System</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                <p className="text-xs font-medium text-slate-400 mb-1">Yesterday, 14:20</p>
                <h5 className="text-sm font-bold">In-Use Phase Commenced</h5>
                <p className="text-xs text-slate-500">Standard operational monitoring active for all tracked assets.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
                <p className="text-xs font-medium text-slate-400 mb-1">Oct 12, 2023</p>
                <h5 className="text-sm font-bold text-slate-400">End-of-Life Planning</h5>
                <p className="text-xs text-slate-400">Awaiting disposal evidence documentation from contractor.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
