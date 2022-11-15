const Feedback = () =>{
return(
<div
          className="bg-white p-2 rounded-md shadow-lg"
        >
          <form>
            <label for="feedback">How can we improve?</label>
            <div className="flex flex-col space-y-2">
              <textarea
                id="feedback"
                className="p-2 h-24 w-64 border border-gray-400 rounded-md"
                type="textarea"
              ></textarea>
              <button
                className="p-2 ml-auto rounded-lg bg-blue-700 hover:bg-blue-600 shadow-md hover:shadow-lg text-white"
                type="submit"
              >
                Send Feedback
              </button>
            </div>
          </form>
        </div>
)}
export default Feedback;