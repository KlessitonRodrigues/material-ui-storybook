'use client';
import { useState } from 'react';

import { HorizontalCarousel } from '../common/common.carousel.horizontal';
import { Column, Row } from '../common/common.container.flex';
import { PageSection } from '../common/common.container.section';
import { Icons } from '../common/common.icon';
import { Text } from '../common/common.text';

interface HorizontalCarouselProps {
  id?: string;
  title?: React.ReactNode;
  items: { title: string; imageSrc: string }[];
}

export const HorizontalCarouselSection = (props: HorizontalCarouselProps) => {
  const { id, title, items } = props;
  const [selected, setSelected] = useState(0);
  const handleChangeSelected = (index: number) => setSelected(index);

  return (
    <PageSection>
      <Text id={id} bold centered tag="h2" size="4xl" className="text-dual-tone text-fg1 mb-8">
        {title}
      </Text>

      <Column flexX="center" className="w-full select-none">
        <HorizontalCarousel
          items={items}
          selected={selected}
          handleChangeSelected={handleChangeSelected}
        />
        <Row flexX="center" responsive="sm" gap={4} className="mt-4">
          <Icons iconType="quote" iconSize="2.8rem" className="inline rotate-180 text-main" />
          <Text bold centered size="lg" className="max-w-2xl">
            {items[selected]?.title}
          </Text>
          <Icons iconType="quote" iconSize="2.8rem" className="inline text-main" />
        </Row>
      </Column>
    </PageSection>
  );
};
