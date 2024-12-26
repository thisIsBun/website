type NavType = {
  name: NavNameType;
  path: string;
};

enum NavNameType {
  ABOUT = 'about',
  EXPERIENCES = 'experiences',
  BLOGS = 'blogs',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}

const navbarData: NavType[] = [
  { name: NavNameType.ABOUT, path: '/website/#about' },
  { name: NavNameType.EXPERIENCES, path: '/website/#experiences' },
  { name: NavNameType.BLOGS, path: '/website/#blogs' },
  // { name: NavNameType.PROJECTS, path: '/website/#projects' },
  { name: NavNameType.CONTACT, path: '/website/#contact' },
];

export default navbarData;
