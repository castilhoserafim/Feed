import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post({ author, content }) {
  return (
     <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/castilhoserafim.png" alt="" />
          <div className={styles.authorInfo}>
              <strong>{author}</strong> {/* Aqui usa a prop */}
              <span>Web Developer</span>
          </div>
        </div>

        <time title="25 de Abril às 18:48" dateTime="2025-04-25 18:48:22">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>{content}</p> {/* Aqui usa a prop */}
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>{' '}
         </p>
      </div>

      <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            placeholder='Deixe um comentário'
          />

          <footer>
            <button type="submit" className={styles.hidden}>Publicar</button>
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
