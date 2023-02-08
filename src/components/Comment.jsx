import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src='https://avatars.githubusercontent.com/u/27395415?v=4' alt=''/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Finoto</strong>
                            <time title='27 de Janeiro as 11:18' dateTime='2023-01-27 11:18:00'>Cerca de 1h atrás</time>

                        </div>

                        <button title='Deletar comentário'> <Trash size={20}/> </button>
                    </header>
                    <p> Muito bom Devon, parabéns!!! </p>

                    
                </div>
                <footer>
                        <button> <ThumbsUp size={20}/> Aplaudir <span>20</span> </button>
                </footer>

            </div>
        </div>
    )
}