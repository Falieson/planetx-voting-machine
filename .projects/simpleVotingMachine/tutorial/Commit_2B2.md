Commit: SVM 2.A.2
When Adding a Transition you must use React Component or you'll get this error:
```error
warning.js?8a56:36 Warning: Stateless function components cannot be given refs (See ref ".0" in RegisterContainer created by ReactTransitionGroup). Attempts to access this ref will fail.printWarning @ warning.js?8a56:36warning @ warning.js?8a56:60attachRef @ ReactCompositeComponent.js
ReactTransitionGroup.js?bd5c:144Uncaught TypeError: Cannot read property 'componentWillEnter' of nullperformEnter @ ReactTransitionGroup.js
```
