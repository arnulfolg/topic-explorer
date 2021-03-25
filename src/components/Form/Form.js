
function FormTopic({topicValue, topicHandle, subtmitForm}) {
  return (
	<form className="flex flex-row flex-nowrap self-center" onSubmit={(e)=>subtmitForm(topicValue, e )}>
		<input 
			className="flex-grow flex-shrink flex-1 px-4 py-3 rounded-md focus:ring focus:border-gray-300" 
			type="text" 
			onChange={topicHandle} 
			value={topicValue} />
		<button 
			className="flex-none bg-gray-800 p-3 px-6 rounded-md text-white shadow-lg transition-all focus:outline-none focus:ring focus:border-gray-300 hover:bg-gray-700" 
			type="submit" 
			>Search</button>
	</form>
  );
}

export default FormTopic;
