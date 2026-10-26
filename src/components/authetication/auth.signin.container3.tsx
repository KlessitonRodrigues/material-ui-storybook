import { Text } from '../common/common.text';

interface SignInScreenProps {
  data: {
    title: string;
    description: string;
    description2?: string;
    bgImageUrl: string;
    bgBrightness?: number;
  };
  loginForm: React.ReactNode;
  bgGradient?: {
    from: string;
    to: string;
  };
}

export const SignInScreen = (props: SignInScreenProps) => {
  const { data, loginForm, bgGradient } = props;
  const backgroundImage = `linear-gradient(145deg, ${bgGradient?.from}, ${bgGradient?.to})`;
  const sectionImg = {
    backgroundImage: `url(${data.bgImageUrl})`,
    filter: `brightness(${data.bgBrightness ?? 0.7})`,
  };

  return (
    <div className="flex w-full lg:h-full" style={{ backgroundImage }}>
      <div className="w-full m-auto lg:flex lg:max-w-7xl bg-bg1 lg:shadow-lg lg:rounded-lg overflow-hidden">
        <div className="w-full h-150 lg:h-auto p-8 bg-no-repeat bg-cover text-white relative">
          <div className="absolute inset-0 bg-no-repeat bg-center bg-cover" style={sectionImg} />
          <div className="relative z-10 space-y-8">
            <Text tag="h1" size="4xl" bold className="slide-up">
              {data.title}
            </Text>
            <Text tag="p" size="xl" className="slide-up-delay-500">
              {data.description}
            </Text>
            <Text tag="p" size="xl" className="slide-up-delay-1000">
              {data.description2}
            </Text>
          </div>
        </div>
        <div className="bg-bg4">{loginForm}</div>
      </div>
    </div>
  );
};
