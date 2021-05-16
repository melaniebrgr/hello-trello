import { useSelector } from 'react-redux'
import { selectLists } from './activityViewer.selectors'

function ActivityViewer() {
  const lists = useSelector(selectLists)

  return (
    <>
      <h2>Lists</h2>
      { lists.map(({ title }) => <p>{title}</p>) }
    </>
  );
}

export default ActivityViewer
