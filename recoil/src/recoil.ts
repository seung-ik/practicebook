import {atom} from 'recoil'

export const CountState = atom<number>({
    key:"countState",
    default:0
})

// const usersSelector = selector({
//     key: 'usersSelector',
//     get: async () => {
//       const response = await fetch('/api/users');
//       return await response.json();
//     },
//   });