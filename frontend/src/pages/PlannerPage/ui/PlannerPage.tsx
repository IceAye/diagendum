import { useState } from 'react';
import type { ViewMode } from '@/pages/PlannerPage/lib/planner.types.ts';
import { PlannerTabs } from '@/pages/PlannerPage/ui/PlannerTabs.tsx';
import { MotivationQuote } from '@/features/motivationQuote/ui/MotivationQuote.tsx';

export const PlannerPage = () => {
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>('week');

  const handleTabChange = (newViewMode: ViewMode) => {
    setCurrentViewMode(newViewMode);
  };

  return (
    <div className='flex justify-between'>
      <PlannerTabs viewMode={currentViewMode} onChange={handleTabChange} />
      <MotivationQuote />
    </div>
  );
};
