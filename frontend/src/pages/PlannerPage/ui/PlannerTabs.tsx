import { Tabs } from '@/shared/ui/base/Tabs.tsx';
import type { ViewMode } from '@/pages/PlannerPage/lib/planner.types.ts';

type Props = {
  viewMode: ViewMode;
  onChange: (value: ViewMode) => void;
};

export const PlannerTabs = ({ viewMode, onChange }: Props) => (
  <Tabs
    defaultValue={viewMode}
    onValueChange={(value) => onChange(value as ViewMode)}
    items={[
      { label: 'Week', value: 'week', content: <div>Week</div> },
      { label: 'Month', value: 'month', content: <div>Month</div> },
      { label: 'Year', value: 'year', content: <div>Year</div> },
    ]}
  />
);
