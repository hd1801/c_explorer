export {};

declare global {
  var saveUser: (userData: import('@/types/user.type').User) => Promise<void>;
} 