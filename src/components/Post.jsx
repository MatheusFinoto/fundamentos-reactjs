
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/27395415?v=4' />
                    <div className={styles.authorInfo}>
                        <strong>Matheus</strong>
                        <span>Mobile Developer</span>
                    </div>
                </div>

                <time title='27 de Janeiro as 11:18' dateTime='2023-01-27 11:18:00'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> <a href=''>👉 jane.design/doctorcare</a></p>
                <p> 
                    <a href=''>#novoprojeto</a>{" "}
                    <a href=''>#nlw</a>{" "}
                    <a href=''>#rocketseat1</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                <button type='submit'>Publicar</button>

                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}