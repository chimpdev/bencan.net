'use client';

import cn from '@/utils/cn';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { useState } from 'react';
import { useMedia } from 'react-use';

interface TooltipProps {
  children: React.ReactNode;
  content?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  hide?: boolean;
  delayDuration?: number;
  contentClassOverride?: string;
  disableHoverableContent?: boolean;
}

export default function Tooltip({ children, content, side, sideOffset, hide, delayDuration, contentClassOverride, disableHoverableContent = true }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useMedia('(max-width: 640px)', false);

  return (
    <RadixTooltip.Provider
      delayDuration={delayDuration || 0}
      skipDelayDuration={0}
      disableHoverableContent={disableHoverableContent === true}
    >
      <RadixTooltip.Root
        onOpenChange={newOpenState => !hide && setOpen(newOpenState)}
        open={open}
      >
        <RadixTooltip.Trigger
          onClick={() => {
            if (hide) return;

            if (isMobile) setOpen(!open);
          }}
          asChild
        >
          {children}
        </RadixTooltip.Trigger>

        {content && (
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              className={cn(
                'z-10 max-w-[320px] rounded-lg bg-black p-2 text-center text-xs font-semibold text-white [transform-origin:var(--radix-tooltip-content-transform-origin)] sm:max-w-[unset] sm:rounded-full sm:px-2 sm:py-1 dark:bg-white dark:text-black',
                disableHoverableContent && 'pointer-events-none',
                contentClassOverride
              )}
              sideOffset={sideOffset || 5}
              side={side || 'top'}
            >
              {content}
              <RadixTooltip.Arrow className='fill-black dark:fill-white'/>
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        )}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}