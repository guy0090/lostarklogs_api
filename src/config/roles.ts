export const roles = [
  {
    _id: 0,
    name: 'user',
    default: true,
    builtIn: true,
    inherits: [],
    permissions: ['user.self', 'log.upload', 'log.delete'],
  },
  {
    _id: 1,
    name: 'admin',
    default: false,
    builtIn: true,
    inherits: [0],
    permissions: ['admin'],
  },
  {
    _id: 2,
    name: 'superadmin',
    default: false,
    builtIn: true,
    inherits: [1],
    permissions: ['superadmin'],
  },
];
