export default function Button(props) {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer mx-1">
      {props.label || "Login"}
    </button>
  );
}

export function TestButton(){
  return(
    <button className="bg-blue-400 p-3 rounded-lg mt-5 text-white cursor-pointer hover:bg-blue-600">Testing Button</button>
  )
}
