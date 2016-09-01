1. First, point the ballot page to the container component rather than the dumb component
```js
import CandidatesListContainer        from '../containers/CandidateList.jsx';
```

1. Upgrade SelectableList to React Component


2. Get the Items from Props (its a dumb component! no Store - use State)
3. If Items.length < 1 === LoadingState()
4. ListHeader should be =====
5. LoadItems()
```js
const item1 =
  (<ListItem
    value={0}
    primaryText="S.O.S. Clinton"
    leftAvatar={<Avatar src="/images/HillaryClinton.jpg" />}
  />);
const item2 =
  (
    <ListItem
      value={1}
      primaryText="Sen. Sanders"
      leftAvatar={<Avatar src="/images/BernieSanders.jpg" />}
    />
  );
return [item1, item2];
```

5. Test with Displaying Items.length()
```html
 <Subheader>Found {this.props.items.length} Items</Subheader>
```
6. Get Redux Fetch() Working
7. Item data in ListItem
