
function FormTopic({topicValue, topicHandle, subtmitForm}) {
  return (
	<form className="flex flex-row flex-nowrap self-center" onSubmit={(e)=>subtmitForm(topicValue, e )}>
	<input className="flex-grow flex-shrink flex-1 px-4 py-3 rounded-md" type="text" onChange={topicHandle} value={topicValue} />
	<button className="flex-none bg-blue-600 p-3 px-6 rounded-md text-white shadow-lg transition-all focus:outline-none focus:ring focus:border-blue-300 hover:bg-blue-800" type="submit" >Search</button>
	</form>
  );
}

export default FormTopic;
