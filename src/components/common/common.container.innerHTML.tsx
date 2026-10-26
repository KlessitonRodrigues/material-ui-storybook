interface InnerHTMLProps {
  html: string;
}

export const InnerHTML = ({ html }: InnerHTMLProps) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
