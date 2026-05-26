import React from 'react';

type MotionElementProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
  layout?: boolean;
  layoutId?: string;
  variants?: unknown;
  custom?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  whileFocus?: unknown;
  whileDrag?: unknown;
  viewport?: unknown;
};

const motionPropNames = new Set([
  'initial',
  'animate',
  'exit',
  'transition',
  'layout',
  'layoutId',
  'variants',
  'custom',
  'whileHover',
  'whileTap',
  'whileFocus',
  'whileDrag',
  'viewport',
]);

const componentCache = new Map<string, React.ForwardRefExoticComponent<MotionElementProps & React.RefAttributes<HTMLElement>>>();

function createMotionComponent(tagName: string) {
  const component = React.forwardRef<HTMLElement, MotionElementProps>(function MotionComponent(
    { children, ...props },
    ref,
  ) {
    const domProps: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(props)) {
      if (!motionPropNames.has(key)) {
        domProps[key] = value;
      }
    }

    return React.createElement(tagName, { ...domProps, ref }, children);
  });

  component.displayName = `motion.${tagName}`;
  return component;
}

export const motion = new Proxy({}, {
  get: (_target, prop: string) => {
    if (!componentCache.has(prop)) {
      componentCache.set(prop, createMotionComponent(prop));
    }

    return componentCache.get(prop);
  },
}) as Record<string, React.ForwardRefExoticComponent<MotionElementProps & React.RefAttributes<HTMLElement>>>;

export const AnimatePresence = ({ children }: { children?: React.ReactNode }) =>
  React.createElement(React.Fragment, null, children);
