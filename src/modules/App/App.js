import ListCreator from '../ListCreator/ListCreator'
import ActivityViewer from '../ActivityViewer/ActivityViewer'


const appStyles = `m-6`
const appHeaderStyles = `mx-2`

function App() {
  return (
    <div className={appStyles}>
      <h1 className={appHeaderStyles}>Hello Trello</h1>
      <ListCreator />
      <ActivityViewer />
    </div>
  );
}

export default App
