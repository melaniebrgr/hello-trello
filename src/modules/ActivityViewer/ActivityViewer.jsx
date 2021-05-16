import { useSelector } from 'react-redux'
import { selectLists } from './activityViewer.selectors'
import List from './components/List'

function ActivityViewer() {
  const lists = useSelector(selectLists)

  return (
    <>
      <h2>Lists</h2>
      { lists.map(({ id, title }) => <List key={id} title={title} />) }
    </>
  );
}

export default ActivityViewer
