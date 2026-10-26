import { ImageBox } from '../common/ImageBox';
import { Button } from '../common/common.button';
import { Column, Row } from '../common/common.container.flex';
import { PageSection } from '../common/common.container.section';
import { Text } from '../common/common.text';

interface ImageRightHeaderProps {
  id?: string;
  imgSrc?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  description2?: React.ReactNode;
  buttonText?: React.ReactNode;
  button2Text?: React.ReactNode;
}

export const ImageRightHeader = (props: ImageRightHeaderProps) => {
  const { id, imgSrc, ...content } = props;

  return (
    <PageSection id={id}>
      <Row responsive="lg" className="w-full min-h-[60vh]" gap={8}>
        <Column flexX="start" gap={8}>
          <Text bold id={id} tag="h1" className="text-[3.5rem] text-fg1 text-dual-tone leading-16">
            {content.title}
          </Text>
          <Text size="2xl" opacity="80">
            {content.description}
          </Text>
          <Row responsive="xl" gap={4}>
            <Button mode="outline" size="lg">
              {content.buttonText}
            </Button>
            <Button color="primary" size="lg">
              {content.button2Text}
            </Button>
            <Text size="lg" opacity="60" className="ml-4">
              {content.description2}
            </Text>
          </Row>
        </Column>
        <Column className="w-full max-w-lg square-back-shadow">
          <ImageBox height={500} src={imgSrc} alt="Header image" />
        </Column>
      </Row>
    </PageSection>
  );
};
