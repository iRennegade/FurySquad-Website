import fetch from "isomorphic-fetch"
import Doxes from "../../components/Doxes"

const Index = (props) => {
  return(
    <Doxes doxes={props.doxes}/>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://FurySquad-web.fshaxx.repl.co/api/")
  const data = await res.json();
  console.log(data)
  return { doxes: data }
}

export default Index;