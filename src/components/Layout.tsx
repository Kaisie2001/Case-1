import React from 'react';
import { 
  LayoutDashboard, 
  Box, 
  FileCheck, 
  Cloud, 
  MapPin, 
  Recycle, 
  Download, 
  Settings, 
  HelpCircle,
  Search,
  Bell,
  User,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center w-full gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-lg",
      active 
        ? "bg-white text-blue-600 shadow-sm" 
        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
    )}
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout = ({ children, activeTab, setActiveTab }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-slate-200 bg-slate-50/50">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center text-white font-bold">
            TW
          </div>
          <div
            className="cursor-pointer hover:opacity-80 transition-opacity"
  onClick={() => {
    window.location.href = "https://tracewall-landing-page.netlify.app/";
  }}
            >
            <h1 className="text-lg font-bold leading-none">TraceWall</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Enterprise Workspace</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <SidebarItem 
            icon={LayoutDashboard} 
            label="Overview" 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          />
          <SidebarItem 
            icon={Box} 
            label="Materials" 
            active={activeTab === 'materials'} 
            onClick={() => setActiveTab('materials')}
          />
          <SidebarItem 
            icon={FileCheck} 
            label="Passports" 
            active={activeTab === 'passports'} 
            onClick={() => setActiveTab('passports')}
          />
          <SidebarItem 
            icon={Cloud} 
            label="Carbon Model" 
            active={activeTab === 'carbon'} 
            onClick={() => setActiveTab('carbon')}
          />
          <SidebarItem 
            icon={MapPin} 
            label="Tracking" 
            active={activeTab === 'tracking'} 
            onClick={() => setActiveTab('tracking')}
          />
          <SidebarItem 
            icon={Recycle} 
            label="End-of-Life" 
            active={activeTab === 'eol'} 
            onClick={() => setActiveTab('eol')}
          />
        </nav>

        <div className="p-4 border-t border-slate-200 space-y-2">
          <button className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors">
            <Download size={18} />
            Export Report
          </button>
          <SidebarItem icon={Settings} label="Settings" />
          <SidebarItem icon={HelpCircle} label="Support" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">Central Tower – Level 18</h2>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 ml-8">
              <a href="#" className="hover:text-slate-900">Projects</a>
              <a href="#" className="hover:text-slate-900">Portfolio</a>
              <a href="#" className="hover:text-slate-900">Analytics</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search workspace..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 rounded-full text-sm w-64 transition-all outline-none"
              />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Settings size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border border-slate-300">
              <User size={20} className="text-slate-500" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
