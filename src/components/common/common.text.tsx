interface ITextProps {
  id?: string;
  bold?: boolean;
  centered?: boolean;
  inline?: boolean;
  className?: string;
  color?: 'main' | 'blue' | 'red' | 'green' | 'yellow' | 'black' | 'gray' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  opacity?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100';
  tag?:
    | 'p'
    | 'b'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'small'
    | 'strong'
    | 'mark'
    | 'em';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const TagMap = (props: ITextProps) => {
  const { tag, className, children, style, id } = props;
  const tagProps = { className, children, style, id };
  if (tag === 'p') return <p {...tagProps} />;
  if (tag === 'b') return <b {...tagProps} />;
  if (tag === 'h1') return <h1 {...tagProps} />;
  if (tag === 'h2') return <h2 {...tagProps} />;
  if (tag === 'h3') return <h3 {...tagProps} />;
  if (tag === 'h4') return <h4 {...tagProps} />;
  if (tag === 'h5') return <h5 {...tagProps} />;
  if (tag === 'h6') return <h6 {...tagProps} />;
  if (tag === 'span') return <span {...tagProps} />;
  if (tag === 'small') return <small {...tagProps} />;
  if (tag === 'strong') return <strong {...tagProps} />;
  if (tag === 'mark') return <mark {...tagProps} />;
  if (tag === 'em') return <em {...tagProps} />;
  return <p {...tagProps} />;
};

export const Text = (props: ITextProps) => {
  const { bold, centered, color, size, opacity, inline, className = '' } = props;
  const textStyle: string[] = [];

  if (bold) textStyle.push('font-bold');
  if (centered) textStyle.push('text-center');
  if (color) textStyle.push(`text-${color}`);
  if (size) textStyle.push(`text-${size}`);
  if (opacity) textStyle.push(`opacity-${opacity}`);
  if (inline) textStyle.push('inline');
  if (className) textStyle.push(className);
  return <TagMap {...props} className={textStyle.join(' ')} />;
};

/* tailwind include
    font-bold font-normal
    text-xs text-sm text-md text-lg text-xl text-2xl text-3xl text-4xl text-5xl
    text-main text-blue text-red text-green text-yellow text-black text-gray text-white
    opacity-10 opacity-20 opacity-30 opacity-40 opacity-50 opacity-60 opacity-70 opacity-80 opacity-90 opacity-100
    text-center
    inline
*/
