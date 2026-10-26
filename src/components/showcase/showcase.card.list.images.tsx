import { ImageBox } from '../common/ImageBox';
import { Button } from '../common/common.button';
import { Card } from '../common/common.card';
import { Column, Row } from '../common/common.container.flex';
import { PageSection } from '../common/common.container.section';
import { Text } from '../common/common.text';

interface CardListAndImagesSectionProps {
  id?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: React.ReactNode;
  features: {
    title: string;
    description: string;
    imgSrc?: string;
  }[];
}

export const CardListAndImagesSection = (props: CardListAndImagesSectionProps) => {
  const { id, title, description, buttonText, features } = props;

  return (
    <PageSection id={id}>
      <Column gap={8} className="w-full mb-8">
        <Text
          bold
          centered
          tag="h2"
          className="text-[2.5rem] [&>span]:text-primary text-fg1 leading-12"
        >
          {title}
        </Text>
        <Text centered size="lg" opacity="70" className="my-4 max-w-2xl">
          {description}
        </Text>
        <Button color="primary" size="lg" className="w-fit rounded-full">
          {buttonText}
        </Button>
      </Column>

      <Row responsive="lg" className="lg:items-stretch" gap={8}>
        {features.map((feature, index) => (
          <Card key={index} className="border p-6 hover:bg-bg2 w-full max-w-120">
            <Column flexX="start" gap={3}>
              <ImageBox height={400} src={feature.imgSrc} alt={feature.title} />
              <Text bold tag="h3" className="text-lg">
                {feature.title}
              </Text>
              <Text size="sm" opacity="70">
                {feature.description}
              </Text>
            </Column>
          </Card>
        ))}
      </Row>
    </PageSection>
  );
};
