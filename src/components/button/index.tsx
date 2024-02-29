import { Button } from "@radix-ui/themes";

type Props = {
  onClick: () => void;
};

const ButtonComponent = (props: Props) => {
  return (
    <Button type="button" onClick={props.onClick}>
      Calculate
    </Button>
  );
};

export default ButtonComponent;
