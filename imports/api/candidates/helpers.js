export const parties = ['independent', 'republican', 'democratic',  'libertarian', 'green'];

export function getPartyColor (party, isChosen=false, secondary=false) {
  const colors = ['white', 'red', 'blue',  'yellow', 'green'];
  const defaultColor = colors[0];

  if(typeof(party) === 'string'){
    switch (party.toLowerCase()) {
      case parties[1]:
        if(isChosen || secondary){
          return colors[1];
        } else {
          return defaultColor;
        }
        break;

      case parties[2]:
        if(isChosen || secondary){
          return colors[2];
        } else {
          return defaultColor;
        }
        break;

      case parties[3]:
        if(isChosen || secondary){
          return colors[3];
        } else {
          return defaultColor;
        }
        break;

      case parties[4]:
        if(isChosen || secondary){
          return colors[4];
        } else {
          return defaultColor;
        }
        break;

      default:
        return defaultColor;
    }

  } else {
    console.log("Party Type Isn't Required: String");
    console.log(`Party (${typeof(party)}): ${party}`);
  }
}
