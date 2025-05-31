import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/castilhoserafim.png" alt="" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
               <strong>Wesley Castilho</strong>
               <time title="25 de Abril às 18:48" dateTime="2025-04-25 18:48:22">Cerca de 1h atrás</time>
              </div>

              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom castilho, parabéns!!</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>


      </div> 
    )
}