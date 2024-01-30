import {
  Card, CardBody, CardHeader, Image,
} from '@nextui-org/react';
import { PageWrapper } from '../../components';

const UserTile = (props: any) => (
  <Card className="py-4">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">John Deep</h4>
      <small className="text-default-500">Age: {props.age}</small>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://picsum.photos/200/150"
        width={270}
      />
    </CardBody>
  </Card>
);

export const DummyView = () => (
  <PageWrapper title="Dummy Page">
    <div className="flex">
      <UserTile firsName="Jessica" lastName="Alba" age={32} />
    </div>
  </PageWrapper>
);
