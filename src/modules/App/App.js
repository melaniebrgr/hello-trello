import ListCreator from '../ListCreator/ListCreator'
import ActivityViewer from '../ActivityViewer/ActivityViewer'

function App() {
  return (
    <div className="px-6 pb-6">
      <h1>Hello Trello</h1>
      <ListCreator />
      <ActivityViewer />
    </div>
  );
}

export default App
