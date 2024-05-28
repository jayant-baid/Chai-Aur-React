# Virtual DOM, Fibre and Reconciliation
1. The **createRoot** create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2. But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However **virtual DOM** tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called **reconciliation**.
8. Reconciliation is the react algo which means to reconsider which one to update and which one not to update. It is a recursive algo.
9. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
10. In UI it is not necessary for every update to be applied immediately. 

## Important Links
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [Yt Video Link (Hitesh Choudhary)](https://youtu.be/MPCVGFvgVEQ?si=YsRj_NUu-rprDEPX)