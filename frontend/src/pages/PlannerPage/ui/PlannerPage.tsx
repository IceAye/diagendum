import { useState } from 'react';
import type { ViewMode } from '@/pages/PlannerPage/lib/planner.types.ts';
import { PlannerTabs } from '@/pages/PlannerPage/ui/PlannerTabs.tsx';

export const PlannerPage = () => {
  const [currentViewMode, setCurrentViewMode] = useState<ViewMode>('week');

  const handleTabChange = (newViewMode: ViewMode) => {
    setCurrentViewMode(newViewMode);
  };

  return (
    <>
      <h1>Planner page</h1>
      <PlannerTabs viewMode={currentViewMode} onChange={handleTabChange} />
    </>
  );
};
