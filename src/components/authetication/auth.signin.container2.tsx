import { Carousel } from '../common/common.carousel';
import { Column } from '../common/common.container.flex';
import { Text } from '../common/common.text';

interface SignInScreenV2Props {
  data: {
    title: string;
    description?: string;
    imgUrl: string;
  }[];
  loginForm: React.ReactNode;
  bgColors: {
    from: string;
    to: string;
  };
}

export const SignInCarouselScreen = (props: SignInScreenV2Props) => {
  const { data = [], loginForm, bgColors } = props;
  const backgroundImage = `linear-gradient(to bottom, ${bgColors?.from} 50%, ${bgColors?.to} 50%)`;

  return (
    <div className="flex w-full lg:h-full" style={{ backgroundImage }}>
      <div className="w-full m-auto lg:flex lg:max-w-340 bg-bg1 lg:shadow-lg lg:rounded-lg">
        <Carousel
          height="40rem"
          items={data.map(({ title, description, imgUrl }) => ({
            imgUrl,
            content: (
              <Column flexY="center" className="max-w-2xl m-auto pb-20 text-center" gap={8}>
                <Text tag="h1" color="white" bold className="text-[3.5rem]">
                  {title}
                </Text>
                <Text color="white" size="lg">
                  {description}
                </Text>
              </Column>
            ),
          }))}
        />
        <div className="bg-bg4">{loginForm}</div>
      </div>
    </div>
  );
};
