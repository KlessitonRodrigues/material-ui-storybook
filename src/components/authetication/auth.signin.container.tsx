import { Column } from '../common/common.container.flex';
import { Text } from '../common/common.text';

interface SignInScreenV2Props {
  data: {
    title: string;
    description?: string;
    bgImageUrl: string;
    bgBrightness?: number;
  };
  loginForm: React.ReactNode;
  bgColors: {
    from: string;
    to: string;
  };
}

export const SignInScreenV2 = (props: SignInScreenV2Props) => {
  const { data, loginForm, bgColors } = props;
  const backgroundImage = `linear-gradient(to bottom, ${bgColors?.from} 50%, ${bgColors?.to} 50%)`;
  const sectionImg = {
    backgroundImage: `url(${data.bgImageUrl})`,
    filter: `brightness(${data.bgBrightness ?? 0.7})`,
  };

  return (
    <div className="flex w-full lg:h-full" style={{ backgroundImage }}>
      <div className="w-full m-auto lg:flex lg:max-w-340 bg-bg1 lg:shadow-lg lg:rounded-lg overflow-hidden">
        <div className="w-full h-150 lg:h-auto p-8 bg-no-repeat bg-cover text-white relative">
          <div className="absolute inset-0 bg-no-repeat bg-center bg-cover" style={sectionImg} />
          <div className="relative z-10 h-full">
            <Column flexY="center" className="max-w-2xl m-auto pb-20 text-center" gap={8}>
              <Text tag="h1" bold className="text-[3.5rem]">
                {data.title}
              </Text>
              <Text size="lg">{data.description}</Text>
            </Column>
          </div>
        </div>
        <div className="bg-bg4">{loginForm}</div>
      </div>
    </div>
  );
};
