/* Modified version of https://magicui.design/docs/components/retro-grid */

import cn from '@/utils/cn';

type RetroGridProps = {
  className?: string;
  angle?: number;
};

export default function RetroGrid({ className, angle = 65 }: RetroGridProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]',
        className
      )}
      style={{ '--grid-angle': `${angle}deg` } as React.CSSProperties}
    >
      <div className='absolute inset-0 [transform:rotateX(var(--grid-angle))]'>
        <div
          className={cn(
            'animate-grid',
            '[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]',
            '[background-image:linear-gradient(to_right,rgba(var(--bg-quaternary))_1px,transparent_0),linear-gradient(to_bottom,rgba(var(--bg-quaternary))_1px,transparent_0)]'
          )}
        />
      </div>

      <div className='absolute inset-0 bg-gradient-to-t from-[rgba(var(--bg-background))] to-transparent to-90%' />
    </div>
  );
}