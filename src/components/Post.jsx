import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishedAt.toLocaleString()}
          dateTime={publishedAt.toISOString()}
        >
          {publishedAt.toLocaleDateString()}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
