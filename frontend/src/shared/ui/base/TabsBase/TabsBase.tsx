import * as Tabs from '@radix-ui/react-tabs';
import type { ComponentPropsWithoutRef } from 'react';
import type { TabItem } from '@/shared/ui/base/TabsBase/tabs.types.ts';

type Props = ComponentPropsWithoutRef<typeof Tabs.Root> & {
  items: TabItem[];
};

export const TabsBase = ({ items, ...props }: Props) => {
  return (
    <Tabs.Root {...props}>
      <Tabs.List>
        {items.map((item) => (
          <Tabs.Trigger key={item.value} value={item.value}>
            {item.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Content key={item.value} value={item.value}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
