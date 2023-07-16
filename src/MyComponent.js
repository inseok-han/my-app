const MyComponent = (props) => {
  const { name, children } = props;

  return (
    <>
      <div>안녕하세요, 제 이름은 {name}입니다.</div>
      <div>{children}은 칠드런</div>
    </>
  );
};
MyComponent.defaultProps = {
  name: "Yoony",
};
export default MyComponent;
