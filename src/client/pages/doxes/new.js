import iFetch from "isomorphic-fetch"

const New = () => {
    const newDox = async (event) => {
        event.preventDefault()
        const res = await iFetch("https://furysquad-web.fshaxx.repl.co/api/doxs", {
            method: "POST",
            body: {
                "name": event.target.title.value,
                "author": event.target.author.value,
                "content": event.target.content.value
            },
            headers: {
                "Content-Type": "applications/json"
            }
        }).catch(error => alert('Error!'))

        console.log(res);
    }

    return (
        <div>
            <form onSubmit={newDox}>
                <label htmlFor="title">Título</label>
                <input id="title" title="title" type="text" autoComplete="title" required />
                <br/>
                <label htmlFor="author">Author</label>
                <input id="author" author="author" type="text" autoComplete="author" />
                <br/>
                <label htmlFor="content">Contenido</label>
                <input id="content" title="content" type="text" autoComplete="content" required />
                <br/>
                <button type="submit">Publicar</button>
            </form>
        </div>
    )
}

export default New;