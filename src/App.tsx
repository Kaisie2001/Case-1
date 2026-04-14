/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Overview } from './components/Overview';
import { Materials } from './components/Materials';
import { CarbonModel } from './components/CarbonModel';
import { Tracking } from './components/Tracking';
import { EndOfLife } from './components/EndOfLife';
import { Passports } from './components/Passports';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'materials':
        return <Materials />;
      case 'passports':
        return <Passports />;
      case 'carbon':
        return <CarbonModel />;
      case 'tracking':
        return <Tracking />;
      case 'eol':
        return <EndOfLife />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
            <p>This module is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
