import Banner from 'components/Banner'
import styles from './Player.module.css'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import NaoEncontrado from 'pages/NaoEncontrado'
import { useEffect, useState } from 'react'

function Player() {

    const [video, setVideo] = useState()
    const parametros = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/viniddantas/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => setVideo(...dados))
    }, [])

    /*
    const parametros = useParams()
    const video = videos.find((video) => {
        return video.id === Number(parametros.id)
    })
    */

    if(!video) {
        return <NaoEncontrado/>
    }
    
    return (
        <>
            <Banner imagem="player"/>
            <Titulo><h1>Player</h1></Titulo>
            
            <section className={styles.container}>
                <iframe 
                    width="560" 
                    height="315" 
                    src={video.link} 
                    title={video.titulo}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player