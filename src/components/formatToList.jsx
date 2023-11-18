// Return a list of items from an array of items
function formatToList(titleOfList, listItems) {
  const list = (
    <>
      {listItems.map((item) => (
        <li key={titleOfList + "_" + item}>{item}</li>
      ))}
    </>
  )
  return list
}
export default formatToList
