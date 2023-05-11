type NavbarItemProps = {
  title: string;
  param: string;
};

function NavbarItem({ title, param }: NavbarItemProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default NavbarItem;
