import fetch from "isomorphic-fetch"
import Doxes from "../../components/Doxes"
import Navbar from "../../components/Navbar"
import Head from "next/head"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css";

const Index = (props) => {
  return (
    <div align="center">
      <Navbar />
      <h1>Dox List</h1>
      <input type="text"/>
      <Doxes doxes={props.doxes} />
    </div>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://FurySquad-web.fshaxx.repl.co/api/doxs")
  const data = await res.json();
  return { doxes: data }
}

export default Index;