import { TabsBase } from '@/shared/ui/base/TabsBase/TabsBase.tsx';
import type { TabItem } from '@/shared/ui/base/TabsBase/tabs.types.ts';

type Props = {
  items: TabItem[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export const Tabs = ({ items, defaultValue, onValueChange }: Props) => {
  return <TabsBase items={items} defaultValue={defaultValue} onValueChange={onValueChange} />;
};
