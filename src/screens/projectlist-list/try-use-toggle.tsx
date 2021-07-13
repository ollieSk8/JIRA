import { useToggle } from 'utils';

export const Body = () => {
  const [isVisible, toggleVisible] = useToggle(false);
  return (
    <>
      <button onClick={toggleVisible}>Hello</button>
      {isVisible && <div>World</div>}
    </>
  );
};
